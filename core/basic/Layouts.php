<?php

namespace Dev4Press\Plugin\GDDTA\Basic;

use Dev4Press\Plugin\GDDTA\Base\iLayouts;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Layouts implements iLayouts {
	private $id = 0;

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

	protected function month_title( $month ) : string {
		global $wp_locale;

		return $wp_locale->get_month( $month );
	}

	protected function full_month_title( $year, $month, $day ) : string {
		return date_i18n( 'F, Y', strtotime( $day . '-' . $month . '-' . $year ) );
	}

	protected function full_day_title( $year, $month, $day ) : string {
		return date_i18n( 'F j, Y', strtotime( $day . '-' . $month . '-' . $year ) );
	}

	protected function posts_count( $count ) : string {
		return '<span class="info-counts">' . $count . '</span>';
	}

	protected function get_year_link( $post_type, $year ) : string {
		$url = apply_filters( 'gd-data-archive-get-year-link-' . $post_type, null, $year );

		return is_null( $url ) ? get_year_link( $year ) : $url;
	}

	protected function get_month_link( $post_type, $year, $month ) {
		$url = apply_filters( 'gd-data-archive-get-month-link-' . $post_type, null, $year );

		return is_null( $url ) ? get_month_link( $year, $month ) : $url;
	}

	protected function get_day_link( $post_type, $year, $month, $day ) {
		$url = apply_filters( 'gd-data-archive-get-day-link-' . $post_type, null, $year );

		return is_null( $url ) ? get_day_link( $year, $month, $day ) : $url;
	}

	protected function style( $id, $args = array() ) {
		$supported = array( 'font-size', 'year-background', 'year-color', 'month-background', 'month-color', 'day-background', 'day-color' );
		$vars      = array();

		foreach ( $supported as $key ) {
			if ( isset( $args[ 'var-' . $key ] ) && ! empty( $args[ 'var-' . $key ] ) ) {
				$vars[] = '--gd-date-archives-base-' . $key . ': ' . $args[ 'var-' . $key ] . ';';
			}
		}

		if ( ! empty( $vars ) ) {
			return '<style>#' . $id . '{' . join( '', $vars ) . '}</style>';
		}

		return '';
	}

	protected function basic( $data, $args = array() ) : string {
		$args['layout'] = $args['layout'] === 'compact' && $args['year'] === 'hide' ? 'basic' : $args['layout'];

		$classes = array(
			'date-archives-wrapper',
			'date-archives-layout-' . $args['layout']
		);

		if ( ! empty( $args['class'] ) ) {
			$classes[] = $args['class'];
		}

		$id = 'date-archives-block-' . ( ++ $this->id );

		$render = '<div id="' . $id . '" class="' . join( ' ', $classes ) . '">';

		foreach ( $data as $year => $elyear ) {
			if ( empty( $args['years'] ) || in_array( $year, $args['years'] ) ) {
				$count  = $elyear['posts'];
				$render .= '<div class="date-archives-year-wrapper">';

				if ( $args['year'] === 'show' ) {
					$render .= '<div class="date-archives-year">';
					$render .= '<a title="' . sprintf( _n( "Year %s: %s Post", "Year %s: %s Posts", $count ), $year, $count ) . '" class="link-year" href="' . $this->get_year_link( $args['post_type'], $year ) . '">' . $year . $this->posts_count( $count ) . '</a>';
					$render .= '</div>';
				}

				$render .= '<div class="date-archives-months">';

				foreach ( $elyear['months'] as $month => $elmonth ) {
					$count  = $elmonth['posts'];
					$render .= '<div class="date-archives-month-wrapper">';
					$render .= '<div class="date-archives-month">';
					$render .= '<a title="' . sprintf( _n( "%s: %s Post", "%s: %s Posts", $count ), $this->full_month_title( $year, $month, 1 ), $count ) . '" class="link-month" href="' . $this->get_month_link( $args['post_type'], $year, $month ) . '">' . $this->month_title( $month ) . $this->posts_count( $count ) . '</a>';
					$render .= '</div>';
					$render .= '<div class="date-archives-days">';

					foreach ( $elmonth['days'] as $day => $elday ) {
						$count  = $elday['posts'];
						$render .= '<div class="date-archives-day-wrapper">';
						$render .= '<a title="' . sprintf( _n( "%s: %s Post", "%s: %s Posts", $count ), $this->full_day_title( $year, $month, $day ), $count ) . '" class="link-day" href="' . $this->get_day_link( $args['post_type'], $year, $month, $day ) . '">' . $day . '</a>';
						$render .= '</div>';
					}

					$render .= '</div>';
					$render .= '</div>';
				}

				$render .= '</div>';
				$render .= '</div>';
			}
		}

		$render .= '</div>';
		$render .= $this->style( $id, $args );

		return $render;
	}
}