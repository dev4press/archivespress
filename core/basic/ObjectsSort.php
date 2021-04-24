<?php

namespace Dev4Press\Plugin\ArchivesPress\Basic;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class ObjectsSort {
	public $properties;
	public $sorted;

	public function __construct( $objects_array, $properties = array(), $associative = false ) {
		$properties = (array) $properties;

		if ( count( $properties ) > 0 ) {
			$this->properties = $properties;

			if ( $associative ) {
				uasort( $objects_array, array( $this, 'array_compare' ) );
			} else {
				usort( $objects_array, array( $this, 'array_compare' ) );
			}
		}

		$this->sorted = $objects_array;
	}

	public function array_compare( $one, $two, $i = 0 ) : int {
		$column = $this->properties[ $i ]['property'];
		$order  = strtolower( $this->properties[ $i ]['order'] );

		if ( $one->$column == $two->$column ) {
			if ( $i < count( $this->properties ) - 1 ) {
				$i ++;

				return $this->array_compare( $one, $two, $i );
			} else {
				return 0;
			}
		}

		if ( strtolower( $order ) == 'asc' ) {
			return ( $one->$column < $two->$column ) ? - 1 : 1;
		} else {
			return ( $one->$column < $two->$column ) ? 1 : - 1;
		}
	}
}
