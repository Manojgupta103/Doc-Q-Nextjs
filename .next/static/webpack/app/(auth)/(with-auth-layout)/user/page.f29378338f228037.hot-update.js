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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_store_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/store/features/auth/authSlice */ \"(app-pages-browser)/./src/lib/store/features/auth/authSlice.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _lib_store_hooks_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/store/hooks/index */ \"(app-pages-browser)/./src/lib/store/hooks/index.js\");\n/* harmony import */ var _components_AuthViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AuthViewer */ \"(app-pages-browser)/./src/components/AuthViewer.jsx\");\n// ADD USER LOGIN PAGE HERE (SHARE LOGIN FORM COMPONENT BETWEEN DOCTORS AND USER LOGIN ROUTES)\n// dummy login page\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Login() {\n    _s();\n    const dispatch = (0,_lib_store_hooks_index__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const handleLogin = async (event)=>{\n        event.preventDefault();\n        // dispatch(loginRequest());\n        try {\n            const formData = new FormData(event.currentTarget);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://dummyjson.com/auth/login\", {\n                user: formData.get(\"user\"),\n                password: formData.get(\"password\")\n            });\n            dispatch((0,_lib_store_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__.loginSuccess)({\n                token: response.data.token,\n                user: response.data\n            }));\n        } catch (error) {\n            dispatch((0,_lib_store_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__.loginFailure)(error.message));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"user\",\n                        type: \"user\",\n                        placeholder: \"user\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                        lineNumber: 33,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"password\",\n                        type: \"password\",\n                        placeholder: \"Password\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                        lineNumber: 34,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                        lineNumber: 40,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                lineNumber: 32,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthViewer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                lineNumber: 42,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n        lineNumber: 31,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"BJQ1DUn/XFEl2NsQ3DWyHAXfnkY=\", false, function() {\n    return [\n        _lib_store_hooks_index__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGF1dGgpLyh3aXRoLWF1dGgtbGF5b3V0KS91c2VyL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDhGQUE4RjtBQUM5RixtQkFBbUI7OztBQUdzRjtBQUMvRTtBQUN5QztBQUNsQjtBQUVsQyxTQUFTTTs7SUFDdEIsTUFBTUMsV0FBV0gsc0VBQWNBO0lBRS9CLE1BQU1JLGNBQWMsT0FBT0M7UUFDekJBLE1BQU1DLGNBQWM7UUFDcEIsNEJBQTRCO1FBRTVCLElBQUk7WUFDRixNQUFNQyxXQUFXLElBQUlDLFNBQVNILE1BQU1JLGFBQWE7WUFDakQsTUFBTUMsV0FBVyxNQUFNWCw2Q0FBS0EsQ0FBQ1ksSUFBSSxDQUFDLG9DQUFvQztnQkFDcEVDLE1BQU1MLFNBQVNNLEdBQUcsQ0FBQztnQkFDbkJDLFVBQVVQLFNBQVNNLEdBQUcsQ0FBQztZQUN6QjtZQUVBVixTQUFTTixnRkFBWUEsQ0FBQztnQkFBRWtCLE9BQU9MLFNBQVNNLElBQUksQ0FBQ0QsS0FBSztnQkFBRUgsTUFBTUYsU0FBU00sSUFBSTtZQUFDO1FBQzFFLEVBQUUsT0FBT0MsT0FBTztZQUNkZCxTQUFTTCxnRkFBWUEsQ0FBQ21CLE1BQU1DLE9BQU87UUFDckM7SUFDRjtJQUVBLHFCQUNFLDhEQUFDQzs7MEJBQ0MsOERBQUNDO2dCQUFLQyxVQUFVakI7O2tDQUNkLDhEQUFDa0I7d0JBQU1DLE1BQUs7d0JBQU9DLE1BQUs7d0JBQU9DLGFBQVk7d0JBQU9DLFFBQVE7Ozs7OztrQ0FDMUQsOERBQUNKO3dCQUNDQyxNQUFLO3dCQUNMQyxNQUFLO3dCQUNMQyxhQUFZO3dCQUNaQyxRQUFROzs7Ozs7a0NBRVYsOERBQUNDO3dCQUFPSCxNQUFLO2tDQUFTOzs7Ozs7Ozs7Ozs7MEJBRXhCLDhEQUFDdkIsOERBQVVBOzs7Ozs7Ozs7OztBQUdqQjtHQW5Dd0JDOztRQUNMRixrRUFBY0E7OztLQURURSIsInNvdXJjZXMiOlsid2VicGFjazovL19OX0UvLi9zcmMvYXBwLyhhdXRoKS8od2l0aC1hdXRoLWxheW91dCkvdXNlci9wYWdlLmpzeD9lMTVmIl0sInNvdXJjZXNDb250ZW50IjpbIi8vIEFERCBVU0VSIExPR0lOIFBBR0UgSEVSRSAoU0hBUkUgTE9HSU4gRk9STSBDT01QT05FTlQgQkVUV0VFTiBET0NUT1JTIEFORCBVU0VSIExPR0lOIFJPVVRFUylcclxuLy8gZHVtbXkgbG9naW4gcGFnZVxyXG4ndXNlIGNsaWVudCc7XHJcblxyXG5pbXBvcnQgeyBsb2dpblJlcXVlc3QsIGxvZ2luU3VjY2VzcywgbG9naW5GYWlsdXJlIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0b3JlL2ZlYXR1cmVzL2F1dGgvYXV0aFNsaWNlJztcclxuaW1wb3J0IGF4aW9zIGZyb20gJ2F4aW9zJztcclxuaW1wb3J0IHsgdXNlQXBwRGlzcGF0Y2ggfSBmcm9tICcuLi8uLi8uLi8uLi9saWIvc3RvcmUvaG9va3MvaW5kZXgnO1xyXG5pbXBvcnQgQXV0aFZpZXdlciBmcm9tICdAL2NvbXBvbmVudHMvQXV0aFZpZXdlcic7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBMb2dpbigpIHtcclxuICBjb25zdCBkaXNwYXRjaCA9IHVzZUFwcERpc3BhdGNoKCk7XHJcblxyXG4gIGNvbnN0IGhhbmRsZUxvZ2luID0gYXN5bmMgKGV2ZW50KSA9PiB7XHJcbiAgICBldmVudC5wcmV2ZW50RGVmYXVsdCgpO1xyXG4gICAgLy8gZGlzcGF0Y2gobG9naW5SZXF1ZXN0KCkpO1xyXG5cclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LmN1cnJlbnRUYXJnZXQpO1xyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwczovL2R1bW15anNvbi5jb20vYXV0aC9sb2dpblwiLCB7XHJcbiAgICAgICAgdXNlcjogZm9ybURhdGEuZ2V0KFwidXNlclwiKSxcclxuICAgICAgICBwYXNzd29yZDogZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIiksXHJcbiAgICAgIH0pO1xyXG5cclxuICAgICAgZGlzcGF0Y2gobG9naW5TdWNjZXNzKHsgdG9rZW46IHJlc3BvbnNlLmRhdGEudG9rZW4sIHVzZXI6IHJlc3BvbnNlLmRhdGEgfSkpO1xyXG4gICAgfSBjYXRjaCAoZXJyb3IpIHtcclxuICAgICAgZGlzcGF0Y2gobG9naW5GYWlsdXJlKGVycm9yLm1lc3NhZ2UpKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICByZXR1cm4gKFxyXG4gICAgPGRpdj5cclxuICAgICAgPGZvcm0gb25TdWJtaXQ9e2hhbmRsZUxvZ2lufT5cclxuICAgICAgICA8aW5wdXQgbmFtZT1cInVzZXJcIiB0eXBlPVwidXNlclwiIHBsYWNlaG9sZGVyPVwidXNlclwiIHJlcXVpcmVkIC8+XHJcbiAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICBuYW1lPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHBsYWNlaG9sZGVyPVwiUGFzc3dvcmRcIlxyXG4gICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAvPlxyXG4gICAgICAgIDxidXR0b24gdHlwZT1cInN1Ym1pdFwiPkxvZ2luPC9idXR0b24+XHJcbiAgICAgIDwvZm9ybT5cclxuICAgICAgPEF1dGhWaWV3ZXIvPlxyXG4gICAgPC9kaXY+XHJcbiAgKTtcclxufVxyXG4iXSwibmFtZXMiOlsibG9naW5SZXF1ZXN0IiwibG9naW5TdWNjZXNzIiwibG9naW5GYWlsdXJlIiwiYXhpb3MiLCJ1c2VBcHBEaXNwYXRjaCIsIkF1dGhWaWV3ZXIiLCJMb2dpbiIsImRpc3BhdGNoIiwiaGFuZGxlTG9naW4iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiZm9ybURhdGEiLCJGb3JtRGF0YSIsImN1cnJlbnRUYXJnZXQiLCJyZXNwb25zZSIsInBvc3QiLCJ1c2VyIiwiZ2V0IiwicGFzc3dvcmQiLCJ0b2tlbiIsImRhdGEiLCJlcnJvciIsIm1lc3NhZ2UiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(auth)/(with-auth-layout)/user/page.jsx\n"));

/***/ })

});