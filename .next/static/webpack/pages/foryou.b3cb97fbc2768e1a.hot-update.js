"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/foryou",{

/***/ "./components/package/ForyouCarousel.jsx":
/*!***********************************************!*\
  !*** ./components/package/ForyouCarousel.jsx ***!
  \***********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ ForyouCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./Card */ \"./components/package/Card.jsx\");\n/* harmony import */ var _styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/styles/Swiper.module.css */ \"./styles/Swiper.module.css\");\n/* harmony import */ var _styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_3__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\nconst packages = [\n    1,\n    2,\n    3,\n    4,\n    5,\n    6\n];\nfunction ForyouCarousel(param) {\n    let { title , className , hideBtn  } = param;\n    _s();\n    const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const handleMouseOver = (num)=>{\n        setPreview(num);\n    };\n    const handleMouseOut = ()=>{\n        setPreview(null);\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_3___default().container), \" \").concat(className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_3___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\ForyouCarousel.jsx\",\n                        lineNumber: 22,\n                        columnNumber: 9\n                    }, this),\n                    !hideBtn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_4__.Button, {\n                        variant: \"ghost\",\n                        children: \"View All\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\ForyouCarousel.jsx\",\n                        lineNumber: 23,\n                        columnNumber: 21\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\ForyouCarousel.jsx\",\n                lineNumber: 21,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"courseCards\",\n                children: packages.map((idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                        className: \"package-card\",\n                        onMouseOver: ()=>handleMouseOver(idx),\n                        onMouseOut: handleMouseOut,\n                        style: {\n                            zIndex: preview === idx ? 2 : 1,\n                            display: \"inline-block\",\n                            marginRight: \"10px\"\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                            index: idx,\n                            showPreview: preview === idx,\n                            transformOrigin: idx === 1 ? \"left\" : packages.length === idx ? \"right\" : \"center\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\ForyouCarousel.jsx\",\n                            lineNumber: 38,\n                            columnNumber: 13\n                        }, this)\n                    }, idx, false, {\n                        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\ForyouCarousel.jsx\",\n                        lineNumber: 27,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\ForyouCarousel.jsx\",\n                lineNumber: 25,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\ForyouCarousel.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, this);\n}\n_s(ForyouCarousel, \"t8Nng1ldVKjrjHlYd43cRRwCnEU=\");\n_c = ForyouCarousel;\nvar _c;\n$RefreshReg$(_c, \"ForyouCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhY2thZ2UvRm9yeW91Q2Fyb3VzZWwuanN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7Ozs7O0FBQXdDO0FBQ2Q7QUFDc0I7QUFDTjtBQUUxQyxNQUFNSyxXQUFXO0lBQUM7SUFBRztJQUFHO0lBQUc7SUFBRztJQUFHO0NBQUU7QUFFcEIsU0FBU0MsZUFBZSxLQUE2QixFQUFFO1FBQS9CLEVBQUVDLE1BQUssRUFBRUMsVUFBUyxFQUFFQyxRQUFPLEVBQUUsR0FBN0I7O0lBQ3JDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHViwrQ0FBUUEsQ0FBQyxJQUFJO0lBRTNDLE1BQU1XLGtCQUFrQixDQUFDQyxNQUFRO1FBQy9CRixXQUFXRTtJQUNiO0lBRUEsTUFBTUMsaUJBQWlCLElBQU07UUFDM0JILFdBQVcsSUFBSTtJQUNqQjtJQUVBLHFCQUNFLDhEQUFDSTtRQUFJUCxXQUFXLEdBQXVCQSxPQUFwQkwsNEVBQWdCLEVBQUMsS0FBYSxPQUFWSzs7MEJBQ3JDLDhEQUFDTztnQkFBSVAsV0FBV0wseUVBQWE7O2tDQUMzQiw4REFBQ2U7a0NBQUlYOzs7Ozs7b0JBQ0osQ0FBQ0Usd0JBQVUsOERBQUNMLG9EQUFNQTt3QkFBQ2UsU0FBUTtrQ0FBUTs7Ozs7K0JBQW9CLElBQUk7Ozs7Ozs7MEJBRTlELDhEQUFDSjtnQkFBSVAsV0FBVTswQkFDWkgsU0FBU2UsR0FBRyxDQUFDLENBQUNDLG9CQUNiLDhEQUFDTjt3QkFFQ1AsV0FBVTt3QkFDVmMsYUFBYSxJQUFNVixnQkFBZ0JTO3dCQUNuQ0UsWUFBWVQ7d0JBQ1pVLE9BQU87NEJBQ0xDLFFBQVFmLFlBQVlXLE1BQU0sSUFBSSxDQUFDOzRCQUMvQkssU0FBUzs0QkFDVEMsYUFBYTt3QkFDZjtrQ0FFQSw0RUFBQ3pCLDZDQUFJQTs0QkFDSDBCLE9BQU9QOzRCQUNQUSxhQUFhbkIsWUFBWVc7NEJBQ3pCUyxpQkFDRVQsUUFBUSxJQUFJLFNBQVNoQixTQUFTMEIsTUFBTSxLQUFLVixNQUFNLFVBQVUsUUFBUTs7Ozs7O3VCQWRoRUE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFzQmpCLENBQUM7R0ExQ3VCZjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhY2thZ2UvRm9yeW91Q2Fyb3VzZWwuanN4PzczN2IiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcclxuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvU3dpcGVyLm1vZHVsZS5jc3NcIjtcclxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcclxuXHJcbmNvbnN0IHBhY2thZ2VzID0gWzEsIDIsIDMsIDQsIDUsIDZdO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gRm9yeW91Q2Fyb3VzZWwoeyB0aXRsZSwgY2xhc3NOYW1lLCBoaWRlQnRuIH0pIHtcclxuICBjb25zdCBbcHJldmlldywgc2V0UHJldmlld10gPSB1c2VTdGF0ZShudWxsKTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTW91c2VPdmVyID0gKG51bSkgPT4ge1xyXG4gICAgc2V0UHJldmlldyhudW0pO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGhhbmRsZU1vdXNlT3V0ID0gKCkgPT4ge1xyXG4gICAgc2V0UHJldmlldyhudWxsKTtcclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7Y2xhc3NOYW1lfWB9PlxyXG4gICAgICA8ZGl2IGNsYXNzTmFtZT17c3R5bGVzLmhlYWRlcn0+XHJcbiAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxyXG4gICAgICAgIHshaGlkZUJ0biA/IDxCdXR0b24gdmFyaWFudD1cImdob3N0XCI+VmlldyBBbGw8L0J1dHRvbj4gOiBudWxsfVxyXG4gICAgICA8L2Rpdj5cclxuICAgICAgPGRpdiBjbGFzc05hbWU9XCJjb3Vyc2VDYXJkc1wiPlxyXG4gICAgICAgIHtwYWNrYWdlcy5tYXAoKGlkeCkgPT4gKFxyXG4gICAgICAgICAgPGRpdlxyXG4gICAgICAgICAgICBrZXk9e2lkeH1cclxuICAgICAgICAgICAgY2xhc3NOYW1lPVwicGFja2FnZS1jYXJkXCJcclxuICAgICAgICAgICAgb25Nb3VzZU92ZXI9eygpID0+IGhhbmRsZU1vdXNlT3ZlcihpZHgpfVxyXG4gICAgICAgICAgICBvbk1vdXNlT3V0PXtoYW5kbGVNb3VzZU91dH1cclxuICAgICAgICAgICAgc3R5bGU9e3tcclxuICAgICAgICAgICAgICB6SW5kZXg6IHByZXZpZXcgPT09IGlkeCA/IDIgOiAxLFxyXG4gICAgICAgICAgICAgIGRpc3BsYXk6IFwiaW5saW5lLWJsb2NrXCIsIC8vIERpc3BsYXkgY2FyZHMgaW5saW5lXHJcbiAgICAgICAgICAgICAgbWFyZ2luUmlnaHQ6IFwiMTBweFwiLCAvLyBBZGQgbWFyZ2luIGJldHdlZW4gY2FyZHNcclxuICAgICAgICAgICAgfX1cclxuICAgICAgICAgID5cclxuICAgICAgICAgICAgPENhcmRcclxuICAgICAgICAgICAgICBpbmRleD17aWR4fVxyXG4gICAgICAgICAgICAgIHNob3dQcmV2aWV3PXtwcmV2aWV3ID09PSBpZHh9XHJcbiAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXtcclxuICAgICAgICAgICAgICAgIGlkeCA9PT0gMSA/IFwibGVmdFwiIDogcGFja2FnZXMubGVuZ3RoID09PSBpZHggPyBcInJpZ2h0XCIgOiBcImNlbnRlclwiXHJcbiAgICAgICAgICAgICAgfVxyXG4gICAgICAgICAgICAvPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgKSl9XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsIkNhcmQiLCJzdHlsZXMiLCJCdXR0b24iLCJwYWNrYWdlcyIsIkZvcnlvdUNhcm91c2VsIiwidGl0bGUiLCJjbGFzc05hbWUiLCJoaWRlQnRuIiwicHJldmlldyIsInNldFByZXZpZXciLCJoYW5kbGVNb3VzZU92ZXIiLCJudW0iLCJoYW5kbGVNb3VzZU91dCIsImRpdiIsImNvbnRhaW5lciIsImhlYWRlciIsImgzIiwidmFyaWFudCIsIm1hcCIsImlkeCIsIm9uTW91c2VPdmVyIiwib25Nb3VzZU91dCIsInN0eWxlIiwiekluZGV4IiwiZGlzcGxheSIsIm1hcmdpblJpZ2h0IiwiaW5kZXgiLCJzaG93UHJldmlldyIsInRyYW5zZm9ybU9yaWdpbiIsImxlbmd0aCJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./components/package/ForyouCarousel.jsx\n"));

/***/ })

});