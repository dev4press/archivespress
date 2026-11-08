<?php

namespace Dev4Press\Plugin\ArchivesPress\Elementor;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

final class Loader {
	private function __construct() {
	}

	public static function instance() : Loader {
		static $instance = null;

		if ( ! isset( $instance ) ) {
			$instance = new Loader();
			$instance->run();
		}

		return $instance;
	}

	private function run() : void {
		add_action( 'elementor/elements/categories_registered', array( $this, 'register_category' ) );
		$hook = version_compare( ELEMENTOR_VERSION, '3.5.0', '>=' ) ? 'elementor/widgets/register' : 'elementor/widgets/widgets_registered';
		add_action( $hook, array( $this, 'register_widgets' ) );
	}

	public function register_category( $manager ) : void {
		$manager->add_category( 'archivespress', array(
			'title' => __( 'ArchivesPress', 'archivespress' ),
			'icon'  => 'fa fa-archive',
		) );
	}

	public function register_widgets( $manager ) : void {
		foreach ( array( new Dates(), new Authors(), new Terms() ) as $widget ) {
			if ( version_compare( ELEMENTOR_VERSION, '3.5.0', '>=' ) ) {
				$manager->register( $widget );
			} else {
				$manager->register_widget_type( $widget );
			}
		}
	}
}
