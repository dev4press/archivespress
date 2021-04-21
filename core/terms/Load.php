<?php

namespace Dev4Press\Plugin\ArchivesPress\Terms;

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
		$this->post_type = apply_filters( 'archivespress-terms-post-types', 'post' );

		add_shortcode( 'archivespress-terms', array( $this, 'shortcode' ) );
	}

	public function clear_cache( $post_type ) {
		$this->cache()->clear( $post_type );
	}

	public function cache() : iCache {
		$obj = apply_filters( 'archivespress-terms-cache-object', null );

		if ( ! $obj ) {
			$obj = Cache::instance();
		}

		return $obj;
	}

	public function layouts() : iLayouts {
		$obj = apply_filters( 'archivespress-terms-layouts-object', null );

		if ( ! $obj ) {
			$obj = Layouts::instance();
		}

		return $obj;
	}

	public function shortcode( $atts = array() ) : string {
		$defaults = array(
			'layout'          => 'basic',
			'post_type'       => $this->post_type,
			'taxonomy'        => 'category',
			'orderby'         => 'posts',
			'order'           => 'desc',
			'columns'         => 4,
			'class'           => '',
			'var-font-size'   => '',
			'var-line-height' => '',
			'var-background'  => '',
			'var-color'       => '',
		);

		$atts            = shortcode_atts( $defaults, $atts );
		$atts['columns'] = absint( $atts['columns'] );

		$data  = $this->cache()->get( $atts['post_type'] );
		$terms = $data[ $atts['taxonomy'] ] ?? array();

		wp_enqueue_style( 'archivespress' );

		if ( ! empty( $terms ) ) {
			_prime_term_caches( array_keys( $terms ) );

			$terms = $this->prepare_data( $terms, $atts['taxonomy'], $atts['orderby'], $atts['order'] );

			return $this->layouts()->render( $terms, $atts );
		}

		return '';
	}

	private function prepare_data( $data, $taxonomy, $orderby, $order ) : array {
		$input = array();

		foreach ( $data as $term_id => $count ) {
			$term = get_term_by( 'id', $term_id, $taxonomy );

			if ( $term instanceof \WP_Term ) {
				$input[ $term_id ] = (object) array(
					'id'       => $term->term_id,
					'name'     => $term->name,
					'slug'     => $term->slug,
					'taxonomy' => $term->taxonomy,
					'posts'    => $count
				);
			}
		}

		$valid = array( 'id', 'name', 'slug', 'posts' );

		if ( in_array( $orderby, $valid ) ) {
			$output = array();

			$sort = new ObjectsSort( $input, array( array( 'property' => $orderby, 'order' => $order ) ), true );

			foreach ( $sort->sorted as $key => $item ) {
				$output[ $key ] = (array) $item;
			}

			return $output;
		}

		return $input;
	}
}