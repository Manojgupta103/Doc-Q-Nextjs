"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("app/(root)/layout",{

/***/ "(app-pages-browser)/./src/lib/store/store.js":
/*!********************************!*\
  !*** ./src/lib/store/store.js ***!
  \********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   makeStore: function() { return /* binding */ makeStore; }\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/redux/dist/redux.mjs\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @reduxjs/toolkit */ \"(app-pages-browser)/./node_modules/@reduxjs/toolkit/dist/redux-toolkit.modern.mjs\");\n/* harmony import */ var _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./features/auth/authSlice */ \"(app-pages-browser)/./src/lib/store/features/auth/authSlice.js\");\n/* harmony import */ var redux_persist__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! redux-persist */ \"(app-pages-browser)/./node_modules/redux-persist/es/index.js\");\n/* harmony import */ var redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! redux-persist/lib/storage */ \"(app-pages-browser)/./node_modules/redux-persist/lib/storage/index.js\");\n\n\n\n\nconst authPersistConfig = {\n    key: \"auth\",\n    storage: redux_persist_lib_storage__WEBPACK_IMPORTED_MODULE_2__[\"default\"]\n};\nconst auth = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_3__.combineReducers)({\n    auth: (0,redux_persist__WEBPACK_IMPORTED_MODULE_1__.persistReducer)(authPersistConfig, _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_0__[\"default\"])\n});\nconst makeStore = ()=>{\n    return (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_4__.configureStore)({\n        // after persisting data as simply rootreducer contains the object of reducers\n        // reducer: rootReducer,\n        // before persisting data we would pass each reducers as an object key\n        reducer: {\n            auth: _features_auth_authSlice__WEBPACK_IMPORTED_MODULE_0__[\"default\"]\n        },\n        middleware: (getDefaultMiddleware)=>getDefaultMiddleware({\n                serializableCheck: false\n            })\n    });\n};\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9saWIvc3RvcmUvc3RvcmUuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7O0FBQW1FO0FBQ2Y7QUFFTDtBQUNDO0FBRWhELE1BQU1LLG9CQUFvQjtJQUN4QkMsS0FBSztJQUNMRixTQUFTQSxpRUFBT0E7QUFFbEI7QUFFQSxNQUFNRyxPQUFPTixpRUFBZUEsQ0FBQztJQUMzQk0sTUFBTUosNkRBQWNBLENBQUNFLG1CQUFtQkgsZ0VBQVdBO0FBRXJEO0FBRU8sTUFBTU0sWUFBWTtJQUN2QixPQUFPUixnRUFBY0EsQ0FBQztRQUNwQiw4RUFBOEU7UUFDOUUsd0JBQXdCO1FBRXhCLHNFQUFzRTtRQUV0RVMsU0FBUztZQUNQRixNQUFNTCxnRUFBV0E7UUFDbkI7UUFDQVEsWUFBWSxDQUFDQyx1QkFDWEEscUJBQXFCO2dCQUFFQyxtQkFBbUI7WUFBTTtJQUNwRDtBQUNGLEVBQUMiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2xpYi9zdG9yZS9zdG9yZS5qcz81NGZkIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNvbmZpZ3VyZVN0b3JlLCBjb21iaW5lUmVkdWNlcnMgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xyXG5pbXBvcnQgYXV0aFJlZHVjZXIgZnJvbSBcIi4vZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2VcIjtcclxuXHJcbmltcG9ydCB7IHBlcnNpc3RSZWR1Y2VyIH0gZnJvbSBcInJlZHV4LXBlcnNpc3RcIjtcclxuaW1wb3J0IHN0b3JhZ2UgZnJvbSBcInJlZHV4LXBlcnNpc3QvbGliL3N0b3JhZ2VcIjtcclxuXHJcbmNvbnN0IGF1dGhQZXJzaXN0Q29uZmlnID0ge1xyXG4gIGtleTogXCJhdXRoXCIsXHJcbiAgc3RvcmFnZTogc3RvcmFnZSxcclxuICAvLyB3aGl0ZWxpc3Q6IFtcImF1dGhTdGF0ZVwiXSwgXHJcbn07XHJcblxyXG5jb25zdCBhdXRoID0gY29tYmluZVJlZHVjZXJzKHtcclxuICBhdXRoOiBwZXJzaXN0UmVkdWNlcihhdXRoUGVyc2lzdENvbmZpZywgYXV0aFJlZHVjZXIpLFxyXG4gIC8vIEFkZCBvdGhlciByZWR1Y2VycyBoZXJlXHJcbn0pO1xyXG5cclxuZXhwb3J0IGNvbnN0IG1ha2VTdG9yZSA9ICgpID0+IHtcclxuICByZXR1cm4gY29uZmlndXJlU3RvcmUoe1xyXG4gICAgLy8gYWZ0ZXIgcGVyc2lzdGluZyBkYXRhIGFzIHNpbXBseSByb290cmVkdWNlciBjb250YWlucyB0aGUgb2JqZWN0IG9mIHJlZHVjZXJzXHJcbiAgICAvLyByZWR1Y2VyOiByb290UmVkdWNlcixcclxuXHJcbiAgICAvLyBiZWZvcmUgcGVyc2lzdGluZyBkYXRhIHdlIHdvdWxkIHBhc3MgZWFjaCByZWR1Y2VycyBhcyBhbiBvYmplY3Qga2V5XHJcblxyXG4gICAgcmVkdWNlcjoge1xyXG4gICAgICBhdXRoOiBhdXRoUmVkdWNlciwgLy9pbml0aWFsbHkgYmVmb3JlIHBlcnNpc3RpbmdcclxuICAgIH0sXHJcbiAgICBtaWRkbGV3YXJlOiAoZ2V0RGVmYXVsdE1pZGRsZXdhcmUpID0+XHJcbiAgICAgIGdldERlZmF1bHRNaWRkbGV3YXJlKHsgc2VyaWFsaXphYmxlQ2hlY2s6IGZhbHNlIH0pLFxyXG4gIH0pO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJjb25maWd1cmVTdG9yZSIsImNvbWJpbmVSZWR1Y2VycyIsImF1dGhSZWR1Y2VyIiwicGVyc2lzdFJlZHVjZXIiLCJzdG9yYWdlIiwiYXV0aFBlcnNpc3RDb25maWciLCJrZXkiLCJhdXRoIiwibWFrZVN0b3JlIiwicmVkdWNlciIsIm1pZGRsZXdhcmUiLCJnZXREZWZhdWx0TWlkZGxld2FyZSIsInNlcmlhbGl6YWJsZUNoZWNrIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/lib/store/store.js\n"));

/***/ })

});