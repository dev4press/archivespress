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
		add_filter( 'block_categories', array( $this, 'categories' ) );
		add_action( 'init', array( $this, 'blocks' ), 30 );
	}

	public function categories( $categories ) : array {
		return array_merge(
			$categories,
			array(
				array(
					'slug'  => 'archivespress',
					'title' => __( 'ArchivesPress' )
				)
			)
		);
	}

	public function blocks() {
		$asset_file = include( ARCHIVESPRESS_PATH . 'build/index.asset.php' );

		wp_register_script( 'archivespress-blocks-editor', ARCHIVESPRESS_URL . 'build/index.js', $asset_file['dependencies'], $asset_file['version'] );

		wp_localize_script( 'archivespress-blocks-editor', 'archivespress', array(
			'post_types' => Helpers::instance()->list_post_types( array( 'public' => true ) ),
			'taxonomies' => Helpers::instance()->list_taxonomies( array( 'public' => true ) )
		) );

		wp_set_script_translations( 'archivespress-blocks-editor', 'archivespress' );

		register_block_type( 'archivespress/authors', array(
			'apiVersion'      => 2,
			'name'            => 'archivespress/authors',
			'title'           => __( 'Authors Archives Index', 'archivespress' ),
			'description'     => __( 'Display authors archives index.', 'archivespress' ),
			'category'        => 'archivespress',
			'icon'            => 'id-alt',
			'render_callback' => array( $this, 'callback_authors' ),
			'attributes'      => array(
				'layout'        => array(
					'type'    => 'string',
					'enum'    => array(
						'basic',
						'compact'
					),
					'default' => 'basic'
				),
				'postType'      => array(
					'type'    => 'string',
					'default' => 'post'
				),
				'orderBy'       => array(
					'type'    => 'string',
					'enum'    => array(
						'id',
						'name',
						'slug',
						'email',
						'posts'
					),
					'default' => 'posts'
				),
				'order'         => array(
					'type'    => 'string',
					'enum'    => array(
						'desc',
						'asc'
					),
					'default' => 'desc'
				),
				'class'         => array(
					'type'    => 'string',
					'default' => ''
				),
				'showCounts'    => array(
					'type'    => 'boolean',
					'default' => true
				),
				'avatar'        => array(
					'type'    => 'boolean',
					'default' => true
				),
				'avatarSize'    => array(
					'type'    => 'integer',
					'default' => 24,
					'minimum' => 0
				),
				'columns'       => array(
					'type'    => 'integer',
					'default' => 3,
					'minimum' => 1,
					'maximum' => 6
				),
				'varFontSize'   => array(
					'type'    => 'string',
					'default' => ''
				),
				'varLineHeight' => array(
					'type'    => 'string',
					'default' => ''
				),
				'varBackground' => array(
					'type'    => 'string',
					'default' => ''
				),
				'varColor'      => array(
					'type'    => 'string',
					'default' => ''
				)
			),
			'textdomain'      => 'archivespress',
			'editor_script'   => 'archivespress-blocks-editor',
			'editor_style'    => 'archivespress'
		) );

		register_block_type( 'archivespress/dates', array(
			'apiVersion'      => 2,
			'name'            => 'archivespress/dates',
			'title'           => __( 'Dates Archives Index', 'archivespress' ),
			'description'     => __( 'Display dates archives index.', 'archivespress' ),
			'category'        => 'archivespress',
			'icon'            => 'calendar',
			'render_callback' => array( $this, 'callback_dates' ),
			'attributes'      => array(
				'layout'             => array(
					'type'    => 'string',
					'enum'    => array(
						'basic',
						'compact'
					),
					'default' => 'basic'
				),
				'postType'           => array(
					'type'    => 'string',
					'default' => 'post'
				),
				'order'              => array(
					'type'    => 'string',
					'enum'    => array(
						'desc',
						'asc'
					),
					'default' => 'desc'
				),
				'class'              => array(
					'type'    => 'string',
					'default' => ''
				),
				'year'               => array(
					'type'    => 'string',
					'enum'    => array(
						'show',
						'hide'
					),
					'default' => 'show'
				),
				'month'              => array(
					'type'    => 'string',
					'enum'    => array(
						'auto',
						'number'
					),
					'default' => 'auto'
				),
				'showYearCounts'     => array(
					'type'    => 'boolean',
					'default' => true
				),
				'showMonthCounts'    => array(
					'type'    => 'boolean',
					'default' => true
				),
				'showDayCounts'      => array(
					'type'    => 'boolean',
					'default' => false
				),
				'varFontSize'        => array(
					'type'    => 'string',
					'default' => ''
				),
				'varLineHeight'      => array(
					'type'    => 'string',
					'default' => ''
				),
				'varYearBackground'  => array(
					'type'    => 'string',
					'default' => ''
				),
				'varYearColor'       => array(
					'type'    => 'string',
					'default' => ''
				),
				'varMonthBackground' => array(
					'type'    => 'string',
					'default' => ''
				),
				'varMonthColor'      => array(
					'type'    => 'string',
					'default' => ''
				),
				'varDayBackground'   => array(
					'type'    => 'string',
					'default' => ''
				),
				'varDayColor'        => array(
					'type'    => 'string',
					'default' => ''
				)
			),
			'textdomain'      => 'archivespress',
			'editor_script'   => 'archivespress-blocks-editor',
			'editor_style'    => 'archivespress'
		) );

		register_block_type( 'archivespress/terms', array(
			'apiVersion'      => 2,
			'name'            => 'archivespress/terms',
			'title'           => __( 'Terms Archives Index', 'archivespress' ),
			'description'     => __( 'Display taxonomy terms archives index.', 'archivespress' ),
			'category'        => 'archivespress',
			'icon'            => 'index-card',
			'render_callback' => array( $this, 'callback_terms' ),
			'attributes'      => array(
				'layout'        => array(
					'type'    => 'string',
					'enum'    => array(
						'basic',
						'compact'
					),
					'default' => 'basic'
				),
				'taxonomy'      => array(
					'type'    => 'string',
					'default' => 'category'
				),
				'postType'      => array(
					'type'    => 'string',
					'default' => 'post'
				),
				'orderBy'       => array(
					'type'    => 'string',
					'enum'    => array(
						'id',
						'name',
						'slug',
						'posts'
					),
					'default' => 'posts'
				),
				'order'         => array(
					'type'    => 'string',
					'enum'    => array(
						'desc',
						'asc'
					),
					'default' => 'desc'
				),
				'class'         => array(
					'type'    => 'string',
					'default' => ''
				),
				'showCounts'    => array(
					'type'    => 'boolean',
					'default' => true
				),
				'columns'       => array(
					'type'    => 'integer',
					'default' => 3,
					'minimum' => 1,
					'maximum' => 6
				),
				'varFontSize'   => array(
					'type'    => 'string',
					'default' => ''
				),
				'varLineHeight' => array(
					'type'    => 'string',
					'default' => ''
				),
				'varBackground' => array(
					'type'    => 'string',
					'default' => ''
				),
				'varColor'      => array(
					'type'    => 'string',
					'default' => ''
				)
			),
			'textdomain'      => 'archivespress',
			'editor_script'   => 'archivespress-blocks-editor',
			'editor_style'    => 'archivespress'
		) );
	}

	private function normalize_attributes( $attributes ) : array {
		$output = array(
			'_source' => 'block'
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
			'varDayColor'        => 'var-day-color'
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
