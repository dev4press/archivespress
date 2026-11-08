<?php

namespace Dev4Press\Plugin\ArchivesPress\Elementor;

use Dev4Press\Plugin\ArchivesPress\Terms\Load;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class Terms extends Widget {
	public function get_name() { return 'archivespress-terms'; }
	public function get_title() { return __( 'Terms Archives Index', 'archivespress' ); }
	protected function archive_type() : string { return 'terms'; }

	protected function render_archive( array $settings ) : string {
		return Load::instance()->shortcode( array(
			'_source' => 'elementor',
			'post_type' => $this->setting( $settings, 'post_type', 'post' ),
			'taxonomy' => $this->setting( $settings, 'taxonomy', 'category' ),
			'layout' => $this->setting( $settings, 'layout', 'basic' ),
			'orderby' => $this->setting( $settings, 'orderby', 'posts' ),
			'order' => $this->setting( $settings, 'order', 'desc' ),
			'columns' => min( 6, max( 1, absint( $this->setting( $settings, 'columns', 3 ) ) ) ),
			'show-counts' => $this->setting( $settings, 'show_counts', 'yes' ) === 'yes',
		) );
	}
}
