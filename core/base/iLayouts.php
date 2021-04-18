<?php

namespace Dev4Press\Plugin\GDDTA\Base;

interface iLayouts {
	public function render( array $data, array $args = array() ) : string;
}
