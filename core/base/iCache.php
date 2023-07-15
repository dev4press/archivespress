<?php

namespace Dev4Press\Plugin\ArchivesPress\Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

interface iCache {
	public function clear( $post_type = 'post' );

	public function get( $post_type = 'post' );
}
