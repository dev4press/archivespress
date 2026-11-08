<?php

namespace Dev4Press\Plugin\ArchivesPress\Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

interface iLoad {
	public function init() : void;

	public function clear_cache( $post_type ) : void;

	public function cache() : iCache;

	public function layouts() : iLayouts;

	public function shortcode( $atts = array() ) : string;
}
