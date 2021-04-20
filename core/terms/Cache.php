<?php

namespace Dev4Press\Plugin\ArchivesPress\Terms;

use Dev4Press\Plugin\ArchivesPress\Base\iCache;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Cache implements iCache {
	protected $key = 'archivespress-terms-data-' . ARCHIVESPRESS_VERSION;
	protected $period = WEEK_IN_SECONDS;

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

	public function get( $post_type = 'post' ) : array {
		$key  = $this->key( $post_type );
		$data = get_transient( $key );

		if ( ! is_array( $data ) ) {
			$data = $this->query( $post_type );

			set_transient( $key, $data, $this->period );
		}

		return (array) $data;
	}

	protected function key( $post_type ) : string {
		return $this->key . '-' . $post_type;
	}

	protected function query( $post_type = 'post' ) : array {
		global $wpdb;

		if ( empty( $post_type ) ) {
			$post_type = 'post';
		}

		$sql = $wpdb->prepare( "SELECT 
	tt.`taxonomy`, 
    tt.`term_id`, 
    COUNT(*) AS `posts` 
FROM 
    $wpdb->term_taxonomy tt 
    INNER JOIN $wpdb->term_relationships tr ON tr.`term_taxonomy_id` = tt.`term_taxonomy_id`
	INNER JOIN $wpdb->posts p ON p.`ID` = tr.`object_id` 
WHERE 
    p.`post_type` = %s AND 
    p.`post_status` = 'publish'
GROUP BY 
    tt.`taxonomy`, 
    tt.`term_id` 
ORDER BY 
    tt.`taxonomy` ASC, 
    `posts` DESC", $post_type );

		$raw = $wpdb->get_results( $sql );

		$data = array();

		foreach ( $raw as $row ) {
			if ( ! isset( $data[ $row->taxonomy ] ) ) {
				$data[ $row->taxonomy ] = array();
			}

			$data[ $row->taxonomy ][ $row->term_id ] = $row->posts;
		}

		return $data;
	}
}