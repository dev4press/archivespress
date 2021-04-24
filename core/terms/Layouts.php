<?php

namespace Dev4Press\Plugin\ArchivesPress\Terms;

use Dev4Press\Plugin\ArchivesPress\Base\iLayouts;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Layouts implements iLayouts {
	protected $id = 0;

	public function __construct() {
	}

	public static function instance() : Layouts {
		static $instance = null;

		if ( ! isset( $instance ) ) {
			$instance = new Layouts();
		}

		return $instance;
	}

	public function render( array $data, array $args = array() ) : string {
		switch ( $args['layout'] ) {
			default:
			case 'basic':
			case 'compact':
				return $this->basic( $data, $args );
		}
	}

	protected function style( $id, $args = array() ) : string {
		$vars      = array();
		$supported = array(
			'font-size',
			'line-height',
			'background',
			'color'
		);

		foreach ( $supported as $key ) {
			if ( isset( $args[ 'var-' . $key ] ) && ! empty( $args[ 'var-' . $key ] ) ) {
				$vars[] = '--archivespress-terms-' . $key . ': ' . $args[ 'var-' . $key ] . ';';
			}
		}

		if ( ! empty( $vars ) ) {
			return '<style>#' . $id . '{' . join( '', $vars ) . '}</style>';
		}

		return '';
	}

	protected function posts_count( $count ) : string {
		return '<span class="info-counts">' . $count . '</span>';
	}

	protected function get_term_link( $post_type, $term, $taxonomy ) : string {
		$url = apply_filters( 'archivespress-terms-get-term-link-' . $post_type, null, $term );

		return is_null( $url ) && ! is_string( $url ) ? get_term_link( $term, $taxonomy ) : $url;
	}

	protected function basic( $data, $args = array() ) : string {
		$classes = array(
			'archivespress-wrapper',
			'archivespress-terms-wrapper',
			'archivespress-terms-layout-' . $args['layout'],
			'archivespress-terms-taxonomy-' . $args['taxonomy']
		);

		$columns = $args['columns'] ?? 4;
		$columns = $columns < 1 ? 1 : $columns;
		$columns = $columns > 6 ? 6 : $columns;

		$classes[] = 'archivespress-terms-columns-' . $columns;

		if ( ! empty( $args['class'] ) ) {
			$classes[] = $args['class'];
		}

		$id = 'archivespress-terms-block-' . ( ++ $this->id );

		$render   = '<div id="' . $id . '" class="' . join( ' ', $classes ) . '">';
		$taxonomy = get_taxonomy( $args['taxonomy'] );

		foreach ( $data as $term_id => $object ) {
			$render .= '<div class="archivespress-terms-term">';
			$render .= '<a title="' . sprintf( _nx( "%s '%s': %s Post", "%s '%s': %s Posts", $object['posts'], "Taxonomy, term name and posts count", "archivespress" ), $taxonomy->labels->singular_name, $object['name'], $object['posts'] ) . '" class="link-name" href="' . $this->get_term_link( $args['post_type'], $term_id, $object['taxonomy'] ) . '">' . $object['name'] . '</a>';
			$render .= $this->posts_count( $object['posts'] );
			$render .= '</div>';
		}

		$render .= '</div>';
		$render .= $this->style( $id, $args );

		return $render;
	}
}
