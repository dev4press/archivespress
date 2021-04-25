<?php

namespace Dev4Press\Plugin\ArchivesPress\Basic;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Helpers {
	public function __construct() {
	}

	public static function instance() : Helpers {
		static $instance = null;

		if ( ! isset( $instance ) ) {
			$instance = new Helpers();
		}

		return $instance;
	}

	public function list_post_types( $args = array() ) : array {
		$list       = array();
		$post_types = get_post_types( $args, 'objects' );

		foreach ( $post_types as $cpt => $obj ) {
			$list[] = array( 'label' => $obj->labels->name, 'value' => $cpt );
		}

		return $list;
	}

	public function list_taxonomies( $args = array() ) : array {
		$list       = array();
		$taxonomies = get_taxonomies( $args, 'objects' );

		foreach ( $taxonomies as $tax => $obj ) {
			$list[] = array( 'label' => $obj->labels->name, 'value' => $tax );
		}

		return $list;
	}
}