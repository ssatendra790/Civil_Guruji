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

/***/ "./components/course/CourseCarousel.jsx":
/*!**********************************************!*\
  !*** ./components/course/CourseCarousel.jsx ***!
  \**********************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ CourseCarousel; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"./node_modules/react/jsx-dev-runtime.js\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"./node_modules/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var swiper_react__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! swiper/react */ \"./node_modules/swiper/react/swiper-react.js\");\n/* harmony import */ var swiper_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! swiper/core */ \"./node_modules/swiper/swiper.esm.js\");\n/* harmony import */ var _Card__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./Card */ \"./components/course/Card.jsx\");\n/* harmony import */ var _styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! @/styles/Swiper.module.css */ \"./styles/Swiper.module.css\");\n/* harmony import */ var _styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_8__);\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! swiper/css */ \"./node_modules/swiper/swiper.min.css\");\n/* harmony import */ var swiper_css__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(swiper_css__WEBPACK_IMPORTED_MODULE_5__);\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! swiper/css/navigation */ \"./node_modules/swiper/modules/navigation/navigation.min.css\");\n/* harmony import */ var swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6___default = /*#__PURE__*/__webpack_require__.n(swiper_css_navigation__WEBPACK_IMPORTED_MODULE_6__);\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! swiper/css/free-mode */ \"./node_modules/swiper/modules/free-mode/free-mode.min.css\");\n/* harmony import */ var swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(swiper_css_free_mode__WEBPACK_IMPORTED_MODULE_7__);\n/* harmony import */ var _chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! @chakra-ui/react */ \"./node_modules/@chakra-ui/react/dist/index.mjs\");\n// import React, { useState } from \"react\";\n// import { Swiper, SwiperSlide } from \"swiper/react\";\n// import { FreeMode } from \"swiper\";\n// import Card from \"./Card\";\n// import styles from \"@/styles/Swiper.module.css\";\n// import \"swiper/css/free-mode\";\n// import { Button } from \"@chakra-ui/react\";\n// const courses = [1, 2, 3, 4, 5, 6];\n// export default function CourseCarousel({ title, className, hideBtn }) {\n//   const [preview, setPreview] = useState(null);\n//   let timer;\n//   const mouseOver = (num) => {\n//     if (timer) clearTimeout(timer);\n//     timer = setTimeout(() => {\n//       setPreview(num);\n//       clearTimeout(timer);\n//     }, [1200]);\n//   };\n//   const mouseOut = () => {\n//     if (timer) clearTimeout(timer);\n//     setPreview(null);\n//   };\n//   return (\n//     <div className={`${styles.container} ${className}`}>\n//       <div className={styles.header}>\n//         <h3>{title}</h3>\n//         {!hideBtn ? <Button variant=\"ghost\">View All</Button> : null}\n//       </div>\n//       <Swiper\n//         slidesPerView={\"auto\"}\n//         spaceBetween={20}\n//         freeMode={true}\n//         modules={[FreeMode]}\n//         className=\"courseCards\"\n//       >\n//         {courses.map((idx) => (\n//           <SwiperSlide key={idx} style={{ zIndex: preview === idx ? 2 : 1 }}>\n//             <Card\n//               index={idx}\n//               showPreview={preview === idx}\n//               mouseOver={mouseOver}\n//               mouseOut={mouseOut}\n//               transformOrigin={\n//                 idx == 1 ? \"left\" : courses.length == idx ? \"right\" : \"center\"\n//               }\n//             />\n//           </SwiperSlide>\n//         ))}\n//       </Swiper>\n//     </div>\n//   );\n// }\n\nvar _s = $RefreshSig$();\n\n\n\n\n\n\n\n\n\nswiper_core__WEBPACK_IMPORTED_MODULE_3__[\"default\"].use([\n    swiper_core__WEBPACK_IMPORTED_MODULE_3__.Navigation\n]);\nconst courses = [\n    1,\n    2,\n    3,\n    4,\n    5,\n    6,\n    7,\n    8,\n    9\n];\nfunction CourseCarousel(param) {\n    let { title , className , hideBtn  } = param;\n    _s();\n    const [preview, setPreview] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [swiper, setSwiper] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(null);\n    const [isEnd, setIsEnd] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const mouseOver = (num)=>{\n        setPreview(num);\n    };\n    const mouseOut = ()=>{\n        setPreview(null);\n    };\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        if (swiper) {\n            swiper.on(\"reachEnd\", ()=>{\n                setIsEnd(true);\n            });\n        }\n    }, [\n        swiper\n    ]);\n    const handleViewAllClick = ()=>{\n        if (swiper && !isEnd) {\n            swiper.slideNext();\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"\".concat((_styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_8___default().container), \" \").concat(className),\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: (_styles_Swiper_module_css__WEBPACK_IMPORTED_MODULE_8___default().header),\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h3\", {\n                        children: title\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\course\\\\CourseCarousel.jsx\",\n                        lineNumber: 109,\n                        columnNumber: 9\n                    }, this),\n                    !hideBtn ? /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_chakra_ui_react__WEBPACK_IMPORTED_MODULE_9__.Button, {\n                        variant: \"ghost\",\n                        onClick: handleViewAllClick,\n                        disabled: isEnd,\n                        children: \"View All\"\n                    }, void 0, false, {\n                        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\course\\\\CourseCarousel.jsx\",\n                        lineNumber: 111,\n                        columnNumber: 11\n                    }, this) : null\n                ]\n            }, void 0, true, {\n                fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\course\\\\CourseCarousel.jsx\",\n                lineNumber: 108,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.Swiper, {\n                slidesPerView: 3,\n                spaceBetween: 20,\n                navigation: true,\n                modules: [\n                    swiper_core__WEBPACK_IMPORTED_MODULE_3__.Navigation\n                ],\n                className: \"courseCards\",\n                onSwiper: (swiper)=>setSwiper(swiper),\n                children: courses.map((idx)=>/*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(swiper_react__WEBPACK_IMPORTED_MODULE_2__.SwiperSlide, {\n                        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_Card__WEBPACK_IMPORTED_MODULE_4__[\"default\"], {\n                            index: idx,\n                            showPreview: preview === idx,\n                            mouseOver: mouseOver,\n                            mouseOut: mouseOut,\n                            transformOrigin: idx === 1 ? \"left\" : idx === courses.length ? \"right\" : \"center\"\n                        }, void 0, false, {\n                            fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\course\\\\CourseCarousel.jsx\",\n                            lineNumber: 130,\n                            columnNumber: 13\n                        }, this)\n                    }, idx, false, {\n                        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\course\\\\CourseCarousel.jsx\",\n                        lineNumber: 129,\n                        columnNumber: 11\n                    }, this))\n            }, void 0, false, {\n                fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\course\\\\CourseCarousel.jsx\",\n                lineNumber: 120,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"C:\\\\Users\\\\ssate\\\\OneDrive\\\\Documents\\\\Civil Guruji Intern\\\\lxp-web-main\\\\lxp-web-main\\\\components\\\\course\\\\CourseCarousel.jsx\",\n        lineNumber: 107,\n        columnNumber: 5\n    }, this);\n}\n_s(CourseCarousel, \"McJg31kaZDTYoBG+xI7sm5oX6xU=\");\n_c = CourseCarousel;\nvar _c;\n$RefreshReg$(_c, \"CourseCarousel\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9jb21wb25lbnRzL2NvdXJzZS9Db3Vyc2VDYXJvdXNlbC5qc3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFBQSwyQ0FBMkM7QUFDM0Msc0RBQXNEO0FBQ3RELHFDQUFxQztBQUNyQyw2QkFBNkI7QUFDN0IsbURBQW1EO0FBRW5ELGlDQUFpQztBQUNqQyw2Q0FBNkM7QUFFN0Msc0NBQXNDO0FBRXRDLDBFQUEwRTtBQUMxRSxrREFBa0Q7QUFFbEQsZUFBZTtBQUVmLGlDQUFpQztBQUNqQyxzQ0FBc0M7QUFDdEMsaUNBQWlDO0FBQ2pDLHlCQUF5QjtBQUN6Qiw2QkFBNkI7QUFDN0Isa0JBQWtCO0FBQ2xCLE9BQU87QUFFUCw2QkFBNkI7QUFDN0Isc0NBQXNDO0FBQ3RDLHdCQUF3QjtBQUN4QixPQUFPO0FBRVAsYUFBYTtBQUNiLDJEQUEyRDtBQUMzRCx3Q0FBd0M7QUFDeEMsMkJBQTJCO0FBQzNCLHdFQUF3RTtBQUN4RSxlQUFlO0FBQ2YsZ0JBQWdCO0FBQ2hCLGlDQUFpQztBQUNqQyw0QkFBNEI7QUFDNUIsMEJBQTBCO0FBQzFCLCtCQUErQjtBQUMvQixrQ0FBa0M7QUFDbEMsVUFBVTtBQUNWLGtDQUFrQztBQUNsQyxnRkFBZ0Y7QUFDaEYsb0JBQW9CO0FBQ3BCLDRCQUE0QjtBQUM1Qiw4Q0FBOEM7QUFDOUMsc0NBQXNDO0FBQ3RDLG9DQUFvQztBQUNwQyxrQ0FBa0M7QUFDbEMsaUZBQWlGO0FBQ2pGLGtCQUFrQjtBQUNsQixpQkFBaUI7QUFDakIsMkJBQTJCO0FBQzNCLGNBQWM7QUFDZCxrQkFBa0I7QUFDbEIsYUFBYTtBQUNiLE9BQU87QUFDUCxJQUFJOzs7QUFHK0M7QUFDQTtBQUNFO0FBRTNCO0FBQ3NCO0FBRTVCO0FBQ1c7QUFDRDtBQUVZO0FBRTFDSyx1REFBYyxDQUFDO0lBQUNDLG1EQUFVQTtDQUFDO0FBRTNCLE1BQU1LLFVBQVU7SUFBQztJQUFHO0lBQUc7SUFBRztJQUFHO0lBQUc7SUFBRztJQUFHO0lBQUc7Q0FBRTtBQUU1QixTQUFTQyxlQUFlLEtBQTZCLEVBQUU7UUFBL0IsRUFBRUMsTUFBSyxFQUFFQyxVQUFTLEVBQUVDLFFBQU8sRUFBRSxHQUE3Qjs7SUFDckMsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdoQiwrQ0FBUUEsQ0FBQyxJQUFJO0lBQzNDLE1BQU0sQ0FBQ2lCLFFBQVFDLFVBQVUsR0FBR2xCLCtDQUFRQSxDQUFDLElBQUk7SUFDekMsTUFBTSxDQUFDbUIsT0FBT0MsU0FBUyxHQUFHcEIsK0NBQVFBLENBQUMsS0FBSztJQUV4QyxNQUFNcUIsWUFBWSxDQUFDQyxNQUFRO1FBQ3pCTixXQUFXTTtJQUNiO0lBRUEsTUFBTUMsV0FBVyxJQUFNO1FBQ3JCUCxXQUFXLElBQUk7SUFDakI7SUFFQWYsZ0RBQVNBLENBQUMsSUFBTTtRQUNkLElBQUlnQixRQUFRO1lBQ1ZBLE9BQU9PLEVBQUUsQ0FBQyxZQUFZLElBQU07Z0JBQzFCSixTQUFTLElBQUk7WUFDZjtRQUNGLENBQUM7SUFDSCxHQUFHO1FBQUNIO0tBQU87SUFFWCxNQUFNUSxxQkFBcUIsSUFBTTtRQUMvQixJQUFJUixVQUFVLENBQUNFLE9BQU87WUFDcEJGLE9BQU9TLFNBQVM7UUFDbEIsQ0FBQztJQUNIO0lBRUEscUJBQ0UsOERBQUNDO1FBQUlkLFdBQVcsR0FBdUJBLE9BQXBCTiw0RUFBZ0IsRUFBQyxLQUFhLE9BQVZNOzswQkFDckMsOERBQUNjO2dCQUFJZCxXQUFXTix5RUFBYTs7a0NBQzNCLDhEQUFDdUI7a0NBQUlsQjs7Ozs7O29CQUNKLENBQUNFLHdCQUNBLDhEQUFDTixvREFBTUE7d0JBQ0x1QixTQUFRO3dCQUNSQyxTQUFTUDt3QkFDVFEsVUFBVWQ7a0NBQ1g7Ozs7OytCQUdDLElBQUk7Ozs7Ozs7MEJBRVYsOERBQUNqQixnREFBTUE7Z0JBQ0xnQyxlQUFlO2dCQUNmQyxjQUFjO2dCQUNkQyxZQUFZLElBQUk7Z0JBQ2hCQyxTQUFTO29CQUFDaEMsbURBQVVBO2lCQUFDO2dCQUNyQlEsV0FBVTtnQkFDVnlCLFVBQVUsQ0FBQ3JCLFNBQVdDLFVBQVVEOzBCQUUvQlAsUUFBUTZCLEdBQUcsQ0FBQyxDQUFDQyxvQkFDWiw4REFBQ3JDLHFEQUFXQTtrQ0FDViw0RUFBQ0csNkNBQUlBOzRCQUNIbUMsT0FBT0Q7NEJBQ1BFLGFBQWEzQixZQUFZeUI7NEJBQ3pCbkIsV0FBV0E7NEJBQ1hFLFVBQVVBOzRCQUNWb0IsaUJBQ0VILFFBQVEsSUFBSSxTQUFTQSxRQUFROUIsUUFBUWtDLE1BQU0sR0FBRyxVQUFVLFFBQVE7Ozs7Ozt1QkFQcERKOzs7Ozs7Ozs7Ozs7Ozs7O0FBZTVCLENBQUM7R0FqRXVCN0I7S0FBQUEiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vY29tcG9uZW50cy9jb3Vyc2UvQ291cnNlQ2Fyb3VzZWwuanN4P2NlZmMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gaW1wb3J0IFJlYWN0LCB7IHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XG4vLyBpbXBvcnQgeyBTd2lwZXIsIFN3aXBlclNsaWRlIH0gZnJvbSBcInN3aXBlci9yZWFjdFwiO1xuLy8gaW1wb3J0IHsgRnJlZU1vZGUgfSBmcm9tIFwic3dpcGVyXCI7XG4vLyBpbXBvcnQgQ2FyZCBmcm9tIFwiLi9DYXJkXCI7XG4vLyBpbXBvcnQgc3R5bGVzIGZyb20gXCJAL3N0eWxlcy9Td2lwZXIubW9kdWxlLmNzc1wiO1xuXG4vLyBpbXBvcnQgXCJzd2lwZXIvY3NzL2ZyZWUtbW9kZVwiO1xuLy8gaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuLy8gY29uc3QgY291cnNlcyA9IFsxLCAyLCAzLCA0LCA1LCA2XTtcblxuLy8gZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291cnNlQ2Fyb3VzZWwoeyB0aXRsZSwgY2xhc3NOYW1lLCBoaWRlQnRuIH0pIHtcbi8vICAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XG5cbi8vICAgbGV0IHRpbWVyO1xuXG4vLyAgIGNvbnN0IG1vdXNlT3ZlciA9IChudW0pID0+IHtcbi8vICAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XG4vLyAgICAgdGltZXIgPSBzZXRUaW1lb3V0KCgpID0+IHtcbi8vICAgICAgIHNldFByZXZpZXcobnVtKTtcbi8vICAgICAgIGNsZWFyVGltZW91dCh0aW1lcik7XG4vLyAgICAgfSwgWzEyMDBdKTtcbi8vICAgfTtcblxuLy8gICBjb25zdCBtb3VzZU91dCA9ICgpID0+IHtcbi8vICAgICBpZiAodGltZXIpIGNsZWFyVGltZW91dCh0aW1lcik7XG4vLyAgICAgc2V0UHJldmlldyhudWxsKTtcbi8vICAgfTtcblxuLy8gICByZXR1cm4gKFxuLy8gICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2NsYXNzTmFtZX1gfT5cbi8vICAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbi8vICAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxuLy8gICAgICAgICB7IWhpZGVCdG4gPyA8QnV0dG9uIHZhcmlhbnQ9XCJnaG9zdFwiPlZpZXcgQWxsPC9CdXR0b24+IDogbnVsbH1cbi8vICAgICAgIDwvZGl2PlxuLy8gICAgICAgPFN3aXBlclxuLy8gICAgICAgICBzbGlkZXNQZXJWaWV3PXtcImF1dG9cIn1cbi8vICAgICAgICAgc3BhY2VCZXR3ZWVuPXsyMH1cbi8vICAgICAgICAgZnJlZU1vZGU9e3RydWV9XG4vLyAgICAgICAgIG1vZHVsZXM9e1tGcmVlTW9kZV19XG4vLyAgICAgICAgIGNsYXNzTmFtZT1cImNvdXJzZUNhcmRzXCJcbi8vICAgICAgID5cbi8vICAgICAgICAge2NvdXJzZXMubWFwKChpZHgpID0+IChcbi8vICAgICAgICAgICA8U3dpcGVyU2xpZGUga2V5PXtpZHh9IHN0eWxlPXt7IHpJbmRleDogcHJldmlldyA9PT0gaWR4ID8gMiA6IDEgfX0+XG4vLyAgICAgICAgICAgICA8Q2FyZFxuLy8gICAgICAgICAgICAgICBpbmRleD17aWR4fVxuLy8gICAgICAgICAgICAgICBzaG93UHJldmlldz17cHJldmlldyA9PT0gaWR4fVxuLy8gICAgICAgICAgICAgICBtb3VzZU92ZXI9e21vdXNlT3Zlcn1cbi8vICAgICAgICAgICAgICAgbW91c2VPdXQ9e21vdXNlT3V0fVxuLy8gICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e1xuLy8gICAgICAgICAgICAgICAgIGlkeCA9PSAxID8gXCJsZWZ0XCIgOiBjb3Vyc2VzLmxlbmd0aCA9PSBpZHggPyBcInJpZ2h0XCIgOiBcImNlbnRlclwiXG4vLyAgICAgICAgICAgICAgIH1cbi8vICAgICAgICAgICAgIC8+XG4vLyAgICAgICAgICAgPC9Td2lwZXJTbGlkZT5cbi8vICAgICAgICAgKSl9XG4vLyAgICAgICA8L1N3aXBlcj5cbi8vICAgICA8L2Rpdj5cbi8vICAgKTtcbi8vIH1cblxuXG5pbXBvcnQgUmVhY3QsIHsgdXNlU3RhdGUsIHVzZUVmZmVjdCB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IHsgU3dpcGVyLCBTd2lwZXJTbGlkZSB9IGZyb20gXCJzd2lwZXIvcmVhY3RcIjtcbmltcG9ydCBTd2lwZXJDb3JlLCB7IE5hdmlnYXRpb24gfSBmcm9tIFwic3dpcGVyL2NvcmVcIjsgXG5cbmltcG9ydCBDYXJkIGZyb20gXCIuL0NhcmRcIjtcbmltcG9ydCBzdHlsZXMgZnJvbSBcIkAvc3R5bGVzL1N3aXBlci5tb2R1bGUuY3NzXCI7XG5cbmltcG9ydCBcInN3aXBlci9jc3NcIjtcbmltcG9ydCBcInN3aXBlci9jc3MvbmF2aWdhdGlvblwiO1xuaW1wb3J0IFwic3dpcGVyL2Nzcy9mcmVlLW1vZGVcIjtcblxuaW1wb3J0IHsgQnV0dG9uIH0gZnJvbSBcIkBjaGFrcmEtdWkvcmVhY3RcIjtcblxuU3dpcGVyQ29yZS51c2UoW05hdmlnYXRpb25dKTtcblxuY29uc3QgY291cnNlcyA9IFsxLCAyLCAzLCA0LCA1LCA2LCA3LCA4LCA5XTtcblxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gQ291cnNlQ2Fyb3VzZWwoeyB0aXRsZSwgY2xhc3NOYW1lLCBoaWRlQnRuIH0pIHtcbiAgY29uc3QgW3ByZXZpZXcsIHNldFByZXZpZXddID0gdXNlU3RhdGUobnVsbCk7XG4gIGNvbnN0IFtzd2lwZXIsIHNldFN3aXBlcl0gPSB1c2VTdGF0ZShudWxsKTtcbiAgY29uc3QgW2lzRW5kLCBzZXRJc0VuZF0gPSB1c2VTdGF0ZShmYWxzZSk7XG5cbiAgY29uc3QgbW91c2VPdmVyID0gKG51bSkgPT4ge1xuICAgIHNldFByZXZpZXcobnVtKTtcbiAgfTtcblxuICBjb25zdCBtb3VzZU91dCA9ICgpID0+IHtcbiAgICBzZXRQcmV2aWV3KG51bGwpO1xuICB9O1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgaWYgKHN3aXBlcikge1xuICAgICAgc3dpcGVyLm9uKFwicmVhY2hFbmRcIiwgKCkgPT4ge1xuICAgICAgICBzZXRJc0VuZCh0cnVlKTtcbiAgICAgIH0pO1xuICAgIH1cbiAgfSwgW3N3aXBlcl0pO1xuXG4gIGNvbnN0IGhhbmRsZVZpZXdBbGxDbGljayA9ICgpID0+IHtcbiAgICBpZiAoc3dpcGVyICYmICFpc0VuZCkge1xuICAgICAgc3dpcGVyLnNsaWRlTmV4dCgpO1xuICAgIH1cbiAgfTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgY2xhc3NOYW1lPXtgJHtzdHlsZXMuY29udGFpbmVyfSAke2NsYXNzTmFtZX1gfT5cbiAgICAgIDxkaXYgY2xhc3NOYW1lPXtzdHlsZXMuaGVhZGVyfT5cbiAgICAgICAgPGgzPnt0aXRsZX08L2gzPlxuICAgICAgICB7IWhpZGVCdG4gPyAoXG4gICAgICAgICAgPEJ1dHRvblxuICAgICAgICAgICAgdmFyaWFudD1cImdob3N0XCJcbiAgICAgICAgICAgIG9uQ2xpY2s9e2hhbmRsZVZpZXdBbGxDbGlja31cbiAgICAgICAgICAgIGRpc2FibGVkPXtpc0VuZH1cbiAgICAgICAgICA+XG4gICAgICAgICAgICBWaWV3IEFsbFxuICAgICAgICAgIDwvQnV0dG9uPlxuICAgICAgICApIDogbnVsbH1cbiAgICAgIDwvZGl2PlxuICAgICAgPFN3aXBlclxuICAgICAgICBzbGlkZXNQZXJWaWV3PXszfVxuICAgICAgICBzcGFjZUJldHdlZW49ezIwfVxuICAgICAgICBuYXZpZ2F0aW9uPXt0cnVlfVxuICAgICAgICBtb2R1bGVzPXtbTmF2aWdhdGlvbl19XG4gICAgICAgIGNsYXNzTmFtZT1cImNvdXJzZUNhcmRzXCJcbiAgICAgICAgb25Td2lwZXI9eyhzd2lwZXIpID0+IHNldFN3aXBlcihzd2lwZXIpfVxuICAgICAgPlxuICAgICAgICB7Y291cnNlcy5tYXAoKGlkeCkgPT4gKFxuICAgICAgICAgIDxTd2lwZXJTbGlkZSBrZXk9e2lkeH0+XG4gICAgICAgICAgICA8Q2FyZFxuICAgICAgICAgICAgICBpbmRleD17aWR4fVxuICAgICAgICAgICAgICBzaG93UHJldmlldz17cHJldmlldyA9PT0gaWR4fVxuICAgICAgICAgICAgICBtb3VzZU92ZXI9e21vdXNlT3Zlcn1cbiAgICAgICAgICAgICAgbW91c2VPdXQ9e21vdXNlT3V0fVxuICAgICAgICAgICAgICB0cmFuc2Zvcm1PcmlnaW49e1xuICAgICAgICAgICAgICAgIGlkeCA9PT0gMSA/IFwibGVmdFwiIDogaWR4ID09PSBjb3Vyc2VzLmxlbmd0aCA/IFwicmlnaHRcIiA6IFwiY2VudGVyXCJcbiAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgLz5cbiAgICAgICAgICA8L1N3aXBlclNsaWRlPlxuICAgICAgICApKX1cbiAgICAgIDwvU3dpcGVyPlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlU3RhdGUiLCJ1c2VFZmZlY3QiLCJTd2lwZXIiLCJTd2lwZXJTbGlkZSIsIlN3aXBlckNvcmUiLCJOYXZpZ2F0aW9uIiwiQ2FyZCIsInN0eWxlcyIsIkJ1dHRvbiIsInVzZSIsImNvdXJzZXMiLCJDb3Vyc2VDYXJvdXNlbCIsInRpdGxlIiwiY2xhc3NOYW1lIiwiaGlkZUJ0biIsInByZXZpZXciLCJzZXRQcmV2aWV3Iiwic3dpcGVyIiwic2V0U3dpcGVyIiwiaXNFbmQiLCJzZXRJc0VuZCIsIm1vdXNlT3ZlciIsIm51bSIsIm1vdXNlT3V0Iiwib24iLCJoYW5kbGVWaWV3QWxsQ2xpY2siLCJzbGlkZU5leHQiLCJkaXYiLCJjb250YWluZXIiLCJoZWFkZXIiLCJoMyIsInZhcmlhbnQiLCJvbkNsaWNrIiwiZGlzYWJsZWQiLCJzbGlkZXNQZXJWaWV3Iiwic3BhY2VCZXR3ZWVuIiwibmF2aWdhdGlvbiIsIm1vZHVsZXMiLCJvblN3aXBlciIsIm1hcCIsImlkeCIsImluZGV4Iiwic2hvd1ByZXZpZXciLCJ0cmFuc2Zvcm1PcmlnaW4iLCJsZW5ndGgiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./components/course/CourseCarousel.jsx\n"));

/***/ })

});