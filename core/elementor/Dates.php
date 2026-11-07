<?php

namespace Dev4Press\Plugin\ArchivesPress\Elementor;

use Dev4Press\Plugin\ArchivesPress\Dates\Load;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class Dates extends Widget {
	public function get_name() { return 'archivespress-dates'; }
	public function get_title() { return __( 'Dates Archives Index', 'archivespress' ); }
	protected function archive_type() : string { return 'dates'; }

	protected function render_archive( array $settings ) : string {
		return Load::instance()->shortcode( array(
			'_source' => 'elementor',
			'post_type' => $this->setting( $settings, 'post_type', 'post' ),
			'layout' => $this->setting( $settings, 'layout', 'basic' ),
			'order' => $this->setting( $settings, 'order', 'desc' ),
			'year' => $this->setting( $settings, 'year', 'show' ),
			'month' => $this->setting( $settings, 'month', 'auto' ),
			'show-year-counts' => $this->setting( $settings, 'show_year_counts', 'yes' ) === 'yes',
			'show-month-counts' => $this->setting( $settings, 'show_month_counts', 'yes' ) === 'yes',
			'show-day-counts' => $this->setting( $settings, 'show_day_counts', '' ) === 'yes',
		) );
	}
}
