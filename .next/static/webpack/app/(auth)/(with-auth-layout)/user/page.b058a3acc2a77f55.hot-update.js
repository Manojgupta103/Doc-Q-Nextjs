"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(auth)/(with-auth-layout)/user/page",{

/***/ "(app-pages-browser)/./src/components/AuthViewer.jsx":
/*!***************************************!*\
  !*** ./src/components/AuthViewer.jsx ***!
  \***************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/store/hooks */ \"(app-pages-browser)/./src/lib/store/hooks/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\nconst AuthViewer = ()=>{\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const authState = (0,_lib_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.auth.isAuthenticated);\n    // EASY FIX: to avoid hydration state error by rendering some parts of html which can cause mismatch, only at client side only after hydration as we are persisting state on client local storage bcuz we are using react persist library\n    //   useEffect(() => {\n    //     setIsClient(true);\n    //   }, []);\n    //   if (!isClient) {\n    //     // Render a placeholder or nothing on the server\n    //     return <div>Loading...</div>;\n    //   }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap border border-1 border-black p-20\",\n        children: [\n            \"You are now \",\n            authState ? \"Logged  In\" : \"Logged Out\"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\docq-frontend\\\\src\\\\components\\\\AuthViewer.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthViewer, \"AuDwFYoNiOooFyfEltuR9N2vVqI=\", false, function() {\n    return [\n        _lib_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = AuthViewer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthViewer);\nvar _c;\n$RefreshReg$(_c, \"AuthViewer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0F1dGhWaWV3ZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFFbUQ7QUFDQTtBQUVuRCxNQUFNSSxhQUFhOztJQUNqQixNQUFNLENBQUNDLFVBQVVDLFlBQVksR0FBR0osK0NBQVFBLENBQUM7SUFDekMsTUFBTUssWUFBWUosZ0VBQWNBLENBQUMsQ0FBQ0ssUUFBVUEsTUFBTUMsSUFBSSxDQUFDQyxlQUFlO0lBQ3RFLHlPQUF5TztJQUMzTyxzQkFBc0I7SUFDdEIseUJBQXlCO0lBQ3pCLFlBQVk7SUFFWixxQkFBcUI7SUFDckIsdURBQXVEO0lBQ3ZELG9DQUFvQztJQUNwQyxNQUFNO0lBRUoscUJBQ0UsOERBQUNDO1FBQUlDLFdBQVU7O1lBQTZDO1lBQzdDTCxZQUFZLGVBQWU7Ozs7Ozs7QUFHOUM7R0FsQk1IOztRQUVjRCw0REFBY0E7OztLQUY1QkM7QUFtQk4sK0RBQWVBLFVBQVVBLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvQXV0aFZpZXdlci5qc3g/OTE4OCJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBjbGllbnRcIjtcclxuXHJcbmltcG9ydCBSZWFjdCwgeyB1c2VFZmZlY3QsIHVzZVN0YXRlIH0gZnJvbSBcInJlYWN0XCI7XHJcbmltcG9ydCB7IHVzZUFwcFNlbGVjdG9yIH0gZnJvbSBcIkAvbGliL3N0b3JlL2hvb2tzXCI7XHJcblxyXG5jb25zdCBBdXRoVmlld2VyID0gKCkgPT4ge1xyXG4gIGNvbnN0IFtpc0NsaWVudCwgc2V0SXNDbGllbnRdID0gdXNlU3RhdGUoZmFsc2UpO1xyXG4gIGNvbnN0IGF1dGhTdGF0ZSA9IHVzZUFwcFNlbGVjdG9yKChzdGF0ZSkgPT4gc3RhdGUuYXV0aC5pc0F1dGhlbnRpY2F0ZWQpO1xyXG4gIC8vIEVBU1kgRklYOiB0byBhdm9pZCBoeWRyYXRpb24gc3RhdGUgZXJyb3IgYnkgcmVuZGVyaW5nIHNvbWUgcGFydHMgb2YgaHRtbCB3aGljaCBjYW4gY2F1c2UgbWlzbWF0Y2gsIG9ubHkgYXQgY2xpZW50IHNpZGUgb25seSBhZnRlciBoeWRyYXRpb24gYXMgd2UgYXJlIHBlcnNpc3Rpbmcgc3RhdGUgb24gY2xpZW50IGxvY2FsIHN0b3JhZ2UgYmN1eiB3ZSBhcmUgdXNpbmcgcmVhY3QgcGVyc2lzdCBsaWJyYXJ5XHJcbi8vICAgdXNlRWZmZWN0KCgpID0+IHtcclxuLy8gICAgIHNldElzQ2xpZW50KHRydWUpO1xyXG4vLyAgIH0sIFtdKTtcclxuXHJcbi8vICAgaWYgKCFpc0NsaWVudCkge1xyXG4vLyAgICAgLy8gUmVuZGVyIGEgcGxhY2Vob2xkZXIgb3Igbm90aGluZyBvbiB0aGUgc2VydmVyXHJcbi8vICAgICByZXR1cm4gPGRpdj5Mb2FkaW5nLi4uPC9kaXY+O1xyXG4vLyAgIH1cclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXYgY2xhc3NOYW1lPVwiZmxleCBnYXAgYm9yZGVyIGJvcmRlci0xIGJvcmRlci1ibGFjayBwLTIwXCI+XHJcbiAgICAgIFlvdSBhcmUgbm93IHthdXRoU3RhdGUgPyBcIkxvZ2dlZCAgSW5cIiA6IFwiTG9nZ2VkIE91dFwifVxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufTtcclxuZXhwb3J0IGRlZmF1bHQgQXV0aFZpZXdlcjtcclxuIl0sIm5hbWVzIjpbIlJlYWN0IiwidXNlRWZmZWN0IiwidXNlU3RhdGUiLCJ1c2VBcHBTZWxlY3RvciIsIkF1dGhWaWV3ZXIiLCJpc0NsaWVudCIsInNldElzQ2xpZW50IiwiYXV0aFN0YXRlIiwic3RhdGUiLCJhdXRoIiwiaXNBdXRoZW50aWNhdGVkIiwiZGl2IiwiY2xhc3NOYW1lIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AuthViewer.jsx\n"));

/***/ })

});