<?php

/*
Plugin Name:       GD Date Archives
Plugin URI:        https://plugins.dev4press.com/gd-date-archives/
Description:       Display the matrix with the years, months and days based on the post archives for quick navigation with various customization options available.
Author:            Milan Petrovic
Author URI:        https://www.dev4press.com/
Text Domain:       gd-date-archives
Version:           1.0
Requires at least: 5.0
Tested up to:      5.7
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

use Dev4Press\Plugin\GDDTA\Basic\Plugin;

$gddta_dirname_basic = dirname( __FILE__ ) . '/';
$gddta_urlname_basic = plugins_url( '/', __FILE__ );

define( 'GDDTA_VERSION', '1.0' );
define( 'GDDTA_FILE', __FILE__ );
define( 'GDDTA_PATH', $gddta_dirname_basic );
define( 'GDDTA_URL', $gddta_urlname_basic );

require_once( GDDTA_PATH . 'core/autoload.php' );

Plugin::instance();
