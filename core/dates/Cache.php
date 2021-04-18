<?php

namespace Dev4Press\Plugin\ArchivesPress\Dates;

use Dev4Press\Plugin\ArchivesPress\Base\iCache;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Cache implements iCache {
	private $key = 'archivespress-dates-data-' . ARCHIVESPRESS_VERSION;
	private $period = WEEK_IN_SECONDS;

	public function __construct() {
	}

	public static function instance() : Cache {
		static $instance = null;

		if ( ! isset( $instance ) ) {
			$instance = new Cache();
		}

		return $instance;
	}

	public function clear( $post_type = 'post' ) {
		delete_transient( $this->key( $post_type ) );
	}

	public function get( $post_type = 'post' ) {
		$key  = $this->key( $post_type );
		$data = get_transient( $key );

		if ( ! is_array( $data ) ) {
			$data = $this->query( $post_type );

			set_transient( $key, $data, $this->period );
		}

		return $data;
	}

	private function key( $post_type ) : string {
		return $this->key . '-' . $post_type;
	}

	private function query( $post_type = 'post' ) : array {
		global $wpdb;

		if ( empty( $post_type ) ) {
			$post_type = 'post';
		}

		$sql =
			$wpdb->prepare( "SELECT 
	YEAR(`post_date`) AS `year`, 
	MONTH(`post_date`) AS `month`, 
    DAY(`post_date`) AS `day`, 
    COUNT(*) AS `posts` 
FROM 
    $wpdb->posts 
WHERE 
    `post_type` = %s AND 
    `post_status` = 'publish'
GROUP BY 
    `year`, `month`, `day` 
ORDER BY 
    `year` DESC, `month` DESC, `day` DESC", $post_type );
		$raw = $wpdb->get_results( $sql );

		$data = array();

		foreach ( $raw as $row ) {
			if ( ! isset( $data[ $row->year ] ) ) {
				$data[ $row->year ] = array( 'posts' => 0, 'months' => array() );
			}

			if ( ! isset( $data[ $row->year ]['months'][ $row->month ] ) ) {
				$data[ $row->year ]['months'][ $row->month ] = array( 'posts' => 0, 'days' => array() );
			}

			if ( ! isset( $data[ $row->year ]['months'][ $row->month ]['days'][ $row->day ] ) ) {
				$data[ $row->year ]['months'][ $row->month ]['days'][ $row->day ] = array( 'posts' => 0 );
			}

			$data[ $row->year ]['posts']                                               += $row->posts;
			$data[ $row->year ]['months'][ $row->month ]['posts']                      += $row->posts;
			$data[ $row->year ]['months'][ $row->month ]['days'][ $row->day ]['posts'] += $row->posts;
		}

		return $data;
	}
}