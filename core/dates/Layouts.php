<?php

namespace Dev4Press\Plugin\ArchivesPress\Dates;

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
		$url = apply_filters( 'archivespress-dates-get-year-link-' . $post_type, null, $year );

		return is_null( $url ) ? get_year_link( $year ) : $url;
	}

	protected function get_month_link( $post_type, $year, $month ) : string {
		$url = apply_filters( 'archivespress-dates-get-month-link-' . $post_type, null, $year );

		return is_null( $url ) && ! is_string( $url ) ? get_month_link( $year, $month ) : $url;
	}

	protected function get_day_link( $post_type, $year, $month, $day ) : string {
		$url = apply_filters( 'archivespress-dates-get-day-link-' . $post_type, null, $year );

		return is_null( $url ) && ! is_string( $url ) ? get_day_link( $year, $month, $day ) : $url;
	}

	protected function style( $id, $args = array() ) : string {
		$vars      = array();
		$supported = array(
			'font-size',
			'line-height',
			'year-background',
			'year-color',
			'month-background',
			'month-color',
			'day-background',
			'day-color'
		);

		foreach ( $supported as $key ) {
			if ( isset( $args[ 'var-' . $key ] ) && ! empty( $args[ 'var-' . $key ] ) ) {
				$vars[] = '--archivespress-dates-' . $key . ': ' . $args[ 'var-' . $key ] . ';';
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
			'archivespress-wrapper',
			'archivespress-dates-wrapper',
			'archivespress-dates-layout-' . $args['layout']
		);

		if ( ! empty( $args['class'] ) ) {
			$classes[] = $args['class'];
		}

		$id    = 'archivespress-dates-block-' . ( ++ $this->id );
		$order = isset( $args['order'] ) && $args['order'] === 'asc' ? 'asc' : 'desc';

		$render = '<div class="wp-' . $args['_source'] . '-archivespress-dates">';
		$render .= '<div id="' . $id . '" class="' . join( ' ', $classes ) . '">';

		$_years = $order === 'asc' ? array_reverse( $data, true ) : $data;

		foreach ( $_years as $year => $elyear ) {
			if ( empty( $args['years'] ) || in_array( $year, $args['years'] ) ) {
				$count  = $elyear['posts'];
				$render .= '<div class="archivespress-dates-year-wrapper">';

				if ( $args['year'] === 'show' ) {
					$render .= '<div class="archivespress-dates-year">';
					$render .= '<div class="inner-year">';
					/* translators: 1. Year, 2. Number of Posts */
					$render .= '<a title="' . sprintf( _nx( 'Year %1$s: %2$d Post', 'Year %1$s: %2$d Posts', $count, "Year and posts count", "archivespress" ), $year, $count ) . '" class="link-year" href="' . $this->get_year_link( $args['post_type'], $year ) . '">' . $year . '</a>';

					if ( $args['show-year-counts'] ) {
						$render .= $this->posts_count( $count );
					}

					$render .= '</div>';
					$render .= '</div>';
				}

				$render .= '<div class="archivespress-dates-months">';

				$_months = $order === 'asc' ? array_reverse( $elyear['months'], true ) : $elyear['months'];

				foreach ( $_months as $month => $elmonth ) {
					$count  = $elmonth['posts'];
					$render .= '<div class="archivespress-dates-month-wrapper">';
					$render .= '<div class="archivespress-dates-month">';
					$render .= '<div class="inner-month">';
					/* translators: 1. Month, 2. Number of Posts */
					$render .= '<a title="' . sprintf( _nx( '%1$s: %2$d Post', '%1$s: %2$d Posts', $count, "Month and posts count", "archivespress" ), $this->full_month_title( $year, $month, 1 ), $count ) . '" class="link-month" href="' . $this->get_month_link( $args['post_type'], $year, $month ) . '">' . $this->month_title( $month ) . '</a>';

					if ( $args['show-month-counts'] ) {
						$render .= $this->posts_count( $count );
					}

					$render .= '</div>';
					$render .= '</div>';
					$render .= '<div class="archivespress-dates-days">';

					$_days = $order === 'asc' ? array_reverse( $elmonth['days'], true ) : $elmonth['days'];

					foreach ( $_days as $day => $elday ) {
						$count  = $elday['posts'];
						$render .= '<div class="archivespress-dates-day-wrapper">';
						$render .= '<div class="inner-day">';
						/* translators: 1. Date, 2. Number of Posts */
						$render .= '<a title="' . sprintf( _nx( '%1$s: %2$d Post', '%1$s: %2$d Posts', $count, "Date and posts count", "archivespress" ), $this->full_day_title( $year, $month, $day ), $count ) . '" class="link-day" href="' . $this->get_day_link( $args['post_type'], $year, $month, $day ) . '">' . $day . '</a>';

						if ( $args['show-day-counts'] ) {
							$render .= $this->posts_count( $count );
						}

						$render .= '</div>';
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
		$render .= '</div>';

		return $render;
	}
}
