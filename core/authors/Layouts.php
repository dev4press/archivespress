<?php

namespace Dev4Press\Plugin\ArchivesPress\Authors;

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
				$vars[] = '--archivespress-authors-' . $key . ': ' . $value . ';';
			}
		}

		if ( ! empty( $vars ) ) {
			return '<style>#' . $id . '{' . join( '', $vars ) . '}</style>';
		}

		return '';
	}

	protected function avatar( $info, $args = array() ) : string {
		$args['avatar'] = isset( $args['avatar'] ) ? absint( $args['avatar'] ) : 0;

		if ( $args['avatar'] > 0 ) {
			$avatar = apply_filters( 'archivespress-authors-avatar', null, $info, $args['avatar'] );

			if ( is_null( $avatar ) ) {
				$avatar = get_avatar( $info['email'], $args['avatar'] * 2, '', '', array(
					'height' => $args['avatar'],
					'width'  => $args['avatar'],
				) );
			}

			return (string) $avatar;
		}

		return '';
	}

	protected function posts_count( $count ) : string {
		return '<span class="info-counts">' . esc_html( $count ) . '</span>';
	}

	protected function get_author_link( $post_type, $author_id, $author_nicename ) : string {
		$url = apply_filters( 'archivespress-authors-get-author-link-' . $post_type, null, $author_id, $author_nicename );

		return is_null( $url ) && ! is_string( $url ) ? get_author_posts_url( $author_id, $author_nicename ) : $url;
	}

	protected function basic( $data, $args = array() ) : string {
		$classes = array(
			'archivespress-wrapper',
			'archivespress-authors-wrapper',
			'archivespress-authors-layout-' . $args['layout'],
		);

		$columns = $args['columns'] ?? 4;
		$columns = $columns < 1 ? 1 : $columns;
		$columns = $columns > 6 ? 6 : $columns;

		$classes[] = 'archivespress-authors-columns-' . $columns;

		if ( ! empty( $args['class'] ) ) {
			$classes[] = $args['class'];
		}

		$id = 'archivespress-authors-block-' . ( ++ $this->id );

		$render = '<div class="wp-' . esc_attr( $args['_source'] ) . '-archivespress-authors">';
		$render .= '<div id="' . esc_attr( $id ) . '" class="' . esc_attr( join( ' ', $classes ) ) . '">';

		foreach ( $data as $user_id => $info ) {
			$_count   = $info['posts'];
			$_avatar  = $this->avatar( $info, $args );
			$_archive = $this->get_author_link( $args['post_type'], $user_id, $info['slug'] );
			$_class   = 'archivespress-authors-author';

			if ( ! empty( $_avatar ) ) {
				$_class .= ' has-avatar';
			}

			$render .= '<div class="' . $_class . '">';
			if ( ! empty( $_avatar ) ) {
				/* translators: 1. Author Name, 2. Number of Posts */
				$render .= '<a title="' . esc_attr( sprintf( _nx( '%1$s: %2$d Post', '%1$s: %2$d Posts', $_count, 'Author name and posts count', 'archivespress' ), $info['name'], $_count ) ) . '" class="link-avatar" href="' . esc_url( $_archive ) . '">' . $_avatar . '</a>';
			}

			if ( $args['show-counts'] ) {
				$render .= $this->posts_count( $_count );
			}

			/* translators: 1. Author Name, 2. Number of Posts */
			$render .= '<a title="' . esc_attr( sprintf( _nx( '%1$s: %2$d Post', '%1$s: %2$d Posts', $_count, 'Author name and posts count', 'archivespress' ), $info['name'], $_count ) ) . '" class="link-name" href="' . esc_url( $_archive ) . '">' . esc_html( $info['name'] ) . '</a>';
			$render .= '</div>';
		}

		$render .= '</div>';
		$render .= $this->style( $id, $args );
		$render .= '</div>';

		return $render;
	}
}
