<?php

namespace Dev4Press\Plugin\ArchivesPress\Authors;

use Dev4Press\Plugin\ArchivesPress\Base\iCache;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Cache implements iCache {
	protected string $key = 'archivespress-authors-public-data-' . ARCHIVESPRESS_VERSION;
	protected int|float $period = WEEK_IN_SECONDS;

	private function __construct() {
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
	p.`post_author` as `id`,
    u.`display_name` as `name`,
    u.`user_nicename` as `slug`,
    u.`user_email` as `email`,
    COUNT(*) AS `posts`
FROM
    $wpdb->posts p
    INNER JOIN $wpdb->users u ON u.`ID` = p.`post_author`
WHERE
      p.`post_type` = %s AND
      p.`post_status` = 'publish' AND p.`post_password` = ''
GROUP BY
      `id`
ORDER BY
      `posts` DESC", $post_type );

		$raw = $wpdb->get_results( $sql, ARRAY_A ); // phpcs:ignore WordPress.DB.PreparedSQL

		$data = array();

		foreach ( $raw as $row ) {
			$data[ $row['id'] ] = $row;
		}

		return $data;
	}
}
