<?php

namespace Dev4Press\Plugin\ArchivesPress\Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

interface iLayouts {
	public function render( array $data, array $args = array() ) : string;
}
