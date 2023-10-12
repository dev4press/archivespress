import ServerSideRender from "@wordpress/server-side-render";
import {ColorPaletteControl, InspectorControls, LineHeightControl, useBlockProps} from "@wordpress/block-editor";
import {Disabled, FontSizePicker, PanelBody, SelectControl, TextControl, ToggleControl} from "@wordpress/components";
import {registerBlockType} from '@wordpress/blocks';
import {__} from "@wordpress/i18n";
import icons from "../../icons";
import metadata from './block.json';

registerBlockType(metadata, {
    icon: icons.dates,
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
                <Disabled>
                    <ServerSideRender
                        block="archivespress/dates"
                        attributes={attributes}
                    />
                </Disabled>
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
                            label={__('Years', 'archivespress')}
                            value={attributes.year}
                            options={[
                                {label: __('Show', 'archivespress'), value: 'show'},
                                {label: __('Hide', 'archivespress'), value: 'hide'}
                            ]}
                            onChange={(value) => setAttributes({year: value})}
                        />
                        <SelectControl
                            label={__('Months', 'archivespress')}
                            value={attributes.month}
                            options={[
                                {label: __('Auto', 'archivespress'), value: 'auto'},
                                {label: __('Number only', 'archivespress'), value: 'number'}
                            ]}
                            onChange={(value) => setAttributes({month: value})}
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
                    <PanelBody title={__('Posts Counts', 'archivespress')}>
                        <ToggleControl
                            label={__('Show Year Counts', 'archivespress')}
                            checked={attributes.showYearCounts}
                            onChange={(value) => setAttributes({showYearCounts: value})}
                        />
                        <ToggleControl
                            label={__('Show Month Counts', 'archivespress')}
                            checked={attributes.showMonthCounts}
                            onChange={(value) => setAttributes({showMonthCounts: value})}
                        />
                        <ToggleControl
                            label={__('Show Day Counts', 'archivespress')}
                            checked={attributes.showDayCounts}
                            onChange={(value) => setAttributes({showDayCounts: value})}
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
                            onChange={(value) => setAttributes({class: value})}
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
