"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/explore",{

/***/ "./components/package/PackageCarousel.jsx":
/*!************************************************!*\
  !*** ./components/package/PackageCarousel.jsx ***!
  \************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PackageCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ \"./components/package/Card.jsx\");\n/* harmony import */ var _styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @/styles/Swiper.module.css */ \"./styles/Swiper.module.css\");\n/* harmony import */ var _styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(_styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/free-mode */ \"./node_modules/swiper/modules/free-mode/free-mode.min.css\");\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! next/link */ \"./node_modules/next/link.js\");\n/* harmony import */ var next_link__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(next_link__WEBPACK_IMPORTED_MODULE_6__);\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\nconst packages = [\n    1,\n    2,\n    3,\n    4,\n    5,\n    6,\n    7,\n    8,\n    9\n];\nfunction PackageCarousel(param) {\n    let { title , className , hideBtn  } = param;\n    _s();\n    const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [swiper, setSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isEnd, setIsEnd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let timer;\n    const mouseOver = (num)=>{\n        if (timer) clearTimeout(timer);\n        timer = setTimeout(()=>{\n            setPreview(num);\n            clearTimeout(timer);\n        }, [\n            1200\n        ]);\n    };\n    const mouseOut = ()=>{\n        if (timer) clearTimeout(timer);\n        setPreview(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (swiper) {\n            swiper.on(\"reachEnd\", ()=>{\n                setIsEnd(true);\n            });\n        }\n    }, [\n        swiper\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_7___default().container), \" \").concat(className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_7___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\PackageCarousel.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this),\n                    !hideBtn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)((next_link__WEBPACK_IMPORTED_MODULE_6___default()), {\n                        href: \"/AllPackage\",\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_8__.Button, {\n                            variant: \"ghost\",\n                            children: \"View All\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\PackageCarousel.jsx\",\n                            lineNumber: 48,\n                            columnNumber: 15\n                        }, this)\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\PackageCarousel.jsx\",\n                        lineNumber: 47,\n                        columnNumber: 11\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\PackageCarousel.jsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                slidesPerView: 3,\n                spaceBetween: 20,\n                freeMode: true,\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation\n                ],\n                className: \"courseCards\",\n                navigation: true,\n                onSwiper: (swiper)=>setSwiper(swiper),\n                children: packages.map((idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        style: {\n                            zIndex: preview === idx ? 2 : 1\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            index: idx,\n                            showPreview: preview === idx,\n                            mouseOver: mouseOver,\n                            mouseOut: mouseOut,\n                            transformOrigin: idx == 1 ? \"left\" : packages.length == idx ? \"right\" : \"center\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\PackageCarousel.jsx\",\n                            lineNumber: 63,\n                            columnNumber: 13\n                        }, this)\n                    }, idx, false, {\n                        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\PackageCarousel.jsx\",\n                        lineNumber: 62,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\PackageCarousel.jsx\",\n                lineNumber: 52,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\PackageCarousel.jsx\",\n        lineNumber: 43,\n        columnNumber: 5\n    }, this);\n}\n_s(PackageCarousel, \"McJg31kaZDTYoBG+xI7sm5oX6xU=\");\n_c = PackageCarousel;\nvar _c;\n$RefreshReg$(_c, \"PackageCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhY2thZ2UvUGFja2FnZUNhcm91c2VsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFtRDtBQUNBO0FBQ2Y7QUFDVjtBQUNzQjtBQUVsQjtBQUNZO0FBQ2I7QUFFN0IsTUFBTVUsV0FBVztJQUFDO0lBQUc7SUFBRztJQUFHO0lBQUc7SUFBRztJQUFHO0lBQUc7SUFBRztDQUFFO0FBRTdCLFNBQVNDLGdCQUFnQixLQUE2QixFQUFFO1FBQS9CLEVBQUVDLE1BQUssRUFBRUMsVUFBUyxFQUFFQyxRQUFPLEVBQUUsR0FBN0I7O0lBQ3RDLE1BQU0sQ0FBQ0MsU0FBU0MsV0FBVyxHQUFHZiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzNDLE1BQU0sQ0FBQ2dCLFFBQVFDLFVBQVUsR0FBR2pCLCtDQUFRQSxDQUFDLElBQUk7SUFDekMsTUFBTSxDQUFDa0IsT0FBT0MsU0FBUyxHQUFHbkIsK0NBQVFBLENBQUMsS0FBSztJQUV4QyxJQUFJb0I7SUFFSixNQUFNQyxZQUFZLENBQUNDLE1BQVE7UUFDekIsSUFBSUYsT0FBT0csYUFBYUg7UUFDeEJBLFFBQVFJLFdBQVcsSUFBTTtZQUN2QlQsV0FBV087WUFDWEMsYUFBYUg7UUFDZixHQUFHO1lBQUM7U0FBSztJQUNYO0lBRUEsTUFBTUssV0FBVyxJQUFNO1FBQ3JCLElBQUlMLE9BQU9HLGFBQWFIO1FBQ3hCTCxXQUFXLElBQUk7SUFDakI7SUFFQWQsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUllLFFBQVE7WUFDVkEsT0FBT1UsRUFBRSxDQUFDLFlBQVksSUFBTTtnQkFDMUJQLFNBQVMsSUFBSTtZQUNmO1FBQ0YsQ0FBQztJQUNILEdBQUc7UUFBQ0g7S0FBTztJQUdYLHFCQUNFLDhEQUFDVztRQUFJZixXQUFXLEdBQXVCQSxPQUFwQk4sNEVBQWdCLEVBQUMsS0FBYSxPQUFWTTs7MEJBQ3JDLDhEQUFDZTtnQkFBSWYsV0FBV04seUVBQWE7O2tDQUMzQiw4REFBQ3dCO2tDQUFJbkI7Ozs7OztvQkFDSixDQUFDRSx3QkFDQSw4REFBQ0wsa0RBQUlBO3dCQUFDdUIsTUFBSztrQ0FDUCw0RUFBQ3hCLG9EQUFNQTs0QkFBQ3lCLFNBQVE7c0NBQVE7Ozs7Ozs7Ozs7K0JBRTFCLElBQUk7Ozs7Ozs7MEJBRVYsOERBQUM5QixnREFBTUE7Z0JBQ0wrQixlQUFlO2dCQUNmQyxjQUFjO2dCQUNkQyxVQUFVLElBQUk7Z0JBQ2RDLFNBQVM7b0JBQUNoQyw4Q0FBVUE7aUJBQUM7Z0JBQ3JCUSxXQUFVO2dCQUNWeUIsWUFBWSxJQUFJO2dCQUNoQkMsVUFBVSxDQUFDdEIsU0FBV0MsVUFBVUQ7MEJBRS9CUCxTQUFTOEIsR0FBRyxDQUFDLENBQUNDLG9CQUNiLDhEQUFDckMscURBQVdBO3dCQUFXc0MsT0FBTzs0QkFBRUMsUUFBUTVCLFlBQVkwQixNQUFNLElBQUksQ0FBQzt3QkFBQztrQ0FDOUQsNEVBQUNuQyw2Q0FBSUE7NEJBQ0hzQyxPQUFPSDs0QkFDUEksYUFBYTlCLFlBQVkwQjs0QkFDekJuQixXQUFXQTs0QkFDWEksVUFBVUE7NEJBQ1ZvQixpQkFDRUwsT0FBTyxJQUFJLFNBQVMvQixTQUFTcUMsTUFBTSxJQUFJTixNQUFNLFVBQVUsUUFBUTs7Ozs7O3VCQVBuREE7Ozs7Ozs7Ozs7Ozs7Ozs7QUFlNUIsQ0FBQztHQWhFdUI5QjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9jb21wb25lbnRzL3BhY2thZ2UvUGFja2FnZUNhcm91c2VsLmpzeD9lNGMxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCBSZWFjdCwgeyB1c2VTdGF0ZSwgdXNlRWZmZWN0IH0gZnJvbSBcInJlYWN0XCI7XG5pbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuaW1wb3J0IHsgTmF2aWdhdGlvbiB9IGZyb20gXCJzd2lwZXJcIjtcbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL1N3aXBlci5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCBcInN3aXBlci9jc3MvZnJlZS1tb2RlXCI7XG5pbXBvcnQgeyBCdXR0b24gfSBmcm9tIFwiQGNoYWtyYS11aS9yZWFjdFwiO1xuaW1wb3J0IExpbmsgZnJvbSBcIm5leHQvbGlua1wiO1xuXG5jb25zdCBwYWNrYWdlcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gUGFja2FnZUNhcm91c2VsKHsgdGl0bGUsIGNsYXNzTmFtZSwgaGlkZUJ0biB9KSB7XG4gIGNvbnN0IFtwcmV2aWV3LCBzZXRQcmV2aWV3XSA9IHVzZVN0YXRlKG51bGwpO1xuICBjb25zdCBbc3dpcGVyLCBzZXRTd2lwZXJdID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtpc0VuZCwgc2V0SXNFbmRdID0gdXNlU3RhdGUoZmFsc2UpO1xuXG4gIGxldCB0aW1lcjtcblxuICBjb25zdCBtb3VzZU92ZXIgPSAobnVtKSA9PiB7XG4gICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHRpbWVyID0gc2V0VGltZW91dCgoKSA9PiB7XG4gICAgICBzZXRQcmV2aWV3KG51bSk7XG4gICAgICBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIH0sIFsxMjAwXSk7XG4gIH07XG5cbiAgY29uc3QgbW91c2VPdXQgPSAoKSA9PiB7XG4gICAgaWYgKHRpbWVyKSBjbGVhclRpbWVvdXQodGltZXIpO1xuICAgIHNldFByZXZpZXcobnVsbCk7XG4gIH07XG5cbiAgdXNlRWZmZWN0KCgpID0+IHtcbiAgICBpZiAoc3dpcGVyKSB7XG4gICAgICBzd2lwZXIub24oXCJyZWFjaEVuZFwiLCAoKSA9PiB7XG4gICAgICAgIHNldElzRW5kKHRydWUpO1xuICAgICAgfSk7XG4gICAgfVxuICB9LCBbc3dpcGVyXSk7XG5cblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2NsYXNzTmFtZX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxuICAgICAgICB7IWhpZGVCdG4gPyggXG4gICAgICAgICAgPExpbmsgaHJlZj1cIi9BbGxQYWNrYWdlXCI+XG4gICAgICAgICAgICAgIDxCdXR0b24gdmFyaWFudD1cImdob3N0XCI+VmlldyBBbGw8L0J1dHRvbj5cbiAgICAgICAgICA8L0xpbms+KVxuICAgICAgICAgIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICAgPFN3aXBlclxuICAgICAgICBzbGlkZXNQZXJWaWV3PXszfVxuICAgICAgICBzcGFjZUJldHdlZW49ezIwfVxuICAgICAgICBmcmVlTW9kZT17dHJ1ZX1cbiAgICAgICAgbW9kdWxlcz17W05hdmlnYXRpb25dfVxuICAgICAgICBjbGFzc05hbWU9XCJjb3Vyc2VDYXJkc1wiXG4gICAgICAgIG5hdmlnYXRpb249e3RydWV9XG4gICAgICAgIG9uU3dpcGVyPXsoc3dpcGVyKSA9PiBzZXRTd2lwZXIoc3dpcGVyKX1cbiAgICAgID5cbiAgICAgICAge3BhY2thZ2VzLm1hcCgoaWR4KSA9PiAoXG4gICAgICAgICAgPFN3aXBlclNsaWRlIGtleT17aWR4fSBzdHlsZT17eyB6SW5kZXg6IHByZXZpZXcgPT09IGlkeCA/IDIgOiAxIH19PlxuICAgICAgICAgICAgPENhcmRcbiAgICAgICAgICAgICAgaW5kZXg9e2lkeH1cbiAgICAgICAgICAgICAgc2hvd1ByZXZpZXc9e3ByZXZpZXcgPT09IGlkeH1cbiAgICAgICAgICAgICAgbW91c2VPdmVyPXttb3VzZU92ZXJ9XG4gICAgICAgICAgICAgIG1vdXNlT3V0PXttb3VzZU91dH1cbiAgICAgICAgICAgICAgdHJhbnNmb3JtT3JpZ2luPXtcbiAgICAgICAgICAgICAgICBpZHggPT0gMSA/IFwibGVmdFwiIDogcGFja2FnZXMubGVuZ3RoID09IGlkeCA/IFwicmlnaHRcIiA6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICApKX1cbiAgICAgIDwvU3dpcGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIk5hdmlnYXRpb24iLCJDYXJkIiwic3R5bGVzIiwiQnV0dG9uIiwiTGluayIsInBhY2thZ2VzIiwiUGFja2FnZUNhcm91c2VsIiwidGl0bGUiLCJjbGFzc05hbWUiLCJoaWRlQnRuIiwicHJldmlldyIsInNldFByZXZpZXciLCJzd2lwZXIiLCJzZXRTd2lwZXIiLCJpc0VuZCIsInNldElzRW5kIiwidGltZXIiLCJtb3VzZU92ZXIiLCJudW0iLCJjbGVhclRpbWVvdXQiLCJzZXRUaW1lb3V0IiwibW91c2VPdXQiLCJvbiIsImRpdiIsImNvbnRhaW5lciIsImhlYWRlciIsImgzIiwiaHJlZiIsInZhcmlhbnQiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiZnJlZU1vZGUiLCJtb2R1bGVzIiwibmF2aWdhdGlvbiIsIm9uU3dpcGVyIiwibWFwIiwiaWR4Iiwic3R5bGUiLCJ6SW5kZXgiLCJpbmRleCIsInNob3dQcmV2aWV3IiwidHJhbnNmb3JtT3JpZ2luIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/package/PackageCarousel.jsx\n"));

/***/ })

});