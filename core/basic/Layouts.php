<?php

namespace Dev4Press\Plugin\GDDTA\Basic;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Layouts {
	public function __construct() {
	}

	public static function instance() : Layouts {
		static $instance = null;

		if ( ! isset( $instance ) ) {
			$instance = new Layouts();
		}

		return $instance;
	}

	public function render( $data, $args = array() ) : string {
		switch ( $args['layout'] ) {
			default:
			case 'basic':
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

	protected function basic( $data, $args = array() ) : string {
		$classes = array(
			'date-archives-wrapper',
			'date-archives-layout-' . $args['layout']
		);

		if ( ! empty( $args['class'] ) ) {
			$classes[] = $args['class'];
		}

		$render = '<div class="' . join( ' ', $classes ) . '">';

		foreach ( $data as $year => $elyear ) {
			$count  = $elyear['posts'];
			$render .= '<div class="date-archives-year-wrapper">';
			$render .= '<div class="date-archives-year">';
			$render .= '<a title="' . sprintf( _n( "Year %s: %s Post", "Year %s: %s Posts", $count ), $year, $count ) . '" class="link-year" href="' . get_year_link( $year ) . '">' . $year . $this->posts_count( $count ) . '</a>';
			$render .= '</div>';
			$render .= '<div class="date-archives-months">';

			foreach ( $elyear['months'] as $month => $elmonth ) {
				$count  = $elmonth['posts'];
				$render .= '<div class="date-archives-month-wrapper">';
				$render .= '<div class="date-archives-month">';
				$render .= '<a title="' . sprintf( _n( "%s: %s Post", "%s: %s Posts", $count ), $this->full_month_title($year, $month, 1), $count ) . '" class="link-month" href="' . get_month_link( $year, $month ) . '">' . $this->month_title( $month ) . $this->posts_count( $count ) . '</a>';
				$render .= '</div>';
				$render .= '<div class="date-archives-days">';

				foreach ( $elmonth['days'] as $day => $elday ) {
					$count  = $elday['posts'];
					$render .= '<div class="date-archives-day-wrapper">';
					$render .= '<a title="' . sprintf( _n( "%s: %s Post", "%s: %s Posts", $count ), $this->full_day_title($year, $month, $day), $count ) . '" class="link-day" href="' . get_day_link( $year, $month, $day ) . '">' . $day . '</a>';
					$render .= '</div>';
				}

				$render .= '</div>';
				$render .= '</div>';
			}

			$render .= '</div>';
			$render .= '</div>';
		}

		$render .= '</div>';

		return $render;
	}
}