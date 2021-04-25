import {registerBlockType} from '@wordpress/blocks';
import {__} from "@wordpress/i18n";
import {ColorPaletteControl, LineHeightControl, useBlockProps} from "@wordpress/block-editor";
import ServerSideRender from "@wordpress/server-side-render";
import {InspectorControls} from "@wordpress/editor";
import {FontSizePicker, PanelBody, SelectControl, TextControl} from "@wordpress/components";

registerBlockType('archivespress/dates', {
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
        'order': {
            'type': 'string',
            'enum': [
                'desc',
                'asc'
            ],
            'default': 'desc'
        },
        'years': {
            'type': 'array',
            'items': {
                'type': 'string'
            }
        },
        'year': {
            'type': 'string',
            'enum': [
                'show',
                'hide'
            ],
            'default': 'show'
        },
        'class': {
            'type': 'string',
            'default': ''
        },
        'varFontSize': {
            'type': 'string',
            'default': ''
        },
        'varLineHeight': {
            'type': 'string',
            'default': ''
        },
        'varYearBackground': {
            'type': 'string',
            'format': 'hex-color',
            'default': ''
        },
        'varYearColor': {
            'type': 'string',
            'format': 'hex-color',
            'default': ''
        },
        'varMonthBackground': {
            'type': 'string',
            'format': 'hex-color',
            'default': ''
        },
        'varMonthColor': {
            'type': 'string',
            'format': 'hex-color',
            'default': ''
        },
        'varDayBackground': {
            'type': 'string',
            'format': 'hex-color',
            'default': ''
        },
        'varDayColor': {
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
                    block="archivespress/dates"
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
						<SelectControl
							label={__('Years', 'archivespress')}
							value={attributes.year}
							options={[
								{label: __("Show"), value: 'show'},
								{label: __("Hide"), value: 'hide'}
							]}
							onChange={(value) => setAttributes({year: value})}
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
                            label={__('Years Background', 'archivespress')}
                            value={attributes.varYearBackground}
                            onChange={(value) => setAttributes({varYearBackground: value})}
                        />
                        <ColorPaletteControl
                            label={__('Years Text', 'archivespress')}
                            value={attributes.varYearColor}
                            onChange={(value) => setAttributes({varYearColor: value})}
                        />
                        <ColorPaletteControl
                            label={__('Months Background', 'archivespress')}
                            value={attributes.varMonthBackground}
                            onChange={(value) => setAttributes({varMonthBackground: value})}
                        />
                        <ColorPaletteControl
                            label={__('Months Text', 'archivespress')}
                            value={attributes.varMonthColor}
                            onChange={(value) => setAttributes({varMonthColor: value})}
                        />
                        <ColorPaletteControl
                            label={__('Days Background', 'archivespress')}
                            value={attributes.varDayBackground}
                            onChange={(value) => setAttributes({varDayBackground: value})}
                        />
                        <ColorPaletteControl
                            label={__('Days Text', 'archivespress')}
                            value={attributes.varDayColor}
                            onChange={(value) => setAttributes({varDayColor: value})}
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
