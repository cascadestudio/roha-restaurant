"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/page",{

/***/ "(app-pages-browser)/./app/components/Hero.tsx":
/*!*********************************!*\
  !*** ./app/components/Hero.tsx ***!
  \*********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Hero; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var next_image__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! next/image */ \"(app-pages-browser)/./node_modules/next/dist/api/image.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nfunction Hero() {\n    _s();\n    const [offsetY, setOffsetY] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(0);\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        let ticking = false;\n        const handleScroll = ()=>{\n            if (!ticking) {\n                requestAnimationFrame(()=>{\n                    setOffsetY(window.scrollY);\n                    ticking = false;\n                });\n                ticking = true;\n            }\n        };\n        window.addEventListener(\"scroll\", handleScroll);\n        return ()=>{\n            window.removeEventListener(\"scroll\", handleScroll);\n        };\n    }, []);\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        id: \"home\",\n        className: \"relative h-screen overflow-hidden\",\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0\",\n                style: {\n                    transform: \"translateY(\".concat(offsetY * 0.5, \"px)\")\n                },\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(next_image__WEBPACK_IMPORTED_MODULE_2__[\"default\"], {\n                    src: \"https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&w=2940&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D\",\n                    alt: \"Int\\xe9rieur du restaurant Roha - Salle moderne avec tables en bois et chaises noires\",\n                    fill: true,\n                    style: {\n                        objectFit: \"cover\"\n                    },\n                    quality: 100\n                }, void 0, false, {\n                    fileName: \"/Users/klemo/Code/roha-restaurant/app/components/Hero.tsx\",\n                    lineNumber: 36,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klemo/Code/roha-restaurant/app/components/Hero.tsx\",\n                lineNumber: 29,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n                className: \"absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center text-[#4A2511]\",\n                children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"h1\", {\n                    className: \"text-[#FDF6E9] text-2xl md:text-4xl font-bold mb-4 text-center px-4 mx-auto\",\n                    children: \"Un voyage entre \\xc9thiopie et Europe\"\n                }, void 0, false, {\n                    fileName: \"/Users/klemo/Code/roha-restaurant/app/components/Hero.tsx\",\n                    lineNumber: 45,\n                    columnNumber: 9\n                }, this)\n            }, void 0, false, {\n                fileName: \"/Users/klemo/Code/roha-restaurant/app/components/Hero.tsx\",\n                lineNumber: 44,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"/Users/klemo/Code/roha-restaurant/app/components/Hero.tsx\",\n        lineNumber: 28,\n        columnNumber: 5\n    }, this);\n}\n_s(Hero, \"ADv8zueSK0//MtoqtV8DPhOuLUQ=\");\n_c = Hero;\nvar _c;\n$RefreshReg$(_c, \"Hero\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL2FwcC9jb21wb25lbnRzL0hlcm8udHN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7QUFDNEM7QUFDYjtBQUVoQixTQUFTRzs7SUFDdEIsTUFBTSxDQUFDQyxTQUFTQyxXQUFXLEdBQUdKLCtDQUFRQSxDQUFDO0lBRXZDRCxnREFBU0EsQ0FBQztRQUNSLElBQUlNLFVBQVU7UUFFZCxNQUFNQyxlQUFlO1lBQ25CLElBQUksQ0FBQ0QsU0FBUztnQkFDWkUsc0JBQXNCO29CQUNwQkgsV0FBV0ksT0FBT0MsT0FBTztvQkFDekJKLFVBQVU7Z0JBQ1o7Z0JBQ0FBLFVBQVU7WUFDWjtRQUNGO1FBRUFHLE9BQU9FLGdCQUFnQixDQUFDLFVBQVVKO1FBQ2xDLE9BQU87WUFDTEUsT0FBT0csbUJBQW1CLENBQUMsVUFBVUw7UUFDdkM7SUFDRixHQUFHLEVBQUU7SUFFTCxxQkFDRSw4REFBQ007UUFBSUMsSUFBRztRQUFPQyxXQUFVOzswQkFDdkIsOERBQUNGO2dCQUNDRSxXQUFVO2dCQUNWQyxPQUFPO29CQUNMQyxXQUFXLGNBQTRCLE9BQWRiLFVBQVUsS0FBSTtnQkFFekM7MEJBRUEsNEVBQUNGLGtEQUFLQTtvQkFDSmdCLEtBQUk7b0JBQ0pDLEtBQUk7b0JBQ0pDLElBQUk7b0JBQ0pKLE9BQU87d0JBQUVLLFdBQVc7b0JBQVE7b0JBQzVCQyxTQUFTOzs7Ozs7Ozs7OzswQkFHYiw4REFBQ1Q7Z0JBQUlFLFdBQVU7MEJBQ2IsNEVBQUNRO29CQUFHUixXQUFVOzhCQUE4RTs7Ozs7Ozs7Ozs7Ozs7Ozs7QUFNcEc7R0E5Q3dCWjtLQUFBQSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9hcHAvY29tcG9uZW50cy9IZXJvLnRzeD8wMzE1Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xuaW1wb3J0IHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xuaW1wb3J0IEltYWdlIGZyb20gXCJuZXh0L2ltYWdlXCI7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhlcm8oKSB7XG4gIGNvbnN0IFtvZmZzZXRZLCBzZXRPZmZzZXRZXSA9IHVzZVN0YXRlKDApO1xuXG4gIHVzZUVmZmVjdCgoKSA9PiB7XG4gICAgbGV0IHRpY2tpbmcgPSBmYWxzZTtcblxuICAgIGNvbnN0IGhhbmRsZVNjcm9sbCA9ICgpID0+IHtcbiAgICAgIGlmICghdGlja2luZykge1xuICAgICAgICByZXF1ZXN0QW5pbWF0aW9uRnJhbWUoKCkgPT4ge1xuICAgICAgICAgIHNldE9mZnNldFkod2luZG93LnNjcm9sbFkpO1xuICAgICAgICAgIHRpY2tpbmcgPSBmYWxzZTtcbiAgICAgICAgfSk7XG4gICAgICAgIHRpY2tpbmcgPSB0cnVlO1xuICAgICAgfVxuICAgIH07XG5cbiAgICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIHJldHVybiAoKSA9PiB7XG4gICAgICB3aW5kb3cucmVtb3ZlRXZlbnRMaXN0ZW5lcihcInNjcm9sbFwiLCBoYW5kbGVTY3JvbGwpO1xuICAgIH07XG4gIH0sIFtdKTtcblxuICByZXR1cm4gKFxuICAgIDxkaXYgaWQ9XCJob21lXCIgY2xhc3NOYW1lPVwicmVsYXRpdmUgaC1zY3JlZW4gb3ZlcmZsb3ctaGlkZGVuXCI+XG4gICAgICA8ZGl2XG4gICAgICAgIGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTBcIlxuICAgICAgICBzdHlsZT17e1xuICAgICAgICAgIHRyYW5zZm9ybTogYHRyYW5zbGF0ZVkoJHtvZmZzZXRZICogMC41fXB4KWAsXG4gICAgICAgICAgLy90cmFuc2l0aW9uOiBcInRyYW5zZm9ybSAwLjFzIGxpbmVhclwiLFxuICAgICAgICB9fVxuICAgICAgPlxuICAgICAgICA8SW1hZ2VcbiAgICAgICAgICBzcmM9XCJodHRwczovL2ltYWdlcy51bnNwbGFzaC5jb20vcGhvdG8tMTUxNzI0ODEzNTQ2Ny00YzdlZGNhZDM0YzQ/cT04MCZ3PTI5NDAmYXV0bz1mb3JtYXQmZml0PWNyb3AmaXhsaWI9cmItNC4wLjMmaXhpZD1NM3d4TWpBM2ZEQjhNSHh3YUc5MGJ5MXdZV2RsZkh4OGZHVnVmREI4Zkh4OGZBJTNEJTNEXCJcbiAgICAgICAgICBhbHQ9XCJJbnTDqXJpZXVyIGR1IHJlc3RhdXJhbnQgUm9oYSAtIFNhbGxlIG1vZGVybmUgYXZlYyB0YWJsZXMgZW4gYm9pcyBldCBjaGFpc2VzIG5vaXJlc1wiXG4gICAgICAgICAgZmlsbFxuICAgICAgICAgIHN0eWxlPXt7IG9iamVjdEZpdDogXCJjb3ZlclwiIH19XG4gICAgICAgICAgcXVhbGl0eT17MTAwfVxuICAgICAgICAvPlxuICAgICAgPC9kaXY+XG4gICAgICA8ZGl2IGNsYXNzTmFtZT1cImFic29sdXRlIGluc2V0LTAgYmctYmxhY2sgYmctb3BhY2l0eS01MCBmbGV4IGZsZXgtY29sIGl0ZW1zLWNlbnRlciBqdXN0aWZ5LWNlbnRlciB0ZXh0LVsjNEEyNTExXVwiPlxuICAgICAgICA8aDEgY2xhc3NOYW1lPVwidGV4dC1bI0ZERjZFOV0gdGV4dC0yeGwgbWQ6dGV4dC00eGwgZm9udC1ib2xkIG1iLTQgdGV4dC1jZW50ZXIgcHgtNCBteC1hdXRvXCI+XG4gICAgICAgICAgVW4gdm95YWdlIGVudHJlIMOJdGhpb3BpZSBldCBFdXJvcGVcbiAgICAgICAgPC9oMT5cbiAgICAgIDwvZGl2PlxuICAgIDwvZGl2PlxuICApO1xufVxuIl0sIm5hbWVzIjpbInVzZUVmZmVjdCIsInVzZVN0YXRlIiwiSW1hZ2UiLCJIZXJvIiwib2Zmc2V0WSIsInNldE9mZnNldFkiLCJ0aWNraW5nIiwiaGFuZGxlU2Nyb2xsIiwicmVxdWVzdEFuaW1hdGlvbkZyYW1lIiwid2luZG93Iiwic2Nyb2xsWSIsImFkZEV2ZW50TGlzdGVuZXIiLCJyZW1vdmVFdmVudExpc3RlbmVyIiwiZGl2IiwiaWQiLCJjbGFzc05hbWUiLCJzdHlsZSIsInRyYW5zZm9ybSIsInNyYyIsImFsdCIsImZpbGwiLCJvYmplY3RGaXQiLCJxdWFsaXR5IiwiaDEiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///(app-pages-browser)/./app/components/Hero.tsx\n"));

/***/ })

});