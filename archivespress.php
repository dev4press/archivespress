<?php

/*
Plugin Name:       ArchivesPress
Plugin URI:        https://plugins.dev4press.com/archivespress/
Description:       Display indexes based on the dates (years, months, and days archives), authors, and taxonomy terms for quick navigation and filtering of posts.
Author:            Milan Petrovic
Author URI:        https://www.dev4press.com/
Text Domain:       archivespress
Version:           2.1
Requires at least: 5.3
Tested up to:      5.8
Requires PHP:      7.0
License:           GPLv3 or later
License URI:       https://www.gnu.org/licenses/gpl-3.0.html

== Copyright ==
Copyright 2008 - 2021 Milan Petrovic (email: support@dev4press.com)

This program is free software: you can redistribute it and/or modify
it under the terms of the GNU General Public License as published by
the Free Software Foundation, either version 3 of the License, or
(at your option) any later version.

This program is distributed in the hope that it will be useful,
but WITHOUT ANY WARRANTY; without even the implied warranty of
MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the
GNU General Public License for more details.

You should have received a copy of the GNU General Public License
along with this program. If not, see <http://www.gnu.org/licenses/>
*/

use Dev4Press\Plugin\ArchivesPress\Basic\Plugin;

const ARCHIVESPRESS_VERSION = '2.1';

$archivespress_dirname_basic = dirname( __FILE__ ) . '/';
$archivespress_urlname_basic = plugins_url( '/', __FILE__ );

define( 'ARCHIVESPRESS_PATH', $archivespress_dirname_basic );
define( 'ARCHIVESPRESS_URL', $archivespress_urlname_basic );

require_once( ARCHIVESPRESS_PATH . 'core/autoload.php' );

Plugin::instance();
