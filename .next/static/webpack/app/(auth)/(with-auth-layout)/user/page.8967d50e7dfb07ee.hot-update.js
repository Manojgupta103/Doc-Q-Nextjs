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

/***/ "(app-pages-browser)/./src/app/(auth)/(with-auth-layout)/user/page.jsx":
/*!*********************************************************!*\
  !*** ./src/app/(auth)/(with-auth-layout)/user/page.jsx ***!
  \*********************************************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_store_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/store/features/auth/authSlice */ \"(app-pages-browser)/./src/lib/store/features/auth/authSlice.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _lib_store_hooks_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/store/hooks/index */ \"(app-pages-browser)/./src/lib/store/hooks/index.js\");\n// ADD USER LOGIN PAGE HERE (SHARE LOGIN FORM COMPONENT BETWEEN DOCTORS AND USER LOGIN ROUTES)\n// dummy login page\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\nfunction Login() {\n    _s();\n    const dispatch = (0,_lib_store_hooks_index__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const handleLogin = async (event)=>{\n        event.preventDefault();\n        // dispatch(loginRequest());\n        try {\n            const formData = new FormData(event.currentTarget);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_3__[\"default\"].post(\"https://dummyjson.com/auth/login\", {\n                email: formData.get(\"email\"),\n                password: formData.get(\"password\")\n            });\n            dispatch((0,_lib_store_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__.loginSuccess)({\n                token: response.data.token,\n                user: response.data\n            }));\n        } catch (error) {\n            dispatch((0,_lib_store_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__.loginFailure)(error.message));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n        onSubmit: handleLogin,\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"email\",\n                type: \"email\",\n                placeholder: \"Email\",\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                lineNumber: 31,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                name: \"password\",\n                type: \"password\",\n                placeholder: \"Password\",\n                required: true\n            }, void 0, false, {\n                fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                type: \"submit\",\n                children: \"Login\"\n            }, void 0, false, {\n                fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                lineNumber: 33,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n        lineNumber: 30,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"BJQ1DUn/XFEl2NsQ3DWyHAXfnkY=\", false, function() {\n    return [\n        _lib_store_hooks_index__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGF1dGgpLyh3aXRoLWF1dGgtbGF5b3V0KS91c2VyL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7O0FBQUEsOEZBQThGO0FBQzlGLG1CQUFtQjs7O0FBR3NGO0FBQy9FO0FBQ3lDO0FBRXBELFNBQVNLOztJQUN0QixNQUFNQyxXQUFXRixzRUFBY0E7SUFFL0IsTUFBTUcsY0FBYyxPQUFPQztRQUN6QkEsTUFBTUMsY0FBYztRQUNwQiw0QkFBNEI7UUFFNUIsSUFBSTtZQUNGLE1BQU1DLFdBQVcsSUFBSUMsU0FBU0gsTUFBTUksYUFBYTtZQUNqRCxNQUFNQyxXQUFXLE1BQU1WLDZDQUFLQSxDQUFDVyxJQUFJLENBQUMsb0NBQW9DO2dCQUNwRUMsT0FBT0wsU0FBU00sR0FBRyxDQUFDO2dCQUNwQkMsVUFBVVAsU0FBU00sR0FBRyxDQUFDO1lBQ3pCO1lBRUFWLFNBQVNMLGdGQUFZQSxDQUFDO2dCQUFFaUIsT0FBT0wsU0FBU00sSUFBSSxDQUFDRCxLQUFLO2dCQUFFRSxNQUFNUCxTQUFTTSxJQUFJO1lBQUM7UUFDMUUsRUFBRSxPQUFPRSxPQUFPO1lBQ2RmLFNBQVNKLGdGQUFZQSxDQUFDbUIsTUFBTUMsT0FBTztRQUNyQztJQUNGO0lBRUEscUJBQ0UsOERBQUNDO1FBQUtDLFVBQVVqQjs7MEJBQ2QsOERBQUNrQjtnQkFBTUMsTUFBSztnQkFBUUMsTUFBSztnQkFBUUMsYUFBWTtnQkFBUUMsUUFBUTs7Ozs7OzBCQUM3RCw4REFBQ0o7Z0JBQU1DLE1BQUs7Z0JBQVdDLE1BQUs7Z0JBQVdDLGFBQVk7Z0JBQVdDLFFBQVE7Ozs7OzswQkFDdEUsOERBQUNDO2dCQUFPSCxNQUFLOzBCQUFTOzs7Ozs7Ozs7Ozs7QUFHNUI7R0EzQndCdEI7O1FBQ0xELGtFQUFjQTs7O0tBRFRDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL3NyYy9hcHAvKGF1dGgpLyh3aXRoLWF1dGgtbGF5b3V0KS91c2VyL3BhZ2UuanN4P2UxNWYiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gQUREIFVTRVIgTE9HSU4gUEFHRSBIRVJFIChTSEFSRSBMT0dJTiBGT1JNIENPTVBPTkVOVCBCRVRXRUVOIERPQ1RPUlMgQU5EIFVTRVIgTE9HSU4gUk9VVEVTKVxyXG4vLyBkdW1teSBsb2dpbiBwYWdlXHJcbid1c2UgY2xpZW50JztcclxuXHJcbmltcG9ydCB7IGxvZ2luUmVxdWVzdCwgbG9naW5TdWNjZXNzLCBsb2dpbkZhaWx1cmUgfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RvcmUvZmVhdHVyZXMvYXV0aC9hdXRoU2xpY2UnO1xyXG5pbXBvcnQgYXhpb3MgZnJvbSAnYXhpb3MnO1xyXG5pbXBvcnQgeyB1c2VBcHBEaXNwYXRjaCB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdG9yZS9ob29rcy9pbmRleCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gZGlzcGF0Y2gobG9naW5SZXF1ZXN0KCkpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwczovL2R1bW15anNvbi5jb20vYXV0aC9sb2dpblwiLCB7XHJcbiAgICAgICAgZW1haWw6IGZvcm1EYXRhLmdldChcImVtYWlsXCIpLFxyXG4gICAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3MoeyB0b2tlbjogcmVzcG9uc2UuZGF0YS50b2tlbiwgdXNlcjogcmVzcG9uc2UuZGF0YSB9KSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmUoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTG9naW59PlxyXG4gICAgICA8aW5wdXQgbmFtZT1cImVtYWlsXCIgdHlwZT1cImVtYWlsXCIgcGxhY2Vob2xkZXI9XCJFbWFpbFwiIHJlcXVpcmVkIC8+XHJcbiAgICAgIDxpbnB1dCBuYW1lPVwicGFzc3dvcmRcIiB0eXBlPVwicGFzc3dvcmRcIiBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCIgcmVxdWlyZWQgLz5cclxuICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cclxuICAgIDwvZm9ybT5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJsb2dpblJlcXVlc3QiLCJsb2dpblN1Y2Nlc3MiLCJsb2dpbkZhaWx1cmUiLCJheGlvcyIsInVzZUFwcERpc3BhdGNoIiwiTG9naW4iLCJkaXNwYXRjaCIsImhhbmRsZUxvZ2luIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImZvcm1EYXRhIiwiRm9ybURhdGEiLCJjdXJyZW50VGFyZ2V0IiwicmVzcG9uc2UiLCJwb3N0IiwiZW1haWwiLCJnZXQiLCJwYXNzd29yZCIsInRva2VuIiwiZGF0YSIsInVzZXIiLCJlcnJvciIsIm1lc3NhZ2UiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(auth)/(with-auth-layout)/user/page.jsx\n"));

/***/ })

});