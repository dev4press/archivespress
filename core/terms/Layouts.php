<?php

namespace Dev4Press\Plugin\ArchivesPress\Terms;

use Dev4Press\Plugin\ArchivesPress\Base\iLayouts;
use Dev4Press\Plugin\ArchivesPress\Basic\Helpers;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Layouts implements iLayouts {
	protected $id = 0;

	private function __construct() {
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
			'color',
		);

		foreach ( $supported as $key ) {
			$value = Helpers::instance()->css_value( $key, $args[ 'var-' . $key ] ?? '' );
			if ( $value !== '' ) {
				$vars[] = '--archivespress-terms-' . $key . ': ' . $value . ';';
			}
		}

		if ( ! empty( $vars ) ) {
			return '<style>#' . $id . '{' . join( '', $vars ) . '}</style>';
		}

		return '';
	}

	protected function posts_count( $count ) : string {
		return '<span class="info-counts">' . esc_html( $count ) . '</span>';
	}

	protected function get_term_link( $post_type, $term, $taxonomy ) : string {
		$url = apply_filters( 'archivespress-terms-get-term-link-' . $post_type, null, $term );

		$url = is_null( $url ) ? get_term_link( $term, $taxonomy ) : $url;
		return is_string( $url ) ? $url : '';
	}

	protected function basic( $data, $args = array() ) : string {
		$classes = array(
			'archivespress-wrapper',
			'archivespress-terms-wrapper',
			'archivespress-terms-layout-' . $args['layout'],
			'archivespress-terms-taxonomy-' . $args['taxonomy'],
		);

		$columns = $args['columns'] ?? 4;
		$columns = $columns < 1 ? 1 : $columns;
		$columns = $columns > 6 ? 6 : $columns;

		$classes[] = 'archivespress-terms-columns-' . $columns;

		if ( ! empty( $args['class'] ) ) {
			$classes[] = $args['class'];
		}

		$id = 'archivespress-terms-block-' . ( ++ $this->id );

		$render   = '<div class="wp-' . esc_attr( $args['_source'] ) . '-archivespress-terms">';
		$render   .= '<div id="' . esc_attr( $id ) . '" class="' . esc_attr( join( ' ', $classes ) ) . '">';
		$taxonomy = get_taxonomy( $args['taxonomy'] );

		foreach ( $data as $term_id => $object ) {
			$render .= '<div class="archivespress-terms-term">';
			/* translators: 1. Taxonomy Name, 2. Term Name, 3. Number of Posts */
			$render .= '<a title="' . esc_attr( sprintf( _nx( '%1$s %2$s: %3$d Post', '%1$s %2$s: %3$d Posts', $object['posts'], 'Taxonomy, term name and posts count', 'archivespress' ), $taxonomy->labels->singular_name, $object['name'], $object['posts'] ) ) . '" class="link-name" href="' . esc_url( $this->get_term_link( $args['post_type'], $term_id, $object['taxonomy'] ) ) . '">' . esc_html( $object['name'] ) . '</a>';
			if ( $args['show-counts'] ) {
				$render .= $this->posts_count( $object['posts'] );
			}
			$render .= '</div>';
		}

		$render .= '</div>';
		$render .= $this->style( $id, $args );
		$render .= '</div>';

		return $render;
	}
}
