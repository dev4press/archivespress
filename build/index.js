!function(e){var t={};function r(a){if(t[a])return t[a].exports;var n=t[a]={i:a,l:!1,exports:{}};return e[a].call(n.exports,n,n.exports,r),n.l=!0,n.exports}r.m=e,r.c=t,r.d=function(e,t,a){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(r.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)r.d(a,n,function(t){return e[t]}.bind(null,n));return a},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=7)}([function(e,t){e.exports=window.wp.i18n},function(e,t){e.exports=window.wp.element},function(e,t){e.exports=window.wp.components},function(e,t){e.exports=window.wp.blockEditor},function(e,t){e.exports=window.wp.blocks},function(e,t){e.exports=window.wp.serverSideRender},function(e,t){e.exports=window.wp.editor},function(e,t,r){"use strict";r.r(t);var a=r(1),n=r(4),s=r(3),o=r(5),l=r.n(o),c=r(6),i=r(2),u=r(0);Object(n.registerBlockType)("archivespress/authors",{apiVersion:2,name:"archivespress/authors",title:Object(u.__)("Authors Archives Index","archivespress"),description:Object(u.__)("Display authors archives index.","archivespress"),icon:"id-alt",attributes:{layout:{type:"string",enum:["basic","compact"],default:"basic"},postType:{type:"string",default:"post"},orderBy:{type:"string",enum:["id","name","slug","email","posts"],default:"posts"},order:{type:"string",enum:["desc","asc"],default:"desc"},class:{type:"string",default:""},showCounts:{type:"bool",default:!0},avatar:{type:"bool",default:!0},avatarSize:{type:"integer",default:24,minimum:0},columns:{type:"integer",default:3,minimum:1,maximum:6},varFontSize:{type:"string",default:""},varLineHeight:{type:"string",default:""},varBackground:{type:"string",format:"hex-color",default:""},varColor:{type:"string",format:"hex-color",default:""}},supports:{customClassName:!1},edit:function(e){var t=e.attributes,r=e.setAttributes,n=[{name:Object(u.__)("Small","archivespress"),slug:"small",size:12},{name:Object(u.__)("Normal","archivespress"),slug:"normal",size:16},{name:Object(u.__)("Big","archivespress"),slug:"big",size:20}];return Object(a.createElement)("div",Object(s.useBlockProps)(),Object(a.createElement)(l.a,{block:"archivespress/authors",attributes:t}),Object(a.createElement)(c.InspectorControls,{key:"settings"},Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Display","archivespress")},Object(a.createElement)(i.SelectControl,{label:Object(u.__)("Layout","archivespress"),value:t.layout,options:[{label:Object(u.__)("Basic","archivespress"),value:"basic"},{label:Object(u.__)("Compact","archivespress"),value:"compact"}],onChange:function(e){return r({layout:e})}}),Object(a.createElement)(i.RangeControl,{label:Object(u.__)("Columns","archivespress"),value:t.columns,onChange:function(e){return r({columns:e})},min:1,max:6,allowReset:!0,resetFallbackValue:3,step:1,withInputField:!0,separatorType:"none",isShiftStepEnabled:!0})),Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Posts Counts","archivespress")},Object(a.createElement)(i.ToggleControl,{label:Object(u.__)("Show Counts","archivespress"),checked:t.showCounts,onChange:function(e){return r({showCounts:e})}})),Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Author Avatar","archivespress")},Object(a.createElement)(i.ToggleControl,{label:Object(u.__)("Show Author Avatar","archivespress"),checked:t.avatar,onChange:function(e){return r({avatar:e})}}),Object(a.createElement)(i.RangeControl,{label:Object(u.__)("Avatar Size","archivespress"),value:t.avatarSize,onChange:function(e){return r({avatarSize:e})},min:1,max:96,allowReset:!0,resetFallbackValue:24,step:1,withInputField:!0,separatorType:"none",isShiftStepEnabled:!0})),Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Data","archivespress")},Object(a.createElement)(i.SelectControl,{label:Object(u.__)("Post Type","archivespress"),value:t.postType,options:archivespress.post_types,onChange:function(e){return r({postType:e})}}),Object(a.createElement)(i.SelectControl,{label:Object(u.__)("Order By","archivespress"),value:t.orderBy,options:[{label:Object(u.__)("ID"),value:"id"},{label:Object(u.__)("Name"),value:"name"},{label:Object(u.__)("Slug"),value:"slug"},{label:Object(u.__)("Email"),value:"email"},{label:Object(u.__)("Posts"),value:"posts"}],onChange:function(e){return r({orderBy:e})}}),Object(a.createElement)(i.SelectControl,{label:Object(u.__)("Order","archivespress"),value:t.order,options:[{label:Object(u.__)("Ascending","archivespress"),value:"asc"},{label:Object(u.__)("Descending","archivespress"),value:"desc"}],onChange:function(e){return r({order:e})}})),Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Typography","archivespress")},Object(a.createElement)(i.FontSizePicker,{label:Object(u.__)("Font Size","archivespress"),value:t.varFontSize,onChange:function(e){return r({varFontSize:e})},fallBackFontSize:16,fontSizes:n}),Object(a.createElement)(s.LineHeightControl,{label:Object(u.__)("Line Height","archivespress"),value:t.varLineHeight,onChange:function(e){return r({varLineHeight:e})}})),Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Colors","archivespress")},Object(a.createElement)(s.ColorPaletteControl,{label:Object(u.__)("Background","archivespress"),value:t.varBackground,onChange:function(e){return r({varBackground:e})}}),Object(a.createElement)(s.ColorPaletteControl,{label:Object(u.__)("Text","archivespress"),value:t.varColor,onChange:function(e){return r({varColor:e})}})),Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Advanced","archivespress")},Object(a.createElement)(i.TextControl,{label:Object(u.__)("Additional CSS Class","archivespress"),value:t.class,onChange:function(e){return r({layout:e})}}))))},save:function(){return null}}),Object(n.registerBlockType)("archivespress/dates",{apiVersion:2,name:"archivespress/dates",title:Object(u.__)("Dates Archives Index","archivespress"),description:Object(u.__)("Display dates archives index.","archivespress"),icon:"calendar",attributes:{layout:{type:"string",enum:["basic","compact"],default:"basic"},postType:{type:"string",default:"post"},order:{type:"string",enum:["desc","asc"],default:"desc"},years:{type:"array",items:{type:"string"}},year:{type:"string",enum:["show","hide"],default:"show"},class:{type:"string",default:""},varFontSize:{type:"string",default:""},varLineHeight:{type:"string",default:""},varYearBackground:{type:"string",format:"hex-color",default:""},varYearColor:{type:"string",format:"hex-color",default:""},varMonthBackground:{type:"string",format:"hex-color",default:""},varMonthColor:{type:"string",format:"hex-color",default:""},varDayBackground:{type:"string",format:"hex-color",default:""},varDayColor:{type:"string",format:"hex-color",default:""}},supports:{customClassName:!1},edit:function(e){var t=e.attributes,r=e.setAttributes,n=[{name:Object(u.__)("Small","archivespress"),slug:"small",size:12},{name:Object(u.__)("Normal","archivespress"),slug:"normal",size:16},{name:Object(u.__)("Big","archivespress"),slug:"big",size:20}];return Object(a.createElement)("div",Object(s.useBlockProps)(),Object(a.createElement)(l.a,{block:"archivespress/dates",attributes:t}),Object(a.createElement)(c.InspectorControls,{key:"settings"},Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Display","archivespress")},Object(a.createElement)(i.SelectControl,{label:Object(u.__)("Layout","archivespress"),value:t.layout,options:[{label:Object(u.__)("Basic","archivespress"),value:"basic"},{label:Object(u.__)("Compact","archivespress"),value:"compact"}],onChange:function(e){return r({layout:e})}}),Object(a.createElement)(i.SelectControl,{label:Object(u.__)("Years","archivespress"),value:t.year,options:[{label:Object(u.__)("Show","archivespress"),value:"show"},{label:Object(u.__)("Hide","archivespress"),value:"hide"}],onChange:function(e){return r({year:e})}})),Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Data","archivespress")},Object(a.createElement)(i.SelectControl,{label:Object(u.__)("Post Type","archivespress"),value:t.postType,options:archivespress.post_types,onChange:function(e){return r({postType:e})}}),Object(a.createElement)(i.SelectControl,{label:Object(u.__)("Order","archivespress"),value:t.order,options:[{label:Object(u.__)("Ascending","archivespress"),value:"asc"},{label:Object(u.__)("Descending","archivespress"),value:"desc"}],onChange:function(e){return r({order:e})}})),Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Typography","archivespress")},Object(a.createElement)(i.FontSizePicker,{label:Object(u.__)("Font Size","archivespress"),value:t.varFontSize,onChange:function(e){return r({varFontSize:e})},fallBackFontSize:16,fontSizes:n}),Object(a.createElement)(s.LineHeightControl,{label:Object(u.__)("Line Height","archivespress"),value:t.varLineHeight,onChange:function(e){return r({varLineHeight:e})}})),Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Colors","archivespress")},Object(a.createElement)(s.ColorPaletteControl,{label:Object(u.__)("Years Background","archivespress"),value:t.varYearBackground,onChange:function(e){return r({varYearBackground:e})}}),Object(a.createElement)(s.ColorPaletteControl,{label:Object(u.__)("Years Text","archivespress"),value:t.varYearColor,onChange:function(e){return r({varYearColor:e})}}),Object(a.createElement)(s.ColorPaletteControl,{label:Object(u.__)("Months Background","archivespress"),value:t.varMonthBackground,onChange:function(e){return r({varMonthBackground:e})}}),Object(a.createElement)(s.ColorPaletteControl,{label:Object(u.__)("Months Text","archivespress"),value:t.varMonthColor,onChange:function(e){return r({varMonthColor:e})}}),Object(a.createElement)(s.ColorPaletteControl,{label:Object(u.__)("Days Background","archivespress"),value:t.varDayBackground,onChange:function(e){return r({varDayBackground:e})}}),Object(a.createElement)(s.ColorPaletteControl,{label:Object(u.__)("Days Text","archivespress"),value:t.varDayColor,onChange:function(e){return r({varDayColor:e})}})),Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Advanced","archivespress")},Object(a.createElement)(i.TextControl,{label:Object(u.__)("Additional CSS Class","archivespress"),value:t.class,onChange:function(e){return r({layout:e})}}))))},save:function(){return null}}),Object(n.registerBlockType)("archivespress/terms",{apiVersion:2,name:"archivespress/terms",title:Object(u.__)("Terms Archives Index","archivespress"),description:Object(u.__)("Display taxonomy terms archives index.","archivespress"),icon:"index-card",attributes:{layout:{type:"string",enum:["basic","compact"],default:"basic"},taxonomy:{type:"string",default:"category"},postType:{type:"string",default:"post"},orderBy:{type:"string",enum:["id","name","slug","posts"],default:"posts"},order:{type:"string",enum:["desc","asc"],default:"desc"},class:{type:"string",default:""},showCounts:{type:"bool",default:!0},columns:{type:"integer",default:3,minimum:1,maximum:6},varFontSize:{type:"string",default:""},varLineHeight:{type:"string",default:""},varBackground:{type:"string",format:"hex-color",default:""},varColor:{type:"string",format:"hex-color",default:""}},supports:{customClassName:!1},edit:function(e){var t=e.attributes,r=e.setAttributes,n=[{name:Object(u.__)("Small","archivespress"),slug:"small",size:12},{name:Object(u.__)("Normal","archivespress"),slug:"normal",size:16},{name:Object(u.__)("Big","archivespress"),slug:"big",size:20}];return Object(a.createElement)("div",Object(s.useBlockProps)(),Object(a.createElement)(l.a,{block:"archivespress/terms",attributes:t}),Object(a.createElement)(c.InspectorControls,{key:"settings"},Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Display","archivespress")},Object(a.createElement)(i.SelectControl,{label:Object(u.__)("Layout","archivespress"),value:t.layout,options:[{label:Object(u.__)("Basic","archivespress"),value:"basic"},{label:Object(u.__)("Compact","archivespress"),value:"compact"}],onChange:function(e){return r({layout:e})}}),Object(a.createElement)(i.SelectControl,{label:Object(u.__)("Taxonomy","archivespress"),value:t.taxonomy,options:archivespress.taxonomies,onChange:function(e){return r({taxonomy:e})}}),Object(a.createElement)(i.RangeControl,{label:Object(u.__)("Columns","archivespress"),value:t.columns,onChange:function(e){return r({columns:e})},min:1,max:6,allowReset:!0,resetFallbackValue:3,step:1,withInputField:!0,separatorType:"none",isShiftStepEnabled:!0})),Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Posts Counts","archivespress")},Object(a.createElement)(i.ToggleControl,{label:Object(u.__)("Show Counts","archivespress"),checked:t.showCounts,onChange:function(e){return r({showCounts:e})}})),Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Data","archivespress")},Object(a.createElement)(i.SelectControl,{label:Object(u.__)("Post Type","archivespress"),value:t.postType,options:archivespress.post_types,onChange:function(e){return r({postType:e})}}),Object(a.createElement)(i.SelectControl,{label:Object(u.__)("Order By","archivespress"),value:t.orderBy,options:[{label:Object(u.__)("ID"),value:"id"},{label:Object(u.__)("Name"),value:"name"},{label:Object(u.__)("Slug"),value:"slug"},{label:Object(u.__)("Email"),value:"email"},{label:Object(u.__)("Posts"),value:"posts"}],onChange:function(e){return r({orderBy:e})}}),Object(a.createElement)(i.SelectControl,{label:Object(u.__)("Order","archivespress"),value:t.order,options:[{label:Object(u.__)("Ascending","archivespress"),value:"asc"},{label:Object(u.__)("Descending","archivespress"),value:"desc"}],onChange:function(e){return r({order:e})}})),Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Typography","archivespress")},Object(a.createElement)(i.FontSizePicker,{label:Object(u.__)("Font Size","archivespress"),value:t.varFontSize,onChange:function(e){return r({varFontSize:e})},fallBackFontSize:16,fontSizes:n}),Object(a.createElement)(s.LineHeightControl,{label:Object(u.__)("Line Height","archivespress"),value:t.varLineHeight,onChange:function(e){return r({varLineHeight:e})}})),Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Colors","archivespress")},Object(a.createElement)(s.ColorPaletteControl,{label:Object(u.__)("Background","archivespress"),value:t.varBackground,onChange:function(e){return r({varBackground:e})}}),Object(a.createElement)(s.ColorPaletteControl,{label:Object(u.__)("Text","archivespress"),value:t.varColor,onChange:function(e){return r({varColor:e})}})),Object(a.createElement)(i.PanelBody,{title:Object(u.__)("Advanced","archivespress")},Object(a.createElement)(i.TextControl,{label:Object(u.__)("Additional CSS Class","archivespress"),value:t.class,onChange:function(e){return r({layout:e})}}))))},save:function(){return null}})}]);