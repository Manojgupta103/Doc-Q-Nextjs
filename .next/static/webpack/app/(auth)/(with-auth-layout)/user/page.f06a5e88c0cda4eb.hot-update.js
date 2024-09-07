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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/index.js\");\n/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _lib_store_hooks__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @/lib/store/hooks */ \"(app-pages-browser)/./src/lib/store/hooks/index.js\");\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n// JUST A DUMMY COMPONENT SHOWING HOW THE DE\n\n\nconst AuthViewer = ()=>{\n    _s();\n    const [isClient, setIsClient] = (0,react__WEBPACK_IMPORTED_MODULE_1__.useState)(false);\n    const authState = (0,_lib_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector)((state)=>state.auth.isAuthenticated);\n    // EASY FIX: to avoid hydration state error by rendering some parts of html which can cause mismatch, only at client side only after hydration as we are persisting state on client local storage bcuz we are using react persist library\n    (0,react__WEBPACK_IMPORTED_MODULE_1__.useEffect)(()=>{\n        setIsClient(true);\n    }, []);\n    if (!isClient) {\n        // Render a placeholder or nothing on the server\n        return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n            children: \"Loading...\"\n        }, void 0, false, {\n            fileName: \"D:\\\\docq-frontend\\\\src\\\\components\\\\AuthViewer.jsx\",\n            lineNumber: 16,\n            columnNumber: 12\n        }, undefined);\n    }\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        className: \"flex gap border border-1 border-black p-20\",\n        children: [\n            \"You are now \",\n            authState ? \"Logged  In\" : \"Logged Out\"\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\docq-frontend\\\\src\\\\components\\\\AuthViewer.jsx\",\n        lineNumber: 20,\n        columnNumber: 5\n    }, undefined);\n};\n_s(AuthViewer, \"5gVQDqO4JXfhNIv4XeOdl9fMWBA=\", false, function() {\n    return [\n        _lib_store_hooks__WEBPACK_IMPORTED_MODULE_2__.useAppSelector\n    ];\n});\n_c = AuthViewer;\n/* harmony default export */ __webpack_exports__[\"default\"] = (AuthViewer);\nvar _c;\n$RefreshReg$(_c, \"AuthViewer\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9jb21wb25lbnRzL0F1dGhWaWV3ZXIuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFDQSw0Q0FBNEM7QUFDTztBQUNBO0FBRW5ELE1BQU1JLGFBQWE7O0lBQ2pCLE1BQU0sQ0FBQ0MsVUFBVUMsWUFBWSxHQUFHSiwrQ0FBUUEsQ0FBQztJQUN6QyxNQUFNSyxZQUFZSixnRUFBY0EsQ0FBQyxDQUFDSyxRQUFVQSxNQUFNQyxJQUFJLENBQUNDLGVBQWU7SUFDdEUseU9BQXlPO0lBQ3pPVCxnREFBU0EsQ0FBQztRQUNSSyxZQUFZO0lBQ2QsR0FBRyxFQUFFO0lBRUwsSUFBSSxDQUFDRCxVQUFVO1FBQ2IsZ0RBQWdEO1FBQ2hELHFCQUFPLDhEQUFDTTtzQkFBSTs7Ozs7O0lBQ2Q7SUFFQSxxQkFDRSw4REFBQ0E7UUFBSUMsV0FBVTs7WUFBNkM7WUFDN0NMLFlBQVksZUFBZTs7Ozs7OztBQUc5QztHQWxCTUg7O1FBRWNELDREQUFjQTs7O0tBRjVCQztBQW1CTiwrREFBZUEsVUFBVUEsRUFBQyIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvY29tcG9uZW50cy9BdXRoVmlld2VyLmpzeD85MTg4Il0sInNvdXJjZXNDb250ZW50IjpbIlwidXNlIGNsaWVudFwiO1xyXG4vLyBKVVNUIEEgRFVNTVkgQ09NUE9ORU5UIFNIT1dJTkcgSE9XIFRIRSBERVxyXG5pbXBvcnQgUmVhY3QsIHsgdXNlRWZmZWN0LCB1c2VTdGF0ZSB9IGZyb20gXCJyZWFjdFwiO1xyXG5pbXBvcnQgeyB1c2VBcHBTZWxlY3RvciB9IGZyb20gXCJAL2xpYi9zdG9yZS9ob29rc1wiO1xyXG5cclxuY29uc3QgQXV0aFZpZXdlciA9ICgpID0+IHtcclxuICBjb25zdCBbaXNDbGllbnQsIHNldElzQ2xpZW50XSA9IHVzZVN0YXRlKGZhbHNlKTtcclxuICBjb25zdCBhdXRoU3RhdGUgPSB1c2VBcHBTZWxlY3Rvcigoc3RhdGUpID0+IHN0YXRlLmF1dGguaXNBdXRoZW50aWNhdGVkKTtcclxuICAvLyBFQVNZIEZJWDogdG8gYXZvaWQgaHlkcmF0aW9uIHN0YXRlIGVycm9yIGJ5IHJlbmRlcmluZyBzb21lIHBhcnRzIG9mIGh0bWwgd2hpY2ggY2FuIGNhdXNlIG1pc21hdGNoLCBvbmx5IGF0IGNsaWVudCBzaWRlIG9ubHkgYWZ0ZXIgaHlkcmF0aW9uIGFzIHdlIGFyZSBwZXJzaXN0aW5nIHN0YXRlIG9uIGNsaWVudCBsb2NhbCBzdG9yYWdlIGJjdXogd2UgYXJlIHVzaW5nIHJlYWN0IHBlcnNpc3QgbGlicmFyeVxyXG4gIHVzZUVmZmVjdCgoKSA9PiB7XHJcbiAgICBzZXRJc0NsaWVudCh0cnVlKTtcclxuICB9LCBbXSk7XHJcblxyXG4gIGlmICghaXNDbGllbnQpIHtcclxuICAgIC8vIFJlbmRlciBhIHBsYWNlaG9sZGVyIG9yIG5vdGhpbmcgb24gdGhlIHNlcnZlclxyXG4gICAgcmV0dXJuIDxkaXY+TG9hZGluZy4uLjwvZGl2PjtcclxuICB9XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2IGNsYXNzTmFtZT1cImZsZXggZ2FwIGJvcmRlciBib3JkZXItMSBib3JkZXItYmxhY2sgcC0yMFwiPlxyXG4gICAgICBZb3UgYXJlIG5vdyB7YXV0aFN0YXRlID8gXCJMb2dnZWQgIEluXCIgOiBcIkxvZ2dlZCBPdXRcIn1cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn07XHJcbmV4cG9ydCBkZWZhdWx0IEF1dGhWaWV3ZXI7XHJcbiJdLCJuYW1lcyI6WyJSZWFjdCIsInVzZUVmZmVjdCIsInVzZVN0YXRlIiwidXNlQXBwU2VsZWN0b3IiLCJBdXRoVmlld2VyIiwiaXNDbGllbnQiLCJzZXRJc0NsaWVudCIsImF1dGhTdGF0ZSIsInN0YXRlIiwiYXV0aCIsImlzQXV0aGVudGljYXRlZCIsImRpdiIsImNsYXNzTmFtZSJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/components/AuthViewer.jsx\n"));

/***/ })

});