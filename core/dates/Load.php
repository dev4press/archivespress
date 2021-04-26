<?php

namespace Dev4Press\Plugin\ArchivesPress\Dates;

use Dev4Press\Plugin\ArchivesPress\Base\iCache;
use Dev4Press\Plugin\ArchivesPress\Base\iLayouts;
use Dev4Press\Plugin\ArchivesPress\Base\iLoad;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Load implements iLoad {
	protected $post_type;

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

	protected function run() {
		add_action( 'archivespress-init', array( $this, 'init' ) );
		add_action( 'archivespress-clear-cache', array( $this, 'clear_cache' ) );
	}

	public function init() {
		$this->post_type = apply_filters( 'archivespress-dates-post-types', 'post' );

		add_shortcode( 'archivespress-dates', array( $this, 'shortcode' ) );
	}

	public function clear_cache( $post_type ) {
		$this->cache()->clear( $post_type );
	}

	public function cache() : iCache {
		$obj = apply_filters( 'archivespress-dates-cache-object', null );

		if ( ! $obj ) {
			$obj = Cache::instance();
		}

		return $obj;
	}

	public function layouts() : iLayouts {
		$obj = apply_filters( 'archivespress-dates-layouts-object', null );

		if ( ! $obj ) {
			$obj = Layouts::instance();
		}

		return $obj;
	}

	public function shortcode( $atts = array() ) : string {
		$defaults = array(
			'_source'              => 'shortcode',
			'layout'               => 'basic',
			'post_type'            => $this->post_type,
			'order'                => 'desc',
			'years'                => array(),
			'year'                 => 'show',
			'class'                => '',
			'show-year-counts'     => true,
			'show-month-counts'    => true,
			'show-day-counts'      => false,
			'var-font-size'        => '',
			'var-line-height'      => '',
			'var-year-background'  => '',
			'var-year-color'       => '',
			'var-month-background' => '',
			'var-month-color'      => '',
			'var-day-background'   => '',
			'var-day-color'        => ''
		);

		$atts                      = shortcode_atts( $defaults, $atts );
		$atts['show-year-counts']  = is_bool( $atts['show-year-counts'] ) ? $atts['show-year-counts'] : $atts['show-year-counts'] === 'true';
		$atts['show-month-counts'] = is_bool( $atts['show-month-counts'] ) ? $atts['show-month-counts'] : $atts['show-month-counts'] === 'true';
		$atts['show-day-counts']   = is_bool( $atts['show-day-counts'] ) ? $atts['show-day-counts'] : $atts['show-day-counts'] === 'true';

		if ( ! empty( $atts['years'] ) && is_string( $atts['years'] ) ) {
			$atts['years'] = explode( ',', $atts['years'] );
			$atts['years'] = array_map( 'absint', $atts['years'] );
			$atts['years'] = array_filter( $atts['years'] );
		}

		$data = $this->cache()->get( $atts['post_type'] );

		wp_enqueue_style( 'archivespress' );

		if ( ! empty( $data ) ) {
			return $this->layouts()->render( $data, $atts );
		}

		return '';
	}
}
