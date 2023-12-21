<?php

namespace Dev4Press\Plugin\ArchivesPress\Basic;

use Dev4Press\Plugin\ArchivesPress\Authors\Load as LoadAuthors;
use Dev4Press\Plugin\ArchivesPress\Dates\Load as LoadDates;
use Dev4Press\Plugin\ArchivesPress\Terms\Load as LoadTerms;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

class Blocks {
	public function __construct() {
	}

	public static function instance() : Blocks {
		static $instance = null;

		if ( ! isset( $instance ) ) {
			$instance = new Blocks();
			$instance->run();
		}

		return $instance;
	}

	private function run() {
		add_filter( 'block_categories_all', array( $this, 'categories' ) );

		add_action( 'init', array( $this, 'blocks' ), 30 );
	}

	public function categories( $categories ) : array {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'archivespress',
					'title' => __( 'ArchivesPress', 'archivespress' ),
				),
			)
		);
	}

	public function blocks() {
		$asset_file = include( ARCHIVESPRESS_PATH . 'build/index.asset.php' );

		wp_register_script( 'archivespress-blocks-editor', ARCHIVESPRESS_URL . 'build/index.js', $asset_file['dependencies'], $asset_file['version'] );

		wp_localize_script( 'archivespress-blocks-editor', 'archivespress', array(
			'post_types' => Helpers::instance()->list_post_types( array( 'public' => true ) ),
			'taxonomies' => Helpers::instance()->list_taxonomies( array( 'public' => true ) ),
		) );

		wp_set_script_translations( 'archivespress-blocks-editor', 'archivespress' );

		register_block_type( ARCHIVESPRESS_BLOCKS_PATH . 'authors',
			array(
				'render_callback' => array( $this, 'callback_authors' ),
			)
		);

		register_block_type( ARCHIVESPRESS_BLOCKS_PATH . 'dates',
			array(
				'render_callback' => array( $this, 'callback_dates' ),
			)
		);

		register_block_type( ARCHIVESPRESS_BLOCKS_PATH . 'terms',
			array(
				'render_callback' => array( $this, 'callback_terms' ),
			)
		);
	}

	private function normalize_attributes( $attributes ) : array {
		$output = array(
			'_source' => 'block',
		);

		$map = array(
			'postType'           => 'post_type',
			'orderBy'            => 'orderby',
			'showCounts'         => 'show-counts',
			'showYearCounts'     => 'show-year-counts',
			'showMonthCounts'    => 'show-month-counts',
			'showDayCounts'      => 'show-day-counts',
			'varLineHeight'      => 'var-line-height',
			'varFontSize'        => 'var-font-size',
			'varBackground'      => 'var-background',
			'varColor'           => 'var-color',
			'varYearBackground'  => 'var-year-background',
			'varYearColor'       => 'var-year-color',
			'varMonthBackground' => 'var-month-background',
			'varMonthColor'      => 'var-month-color',
			'varDayBackground'   => 'var-day-background',
			'varDayColor'        => 'var-day-color',
		);

		foreach ( $attributes as $key => $value ) {
			$new_key            = $map[ $key ] ?? $key;
			$output[ $new_key ] = $value;
		}

		if ( isset( $output['avatar'] ) && $output['avatar'] == 'true' ) {
			$output['avatar'] = $output['avatarSize'];
			unset( $output['avatarSize'] );
		}

		if ( ! empty( $output['var-font-size'] ) ) {
			$output['var-font-size'] = $output['var-font-size'] . 'px';
		}

		return $output;
	}

	public function callback_authors( $attributes ) : string {
		$atts = $this->normalize_attributes( $attributes );

		return LoadAuthors::instance()->shortcode( $atts );
	}

	public function callback_dates( $attributes ) : string {
		$atts = $this->normalize_attributes( $attributes );

		return LoadDates::instance()->shortcode( $atts );
	}

	public function callback_terms( $attributes ) : string {
		$atts = $this->normalize_attributes( $attributes );

		return LoadTerms::instance()->shortcode( $atts );
	}
}
