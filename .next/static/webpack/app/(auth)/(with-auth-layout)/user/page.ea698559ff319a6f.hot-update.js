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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_store_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/store/features/auth/authSlice */ \"(app-pages-browser)/./src/lib/store/features/auth/authSlice.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _lib_store_hooks_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/store/hooks/index */ \"(app-pages-browser)/./src/lib/store/hooks/index.js\");\n/* harmony import */ var _components_AuthViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AuthViewer */ \"(app-pages-browser)/./src/components/AuthViewer.jsx\");\n// ADD USER LOGIN PAGE HERE (SHARE LOGIN FORM COMPONENT BETWEEN DOCTORS AND USER LOGIN ROUTES)\n// dummy login page\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Login() {\n    _s();\n    const dispatch = (0,_lib_store_hooks_index__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const [formData, setForm] = useState({\n        username: \"\",\n        password: \"\"\n    });\n    const handleLogin = async (event)=>{\n        event.preventDefault();\n        // dispatch(loginRequest());\n        console.log();\n        try {\n            const formData = new FormData(event.target);\n            console.log(formData);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://dummyjson.com/auth/login\", {\n                username: formData.get(\"username\"),\n                password: formData.get(\"password\")\n            });\n            dispatch((0,_lib_store_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__.loginSuccess)({\n                token: response.data.token,\n                user: response.data\n            }));\n        } catch (error) {\n            dispatch((0,_lib_store_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__.loginFailure)(error.message));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"username\",\n                        type: \"username\",\n                        placeholder: \"username\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"password\",\n                        type: \"password\",\n                        placeholder: \"Password\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthViewer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"2gbARyIIdkeZbU2B/GeBkSI6v1I=\", false, function() {\n    return [\n        _lib_store_hooks_index__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGF1dGgpLyh3aXRoLWF1dGgtbGF5b3V0KS91c2VyL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDhGQUE4RjtBQUM5RixtQkFBbUI7OztBQUdzRjtBQUMvRTtBQUN5QztBQUNsQjtBQUVsQyxTQUFTTTs7SUFDdEIsTUFBTUMsV0FBV0gsc0VBQWNBO0lBQy9CLE1BQU0sQ0FBQ0ksVUFBVUMsUUFBUSxHQUFHQyxTQUFTO1FBQ25DQyxVQUFVO1FBQ1ZDLFVBQVU7SUFDWjtJQUVBLE1BQU1DLGNBQWMsT0FBT0M7UUFDekJBLE1BQU1DLGNBQWM7UUFDcEIsNEJBQTRCO1FBQ2hDQyxRQUFRQyxHQUFHO1FBQ1AsSUFBSTtZQUNGLE1BQU1ULFdBQVcsSUFBSVUsU0FBU0osTUFBTUssTUFBTTtZQUMxQ0gsUUFBUUMsR0FBRyxDQUFDVDtZQUNaLE1BQU1ZLFdBQVcsTUFBTWpCLDZDQUFLQSxDQUFDa0IsSUFBSSxDQUFDLG9DQUFvQztnQkFDcEVWLFVBQVVILFNBQVNjLEdBQUcsQ0FBQztnQkFDdkJWLFVBQVVKLFNBQVNjLEdBQUcsQ0FBQztZQUN6QjtZQUVBZixTQUFTTixnRkFBWUEsQ0FBQztnQkFBRXNCLE9BQU9ILFNBQVNJLElBQUksQ0FBQ0QsS0FBSztnQkFBRUUsTUFBTUwsU0FBU0ksSUFBSTtZQUFDO1FBQzFFLEVBQUUsT0FBT0UsT0FBTztZQUNkbkIsU0FBU0wsZ0ZBQVlBLENBQUN3QixNQUFNQyxPQUFPO1FBQ3JDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFBS0MsVUFBVWpCOztrQ0FDZCw4REFBQ2tCO3dCQUFNQyxNQUFLO3dCQUFXQyxNQUFLO3dCQUFXQyxhQUFZO3dCQUFXQyxRQUFROzs7Ozs7a0NBQ3RFLDhEQUFDSjt3QkFDQ0MsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsUUFBUTs7Ozs7O2tDQUVWLDhEQUFDQzt3QkFBT0gsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQzVCLDhEQUFVQTs7Ozs7Ozs7Ozs7QUFHakI7R0F4Q3dCQzs7UUFDTEYsa0VBQWNBOzs7S0FEVEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oYXV0aCkvKHdpdGgtYXV0aC1sYXlvdXQpL3VzZXIvcGFnZS5qc3g/ZTE1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBREQgVVNFUiBMT0dJTiBQQUdFIEhFUkUgKFNIQVJFIExPR0lOIEZPUk0gQ09NUE9ORU5UIEJFVFdFRU4gRE9DVE9SUyBBTkQgVVNFUiBMT0dJTiBST1VURVMpXHJcbi8vIGR1bW15IGxvZ2luIHBhZ2VcclxuJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgbG9naW5SZXF1ZXN0LCBsb2dpblN1Y2Nlc3MsIGxvZ2luRmFpbHVyZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdG9yZS9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0b3JlL2hvb2tzL2luZGV4JztcclxuaW1wb3J0IEF1dGhWaWV3ZXIgZnJvbSAnQC9jb21wb25lbnRzL0F1dGhWaWV3ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybV0gPSB1c2VTdGF0ZSh7XHJcbiAgICB1c2VybmFtZTogXCJcIixcclxuICAgIHBhc3N3b3JkOiBcIlwiLFxyXG4gIH0pO1xyXG5cclxuICBjb25zdCBoYW5kbGVMb2dpbiA9IGFzeW5jIChldmVudCkgPT4ge1xyXG4gICAgZXZlbnQucHJldmVudERlZmF1bHQoKTtcclxuICAgIC8vIGRpc3BhdGNoKGxvZ2luUmVxdWVzdCgpKTtcclxuY29uc29sZS5sb2coKVxyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZm9ybURhdGEgPSBuZXcgRm9ybURhdGEoZXZlbnQudGFyZ2V0KTtcclxuICAgICAgY29uc29sZS5sb2coZm9ybURhdGEpXHJcbiAgICAgIGNvbnN0IHJlc3BvbnNlID0gYXdhaXQgYXhpb3MucG9zdChcImh0dHBzOi8vZHVtbXlqc29uLmNvbS9hdXRoL2xvZ2luXCIsIHtcclxuICAgICAgICB1c2VybmFtZTogZm9ybURhdGEuZ2V0KFwidXNlcm5hbWVcIiksXHJcbiAgICAgICAgcGFzc3dvcmQ6IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpLFxyXG4gICAgICB9KTtcclxuXHJcbiAgICAgIGRpc3BhdGNoKGxvZ2luU3VjY2Vzcyh7IHRva2VuOiByZXNwb25zZS5kYXRhLnRva2VuLCB1c2VyOiByZXNwb25zZS5kYXRhIH0pKTtcclxuICAgIH0gY2F0Y2ggKGVycm9yKSB7XHJcbiAgICAgIGRpc3BhdGNoKGxvZ2luRmFpbHVyZShlcnJvci5tZXNzYWdlKSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgcmV0dXJuIChcclxuICAgIDxkaXY+XHJcbiAgICAgIDxmb3JtIG9uU3VibWl0PXtoYW5kbGVMb2dpbn0+XHJcbiAgICAgICAgPGlucHV0IG5hbWU9XCJ1c2VybmFtZVwiIHR5cGU9XCJ1c2VybmFtZVwiIHBsYWNlaG9sZGVyPVwidXNlcm5hbWVcIiByZXF1aXJlZCAvPlxyXG4gICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgIHR5cGU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICBwbGFjZWhvbGRlcj1cIlBhc3N3b3JkXCJcclxuICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgLz5cclxuICAgICAgICA8YnV0dG9uIHR5cGU9XCJzdWJtaXRcIj5Mb2dpbjwvYnV0dG9uPlxyXG4gICAgICA8L2Zvcm0+XHJcbiAgICAgIDxBdXRoVmlld2VyLz5cclxuICAgIDwvZGl2PlxyXG4gICk7XHJcbn1cclxuIl0sIm5hbWVzIjpbImxvZ2luUmVxdWVzdCIsImxvZ2luU3VjY2VzcyIsImxvZ2luRmFpbHVyZSIsImF4aW9zIiwidXNlQXBwRGlzcGF0Y2giLCJBdXRoVmlld2VyIiwiTG9naW4iLCJkaXNwYXRjaCIsImZvcm1EYXRhIiwic2V0Rm9ybSIsInVzZVN0YXRlIiwidXNlcm5hbWUiLCJwYXNzd29yZCIsImhhbmRsZUxvZ2luIiwiZXZlbnQiLCJwcmV2ZW50RGVmYXVsdCIsImNvbnNvbGUiLCJsb2ciLCJGb3JtRGF0YSIsInRhcmdldCIsInJlc3BvbnNlIiwicG9zdCIsImdldCIsInRva2VuIiwiZGF0YSIsInVzZXIiLCJlcnJvciIsIm1lc3NhZ2UiLCJkaXYiLCJmb3JtIiwib25TdWJtaXQiLCJpbnB1dCIsIm5hbWUiLCJ0eXBlIiwicGxhY2Vob2xkZXIiLCJyZXF1aXJlZCIsImJ1dHRvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(auth)/(with-auth-layout)/user/page.jsx\n"));

/***/ })

});