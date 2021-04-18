<?php

namespace Dev4Press\Plugin\GDDTA\Basic;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Plugin {
	private $post_types;

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
		$this->post_types = (array) apply_filters( 'gd-date-archives-post-types', array( 'post' ) );

		$_rtl   = is_rtl() ? '-rtl' : '';
		$_debug = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';

		$_file = GDDTA_URL.'css/archives' . $_rtl . $_debug . '.css';

		wp_register_style( 'gd-date-archive', $_file, array(), GDDTA_VERSION );
	}

	public function post_status( $new_status, $old_status, $post ) {
		if ( $new_status !== $old_status && ( $new_status == 'publish' || $old_status == 'publish' ) ) {
			if ( in_array( $post->post_type, $this->post_types ) ) {
				Cache::instance()->clear();
			}
		}
	}

	public function shortcode( $atts = array() ) : string {
		$defaults = array(
			'layout' => 'basic',
			'class'  => ''
		);

		$atts = shortcode_atts( $defaults, $atts );
		$data = Cache::instance()->get( $this->post_types );

		wp_enqueue_style( 'gd-date-archive' );

		return Layouts::instance()->render( $data, $atts );
	}
}
