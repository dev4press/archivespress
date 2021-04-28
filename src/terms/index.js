import ServerSideRender from '@wordpress/server-side-render';
import {ColorPaletteControl, LineHeightControl, useBlockProps} from "@wordpress/block-editor";
import {
    FontSizePicker,
    PanelBody,
    RangeControl,
    SelectControl,
    TextControl,
    ToggleControl
} from "@wordpress/components";
import {registerBlockType} from '@wordpress/blocks';
import {InspectorControls} from "@wordpress/editor";
import {__} from "@wordpress/i18n";

registerBlockType('archivespress/terms', {
    apiVersion: 2,
    name: 'archivespress/terms',
    title: __('Terms Archives Index', 'archivespress'),
    description: __('Display taxonomy terms archives index.', 'archivespress'),
    icon: 'index-card',
    attributes: {
        'layout': {
            'type': 'string',
            'enum': [
                'basic',
                'compact'
            ],
            'default': 'basic'
        },
        'taxonomy': {
            'type': 'string',
            'default': 'category'
        },
        'postType': {
            'type': 'string',
            'default': 'post'
        },
        'orderBy': {
            'type': 'string',
            'enum': [
                'id',
                'name',
                'slug',
                'posts'
            ],
            'default': 'posts'
        },
        'order': {
            'type': 'string',
            'enum': [
                'desc',
                'asc'
            ],
            'default': 'desc'
        },
        'class': {
            'type': 'string',
            'default': ''
        },
        'showCounts': {
            'type': 'boolean',
            'default': true
        },
        'columns': {
            'type': 'integer',
            'default': 3,
            'minimum': 1,
            'maximum': 6
        },
        'varFontSize': {
            'type': 'string',
            'default': ''
        },
        'varLineHeight': {
            'type': 'string',
            'default': ''
        },
        'varBackground': {
            'type': 'string',
            'format': 'hex-color',
            'default': ''
        },
        'varColor': {
            'type': 'string',
            'format': 'hex-color',
            'default': ''
        }
    },
    supports: {
        customClassName: false,
    },
    edit: ({attributes, setAttributes}) => {
        const fontSizes = [
            {
                name: __('Small', 'archivespress'),
                slug: 'small',
                size: 12,
            },
            {
                name: __('Normal', 'archivespress'),
                slug: 'normal',
                size: 16,
            },
            {
                name: __('Big', 'archivespress'),
                slug: 'big',
                size: 20,
            }
        ];

        return (
            <div {...useBlockProps()}>
                <ServerSideRender
                    block="archivespress/terms"
                    attributes={attributes}
                />
                <InspectorControls key="settings">
                    <PanelBody title={__('Display', 'archivespress')}>
                        <SelectControl
                            label={__('Layout', 'archivespress')}
                            value={attributes.layout}
                            options={[
                                {label: __('Basic', 'archivespress'), value: 'basic'},
                                {label: __('Compact', 'archivespress'), value: 'compact'}
                            ]}
                            onChange={(value) => setAttributes({layout: value})}
                        />
                        <SelectControl
                            label={__('Taxonomy', 'archivespress')}
                            value={attributes.taxonomy}
                            options={archivespress.taxonomies}
                            onChange={(value) => setAttributes({taxonomy: value})}
                        />
                        <RangeControl
                            label={__('Columns', 'archivespress')}
                            value={attributes.columns}
                            onChange={(value) => setAttributes({columns: value})}
                            min={1}
                            max={6}
                            allowReset
                            resetFallbackValue={3}
                            step={1}
                            withInputField={true}
                            separatorType="none"
                            isShiftStepEnabled
                        />
                    </PanelBody>
                    <PanelBody title={__('Data', 'archivespress')}>
                        <SelectControl
                            label={__('Post Type', 'archivespress')}
                            value={attributes.postType}
                            options={archivespress.post_types}
                            onChange={(value) => setAttributes({postType: value})}
                        />
                        <SelectControl
                            label={__('Order By', 'archivespress')}
                            value={attributes.orderBy}
                            options={[
                                {label: __("ID"), value: 'id'},
                                {label: __("Name"), value: 'name'},
                                {label: __("Slug"), value: 'slug'},
                                {label: __("Email"), value: 'email'},
                                {label: __("Posts"), value: 'posts'}
                            ]}
                            onChange={(value) => setAttributes({orderBy: value})}
                        />
                        <SelectControl
                            label={__('Order', 'archivespress')}
                            value={attributes.order}
                            options={[
                                {label: __('Ascending', 'archivespress'), value: 'asc'},
                                {label: __('Descending', 'archivespress'), value: 'desc'}
                            ]}
                            onChange={(value) => setAttributes({order: value})}
                        />
                    </PanelBody>
                    <PanelBody title={__('Posts Counts', 'archivespress')}>
                        <ToggleControl
                            label={__('Show Counts', 'archivespress')}
                            checked={attributes.showCounts}
                            onChange={(value) => setAttributes({showCounts: value})}
                        />
                    </PanelBody>
                    <PanelBody title={__('Typography', 'archivespress')}>
                        <FontSizePicker
                            label={__('Font Size', 'archivespress')}
                            value={attributes.varFontSize}
                            onChange={(value) => setAttributes({varFontSize: value})}
                            fallBackFontSize={16}
                            fontSizes={fontSizes}
                        />
                        <LineHeightControl
                            label={__('Line Height', 'archivespress')}
                            value={attributes.varLineHeight}
                            onChange={(value) => setAttributes({varLineHeight: value})}
                        />
                    </PanelBody>
                    <PanelBody title={__('Colors', 'archivespress')}>
                        <ColorPaletteControl
                            label={__('Background', 'archivespress')}
                            value={attributes.varBackground}
                            onChange={(value) => setAttributes({varBackground: value})}
                        />
                        <ColorPaletteControl
                            label={__('Text', 'archivespress')}
                            value={attributes.varColor}
                            onChange={(value) => setAttributes({varColor: value})}
                        />
                    </PanelBody>
                    <PanelBody title={__('Advanced', 'archivespress')}>
                        <TextControl
                            label={__("Additional CSS Class", "archivespress")}
                            value={attributes.class}
                            onChange={(value) => setAttributes({class: value})}
                        />
                    </PanelBody>
                </InspectorControls>
            </div>
        )
    },
    save() {
        return null
    }
});
