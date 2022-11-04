"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
self["webpackHotUpdate_N_E"]("pages/dashboard",{

/***/ "./firebase/firestore.js":
/*!*******************************!*\
  !*** ./firebase/firestore.js ***!
  \*******************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"addReceipt\": function() { return /* binding */ addReceipt; },\n/* harmony export */   \"deleteReceipt\": function() { return /* binding */ deleteReceipt; },\n/* harmony export */   \"getReceiptsMvp\": function() { return /* binding */ getReceiptsMvp; },\n/* harmony export */   \"getReceiptsOcr\": function() { return /* binding */ getReceiptsOcr; },\n/* harmony export */   \"updateReceipt\": function() { return /* binding */ updateReceipt; }\n/* harmony export */ });\n/* harmony import */ var _Users_andreawu_expensetrackerdone_rc_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/dist/compiled/regenerator-runtime/runtime.js */ \"./node_modules/next/dist/compiled/regenerator-runtime/runtime.js\");\n/* harmony import */ var _Users_andreawu_expensetrackerdone_rc_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_Users_andreawu_expensetrackerdone_rc_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var firebase_firestore__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! firebase/firestore */ \"./node_modules/firebase/firestore/dist/index.esm.js\");\n/* harmony import */ var _firebase__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./firebase */ \"./firebase/firebase.js\");\n/* harmony import */ var _storage__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./storage */ \"./firebase/storage.js\");\nfunction asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {\n    try {\n        var info = gen[key](arg);\n        var value = info.value;\n    } catch (error) {\n        reject(error);\n        return;\n    }\n    if (info.done) {\n        resolve(value);\n    } else {\n        Promise.resolve(value).then(_next, _throw);\n    }\n}\nfunction _asyncToGenerator(fn) {\n    return function() {\n        var self = this, args = arguments;\n        return new Promise(function(resolve, reject) {\n            var gen = fn.apply(self, args);\n            function _next(value) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"next\", value);\n            }\n            function _throw(err) {\n                asyncGeneratorStep(gen, resolve, reject, _next, _throw, \"throw\", err);\n            }\n            _next(undefined);\n        });\n    };\n}\nfunction _defineProperty(obj, key, value) {\n    if (key in obj) {\n        Object.defineProperty(obj, key, {\n            value: value,\n            enumerable: true,\n            configurable: true,\n            writable: true\n        });\n    } else {\n        obj[key] = value;\n    }\n    return obj;\n}\nfunction _objectSpread(target) {\n    for(var i = 1; i < arguments.length; i++){\n        var source = arguments[i] != null ? arguments[i] : {};\n        var ownKeys = Object.keys(source);\n        if (typeof Object.getOwnPropertySymbols === \"function\") {\n            ownKeys = ownKeys.concat(Object.getOwnPropertySymbols(source).filter(function(sym) {\n                return Object.getOwnPropertyDescriptor(source, sym).enumerable;\n            }));\n        }\n        ownKeys.forEach(function(key) {\n            _defineProperty(target, key, source[key]);\n        });\n    }\n    return target;\n}\n\n/**\n * @license\n * Copyright 2022 Google LLC\n *\n * Licensed under the Apache License, Version 2.0 (the \"License\");\n * you may not use this file except in compliance with the License.\n * You may obtain a copy of the License at\n *\n *   http://www.apache.org/licenses/LICENSE-2.0\n *\n * Unless required by applicable law or agreed to in writing, software\n * distributed under the License is distributed on an \"AS IS\" BASIS,\n * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.\n * See the License for the specific language governing permissions and\n * limitations under the License.\n */ \n\n\n// Name of receipt collection in Firestore\nvar RECEIPT_COLLECTION = \"receipts\";\n/* \n Adds receipt to Firestore with given receipt information:\n - address: address at which purchase was made\n - amount: amount of expense\n - date: date of purchase\n - imageBucket: bucket at which receipt image is stored in Firebase Storage\n - items: items purchased\n - locationName: name of location\n - uid: user ID who the expense is for\n*/ function addReceipt(uid, date, locationName, address, items, amount, imageBucket) {\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.addDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db, RECEIPT_COLLECTION), {\n        uid: uid,\n        date: date,\n        locationName: locationName,\n        address: address,\n        items: items,\n        amount: amount,\n        imageBucket: imageBucket\n    });\n}\n/* \n Gets @isConfirmed receipts list for given @uid.\n Each receipt contains:\n - address: address of purchase location\n - amount: amount of expense\n - date: receipt date\n - id: document ID of receipt\n - imageURL: download URL of receipt image\n - imageBucket: Firebase Storage bucket of receipt image\n - isConfirmed: whether the user has already confirmed the receipt\n - items: items purchased\n - locationName: name of purchase location\n - uid: user id of which the receipt is for\n */ function getReceiptsMvp(uid) {\n    return _getReceiptsMvp.apply(this, arguments);\n}\nfunction _getReceiptsMvp() {\n    _getReceiptsMvp = _asyncToGenerator(_Users_andreawu_expensetrackerdone_rc_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(uid) {\n        var receipts;\n        return _Users_andreawu_expensetrackerdone_rc_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    receipts = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db, RECEIPT_COLLECTION), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"uid\", \"==\", uid), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)(\"date\", \"desc\"));\n                    _ctx.next = 3;\n                    return processReceipts(receipts);\n                case 3:\n                    return _ctx.abrupt(\"return\", _ctx.sent);\n                case 4:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee);\n    }));\n    return _getReceiptsMvp.apply(this, arguments);\n}\nfunction getReceiptsOcr(uid, isConfirmed) {\n    return _getReceiptsOcr.apply(this, arguments);\n}\nfunction _getReceiptsOcr() {\n    _getReceiptsOcr = _asyncToGenerator(_Users_andreawu_expensetrackerdone_rc_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(uid, isConfirmed) {\n        var receipts, snapshot, allReceipts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, documentSnapshot, receipt;\n        return _Users_andreawu_expensetrackerdone_rc_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    ;\n                    if (!isConfirmed) {\n                        _ctx.next = 47;\n                        break;\n                    }\n                    // When getting receipts that are confirmed, need to also get receipts where there is no \"isConfirmed\" field\n                    receipts = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db, RECEIPT_COLLECTION), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"uid\", \"==\", uid), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)(\"date\", \"desc\"));\n                    _ctx.next = 5;\n                    return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(receipts);\n                case 5:\n                    snapshot = _ctx.sent;\n                    allReceipts = [];\n                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n                    _ctx.prev = 8;\n                    _iterator = snapshot.docs[Symbol.iterator]();\n                case 10:\n                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n                        _ctx.next = 30;\n                        break;\n                    }\n                    documentSnapshot = _step.value;\n                    receipt = documentSnapshot.data();\n                    if (!(receipt[\"isConfirmed\"] == null || receipt[\"isConfirmed\"])) {\n                        _ctx.next = 27;\n                        break;\n                    }\n                    _ctx.t0 = allReceipts;\n                    _ctx.t1 = _objectSpread;\n                    _ctx.t2 = {};\n                    _ctx.t3 = receipt;\n                    _ctx.t4 = receipt[\"date\"].toDate();\n                    _ctx.t5 = documentSnapshot.id;\n                    _ctx.next = 22;\n                    return (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(receipt[\"imageBucket\"]);\n                case 22:\n                    _ctx.t6 = _ctx.sent;\n                    _ctx.t7 = receipt[\"imageBucket\"];\n                    _ctx.t8 = {\n                        date: _ctx.t4,\n                        id: _ctx.t5,\n                        imageUrl: _ctx.t6,\n                        imageBucket: _ctx.t7\n                    };\n                    _ctx.t9 = (0, _ctx.t1)(_ctx.t2, _ctx.t3, _ctx.t8);\n                    _ctx.t0.push.call(_ctx.t0, _ctx.t9);\n                case 27:\n                    _iteratorNormalCompletion = true;\n                    _ctx.next = 10;\n                    break;\n                case 30:\n                    _ctx.next = 36;\n                    break;\n                case 32:\n                    _ctx.prev = 32;\n                    _ctx.t10 = _ctx[\"catch\"](8);\n                    _didIteratorError = true;\n                    _iteratorError = _ctx.t10;\n                case 36:\n                    _ctx.prev = 36;\n                    _ctx.prev = 37;\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                case 39:\n                    _ctx.prev = 39;\n                    if (!_didIteratorError) {\n                        _ctx.next = 42;\n                        break;\n                    }\n                    throw _iteratorError;\n                case 42:\n                    return _ctx.finish(39);\n                case 43:\n                    return _ctx.finish(36);\n                case 44:\n                    return _ctx.abrupt(\"return\", allReceipts);\n                case 47:\n                    {\n                        // When getting receipts that aren't confirmed, can just get receipts where isConfirmed is false\n                        receipts = (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.query)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.collection)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db, RECEIPT_COLLECTION), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"uid\", \"==\", uid), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.where)(\"isConfirmed\", \"==\", isConfirmed), (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.orderBy)(\"date\", \"desc\"));\n                    }\n                case 48:\n                    return _ctx.abrupt(\"return\", processReceipts(receipts));\n                case 49:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                8,\n                32,\n                36,\n                44\n            ],\n            [\n                37,\n                ,\n                39,\n                43\n            ]\n        ]);\n    }));\n    return _getReceiptsOcr.apply(this, arguments);\n}\nfunction processReceipts(receipts) {\n    return _processReceipts.apply(this, arguments);\n}\nfunction _processReceipts() {\n    _processReceipts = _asyncToGenerator(_Users_andreawu_expensetrackerdone_rc_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee(receipts) {\n        var snapshot, allReceipts, _iteratorNormalCompletion, _didIteratorError, _iteratorError, _iterator, _step, documentSnapshot, receipt;\n        return _Users_andreawu_expensetrackerdone_rc_starter_node_modules_next_dist_compiled_regenerator_runtime_runtime_js__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_ctx) {\n            while(1)switch(_ctx.prev = _ctx.next){\n                case 0:\n                    _ctx.next = 2;\n                    return (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.getDocs)(receipts);\n                case 2:\n                    snapshot = _ctx.sent;\n                    allReceipts = [];\n                    _iteratorNormalCompletion = true, _didIteratorError = false, _iteratorError = undefined;\n                    _ctx.prev = 5;\n                    _iterator = snapshot.docs[Symbol.iterator]();\n                case 7:\n                    if (_iteratorNormalCompletion = (_step = _iterator.next()).done) {\n                        _ctx.next = 26;\n                        break;\n                    }\n                    documentSnapshot = _step.value;\n                    receipt = documentSnapshot.data();\n                    _ctx.t0 = allReceipts;\n                    _ctx.t1 = _objectSpread;\n                    _ctx.t2 = {};\n                    _ctx.t3 = receipt;\n                    _ctx.t4 = receipt[\"date\"].toDate();\n                    _ctx.t5 = documentSnapshot.id;\n                    _ctx.next = 18;\n                    return (0,_storage__WEBPACK_IMPORTED_MODULE_3__.getDownloadURL)(receipt[\"imageBucket\"]);\n                case 18:\n                    _ctx.t6 = _ctx.sent;\n                    _ctx.t7 = receipt[\"imageBucket\"];\n                    _ctx.t8 = {\n                        date: _ctx.t4,\n                        id: _ctx.t5,\n                        imageUrl: _ctx.t6,\n                        imageBucket: _ctx.t7\n                    };\n                    _ctx.t9 = (0, _ctx.t1)(_ctx.t2, _ctx.t3, _ctx.t8);\n                    _ctx.t0.push.call(_ctx.t0, _ctx.t9);\n                case 23:\n                    _iteratorNormalCompletion = true;\n                    _ctx.next = 7;\n                    break;\n                case 26:\n                    _ctx.next = 32;\n                    break;\n                case 28:\n                    _ctx.prev = 28;\n                    _ctx.t10 = _ctx[\"catch\"](5);\n                    _didIteratorError = true;\n                    _iteratorError = _ctx.t10;\n                case 32:\n                    _ctx.prev = 32;\n                    _ctx.prev = 33;\n                    if (!_iteratorNormalCompletion && _iterator.return != null) {\n                        _iterator.return();\n                    }\n                case 35:\n                    _ctx.prev = 35;\n                    if (!_didIteratorError) {\n                        _ctx.next = 38;\n                        break;\n                    }\n                    throw _iteratorError;\n                case 38:\n                    return _ctx.finish(35);\n                case 39:\n                    return _ctx.finish(32);\n                case 40:\n                    return _ctx.abrupt(\"return\", allReceipts);\n                case 41:\n                case \"end\":\n                    return _ctx.stop();\n            }\n        }, _callee, null, [\n            [\n                5,\n                28,\n                32,\n                40\n            ],\n            [\n                33,\n                ,\n                35,\n                39\n            ]\n        ]);\n    }));\n    return _processReceipts.apply(this, arguments);\n}\n// Updates receipt with @docId with given information.\nfunction updateReceipt(docId, uid, date, locationName, address, items, amount, imageBucket, isConfirmed) {\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.setDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db, RECEIPT_COLLECTION, docId), {\n        uid: uid,\n        date: date,\n        locationName: locationName,\n        address: address,\n        items: items,\n        amount: amount,\n        imageBucket: imageBucket,\n        isConfirmed: isConfirmed\n    });\n}\n// Deletes receipt with given @id.\nfunction deleteReceipt(id) {\n    (0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.deleteDoc)((0,firebase_firestore__WEBPACK_IMPORTED_MODULE_1__.doc)(_firebase__WEBPACK_IMPORTED_MODULE_2__.db, RECEIPT_COLLECTION, id));\n}\n\n\n;\n    // Wrapped in an IIFE to avoid polluting the global scope\n    ;\n    (function () {\n        var _a, _b;\n        // Legacy CSS implementations will `eval` browser code in a Node.js context\n        // to extract CSS. For backwards compatibility, we need to check we're in a\n        // browser context before continuing.\n        if (typeof self !== 'undefined' &&\n            // AMP / No-JS mode does not inject these helpers:\n            '$RefreshHelpers$' in self) {\n            // @ts-ignore __webpack_module__ is global\n            var currentExports = module.exports;\n            // @ts-ignore __webpack_module__ is global\n            var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;\n            // This cannot happen in MainTemplate because the exports mismatch between\n            // templating and execution.\n            self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);\n            // A module can be accepted automatically based on its exports, e.g. when\n            // it is a Refresh Boundary.\n            if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {\n                // Save the previous exports on update so we can compare the boundary\n                // signatures.\n                module.hot.dispose(function (data) {\n                    data.prevExports = currentExports;\n                });\n                // Unconditionally accept an update to this module, we'll check if it's\n                // still a Refresh Boundary later.\n                // @ts-ignore importMeta is replaced in the loader\n                module.hot.accept();\n                // This field is set when the previous version of this module was a\n                // Refresh Boundary, letting us know we need to check for invalidation or\n                // enqueue an update.\n                if (prevExports !== null) {\n                    // A boundary can become ineligible if its exports are incompatible\n                    // with the previous exports.\n                    //\n                    // For example, if you add/remove/change exports, we'll want to\n                    // re-execute the importing modules, and force those components to\n                    // re-render. Similarly, if you convert a class component to a\n                    // function, we want to invalidate the boundary.\n                    if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {\n                        module.hot.invalidate();\n                    }\n                    else {\n                        self.$RefreshHelpers$.scheduleUpdate();\n                    }\n                }\n            }\n            else {\n                // Since we just executed the code for the module, it's possible that the\n                // new exports made it ineligible for being a boundary.\n                // We only care about the case when we were _previously_ a boundary,\n                // because we already accepted this update (accidental side effect).\n                var isNoLongerABoundary = prevExports !== null;\n                if (isNoLongerABoundary) {\n                    module.hot.invalidate();\n                }\n            }\n        }\n    })();\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,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QUVDLFlBQVksRUFBWkEsWUFBWTtRQUFFQyxPQUFPLEVBQVBBLE9BQU87UUFBRUMsS0FBSyxFQUFMQSxLQUFLO1FBQUVDLE1BQU0sRUFBTkEsTUFBTTtRQUFFQyxXQUFXLEVBQVhBLFdBQVc7UUFBRUssV0FBVyxFQUFYQSxXQUFXO0tBQUUsQ0FBQyxDQUFDO0NBQzNIO0FBRUQsa0NBQWtDO0FBQzNCLFNBQVNhLGFBQWEsQ0FBQ0wsRUFBRSxFQUFFO0lBQ2hDOUIsNkRBQVMsQ0FBQ0MsdURBQUcsQ0FBQ00seUNBQUUsRUFBRUUsa0JBQWtCLEVBQUVxQixFQUFFLENBQUMsQ0FBQyxDQUFDO0NBQzVDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vX05fRS8uL2ZpcmViYXNlL2ZpcmVzdG9yZS5qcz8wZjlmIl0sInNvdXJjZXNDb250ZW50IjpbIi8qKlxuICogQGxpY2Vuc2VcbiAqIENvcHlyaWdodCAyMDIyIEdvb2dsZSBMTENcbiAqXG4gKiBMaWNlbnNlZCB1bmRlciB0aGUgQXBhY2hlIExpY2Vuc2UsIFZlcnNpb24gMi4wICh0aGUgXCJMaWNlbnNlXCIpO1xuICogeW91IG1heSBub3QgdXNlIHRoaXMgZmlsZSBleGNlcHQgaW4gY29tcGxpYW5jZSB3aXRoIHRoZSBMaWNlbnNlLlxuICogWW91IG1heSBvYnRhaW4gYSBjb3B5IG9mIHRoZSBMaWNlbnNlIGF0XG4gKlxuICogICBodHRwOi8vd3d3LmFwYWNoZS5vcmcvbGljZW5zZXMvTElDRU5TRS0yLjBcbiAqXG4gKiBVbmxlc3MgcmVxdWlyZWQgYnkgYXBwbGljYWJsZSBsYXcgb3IgYWdyZWVkIHRvIGluIHdyaXRpbmcsIHNvZnR3YXJlXG4gKiBkaXN0cmlidXRlZCB1bmRlciB0aGUgTGljZW5zZSBpcyBkaXN0cmlidXRlZCBvbiBhbiBcIkFTIElTXCIgQkFTSVMsXG4gKiBXSVRIT1VUIFdBUlJBTlRJRVMgT1IgQ09ORElUSU9OUyBPRiBBTlkgS0lORCwgZWl0aGVyIGV4cHJlc3Mgb3IgaW1wbGllZC5cbiAqIFNlZSB0aGUgTGljZW5zZSBmb3IgdGhlIHNwZWNpZmljIGxhbmd1YWdlIGdvdmVybmluZyBwZXJtaXNzaW9ucyBhbmRcbiAqIGxpbWl0YXRpb25zIHVuZGVyIHRoZSBMaWNlbnNlLlxuICovXG5cbmltcG9ydCB7IGFkZERvYywgY29sbGVjdGlvbiwgZGVsZXRlRG9jLCBkb2MsIGdldERvY3MsIG9yZGVyQnksIHF1ZXJ5LCBzZXREb2MsIHdoZXJlIH0gZnJvbSAnZmlyZWJhc2UvZmlyZXN0b3JlJzsgXG5pbXBvcnQgeyBkYiB9IGZyb20gJy4vZmlyZWJhc2UnO1xuaW1wb3J0IHsgZ2V0RG93bmxvYWRVUkwgfSBmcm9tICcuL3N0b3JhZ2UnO1xuXG4vLyBOYW1lIG9mIHJlY2VpcHQgY29sbGVjdGlvbiBpbiBGaXJlc3RvcmVcbmNvbnN0IFJFQ0VJUFRfQ09MTEVDVElPTiA9ICdyZWNlaXB0cyc7XG5cbi8qIFxuIEFkZHMgcmVjZWlwdCB0byBGaXJlc3RvcmUgd2l0aCBnaXZlbiByZWNlaXB0IGluZm9ybWF0aW9uOlxuIC0gYWRkcmVzczogYWRkcmVzcyBhdCB3aGljaCBwdXJjaGFzZSB3YXMgbWFkZVxuIC0gYW1vdW50OiBhbW91bnQgb2YgZXhwZW5zZVxuIC0gZGF0ZTogZGF0ZSBvZiBwdXJjaGFzZVxuIC0gaW1hZ2VCdWNrZXQ6IGJ1Y2tldCBhdCB3aGljaCByZWNlaXB0IGltYWdlIGlzIHN0b3JlZCBpbiBGaXJlYmFzZSBTdG9yYWdlXG4gLSBpdGVtczogaXRlbXMgcHVyY2hhc2VkXG4gLSBsb2NhdGlvbk5hbWU6IG5hbWUgb2YgbG9jYXRpb25cbiAtIHVpZDogdXNlciBJRCB3aG8gdGhlIGV4cGVuc2UgaXMgZm9yXG4qL1xuZXhwb3J0IGZ1bmN0aW9uIGFkZFJlY2VpcHQodWlkLCBkYXRlLCBsb2NhdGlvbk5hbWUsIGFkZHJlc3MsIGl0ZW1zLCBhbW91bnQsIGltYWdlQnVja2V0KSB7XG4gIGFkZERvYyhjb2xsZWN0aW9uKGRiLCBSRUNFSVBUX0NPTExFQ1RJT04pLCB7IHVpZCwgZGF0ZSwgbG9jYXRpb25OYW1lLCBhZGRyZXNzLCBpdGVtcywgYW1vdW50LCBpbWFnZUJ1Y2tldCB9KTtcbn1cblxuLyogXG4gR2V0cyBAaXNDb25maXJtZWQgcmVjZWlwdHMgbGlzdCBmb3IgZ2l2ZW4gQHVpZC5cbiBFYWNoIHJlY2VpcHQgY29udGFpbnM6XG4gLSBhZGRyZXNzOiBhZGRyZXNzIG9mIHB1cmNoYXNlIGxvY2F0aW9uXG4gLSBhbW91bnQ6IGFtb3VudCBvZiBleHBlbnNlXG4gLSBkYXRlOiByZWNlaXB0IGRhdGVcbiAtIGlkOiBkb2N1bWVudCBJRCBvZiByZWNlaXB0XG4gLSBpbWFnZVVSTDogZG93bmxvYWQgVVJMIG9mIHJlY2VpcHQgaW1hZ2VcbiAtIGltYWdlQnVja2V0OiBGaXJlYmFzZSBTdG9yYWdlIGJ1Y2tldCBvZiByZWNlaXB0IGltYWdlXG4gLSBpc0NvbmZpcm1lZDogd2hldGhlciB0aGUgdXNlciBoYXMgYWxyZWFkeSBjb25maXJtZWQgdGhlIHJlY2VpcHRcbiAtIGl0ZW1zOiBpdGVtcyBwdXJjaGFzZWRcbiAtIGxvY2F0aW9uTmFtZTogbmFtZSBvZiBwdXJjaGFzZSBsb2NhdGlvblxuIC0gdWlkOiB1c2VyIGlkIG9mIHdoaWNoIHRoZSByZWNlaXB0IGlzIGZvclxuICovXG4gZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGdldFJlY2VpcHRzTXZwKHVpZCkge1xuICBjb25zdCByZWNlaXB0cyA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFJFQ0VJUFRfQ09MTEVDVElPTiksIHdoZXJlKFwidWlkXCIsIFwiPT1cIiwgdWlkKSwgb3JkZXJCeShcImRhdGVcIiwgXCJkZXNjXCIpKTtcbiAgcmV0dXJuIGF3YWl0IHByb2Nlc3NSZWNlaXB0cyhyZWNlaXB0cyk7XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBnZXRSZWNlaXB0c09jcih1aWQsIGlzQ29uZmlybWVkKSB7XG4gIGxldCByZWNlaXB0cztcbiAgaWYgKGlzQ29uZmlybWVkKSB7XG4gICAgLy8gV2hlbiBnZXR0aW5nIHJlY2VpcHRzIHRoYXQgYXJlIGNvbmZpcm1lZCwgbmVlZCB0byBhbHNvIGdldCByZWNlaXB0cyB3aGVyZSB0aGVyZSBpcyBubyBcImlzQ29uZmlybWVkXCIgZmllbGRcbiAgICByZWNlaXB0cyA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFJFQ0VJUFRfQ09MTEVDVElPTiksIHdoZXJlKFwidWlkXCIsIFwiPT1cIiwgdWlkKSwgb3JkZXJCeShcImRhdGVcIiwgXCJkZXNjXCIpKTsgICAgXG5cbiAgICAvLyBGaWx0ZXIgb3V0IHRoZSByZWNlaXB0cyB3aGVyZSBpc0NvbmZpcm1lZCBpcyBmYWxzZSAoaGVuY2UgbGVhdmluZyB0aGUgb25lcyB3aXRob3V0IHRoZSBpc0NvbmZpcm1lZCBmaWVsZCBvciBpc0NvbmZpcm1lZCBhcyB0cnVlKVxuICAgIGNvbnN0IHNuYXBzaG90ID0gYXdhaXQgZ2V0RG9jcyhyZWNlaXB0cyk7XG5cbiAgICBsZXQgYWxsUmVjZWlwdHMgPSBbXTtcbiAgICBmb3IgKGNvbnN0IGRvY3VtZW50U25hcHNob3Qgb2Ygc25hcHNob3QuZG9jcykge1xuICAgICAgY29uc3QgcmVjZWlwdCA9IGRvY3VtZW50U25hcHNob3QuZGF0YSgpO1xuICAgICAgaWYgKHJlY2VpcHRbJ2lzQ29uZmlybWVkJ10gPT0gbnVsbCB8fCByZWNlaXB0Wydpc0NvbmZpcm1lZCddKSB7XG4gICAgICAgIGFsbFJlY2VpcHRzLnB1c2goe1xuICAgICAgICAgIC4uLnJlY2VpcHQsIFxuICAgICAgICAgIGRhdGU6IHJlY2VpcHRbJ2RhdGUnXS50b0RhdGUoKSwgXG4gICAgICAgICAgaWQ6IGRvY3VtZW50U25hcHNob3QuaWQsXG4gICAgICAgICAgaW1hZ2VVcmw6IGF3YWl0IGdldERvd25sb2FkVVJMKHJlY2VpcHRbJ2ltYWdlQnVja2V0J10pLFxuICAgICAgICAgIGltYWdlQnVja2V0OiByZWNlaXB0WydpbWFnZUJ1Y2tldCddLFxuICAgICAgICB9KTtcbiAgICAgIH1cbiAgICB9XG4gICAgcmV0dXJuIGFsbFJlY2VpcHRzOyBcbiAgfSBlbHNlIHtcbiAgICAvLyBXaGVuIGdldHRpbmcgcmVjZWlwdHMgdGhhdCBhcmVuJ3QgY29uZmlybWVkLCBjYW4ganVzdCBnZXQgcmVjZWlwdHMgd2hlcmUgaXNDb25maXJtZWQgaXMgZmFsc2VcbiAgICByZWNlaXB0cyA9IHF1ZXJ5KGNvbGxlY3Rpb24oZGIsIFJFQ0VJUFRfQ09MTEVDVElPTiksIHdoZXJlKFwidWlkXCIsIFwiPT1cIiwgdWlkKSwgd2hlcmUoXCJpc0NvbmZpcm1lZFwiLCBcIj09XCIsIGlzQ29uZmlybWVkKSwgb3JkZXJCeShcImRhdGVcIiwgXCJkZXNjXCIpKTtcbiAgfVxuXG4gIHJldHVybiBwcm9jZXNzUmVjZWlwdHMocmVjZWlwdHMpO1xufVxuXG5hc3luYyBmdW5jdGlvbiBwcm9jZXNzUmVjZWlwdHMocmVjZWlwdHMpIHtcbiAgY29uc3Qgc25hcHNob3QgPSBhd2FpdCBnZXREb2NzKHJlY2VpcHRzKTtcblxuICBsZXQgYWxsUmVjZWlwdHMgPSBbXTtcbiAgZm9yIChjb25zdCBkb2N1bWVudFNuYXBzaG90IG9mIHNuYXBzaG90LmRvY3MpIHtcbiAgICBjb25zdCByZWNlaXB0ID0gZG9jdW1lbnRTbmFwc2hvdC5kYXRhKCk7XG4gICAgYWxsUmVjZWlwdHMucHVzaCh7XG4gICAgICAuLi5yZWNlaXB0LCBcbiAgICAgIGRhdGU6IHJlY2VpcHRbJ2RhdGUnXS50b0RhdGUoKSwgXG4gICAgICBpZDogZG9jdW1lbnRTbmFwc2hvdC5pZCxcbiAgICAgIGltYWdlVXJsOiBhd2FpdCBnZXREb3dubG9hZFVSTChyZWNlaXB0WydpbWFnZUJ1Y2tldCddKSxcbiAgICAgIGltYWdlQnVja2V0OiByZWNlaXB0WydpbWFnZUJ1Y2tldCddLFxuICAgIH0pO1xuICB9XG4gIHJldHVybiBhbGxSZWNlaXB0cztcbn1cblxuLy8gVXBkYXRlcyByZWNlaXB0IHdpdGggQGRvY0lkIHdpdGggZ2l2ZW4gaW5mb3JtYXRpb24uXG5leHBvcnQgZnVuY3Rpb24gdXBkYXRlUmVjZWlwdChkb2NJZCwgdWlkLCBkYXRlLCBsb2NhdGlvbk5hbWUsIGFkZHJlc3MsIGl0ZW1zLCBhbW91bnQsIGltYWdlQnVja2V0LCBpc0NvbmZpcm1lZCkge1xuICBzZXREb2MoZG9jKGRiLCBSRUNFSVBUX0NPTExFQ1RJT04sIGRvY0lkKSwgeyB1aWQsIGRhdGUsIGxvY2F0aW9uTmFtZSwgYWRkcmVzcywgaXRlbXMsIGFtb3VudCwgaW1hZ2VCdWNrZXQsIGlzQ29uZmlybWVkIH0pO1xufVxuXG4vLyBEZWxldGVzIHJlY2VpcHQgd2l0aCBnaXZlbiBAaWQuXG5leHBvcnQgZnVuY3Rpb24gZGVsZXRlUmVjZWlwdChpZCkge1xuICBkZWxldGVEb2MoZG9jKGRiLCBSRUNFSVBUX0NPTExFQ1RJT04sIGlkKSk7XG59Il0sIm5hbWVzIjpbImFkZERvYyIsImNvbGxlY3Rpb24iLCJkZWxldGVEb2MiLCJkb2MiLCJnZXREb2NzIiwib3JkZXJCeSIsInF1ZXJ5Iiwic2V0RG9jIiwid2hlcmUiLCJkYiIsImdldERvd25sb2FkVVJMIiwiUkVDRUlQVF9DT0xMRUNUSU9OIiwiYWRkUmVjZWlwdCIsInVpZCIsImRhdGUiLCJsb2NhdGlvbk5hbWUiLCJhZGRyZXNzIiwiaXRlbXMiLCJhbW91bnQiLCJpbWFnZUJ1Y2tldCIsImdldFJlY2VpcHRzTXZwIiwicmVjZWlwdHMiLCJwcm9jZXNzUmVjZWlwdHMiLCJnZXRSZWNlaXB0c09jciIsImlzQ29uZmlybWVkIiwic25hcHNob3QiLCJhbGxSZWNlaXB0cyIsImRvY3VtZW50U25hcHNob3QiLCJyZWNlaXB0IiwiZG9jcyIsImRhdGEiLCJ0b0RhdGUiLCJpZCIsImltYWdlVXJsIiwicHVzaCIsInVwZGF0ZVJlY2VpcHQiLCJkb2NJZCIsImRlbGV0ZVJlY2VpcHQiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./firebase/firestore.js\n");

/***/ })

});