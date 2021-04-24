<?php

namespace Dev4Press\Plugin\ArchivesPress\Basic;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Blocks {
	public function __construct() {
	}

	public static function instance() : Blocks {
		static $instance = null;

		if ( ! isset( $instance ) ) {
			$instance = new Blocks();
			$instance->run();
		}

		return $instance;
	}

	private function run() {
		add_filter( 'block_categories', array( $this, 'categories' ) );
		add_action( 'archivespress-init', array( $this, 'blocks' ) );
	}

	public function categories( $categories ) {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'archivespress',
					'title' => __( 'ArchivesPress' )
				)
			)
		);
	}

	public function blocks() {
		register_block_type_from_metadata( ARCHIVESPRESS_PATH . 'core/blocks/authors' );
		register_block_type_from_metadata( ARCHIVESPRESS_PATH . 'core/blocks/dates' );
		register_block_type_from_metadata( ARCHIVESPRESS_PATH . 'core/blocks/terms' );
	}
}
