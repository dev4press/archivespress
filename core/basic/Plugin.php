<?php

namespace Dev4Press\Plugin\ArchivesPress\Basic;

use Dev4Press\Plugin\ArchivesPress\Authors\Load as LoadAuthors;
use Dev4Press\Plugin\ArchivesPress\Dates\Load as LoadDates;
use Dev4Press\Plugin\ArchivesPress\Terms\Load as LoadTerms;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Plugin {
	private function __construct() {
	}

	public static function instance() : Plugin {
		static $instance = null;

		if ( ! isset( $instance ) ) {
			$instance = new Plugin();
			$instance->run();
		}

		return $instance;
	}

	private function run() : void {
		LoadDates::instance();
		LoadAuthors::instance();
		LoadTerms::instance();

		if ( function_exists( 'register_block_type' ) ) {
			Blocks::instance();
		}

		add_action( 'init', array( $this, 'styles' ), 15 );
		add_action( 'init', array( $this, 'init' ), 20 );

		add_filter( 'transition_post_status', array( $this, 'post_status' ), 10, 3 );
		add_action( 'save_post', array( $this, 'post_saved' ), 10, 2 );
		add_action( 'set_object_terms', array( $this, 'terms_changed' ), 10, 1 );
		add_action( 'profile_update', array( $this, 'profile_updated' ) );
	}

	public function styles() : void {
		$_file = ARCHIVESPRESS_URL . 'build/styles' . ( is_rtl() ? '-rtl' : '' ) . '.css';

		wp_register_style( 'archivespress', $_file, array(), ARCHIVESPRESS_VERSION );
	}

	public function init() : void {
		do_action( 'archivespress-init' );
	}

	public function post_status( $new_status, $old_status, $post ) : void {
		if ( $new_status !== $old_status && ( $new_status == 'publish' || $old_status == 'publish' ) ) {
			do_action( 'archivespress-clear-cache', $post->post_type );
		}
	}

	public function post_saved( $post_id, $post ) : void {
		if ( $post->post_status === 'publish' ) {
			do_action( 'archivespress-clear-cache', $post->post_type );
		}
	}

	public function terms_changed( $object_id ) : void {
		$post = get_post( $object_id );

		if ( $post && $post->post_status === 'publish' ) {
			do_action( 'archivespress-clear-cache', $post->post_type );
		}
	}

	public function profile_updated() : void {
		foreach ( get_post_types( array( 'public' => true ) ) as $post_type ) {
			LoadAuthors::instance()->clear_cache( $post_type );
		}
	}
}
