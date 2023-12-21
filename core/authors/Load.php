<?php

namespace Dev4Press\Plugin\ArchivesPress\Authors;

use Dev4Press\Plugin\ArchivesPress\Base\iCache;
use Dev4Press\Plugin\ArchivesPress\Base\iLayouts;
use Dev4Press\Plugin\ArchivesPress\Base\iLoad;
use Dev4Press\Plugin\ArchivesPress\Basic\ObjectsSort;

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
		$this->post_type = apply_filters( 'archivespress-authors-post-types', 'post' );

		add_shortcode( 'archivespress-authors', array( $this, 'shortcode' ) );
	}

	public function clear_cache( $post_type ) {
		$this->cache()->clear( $post_type );
	}

	public function cache() : iCache {
		$obj = apply_filters( 'archivespress-authors-cache-object', null );

		if ( ! $obj ) {
			$obj = Cache::instance();
		}

		return $obj;
	}

	public function layouts() : iLayouts {
		$obj = apply_filters( 'archivespress-authors-layouts-object', null );

		if ( ! $obj ) {
			$obj = Layouts::instance();
		}

		return $obj;
	}

	public function shortcode( $atts = array() ) : string {
		$defaults = array(
			'_source'         => 'shortcode',
			'layout'          => 'basic',
			'post_type'       => $this->post_type,
			'orderby'         => 'posts',
			'order'           => 'desc',
			'avatar'          => 24,
			'columns'         => 3,
			'class'           => '',
			'show-counts'     => true,
			'var-font-size'   => '',
			'var-line-height' => '',
			'var-background'  => '',
			'var-color'       => '',
		);

		$atts                = shortcode_atts( $defaults, $atts );
		$atts['show-counts'] = is_bool( $atts['show-counts'] ) ? $atts['show-counts'] : $atts['show-counts'] === 'true';

		$data = $this->cache()->get( $atts['post_type'] );
		$data = $this->prepare_data( $data, $atts['orderby'], $atts['order'] );

		if ( ! empty( $data ) ) {
			wp_enqueue_style( 'archivespress' );

			return $this->layouts()->render( $data, $atts );
		}

		return '';
	}

	private function prepare_data( $data, $orderby, $order ) : array {
		$valid = array( 'id', 'name', 'slug', 'email', 'posts' );

		if ( in_array( $orderby, $valid ) ) {
			$input  = array();
			$output = array();

			foreach ( $data as $key => $item ) {
				$input[ $key ] = (object) $item;
			}

			$sort = new ObjectsSort( $input, array( array( 'property' => $orderby, 'order' => $order ) ), true );

			foreach ( $sort->sorted as $key => $item ) {
				$output[ $key ] = (array) $item;
			}

			return $output;
		}

		return $data;
	}
}
