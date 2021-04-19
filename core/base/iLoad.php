<?php

namespace Dev4Press\Plugin\ArchivesPress\Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

interface iLoad {
	public function init();

	public function clear_cache( $post_type );

	public function cache() : iCache;

	public function layouts() : iLayouts;

	public function shortcode( $atts = array() ) : string;
}