<?php

namespace Dev4Press\Plugin\ArchivesPress\Elementor;

use Elementor\Controls_Manager;
use Elementor\Group_Control_Border;
use Elementor\Group_Control_Typography;
use Elementor\Widget_Base;

if ( ! defined( 'ABSPATH' ) ) {
	exit;
}

abstract class Widget extends Widget_Base {
	abstract protected function archive_type() : string;

	abstract protected function render_archive( array $settings ) : string;

	public function get_categories() {
		return array( 'archivespress' );
	}

	public function get_icon() {
		return 'eicon-archive';
	}

	public function get_style_depends() {
		return array( 'archivespress' );
	}

	protected function options( $objects ) : array {
		$options = array();
		foreach ( $objects as $name => $object ) {
			$options[ $name ] = $object->labels->name;
		}

		return $options;
	}

	protected function register_controls() : void {
		$type = $this->archive_type();
		$this->start_controls_section( 'content', array( 'label' => __( 'Archive', 'archivespress' ) ) );
		$this->add_control( 'post_type', array(
			'label'   => __( 'Post Type', 'archivespress' ),
			'type'    => Controls_Manager::SELECT,
			'options' => $this->options( get_post_types( array( 'public' => true ), 'objects' ) ),
			'default' => 'post',
		) );
		if ( $type === 'terms' ) {
			$this->add_control( 'taxonomy', array(
				'label'       => __( 'Taxonomy', 'archivespress' ),
				'type'        => Controls_Manager::SELECT,
				'options'     => $this->options( get_taxonomies( array( 'public' => true ), 'objects' ) ),
				'default'     => 'category',
				'description' => __( 'Choose a taxonomy registered for the selected post type.', 'archivespress' ),
			) );
		}
		$this->add_control( 'layout', array(
			'label'   => __( 'Layout', 'archivespress' ),
			'type'    => Controls_Manager::SELECT,
			'options' => array( 'basic' => __( 'Basic', 'archivespress' ), 'compact' => __( 'Compact', 'archivespress' ) ),
			'default' => 'basic',
		) );
		if ( $type !== 'dates' ) {
			$options = array(
				'posts' => __( 'Posts', 'archivespress' ),
				'id'    => __( 'ID', 'archivespress' ),
				'name'  => __( 'Name', 'archivespress' ),
				'slug'  => __( 'Slug', 'archivespress' ),
			);
			if ( $type === 'authors' ) {
				$options['email'] = __( 'Email', 'archivespress' );
			}
			$this->add_control( 'orderby', array( 'label' => __( 'Order By', 'archivespress' ), 'type' => Controls_Manager::SELECT, 'options' => $options, 'default' => 'posts' ) );
			$this->add_control( 'columns', array(
				'label'     => __( 'Columns', 'archivespress' ),
				'type'      => Controls_Manager::NUMBER,
				'min'       => 1,
				'max'       => 6,
				'step'      => 1,
				'default'   => 3,
				'condition' => array( 'layout' => 'basic' ),
			) );
		}
		$this->add_control( 'order', array(
			'label'   => __( 'Order', 'archivespress' ),
			'type'    => Controls_Manager::SELECT,
			'options' => array( 'desc' => __( 'Descending', 'archivespress' ), 'asc' => __( 'Ascending', 'archivespress' ) ),
			'default' => 'desc',
		) );
		if ( $type === 'dates' ) {
			$this->add_control( 'year', array(
				'label'   => __( 'Years', 'archivespress' ),
				'type'    => Controls_Manager::SELECT,
				'options' => array( 'show' => __( 'Show', 'archivespress' ), 'hide' => __( 'Hide', 'archivespress' ) ),
				'default' => 'show',
			) );
			$this->add_control( 'month', array(
				'label'   => __( 'Months', 'archivespress' ),
				'type'    => Controls_Manager::SELECT,
				'options' => array( 'auto' => __( 'Names', 'archivespress' ), 'number' => __( 'Numbers', 'archivespress' ) ),
				'default' => 'auto',
			) );
			$this->toggle( 'show_year_counts', __( 'Show Year Counts', 'archivespress' ), true );
			$this->toggle( 'show_month_counts', __( 'Show Month Counts', 'archivespress' ), true );
			$this->toggle( 'show_day_counts', __( 'Show Day Counts', 'archivespress' ), false );
		} else {
			$this->toggle( 'show_counts', __( 'Show Counts', 'archivespress' ), true );
			if ( $type === 'authors' ) {
				$this->toggle( 'show_avatar', __( 'Show Avatar', 'archivespress' ), true );
				$this->add_control( 'avatar_size', array(
					'label'     => __( 'Avatar Size', 'archivespress' ),
					'type'      => Controls_Manager::NUMBER,
					'min'       => 1,
					'max'       => 96,
					'default'   => 24,
					'condition' => array( 'show_avatar' => 'yes' ),
				) );
			}
		}
		$this->end_controls_section();
		$this->register_style_controls();
	}

	private function toggle( $name, $label, $default ) : void {
		$this->add_control( $name, array(
			'label'        => $label,
			'type'         => Controls_Manager::SWITCHER,
			'return_value' => 'yes',
			'default'      => $default ? 'yes' : '',
		) );
	}

	private function register_style_controls() : void {
		$type       = $this->archive_type();
		$wrapper    = '{{WRAPPER}} .archivespress-' . $type . '-wrapper';
		$targets    = $type === 'dates'
			? array( '.inner-year', '.inner-month', '.inner-day' )
			: array( $type === 'authors' ? '.archivespress-authors-author' : '.archivespress-terms-term' );
		$typography = array( $wrapper );
		foreach ( $targets as $target ) {
			$typography[] = $wrapper . ' ' . $target;
			$typography[] = $wrapper . ' ' . $target . ' a.link-name';
			if ( $type === 'dates' ) {
				$typography[] = $wrapper . ' ' . $target . ' a';
			}
		}
		$this->start_controls_section( 'typography', array( 'label' => __( 'Typography', 'archivespress' ), 'tab' => Controls_Manager::TAB_STYLE ) );
		$this->add_group_control( Group_Control_Typography::get_type(), array(
			'name'     => 'item_typography',
			'label'    => __( 'Items', 'archivespress' ),
			'selector' => implode( ', ', $typography ),
		) );
		$this->add_group_control( Group_Control_Typography::get_type(), array(
			'name'     => 'count_typography',
			'label'    => __( 'Counts', 'archivespress' ),
			'selector' => $wrapper . ' .info-counts',
		) );
		$this->end_controls_section();

		$groups = $type === 'dates'
			? array( 'year' => __( 'Years', 'archivespress' ), 'month' => __( 'Months', 'archivespress' ), 'day' => __( 'Days', 'archivespress' ) )
			: array( 'item' => __( 'Items', 'archivespress' ) );
		foreach ( $groups as $group => $label ) {
			$prefix      = '--archivespress-' . $type . ( $type === 'dates' ? '-' . $group : '' );
			$item_prefix = $prefix . ( $type === 'dates' ? '' : '-item' );
			$target      = $type === 'dates' ? '.inner-' . $group : $targets[0];
			$this->start_controls_section( 'style_' . $group, array( 'label' => $label, 'tab' => Controls_Manager::TAB_STYLE ) );
			foreach (
				array(
					'color'            => __( 'Text Color', 'archivespress' ),
					'background'       => __( 'Background Color', 'archivespress' ),
					'hover-color'      => __( 'Hover Text Color', 'archivespress' ),
					'hover-background' => __( 'Hover Background Color', 'archivespress' ),
				) as $property => $property_label
			) {
				$this->add_control( $group . '_' . str_replace( '-', '_', $property ), array(
					'label'     => $property_label,
					'type'      => Controls_Manager::COLOR,
					'selectors' => array( $wrapper => $prefix . '-' . $property . ': {{VALUE}};' ),
				) );
			}
			$this->add_responsive_control( $group . '_padding', array(
				'label'      => __( 'Padding', 'archivespress' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', 'em', '%', 'rem' ),
				'selectors'  => array( $wrapper => $item_prefix . '-padding: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};' ),
			) );
			$this->add_responsive_control( $group . '_radius', array(
				'label'      => __( 'Border Radius', 'archivespress' ),
				'type'       => Controls_Manager::DIMENSIONS,
				'size_units' => array( 'px', '%', 'em', 'rem' ),
				'selectors'  => array( $wrapper => $item_prefix . '-radius: {{TOP}}{{UNIT}} {{RIGHT}}{{UNIT}} {{BOTTOM}}{{UNIT}} {{LEFT}}{{UNIT}};' ),
			) );
			$this->add_group_control( Group_Control_Border::get_type(), array(
				'name'     => $group . '_border',
				'selector' => $wrapper . ' ' . $target,
			) );
			$this->end_controls_section();
		}
	}

	protected function setting( array $settings, string $key, $default ) {
		return $settings[ $key ] ?? $default;
	}

	protected function render() : void {
		$output = $this->render_archive( $this->get_settings_for_display() );

		if ( $output !== '' ) {
			echo $output; // phpcs:ignore WordPress.Security.EscapeOutput.OutputNotEscaped -- Generated by the shared renderer.
		} else if ( \Elementor\Plugin::$instance->editor->is_edit_mode() ) {
			echo esc_html__( 'No archive entries found for these settings.', 'archivespress' );
		}
	}
}
