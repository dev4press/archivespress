<?php

namespace Dev4Press\Plugin\ArchivesPress\Basic;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Information {
	public string $code = 'archivespress';

	public string $version = '4.0';
	public int $build = 40;
	public string $edition = 'free';
	public string $status = 'stable';
	public string $updated = '2026.11.08';
	public string $released = '2021.04.22';

	public string $author_name = 'Milan Petrovic';
	public string $author_url = 'https://www.dev4press.com/';

	public string $php = '8.1';
	public string $wordpress = '6.7';

	public static function instance() : Information {
		static $instance = null;

		if ( ! isset( $instance ) ) {
			$instance = new Information();
		}

		return $instance;
	}
}
