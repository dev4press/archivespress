<?php

namespace Dev4Press\Plugin\GDDTA\Basic;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Plugin {
	private $post_type;

	public function __construct() {
	}

	public static function instance() : Plugin {
		static $instance = null;

		if ( ! isset( $instance ) ) {
			$instance = new Plugin();
			$instance->run();
		}

		return $instance;
	}

	private function run() {
		add_shortcode( 'gd-date-archives', array( $this, 'shortcode' ) );

		add_action( 'init', array( $this, 'init' ), 20 );
		add_filter( 'transition_post_status', array( $this, 'post_status' ), 10, 3 );
	}

	public function init() {
		$this->post_type = apply_filters( 'gd-date-archives-post-types', 'post' );

		$_rtl   = is_rtl() ? '-rtl' : '';
		$_debug = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

		$_file = GDDTA_URL . 'css/archives' . $_rtl . $_debug . '.css';

		wp_register_style( 'gd-date-archive', $_file, array(), GDDTA_VERSION );
	}

	public function post_status( $new_status, $old_status, $post ) {
		if ( $new_status !== $old_status && ( $new_status == 'publish' || $old_status == 'publish' ) ) {
			Cache::instance()->clear( $post->post_type );
		}
	}

	public function layouts() {
		$obj = apply_filters( 'gd-data-archive-layouts-object', null );

		if ( ! $obj ) {
			$obj = Layouts::instance();
		}

		return $obj;
	}

	public function shortcode( $atts = array() ) : string {
		$defaults = array(
			'layout'    => 'basic',
			'post_type' => $this->post_type,
			'years'     => array(),
			'year'      => 'show',
			'class'     => ''
		);

		$atts = shortcode_atts( $defaults, $atts );

		if ( ! empty( $atts['years'] ) && is_string( $atts['years'] ) ) {
			$atts['years'] = explode( ',', $atts['years'] );
			$atts['years'] = array_map( 'absint', $atts['years'] );
			$atts['years'] = array_filter( $atts['years'] );
		}

		$data = Cache::instance()->get( $atts['post_type'] );

		wp_enqueue_style( 'gd-date-archive' );

		return $this->layouts()->render( $data, $atts );
	}
}
