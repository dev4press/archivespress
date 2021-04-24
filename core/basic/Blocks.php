<?php

namespace Dev4Press\Plugin\ArchivesPress\Basic;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Blocks {
	public function __construct() {
	}

	public static function instance(): Blocks {
		static $instance = null;

		if ( ! isset( $instance ) ) {
			$instance = new Blocks();
			$instance->run();
		}

		return $instance;
	}

	private function run() {
		add_action( 'archivespress-init', array( $this, 'register' ) );
		add_filter( 'block_categories', array( $this, 'blocks_categories' ), 10, 2 );
	}

	public function register() {
		wp_register_script( 'archivespress-blocks-editor', ARCHIVESPRESS_URL . 'build/index.js', array(
			'wp-blocks',
			'wp-i18n',
			'wp-element'
		), ARCHIVESPRESS_VERSION );
		wp_register_style( 'archivespress-blocks-editor', ARCHIVESPRESS_URL . 'build/index.css', array(), ARCHIVESPRESS_VERSION );

		register_block_type( 'archivespress/authors', array(
			'title'         => 'Authors Index',
			'category'      => 'archivespress',
			'icon'          => 'id-alt',
			'textdomain'    => 'archivespress',
			'editor_script' => 'archivespress-blocks-editor',
			'editor_style'  => 'archivespress-blocks-editor',
			'style'         => 'archivespress',
		) );

		register_block_type( 'archivespress/dates', array(
			'title'         => 'Dates Index',
			'category'      => 'archivespress',
			'icon'          => 'calendar',
			'textdomain'    => 'archivespress',
			'editor_script' => 'archivespress-blocks-editor',
			'editor_style'  => 'archivespress-blocks-editor',
			'style'         => 'archivespress',
		) );

		register_block_type( 'archivespress/terms', array(
			'title'         => 'Terms Index',
			'category'      => 'archivespress',
			'icon'          => 'index-card',
			'textdomain'    => 'archivespress',
			'editor_script' => 'archivespress-blocks-editor',
			'editor_style'  => 'archivespress-blocks-editor',
			'style'         => 'archivespress',
		) );
	}

	public function blocks_categories( $categories, $post ) {
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
}
