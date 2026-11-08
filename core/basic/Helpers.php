<?php

namespace Dev4Press\Plugin\ArchivesPress\Basic;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Helpers {
	private function __construct() {
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

	/** Return only CSS values that are safe in an inline style element. */
	public function css_value( $key, $value ) : string {
		if ( ! is_scalar( $value ) ) {
			return '';
		}

		$value = trim( (string) $value );

		if ( $key === 'font-size' ) {
			return preg_match( '/^(?:0|(?:\d+(?:\.\d+)?|\.\d+)(?:px|em|rem|%|vh|vw))$/i', $value ) ? $value : '';
		}

		if ( $key === 'line-height' ) {
			return preg_match( '/^(?:\d+(?:\.\d+)?|\.\d+)(?:px|em|rem|%)?$/i', $value ) ? $value : '';
		}

		return preg_match( '/^(?:#[0-9a-f]{3,4}|#[0-9a-f]{6}|#[0-9a-f]{8}|[a-z]+|(?:rgba?|hsla?)\([0-9.,%+\-\/\s]+\))$/i', $value ) ? $value : '';
	}

	public function public_post_type( $post_type ) : bool {
		if ( ! is_string( $post_type ) ) {
			return false;
		}

		$object = get_post_type_object( $post_type );

		return $object && $object->public;
	}
}
