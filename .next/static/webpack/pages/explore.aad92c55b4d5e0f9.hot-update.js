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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ PackageCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ \"./components/package/Card.jsx\");\n/* harmony import */ var _styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @/styles/Swiper.module.css */ \"./styles/Swiper.module.css\");\n/* harmony import */ var _styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(_styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css/free-mode */ \"./node_modules/swiper/modules/free-mode/free-mode.min.css\");\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\nconst packages = [\n    1,\n    2,\n    3,\n    4,\n    5,\n    6,\n    7,\n    8,\n    9\n];\nfunction PackageCarousel(param) {\n    let { title , className , hideBtn  } = param;\n    _s();\n    const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [swiper, setSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isEnd, setIsEnd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    let timer;\n    const mouseOver = (num)=>{\n        if (timer) clearTimeout(timer);\n        timer = setTimeout(()=>{\n            setPreview(num);\n            clearTimeout(timer);\n        }, [\n            1200\n        ]);\n    };\n    const mouseOut = ()=>{\n        if (timer) clearTimeout(timer);\n        setPreview(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (swiper) {\n            swiper.on(\"reachEnd\", ()=>{\n                setIsEnd(true);\n            });\n        }\n    }, [\n        swiper\n    ]);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_6___default().container), \" \").concat(className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_6___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\PackageCarousel.jsx\",\n                        lineNumber: 44,\n                        columnNumber: 9\n                    }, this),\n                    !hideBtn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_7__.Button, {\n                        variant: \"ghost\",\n                        children: \"View All\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\PackageCarousel.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 21\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\PackageCarousel.jsx\",\n                lineNumber: 43,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                slidesPerView: 3,\n                spaceBetween: 20,\n                freeMode: true,\n                modules: [\n                    swiper__WEBPACK_IMPORTED_MODULE_3__.Navigation\n                ],\n                className: \"courseCards\",\n                navigation: true,\n                onSwiper: (swiper)=>setSwiper(swiper),\n                children: packages.map((idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        style: {\n                            zIndex: preview === idx ? 2 : 1\n                        },\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            index: idx,\n                            showPreview: preview === idx,\n                            mouseOver: mouseOver,\n                            mouseOut: mouseOut,\n                            transformOrigin: idx == 1 ? \"left\" : packages.length == idx ? \"right\" : \"center\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\PackageCarousel.jsx\",\n                            lineNumber: 58,\n                            columnNumber: 13\n                        }, this)\n                    }, idx, false, {\n                        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\PackageCarousel.jsx\",\n                        lineNumber: 57,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\PackageCarousel.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\package\\\\PackageCarousel.jsx\",\n        lineNumber: 42,\n        columnNumber: 5\n    }, this);\n}\n_s(PackageCarousel, \"McJg31kaZDTYoBG+xI7sm5oX6xU=\");\n_c = PackageCarousel;\nvar _c;\n$RefreshReg$(_c, \"PackageCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL3BhY2thZ2UvUGFja2FnZUNhcm91c2VsLmpzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBbUQ7QUFDQTtBQUNmO0FBQ1Y7QUFDc0I7QUFFbEI7QUFDWTtBQUUxQyxNQUFNUyxXQUFXO0lBQUM7SUFBRztJQUFHO0lBQUc7SUFBRztJQUFHO0lBQUc7SUFBRztJQUFHO0NBQUU7QUFFN0IsU0FBU0MsZ0JBQWdCLEtBQTZCLEVBQUU7UUFBL0IsRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUVDLFFBQU8sRUFBRSxHQUE3Qjs7SUFDdEMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdkLCtDQUFRQSxDQUFDLElBQUk7SUFDM0MsTUFBTSxDQUFDZSxRQUFRQyxVQUFVLEdBQUdoQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQ3pDLE1BQU0sQ0FBQ2lCLE9BQU9DLFNBQVMsR0FBR2xCLCtDQUFRQSxDQUFDLEtBQUs7SUFFeEMsSUFBSW1CO0lBRUosTUFBTUMsWUFBWSxDQUFDQyxNQUFRO1FBQ3pCLElBQUlGLE9BQU9HLGFBQWFIO1FBQ3hCQSxRQUFRSSxXQUFXLElBQU07WUFDdkJULFdBQVdPO1lBQ1hDLGFBQWFIO1FBQ2YsR0FBRztZQUFDO1NBQUs7SUFDWDtJQUVBLE1BQU1LLFdBQVcsSUFBTTtRQUNyQixJQUFJTCxPQUFPRyxhQUFhSDtRQUN4QkwsV0FBVyxJQUFJO0lBQ2pCO0lBRUFiLGdEQUFTQSxDQUFDLElBQU07UUFDZCxJQUFJYyxRQUFRO1lBQ1ZBLE9BQU9VLEVBQUUsQ0FBQyxZQUFZLElBQU07Z0JBQzFCUCxTQUFTLElBQUk7WUFDZjtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNIO0tBQU87SUFHWCxxQkFDRSw4REFBQ1c7UUFBSWYsV0FBVyxHQUF1QkEsT0FBcEJMLDRFQUFnQixFQUFDLEtBQWEsT0FBVks7OzBCQUNyQyw4REFBQ2U7Z0JBQUlmLFdBQVdMLHlFQUFhOztrQ0FDM0IsOERBQUN1QjtrQ0FBSW5COzs7Ozs7b0JBQ0osQ0FBQ0Usd0JBQVUsOERBQUNMLG9EQUFNQTt3QkFBQ3VCLFNBQVE7a0NBQVE7Ozs7OytCQUFvQixJQUFJOzs7Ozs7OzBCQUU5RCw4REFBQzVCLGdEQUFNQTtnQkFDTDZCLGVBQWU7Z0JBQ2ZDLGNBQWM7Z0JBQ2RDLFVBQVUsSUFBSTtnQkFDZEMsU0FBUztvQkFBQzlCLDhDQUFVQTtpQkFBQztnQkFDckJPLFdBQVU7Z0JBQ1Z3QixZQUFZLElBQUk7Z0JBQ2hCQyxVQUFVLENBQUNyQixTQUFXQyxVQUFVRDswQkFFL0JQLFNBQVM2QixHQUFHLENBQUMsQ0FBQ0Msb0JBQ2IsOERBQUNuQyxxREFBV0E7d0JBQVdvQyxPQUFPOzRCQUFFQyxRQUFRM0IsWUFBWXlCLE1BQU0sSUFBSSxDQUFDO3dCQUFDO2tDQUM5RCw0RUFBQ2pDLDZDQUFJQTs0QkFDSG9DLE9BQU9IOzRCQUNQSSxhQUFhN0IsWUFBWXlCOzRCQUN6QmxCLFdBQVdBOzRCQUNYSSxVQUFVQTs0QkFDVm1CLGlCQUNFTCxPQUFPLElBQUksU0FBUzlCLFNBQVNvQyxNQUFNLElBQUlOLE1BQU0sVUFBVSxRQUFROzs7Ozs7dUJBUG5EQTs7Ozs7Ozs7Ozs7Ozs7OztBQWU1QixDQUFDO0dBNUR1QjdCO0tBQUFBIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2NvbXBvbmVudHMvcGFja2FnZS9QYWNrYWdlQ2Fyb3VzZWwuanN4P2U0YzEiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlLCB1c2VFZmZlY3QgfSBmcm9tIFwicmVhY3RcIjtcbmltcG9ydCB7IFN3aXBlciwgU3dpcGVyU2xpZGUgfSBmcm9tIFwic3dpcGVyL3JlYWN0XCI7XG5pbXBvcnQgeyBOYXZpZ2F0aW9uIH0gZnJvbSBcInN3aXBlclwiO1xuaW1wb3J0IENhcmQgZnJvbSBcIi4vQ2FyZFwiO1xuaW1wb3J0IHN0eWxlcyBmcm9tIFwiQC9zdHlsZXMvU3dpcGVyLm1vZHVsZS5jc3NcIjtcblxuaW1wb3J0IFwic3dpcGVyL2Nzcy9mcmVlLW1vZGVcIjtcbmltcG9ydCB7IEJ1dHRvbiB9IGZyb20gXCJAY2hha3JhLXVpL3JlYWN0XCI7XG5cbmNvbnN0IHBhY2thZ2VzID0gWzEsIDIsIDMsIDQsIDUsIDYsIDcsIDgsIDldO1xuXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBQYWNrYWdlQ2Fyb3VzZWwoeyB0aXRsZSwgY2xhc3NOYW1lLCBoaWRlQnRuIH0pIHtcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzd2lwZXIsIHNldFN3aXBlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzRW5kLCBzZXRJc0VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgbGV0IHRpbWVyO1xuXG4gIGNvbnN0IG1vdXNlT3ZlciA9IChudW0pID0+IHtcbiAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbiAgICAgIHNldFByZXZpZXcobnVtKTtcbiAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgfSwgWzEyMDBdKTtcbiAgfTtcblxuICBjb25zdCBtb3VzZU91dCA9ICgpID0+IHtcbiAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XG4gICAgc2V0UHJldmlldyhudWxsKTtcbiAgfTtcblxuICB1c2VFZmZlY3QoKCkgPT4ge1xuICAgIGlmIChzd2lwZXIpIHtcbiAgICAgIHN3aXBlci5vbihcInJlYWNoRW5kXCIsICgpID0+IHtcbiAgICAgICAgc2V0SXNFbmQodHJ1ZSk7XG4gICAgICB9KTtcbiAgICB9XG4gIH0sIFtzd2lwZXJdKTtcblxuXG4gIHJldHVybiAoXG4gICAgPGRpdiBjbGFzc05hbWU9e2Ake3N0eWxlcy5jb250YWluZXJ9ICR7Y2xhc3NOYW1lfWB9PlxuICAgICAgPGRpdiBjbGFzc05hbWU9e3N0eWxlcy5oZWFkZXJ9PlxuICAgICAgICA8aDM+e3RpdGxlfTwvaDM+XG4gICAgICAgIHshaGlkZUJ0biA/IDxCdXR0b24gdmFyaWFudD1cImdob3N0XCI+VmlldyBBbGw8L0J1dHRvbj4gOiBudWxsfVxuICAgICAgPC9kaXY+XG4gICAgICA8U3dpcGVyXG4gICAgICAgIHNsaWRlc1BlclZpZXc9ezN9XG4gICAgICAgIHNwYWNlQmV0d2Vlbj17MjB9XG4gICAgICAgIGZyZWVNb2RlPXt0cnVlfVxuICAgICAgICBtb2R1bGVzPXtbTmF2aWdhdGlvbl19XG4gICAgICAgIGNsYXNzTmFtZT1cImNvdXJzZUNhcmRzXCJcbiAgICAgICAgbmF2aWdhdGlvbj17dHJ1ZX1cbiAgICAgICAgb25Td2lwZXI9eyhzd2lwZXIpID0+IHNldFN3aXBlcihzd2lwZXIpfVxuICAgICAgPlxuICAgICAgICB7cGFja2FnZXMubWFwKChpZHgpID0+IChcbiAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpZHh9IHN0eWxlPXt7IHpJbmRleDogcHJldmlldyA9PT0gaWR4ID8gMiA6IDEgfX0+XG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBpbmRleD17aWR4fVxuICAgICAgICAgICAgICBzaG93UHJldmlldz17cHJldmlldyA9PT0gaWR4fVxuICAgICAgICAgICAgICBtb3VzZU92ZXI9e21vdXNlT3Zlcn1cbiAgICAgICAgICAgICAgbW91c2VPdXQ9e21vdXNlT3V0fVxuICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e1xuICAgICAgICAgICAgICAgIGlkeCA9PSAxID8gXCJsZWZ0XCIgOiBwYWNrYWdlcy5sZW5ndGggPT0gaWR4ID8gXCJyaWdodFwiIDogXCJjZW50ZXJcIlxuICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAvPlxuICAgICAgICAgIDwvU3dpcGVyU2xpZGU+XG4gICAgICAgICkpfVxuICAgICAgPC9Td2lwZXI+XG4gICAgPC9kaXY+XG4gICk7XG59XG4iXSwibmFtZXMiOlsiUmVhY3QiLCJ1c2VTdGF0ZSIsInVzZUVmZmVjdCIsIlN3aXBlciIsIlN3aXBlclNsaWRlIiwiTmF2aWdhdGlvbiIsIkNhcmQiLCJzdHlsZXMiLCJCdXR0b24iLCJwYWNrYWdlcyIsIlBhY2thZ2VDYXJvdXNlbCIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaGlkZUJ0biIsInByZXZpZXciLCJzZXRQcmV2aWV3Iiwic3dpcGVyIiwic2V0U3dpcGVyIiwiaXNFbmQiLCJzZXRJc0VuZCIsInRpbWVyIiwibW91c2VPdmVyIiwibnVtIiwiY2xlYXJUaW1lb3V0Iiwic2V0VGltZW91dCIsIm1vdXNlT3V0Iiwib24iLCJkaXYiLCJjb250YWluZXIiLCJoZWFkZXIiLCJoMyIsInZhcmlhbnQiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwiZnJlZU1vZGUiLCJtb2R1bGVzIiwibmF2aWdhdGlvbiIsIm9uU3dpcGVyIiwibWFwIiwiaWR4Iiwic3R5bGUiLCJ6SW5kZXgiLCJpbmRleCIsInNob3dQcmV2aWV3IiwidHJhbnNmb3JtT3JpZ2luIiwibGVuZ3RoIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./components/package/PackageCarousel.jsx\n"));

/***/ })

});