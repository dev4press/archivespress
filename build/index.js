/******/ (function() { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/blocks/authors/index.js":
/*!*************************************!*\
  !*** ./src/blocks/authors/index.js ***!
  \*************************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons */ "./src/icons.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block.json */ "./src/blocks/authors/block.json");









(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_8__, {
  icon: _icons__WEBPACK_IMPORTED_MODULE_7__["default"].authors,
  edit: ({
    attributes,
    setAttributes
  }) => {
    const fontSizes = [{
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Small', 'archivespress'),
      slug: 'small',
      size: 12
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Normal', 'archivespress'),
      slug: 'normal',
      size: 16
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Big', 'archivespress'),
      slug: 'big',
      size: 20
    }];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1___default()), {
      block: "archivespress/authors",
      attributes: attributes
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, {
      key: "settings"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Display', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Layout', 'archivespress'),
      value: attributes.layout,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Basic', 'archivespress'),
        value: 'basic'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Compact', 'archivespress'),
        value: 'compact'
      }],
      onChange: value => setAttributes({
        layout: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Columns', 'archivespress'),
      value: attributes.columns,
      onChange: value => setAttributes({
        columns: value
      }),
      min: 1,
      max: 6,
      allowReset: true,
      resetFallbackValue: 3,
      step: 1,
      withInputField: true,
      separatorType: "none",
      isShiftStepEnabled: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Data', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Post Type', 'archivespress'),
      value: attributes.postType,
      options: archivespress.post_types,
      onChange: value => setAttributes({
        postType: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Order By', 'archivespress'),
      value: attributes.orderBy,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("ID"),
        value: 'id'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Name"),
        value: 'name'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Slug"),
        value: 'slug'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Email"),
        value: 'email'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Posts"),
        value: 'posts'
      }],
      onChange: value => setAttributes({
        orderBy: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Order', 'archivespress'),
      value: attributes.order,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Ascending', 'archivespress'),
        value: 'asc'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Descending', 'archivespress'),
        value: 'desc'
      }],
      onChange: value => setAttributes({
        order: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Author Avatar', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show Author Avatar', 'archivespress'),
      checked: attributes.avatar,
      onChange: value => setAttributes({
        avatar: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Avatar Size', 'archivespress'),
      value: attributes.avatarSize,
      onChange: value => setAttributes({
        avatarSize: value
      }),
      min: 1,
      max: 96,
      allowReset: true,
      resetFallbackValue: 24,
      step: 1,
      withInputField: true,
      separatorType: "none",
      isShiftStepEnabled: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Posts Counts', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show Counts', 'archivespress'),
      checked: attributes.showCounts,
      onChange: value => setAttributes({
        showCounts: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Typography', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Font Size', 'archivespress'),
      value: attributes.varFontSize,
      onChange: value => setAttributes({
        varFontSize: value
      }),
      fallBackFontSize: 16,
      fontSizes: fontSizes
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.LineHeightControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Line Height', 'archivespress'),
      value: attributes.varLineHeight,
      onChange: value => setAttributes({
        varLineHeight: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Colors', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Background', 'archivespress'),
      value: attributes.varBackground,
      onChange: value => setAttributes({
        varBackground: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Text', 'archivespress'),
      value: attributes.varColor,
      onChange: value => setAttributes({
        varColor: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Advanced', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Additional CSS Class", "archivespress"),
      value: attributes.class,
      onChange: value => setAttributes({
        class: value
      })
    }))));
  },
  save: () => {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/dates/index.js":
/*!***********************************!*\
  !*** ./src/blocks/dates/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons */ "./src/icons.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block.json */ "./src/blocks/dates/block.json");









(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_8__, {
  icon: _icons__WEBPACK_IMPORTED_MODULE_7__["default"].dates,
  edit: ({
    attributes,
    setAttributes
  }) => {
    const fontSizes = [{
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Small', 'archivespress'),
      slug: 'small',
      size: 12
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Normal', 'archivespress'),
      slug: 'normal',
      size: 16
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Big', 'archivespress'),
      slug: 'big',
      size: 20
    }];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1___default()), {
      block: "archivespress/dates",
      attributes: attributes
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, {
      key: "settings"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Display', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Layout', 'archivespress'),
      value: attributes.layout,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Basic', 'archivespress'),
        value: 'basic'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Compact', 'archivespress'),
        value: 'compact'
      }],
      onChange: value => setAttributes({
        layout: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Years', 'archivespress'),
      value: attributes.year,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show', 'archivespress'),
        value: 'show'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Hide', 'archivespress'),
        value: 'hide'
      }],
      onChange: value => setAttributes({
        year: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Months', 'archivespress'),
      value: attributes.month,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Auto', 'archivespress'),
        value: 'auto'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Number only', 'archivespress'),
        value: 'number'
      }],
      onChange: value => setAttributes({
        month: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Data', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Post Type', 'archivespress'),
      value: attributes.postType,
      options: archivespress.post_types,
      onChange: value => setAttributes({
        postType: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Order', 'archivespress'),
      value: attributes.order,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Ascending', 'archivespress'),
        value: 'asc'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Descending', 'archivespress'),
        value: 'desc'
      }],
      onChange: value => setAttributes({
        order: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Posts Counts', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show Year Counts', 'archivespress'),
      checked: attributes.showYearCounts,
      onChange: value => setAttributes({
        showYearCounts: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show Month Counts', 'archivespress'),
      checked: attributes.showMonthCounts,
      onChange: value => setAttributes({
        showMonthCounts: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show Day Counts', 'archivespress'),
      checked: attributes.showDayCounts,
      onChange: value => setAttributes({
        showDayCounts: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Typography', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Font Size', 'archivespress'),
      value: attributes.varFontSize,
      onChange: value => setAttributes({
        varFontSize: value
      }),
      fallBackFontSize: 16,
      fontSizes: fontSizes
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.LineHeightControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Line Height', 'archivespress'),
      value: attributes.varLineHeight,
      onChange: value => setAttributes({
        varLineHeight: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Colors', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Years Background', 'archivespress'),
      value: attributes.varYearBackground,
      onChange: value => setAttributes({
        varYearBackground: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Years Text', 'archivespress'),
      value: attributes.varYearColor,
      onChange: value => setAttributes({
        varYearColor: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Months Background', 'archivespress'),
      value: attributes.varMonthBackground,
      onChange: value => setAttributes({
        varMonthBackground: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Months Text', 'archivespress'),
      value: attributes.varMonthColor,
      onChange: value => setAttributes({
        varMonthColor: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Days Background', 'archivespress'),
      value: attributes.varDayBackground,
      onChange: value => setAttributes({
        varDayBackground: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Days Text', 'archivespress'),
      value: attributes.varDayColor,
      onChange: value => setAttributes({
        varDayColor: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Advanced', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Additional CSS Class", "archivespress"),
      value: attributes.class,
      onChange: value => setAttributes({
        class: value
      })
    }))));
  },
  save: () => {
    return null;
  }
});

/***/ }),

/***/ "./src/blocks/terms/index.js":
/*!***********************************!*\
  !*** ./src/blocks/terms/index.js ***!
  \***********************************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @wordpress/server-side-render */ "@wordpress/server-side-render");
/* harmony import */ var _wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @wordpress/block-editor */ "@wordpress/block-editor");
/* harmony import */ var _wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @wordpress/components */ "@wordpress/components");
/* harmony import */ var _wordpress_components__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @wordpress/blocks */ "@wordpress/blocks");
/* harmony import */ var _wordpress_blocks__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @wordpress/editor */ "@wordpress/editor");
/* harmony import */ var _wordpress_editor__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @wordpress/i18n */ "@wordpress/i18n");
/* harmony import */ var _wordpress_i18n__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__);
/* harmony import */ var _icons__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ../../icons */ "./src/icons.js");
/* harmony import */ var _block_json__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./block.json */ "./src/blocks/terms/block.json");









(0,_wordpress_blocks__WEBPACK_IMPORTED_MODULE_4__.registerBlockType)(_block_json__WEBPACK_IMPORTED_MODULE_8__, {
  icon: _icons__WEBPACK_IMPORTED_MODULE_7__["default"].terms,
  edit: ({
    attributes,
    setAttributes
  }) => {
    const fontSizes = [{
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Small', 'archivespress'),
      slug: 'small',
      size: 12
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Normal', 'archivespress'),
      slug: 'normal',
      size: 16
    }, {
      name: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Big', 'archivespress'),
      slug: 'big',
      size: 20
    }];
    return (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("div", {
      ...(0,_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.useBlockProps)()
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.Disabled, null, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)((_wordpress_server_side_render__WEBPACK_IMPORTED_MODULE_1___default()), {
      block: "archivespress/terms",
      attributes: attributes
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_editor__WEBPACK_IMPORTED_MODULE_5__.InspectorControls, {
      key: "settings"
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Display', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Layout', 'archivespress'),
      value: attributes.layout,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Basic', 'archivespress'),
        value: 'basic'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Compact', 'archivespress'),
        value: 'compact'
      }],
      onChange: value => setAttributes({
        layout: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Taxonomy', 'archivespress'),
      value: attributes.taxonomy,
      options: archivespress.taxonomies,
      onChange: value => setAttributes({
        taxonomy: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.RangeControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Columns', 'archivespress'),
      value: attributes.columns,
      onChange: value => setAttributes({
        columns: value
      }),
      min: 1,
      max: 6,
      allowReset: true,
      resetFallbackValue: 3,
      step: 1,
      withInputField: true,
      separatorType: "none",
      isShiftStepEnabled: true
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Data', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Post Type', 'archivespress'),
      value: attributes.postType,
      options: archivespress.post_types,
      onChange: value => setAttributes({
        postType: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Order By', 'archivespress'),
      value: attributes.orderBy,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("ID"),
        value: 'id'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Name"),
        value: 'name'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Slug"),
        value: 'slug'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Email"),
        value: 'email'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Posts"),
        value: 'posts'
      }],
      onChange: value => setAttributes({
        orderBy: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.SelectControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Order', 'archivespress'),
      value: attributes.order,
      options: [{
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Ascending', 'archivespress'),
        value: 'asc'
      }, {
        label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Descending', 'archivespress'),
        value: 'desc'
      }],
      onChange: value => setAttributes({
        order: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Posts Counts', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.ToggleControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Show Counts', 'archivespress'),
      checked: attributes.showCounts,
      onChange: value => setAttributes({
        showCounts: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Typography', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.FontSizePicker, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Font Size', 'archivespress'),
      value: attributes.varFontSize,
      onChange: value => setAttributes({
        varFontSize: value
      }),
      fallBackFontSize: 16,
      fontSizes: fontSizes
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.LineHeightControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Line Height', 'archivespress'),
      value: attributes.varLineHeight,
      onChange: value => setAttributes({
        varLineHeight: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Colors', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Background', 'archivespress'),
      value: attributes.varBackground,
      onChange: value => setAttributes({
        varBackground: value
      })
    }), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_block_editor__WEBPACK_IMPORTED_MODULE_2__.ColorPaletteControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Text', 'archivespress'),
      value: attributes.varColor,
      onChange: value => setAttributes({
        varColor: value
      })
    })), (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.PanelBody, {
      title: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)('Advanced', 'archivespress')
    }, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)(_wordpress_components__WEBPACK_IMPORTED_MODULE_3__.TextControl, {
      label: (0,_wordpress_i18n__WEBPACK_IMPORTED_MODULE_6__.__)("Additional CSS Class", "archivespress"),
      value: attributes.class,
      onChange: value => setAttributes({
        class: value
      })
    }))));
  },
  save() {
    return null;
  }
});

/***/ }),

/***/ "./src/icons.js":
/*!**********************!*\
  !*** ./src/icons.js ***!
  \**********************/
/***/ (function(__unused_webpack_module, __webpack_exports__, __webpack_require__) {

__webpack_require__.r(__webpack_exports__);
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react */ "react");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_0__);

const icons = {};
icons.dates = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  d: "M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80v352C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM176 320c0 8.836-7.162 16-16 16H96c-8.836 0-16-7.164-16-16V256c0-8.836 7.164-16 16-16h64c8.838 0 16 7.164 16 16V320zM304 320c0 8.836-7.162 16-16 16H224c-8.836 0-16-7.164-16-16V256c0-8.836 7.164-16 16-16h64c8.838 0 16 7.164 16 16V320zM432 320c0 8.836-7.162 16-16 16h-64c-8.836 0-16-7.164-16-16V256c0-8.836 7.164-16 16-16h64c8.838 0 16 7.164 16 16V320z"
}));
icons.terms = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  d: "M512 144v288c0 26.5-21.5 48-48 48h-416C21.5 480 0 458.5 0 432v-352C0 53.5 21.5 32 48 32h160l64 64h192C490.5 96 512 117.5 512 144z"
}));
icons.authors = (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("svg", {
  "aria-hidden": "true",
  xmlns: "http://www.w3.org/2000/svg",
  viewBox: "0 0 512 512"
}, (0,react__WEBPACK_IMPORTED_MODULE_0__.createElement)("path", {
  fill: "currentColor",
  d: "M464 96h-192l-64-64h-160C21.5 32 0 53.5 0 80v352C0 458.5 21.5 480 48 480h416c26.5 0 48-21.5 48-48v-288C512 117.5 490.5 96 464 96zM256 192c35.35 0 64 28.66 64 64s-28.65 64-64 64S192 291.3 192 256S220.7 192 256 192zM352 416H160c-8.836 0-16-7.164-16-16C144 373.5 165.5 352 192 352h128c26.51 0 48 21.49 48 48C368 408.8 360.8 416 352 416z"
}));
/* harmony default export */ __webpack_exports__["default"] = (icons);

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "React" ***!
  \************************/
/***/ (function(module) {

module.exports = window["React"];

/***/ }),

/***/ "@wordpress/block-editor":
/*!*************************************!*\
  !*** external ["wp","blockEditor"] ***!
  \*************************************/
/***/ (function(module) {

module.exports = window["wp"]["blockEditor"];

/***/ }),

/***/ "@wordpress/blocks":
/*!********************************!*\
  !*** external ["wp","blocks"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["blocks"];

/***/ }),

/***/ "@wordpress/components":
/*!************************************!*\
  !*** external ["wp","components"] ***!
  \************************************/
/***/ (function(module) {

module.exports = window["wp"]["components"];

/***/ }),

/***/ "@wordpress/editor":
/*!********************************!*\
  !*** external ["wp","editor"] ***!
  \********************************/
/***/ (function(module) {

module.exports = window["wp"]["editor"];

/***/ }),

/***/ "@wordpress/i18n":
/*!******************************!*\
  !*** external ["wp","i18n"] ***!
  \******************************/
/***/ (function(module) {

module.exports = window["wp"]["i18n"];

/***/ }),

/***/ "@wordpress/server-side-render":
/*!******************************************!*\
  !*** external ["wp","serverSideRender"] ***!
  \******************************************/
/***/ (function(module) {

module.exports = window["wp"]["serverSideRender"];

/***/ }),

/***/ "./src/blocks/authors/block.json":
/*!***************************************!*\
  !*** ./src/blocks/authors/block.json ***!
  \***************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"archivespress/authors","category":"archivespress","title":"Authors Archives Index","description":"Display authors archives index.","textdomain":"archivespress","version":"3.0","supports":{"customClassName":false},"attributes":{"layout":{"type":"string","enum":["basic","compact"],"default":"basic"},"postType":{"type":"string","default":"post"},"orderBy":{"type":"string","enum":["id","name","slug","email","posts"],"default":"posts"},"order":{"type":"string","enum":["desc","asc"],"default":"desc"},"class":{"type":"string","default":""},"showCounts":{"type":"boolean","default":true},"avatar":{"type":"boolean","default":true},"avatarSize":{"type":"integer","default":24,"minimum":0},"columns":{"type":"integer","default":3,"minimum":1,"maximum":6},"varFontSize":{"type":"integer","default":16,"minimal":1},"varLineHeight":{"type":"string","default":""},"varBackground":{"type":"string","default":"#000000"},"varColor":{"type":"string","default":"#FFFFFF"}},"editorScript":"archivespress-blocks-editor","editorStyle":"archivespress"}');

/***/ }),

/***/ "./src/blocks/dates/block.json":
/*!*************************************!*\
  !*** ./src/blocks/dates/block.json ***!
  \*************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"archivespress/dates","category":"archivespress","title":"Dates Archives Index","description":"Display dates archives index.","textdomain":"archivespress","version":"3.0","supports":{"customClassName":false},"attributes":{"layout":{"type":"string","enum":["basic","compact"],"default":"basic"},"postType":{"type":"string","default":"post"},"order":{"type":"string","enum":["desc","asc"],"default":"desc"},"year":{"type":"string","enum":["show","hide"],"default":"show"},"month":{"type":"string","enum":["auto","number"],"default":"auto"},"class":{"type":"string","default":""},"showYearCounts":{"type":"boolean","default":true},"showMonthCounts":{"type":"boolean","default":true},"showDayCounts":{"type":"boolean","default":false},"varFontSize":{"type":"integer","default":16,"minimal":1},"varLineHeight":{"type":"string","default":""},"varYearBackground":{"type":"string","default":"#000000"},"varYearColor":{"type":"string","default":"#FFFFFF"},"varMonthBackground":{"type":"string","default":"#000000"},"varMonthColor":{"type":"string","default":"#FFFFFF"},"varDayBackground":{"type":"string","default":"#000000"},"varDayColor":{"type":"string","default":"#FFFFFF"}},"editorScript":"archivespress-blocks-editor","editorStyle":"archivespress"}');

/***/ }),

/***/ "./src/blocks/terms/block.json":
/*!*************************************!*\
  !*** ./src/blocks/terms/block.json ***!
  \*************************************/
/***/ (function(module) {

module.exports = JSON.parse('{"$schema":"https://schemas.wp.org/trunk/block.json","apiVersion":2,"name":"archivespress/terms","category":"archivespress","title":"Terms Archives Index","description":"Display taxonomy terms archives index.","textdomain":"archivespress","version":"3.0","supports":{"customClassName":false},"attributes":{"layout":{"type":"string","enum":["basic","compact"],"default":"basic"},"taxonomy":{"type":"string","default":"category"},"postType":{"type":"string","default":"post"},"orderBy":{"type":"string","enum":["id","name","slug","posts"],"default":"posts"},"order":{"type":"string","enum":["desc","asc"],"default":"desc"},"class":{"type":"string","default":""},"showCounts":{"type":"boolean","default":true},"columns":{"type":"integer","default":3,"minimum":1,"maximum":6},"varFontSize":{"type":"integer","default":16,"minimal":1},"varLineHeight":{"type":"string","default":""},"varBackground":{"type":"string","default":"#000000"},"varColor":{"type":"string","default":"#FFFFFF"}},"editorScript":"archivespress-blocks-editor","editorStyle":"archivespress"}');

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	!function() {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = function(module) {
/******/ 			var getter = module && module.__esModule ?
/******/ 				function() { return module['default']; } :
/******/ 				function() { return module; };
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	!function() {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = function(exports, definition) {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	!function() {
/******/ 		__webpack_require__.o = function(obj, prop) { return Object.prototype.hasOwnProperty.call(obj, prop); }
/******/ 	}();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	!function() {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = function(exports) {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	}();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
!function() {
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _blocks_authors_index_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./blocks/authors/index.js */ "./src/blocks/authors/index.js");
/* harmony import */ var _blocks_dates_index_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./blocks/dates/index.js */ "./src/blocks/dates/index.js");
/* harmony import */ var _blocks_terms_index_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./blocks/terms/index.js */ "./src/blocks/terms/index.js");



}();
/******/ })()
;
//# sourceMappingURL=index.js.map