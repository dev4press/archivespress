<?php

namespace Dev4Press\Plugin\ArchivesPress\Basic;

use Dev4Press\Plugin\ArchivesPress\Authors\Load as LoadAuthors;
use Dev4Press\Plugin\ArchivesPress\Dates\Load as LoadDates;
use Dev4Press\Plugin\ArchivesPress\Terms\Load as LoadTerms;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Plugin {
	public function __construct() {
	}

	public static function instance() : Plugin {
		static $instance = null;

		if ( ! isset( $instance ) ) {
			$instance = new Plugin();
			$instance->run();
		}

		return $instance;
	}

	private function run() {
		LoadDates::instance();
		LoadAuthors::instance();
		LoadTerms::instance();

		add_action( 'init', array( $this, 'styles' ), 15 );
		add_action( 'init', array( $this, 'init' ), 20 );

		add_filter( 'transition_post_status', array( $this, 'post_status' ), 10, 3 );
	}

	public function styles() {
		$_rtl   = is_rtl() ? '-rtl' : '';
		$_debug = defined( 'SCRIPT_DEBUG' ) && SCRIPT_DEBUG ? '' : '.min';
		$_file  = ARCHIVESPRESS_URL . 'css/styles' . $_rtl . $_debug . '.css';

		wp_register_style( 'archivespress', $_file, array(), ARCHIVESPRESS_VERSION );
	}

	public function init() {
		do_action( 'archivespress-init' );
	}

	public function post_status( $new_status, $old_status, $post ) {
		if ( $new_status !== $old_status && ( $new_status == 'publish' || $old_status == 'publish' ) ) {
			do_action( 'archivespress-clear-cache', $post->post_type );
		}
	}
}
