<?php

namespace Dev4Press\Plugin\ArchivesPress\Basic;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Information {
	public $code = 'archivespress';

	public $version = '2.2';
	public $build = 22;
	public $edition = 'free';
	public $status = 'stable';
	public $updated = '2022.05.14';
	public $released = '2021.04.22';

	public $author_name = 'Milan Petrovic';
	public $author_url = 'https://www.dev4press.com/';

	public $php = '7.0';
	public $wordpress = '5.3';

	public static function instance() : Information {
		static $instance = null;

		if ( ! isset( $instance ) ) {
			$instance = new Information();
		}

		return $instance;
	}
}
