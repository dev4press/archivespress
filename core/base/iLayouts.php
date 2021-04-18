<?php

namespace Dev4Press\Plugin\ArchivesPress\Base;

interface iLayouts {
	public function render( array $data, array $args = array() ) : string;
}
