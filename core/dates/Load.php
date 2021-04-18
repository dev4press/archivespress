<?php

namespace Dev4Press\Plugin\ArchivesPress\Dates;

use Dev4Press\Plugin\ArchivesPress\Base\iLoad;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Load implements iLoad {
	private $post_type;

	public function __construct() {
	}

	public static function instance() : Load {
		static $instance = null;

		if ( ! isset( $instance ) ) {
			$instance = new Load();
			$instance->run();
		}

		return $instance;
	}

	private function run() {
		add_action( 'archivespress-init', array( $this, 'init' ) );
		add_action( 'archivespress-clear-cache', array( $this, 'clear_cache' ) );
	}

	public function init() {
		$this->post_type = apply_filters( 'archivespress-dates-post-types', 'post' );

		add_shortcode( 'archivespress-dates', array( $this, 'shortcode' ) );
	}

	public function clear_cache( $post_type ) {
		Cache::instance()->clear( $post_type );
	}

	public function layouts() {
		$obj = apply_filters( 'archivespress-dates-layouts-object', null );

		if ( ! $obj ) {
			$obj = Layouts::instance();
		}

		return $obj;
	}

	public function shortcode( $atts = array() ) : string {
		$defaults = array(
			'layout'               => 'basic',
			'post_type'            => $this->post_type,
			'years'                => array(),
			'year'                 => 'show',
			'class'                => '',
			'var-font-size'        => '',
			'var-year-background'  => '',
			'var-year-color'       => '',
			'var-month-background' => '',
			'var-month-color'      => '',
			'var-day-background'   => '',
			'var-day-color'        => ''
		);

		$atts = shortcode_atts( $defaults, $atts );

		if ( ! empty( $atts['years'] ) && is_string( $atts['years'] ) ) {
			$atts['years'] = explode( ',', $atts['years'] );
			$atts['years'] = array_map( 'absint', $atts['years'] );
			$atts['years'] = array_filter( $atts['years'] );
		}

		$data = Cache::instance()->get( $atts['post_type'] );

		wp_enqueue_style( 'archivespress' );

		return $this->layouts()->render( $data, $atts );
	}
}