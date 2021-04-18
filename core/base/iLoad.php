<?php

namespace Dev4Press\Plugin\ArchivesPress\Base;

interface iLoad {
	public function init();

	public function clear_cache( $post_type );

	public function layouts();

	public function shortcode( $atts = array() ) : string;
}