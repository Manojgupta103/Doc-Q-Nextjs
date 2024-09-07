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

eval(__webpack_require__.ts("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": function() { return /* binding */ Login; }\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"(app-pages-browser)/./node_modules/next/dist/compiled/react/jsx-dev-runtime.js\");\n/* harmony import */ var _lib_store_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../../../lib/store/features/auth/authSlice */ \"(app-pages-browser)/./src/lib/store/features/auth/authSlice.js\");\n/* harmony import */ var axios__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! axios */ \"(app-pages-browser)/./node_modules/axios/lib/axios.js\");\n/* harmony import */ var _lib_store_hooks_index__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../../../lib/store/hooks/index */ \"(app-pages-browser)/./src/lib/store/hooks/index.js\");\n/* harmony import */ var _components_AuthViewer__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @/components/AuthViewer */ \"(app-pages-browser)/./src/components/AuthViewer.jsx\");\n// ADD USER LOGIN PAGE HERE (SHARE LOGIN FORM COMPONENT BETWEEN DOCTORS AND USER LOGIN ROUTES)\n// dummy login page\n/* __next_internal_client_entry_do_not_use__ default auto */ \nvar _s = $RefreshSig$();\n\n\n\n\nfunction Login() {\n    _s();\n    const dispatch = (0,_lib_store_hooks_index__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch)();\n    const [formData, setFormD] = useState({\n        username: \"\",\n        password: \"\"\n    });\n    const handleLogin = async (event)=>{\n        event.preventDefault();\n        // dispatch(loginRequest());\n        console.log();\n        try {\n            const formData = new FormData(event.target);\n            console.log(formData);\n            const response = await axios__WEBPACK_IMPORTED_MODULE_4__[\"default\"].post(\"https://dummyjson.com/auth/login\", {\n                username: formData.get(\"username\"),\n                password: formData.get(\"password\")\n            });\n            dispatch((0,_lib_store_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__.loginSuccess)({\n                token: response.data.token,\n                user: response.data\n            }));\n        } catch (error) {\n            dispatch((0,_lib_store_features_auth_authSlice__WEBPACK_IMPORTED_MODULE_1__.loginFailure)(error.message));\n        }\n    };\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"div\", {\n        children: [\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"form\", {\n                onSubmit: handleLogin,\n                children: [\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"username\",\n                        type: \"username\",\n                        placeholder: \"username\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                        lineNumber: 38,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"input\", {\n                        name: \"password\",\n                        type: \"password\",\n                        placeholder: \"Password\",\n                        required: true\n                    }, void 0, false, {\n                        fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                        lineNumber: 39,\n                        columnNumber: 9\n                    }, this),\n                    /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(\"button\", {\n                        type: \"submit\",\n                        children: \"Login\"\n                    }, void 0, false, {\n                        fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                        lineNumber: 45,\n                        columnNumber: 9\n                    }, this)\n                ]\n            }, void 0, true, {\n                fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                lineNumber: 37,\n                columnNumber: 7\n            }, this),\n            /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(_components_AuthViewer__WEBPACK_IMPORTED_MODULE_3__[\"default\"], {}, void 0, false, {\n                fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n                lineNumber: 47,\n                columnNumber: 7\n            }, this)\n        ]\n    }, void 0, true, {\n        fileName: \"D:\\\\docq-frontend\\\\src\\\\app\\\\(auth)\\\\(with-auth-layout)\\\\user\\\\page.jsx\",\n        lineNumber: 36,\n        columnNumber: 5\n    }, this);\n}\n_s(Login, \"WWvTzbnWFZLxdNM7/fzNwjiuxO8=\", false, function() {\n    return [\n        _lib_store_hooks_index__WEBPACK_IMPORTED_MODULE_2__.useAppDispatch\n    ];\n});\n_c = Login;\nvar _c;\n$RefreshReg$(_c, \"Login\");\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevSignature = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevSignature) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports signature on update so we can compare the boundary\n                // signatures. We avoid saving exports themselves since it causes memory leaks (https://github.com/vercel/next.js/pull/53797)\n                module.hot.dispose(function (data) {\n                    data.prevSignature =\n                        self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports);\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevSignature !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevSignature, self.$RefreshHelpers$.getRefreshBoundarySignature(currentExports))) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevSignature !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKGFwcC1wYWdlcy1icm93c2VyKS8uL3NyYy9hcHAvKGF1dGgpLyh3aXRoLWF1dGgtbGF5b3V0KS91c2VyL3BhZ2UuanN4IiwibWFwcGluZ3MiOiI7Ozs7Ozs7OztBQUFBLDhGQUE4RjtBQUM5RixtQkFBbUI7OztBQUdzRjtBQUMvRTtBQUN5QztBQUNsQjtBQUVsQyxTQUFTTTs7SUFDdEIsTUFBTUMsV0FBV0gsc0VBQWNBO0lBQy9CLE1BQU0sQ0FBQ0ksVUFBVUMsU0FBUyxHQUFHQyxTQUFTO1FBQ3BDQyxVQUFVO1FBQ1ZDLFVBQVU7SUFDWjtJQUVBLE1BQU1DLGNBQWMsT0FBT0M7UUFDekJBLE1BQU1DLGNBQWM7UUFDcEIsNEJBQTRCO1FBQ2hDQyxRQUFRQyxHQUFHO1FBQ1AsSUFBSTtZQUNGLE1BQU1ULFdBQVcsSUFBSVUsU0FBU0osTUFBTUssTUFBTTtZQUMxQ0gsUUFBUUMsR0FBRyxDQUFDVDtZQUNaLE1BQU1ZLFdBQVcsTUFBTWpCLDZDQUFLQSxDQUFDa0IsSUFBSSxDQUFDLG9DQUFvQztnQkFDcEVWLFVBQVVILFNBQVNjLEdBQUcsQ0FBQztnQkFDdkJWLFVBQVVKLFNBQVNjLEdBQUcsQ0FBQztZQUN6QjtZQUVBZixTQUFTTixnRkFBWUEsQ0FBQztnQkFBRXNCLE9BQU9ILFNBQVNJLElBQUksQ0FBQ0QsS0FBSztnQkFBRUUsTUFBTUwsU0FBU0ksSUFBSTtZQUFDO1FBQzFFLEVBQUUsT0FBT0UsT0FBTztZQUNkbkIsU0FBU0wsZ0ZBQVlBLENBQUN3QixNQUFNQyxPQUFPO1FBQ3JDO0lBQ0Y7SUFFQSxxQkFDRSw4REFBQ0M7OzBCQUNDLDhEQUFDQztnQkFBS0MsVUFBVWpCOztrQ0FDZCw4REFBQ2tCO3dCQUFNQyxNQUFLO3dCQUFXQyxNQUFLO3dCQUFXQyxhQUFZO3dCQUFXQyxRQUFROzs7Ozs7a0NBQ3RFLDhEQUFDSjt3QkFDQ0MsTUFBSzt3QkFDTEMsTUFBSzt3QkFDTEMsYUFBWTt3QkFDWkMsUUFBUTs7Ozs7O2tDQUVWLDhEQUFDQzt3QkFBT0gsTUFBSztrQ0FBUzs7Ozs7Ozs7Ozs7OzBCQUV4Qiw4REFBQzVCLDhEQUFVQTs7Ozs7Ozs7Ozs7QUFHakI7R0F4Q3dCQzs7UUFDTEYsa0VBQWNBOzs7S0FEVEUiLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2FwcC8oYXV0aCkvKHdpdGgtYXV0aC1sYXlvdXQpL3VzZXIvcGFnZS5qc3g/ZTE1ZiJdLCJzb3VyY2VzQ29udGVudCI6WyIvLyBBREQgVVNFUiBMT0dJTiBQQUdFIEhFUkUgKFNIQVJFIExPR0lOIEZPUk0gQ09NUE9ORU5UIEJFVFdFRU4gRE9DVE9SUyBBTkQgVVNFUiBMT0dJTiBST1VURVMpXHJcbi8vIGR1bW15IGxvZ2luIHBhZ2VcclxuJ3VzZSBjbGllbnQnO1xyXG5cclxuaW1wb3J0IHsgbG9naW5SZXF1ZXN0LCBsb2dpblN1Y2Nlc3MsIGxvZ2luRmFpbHVyZSB9IGZyb20gJy4uLy4uLy4uLy4uL2xpYi9zdG9yZS9mZWF0dXJlcy9hdXRoL2F1dGhTbGljZSc7XHJcbmltcG9ydCBheGlvcyBmcm9tICdheGlvcyc7XHJcbmltcG9ydCB7IHVzZUFwcERpc3BhdGNoIH0gZnJvbSAnLi4vLi4vLi4vLi4vbGliL3N0b3JlL2hvb2tzL2luZGV4JztcclxuaW1wb3J0IEF1dGhWaWV3ZXIgZnJvbSAnQC9jb21wb25lbnRzL0F1dGhWaWV3ZXInO1xyXG5cclxuZXhwb3J0IGRlZmF1bHQgZnVuY3Rpb24gTG9naW4oKSB7XHJcbiAgY29uc3QgZGlzcGF0Y2ggPSB1c2VBcHBEaXNwYXRjaCgpO1xyXG4gIGNvbnN0IFtmb3JtRGF0YSwgc2V0Rm9ybURdID0gdXNlU3RhdGUoe1xyXG4gICAgdXNlcm5hbWU6IFwiXCIsXHJcbiAgICBwYXNzd29yZDogXCJcIixcclxuICB9KTtcclxuXHJcbiAgY29uc3QgaGFuZGxlTG9naW4gPSBhc3luYyAoZXZlbnQpID0+IHtcclxuICAgIGV2ZW50LnByZXZlbnREZWZhdWx0KCk7XHJcbiAgICAvLyBkaXNwYXRjaChsb2dpblJlcXVlc3QoKSk7XHJcbmNvbnNvbGUubG9nKClcclxuICAgIHRyeSB7XHJcbiAgICAgIGNvbnN0IGZvcm1EYXRhID0gbmV3IEZvcm1EYXRhKGV2ZW50LnRhcmdldCk7XHJcbiAgICAgIGNvbnNvbGUubG9nKGZvcm1EYXRhKVxyXG4gICAgICBjb25zdCByZXNwb25zZSA9IGF3YWl0IGF4aW9zLnBvc3QoXCJodHRwczovL2R1bW15anNvbi5jb20vYXV0aC9sb2dpblwiLCB7XHJcbiAgICAgICAgdXNlcm5hbWU6IGZvcm1EYXRhLmdldChcInVzZXJuYW1lXCIpLFxyXG4gICAgICAgIHBhc3N3b3JkOiBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSxcclxuICAgICAgfSk7XHJcblxyXG4gICAgICBkaXNwYXRjaChsb2dpblN1Y2Nlc3MoeyB0b2tlbjogcmVzcG9uc2UuZGF0YS50b2tlbiwgdXNlcjogcmVzcG9uc2UuZGF0YSB9KSk7XHJcbiAgICB9IGNhdGNoIChlcnJvcikge1xyXG4gICAgICBkaXNwYXRjaChsb2dpbkZhaWx1cmUoZXJyb3IubWVzc2FnZSkpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIHJldHVybiAoXHJcbiAgICA8ZGl2PlxyXG4gICAgICA8Zm9ybSBvblN1Ym1pdD17aGFuZGxlTG9naW59PlxyXG4gICAgICAgIDxpbnB1dCBuYW1lPVwidXNlcm5hbWVcIiB0eXBlPVwidXNlcm5hbWVcIiBwbGFjZWhvbGRlcj1cInVzZXJuYW1lXCIgcmVxdWlyZWQgLz5cclxuICAgICAgICA8aW5wdXRcclxuICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgcGxhY2Vob2xkZXI9XCJQYXNzd29yZFwiXHJcbiAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgIC8+XHJcbiAgICAgICAgPGJ1dHRvbiB0eXBlPVwic3VibWl0XCI+TG9naW48L2J1dHRvbj5cclxuICAgICAgPC9mb3JtPlxyXG4gICAgICA8QXV0aFZpZXdlci8+XHJcbiAgICA8L2Rpdj5cclxuICApO1xyXG59XHJcbiJdLCJuYW1lcyI6WyJsb2dpblJlcXVlc3QiLCJsb2dpblN1Y2Nlc3MiLCJsb2dpbkZhaWx1cmUiLCJheGlvcyIsInVzZUFwcERpc3BhdGNoIiwiQXV0aFZpZXdlciIsIkxvZ2luIiwiZGlzcGF0Y2giLCJmb3JtRGF0YSIsInNldEZvcm1EIiwidXNlU3RhdGUiLCJ1c2VybmFtZSIsInBhc3N3b3JkIiwiaGFuZGxlTG9naW4iLCJldmVudCIsInByZXZlbnREZWZhdWx0IiwiY29uc29sZSIsImxvZyIsIkZvcm1EYXRhIiwidGFyZ2V0IiwicmVzcG9uc2UiLCJwb3N0IiwiZ2V0IiwidG9rZW4iLCJkYXRhIiwidXNlciIsImVycm9yIiwibWVzc2FnZSIsImRpdiIsImZvcm0iLCJvblN1Ym1pdCIsImlucHV0IiwibmFtZSIsInR5cGUiLCJwbGFjZWhvbGRlciIsInJlcXVpcmVkIiwiYnV0dG9uIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///(app-pages-browser)/./src/app/(auth)/(with-auth-layout)/user/page.jsx\n"));

/***/ })

});