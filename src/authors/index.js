import {registerBlockType} from '@wordpress/blocks';
import {ColorPaletteControl, LineHeightControl, useBlockProps} from "@wordpress/block-editor";
import ServerSideRender from '@wordpress/server-side-render';
import {InspectorControls} from "@wordpress/editor";
import {
    FontSizePicker,
    PanelBody,
    RangeControl,
    SelectControl,
    TextControl,
    ToggleControl
} from "@wordpress/components";
import {__} from "@wordpress/i18n";

registerBlockType('archivespress/authors', {
    apiVersion: 2,
    attributes: {
        'layout': {
            'type': 'string',
            'enum': [
                'basic',
                'compact'
            ],
            'default': 'basic'
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
                'email',
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
        'avatar': {
            'type': 'bool',
            'default': true
        },
        'avatarSize': {
            'type': 'integer',
            'default': 24,
            'minimum': 0
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
                    block="archivespress/authors"
                    attributes={attributes}
                />
                <InspectorControls key="settings">
                    <PanelBody title={__('Display', 'archivespress')}>
                        <SelectControl
                            label={__('Layout', 'archivespress')}
                            value={attributes.layout}
                            options={[
                                {label: __("Basic"), value: 'basic'},
                                {label: __("Compact"), value: 'compact'}
                            ]}
                            onChange={(value) => setAttributes({layout: value})}
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
                    <PanelBody title={__('Author Avatar', 'archivespress')}>
                        <ToggleControl
                            label={__('Show Author Avatar', 'archivespress')}
                            checked={attributes.avatar}
                            onChange={(value) => setAttributes({avatar: value})}
                        />
                        <RangeControl
                            label={__('Avatar Size', 'archivespress')}
                            value={attributes.avatarSize}
                            onChange={(value) => setAttributes({avatarSize: value})}
                            min={1}
                            max={96}
                            allowReset
                            resetFallbackValue={24}
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
                            onChange={(value) => setAttributes({layout: value})}
                        />
                    </PanelBody>
                </InspectorControls>
            </div>
        )
    },
    save: () => {
        return null
    }
});
