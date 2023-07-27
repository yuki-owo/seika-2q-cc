/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	var __webpack_modules__ = ({

/***/ "./src/index.js":
/*!**********************!*\
  !*** ./src/index.js ***!
  \**********************/
/***/ (() => {

eval("const validator = new JustValidate(document.querySelector('#basic_form'));\n\nvalidator\n  .addField(document.querySelector('#basic_name'), [{\n      rule: 'required',\n\terrorMessage: '必須入力項目です。',\n    },{\n      rule: 'minLength',\n      value: 3,\n\terrorMessage: '3文字以上で入力してください。',\n    },{\n      rule: 'maxLength',\n      value: 15,\n\terrorMessage: '最大入力文字数は15文字です。',\n\t},\n  ])\n  .addField(document.querySelector('#basic_email'), [{\n      rule: 'required',\n\terrorMessage: '必須入力項目です。',\n    },{\n      rule: 'email',\n\terrorMessage: '形式が正しくありません。',\n    },\n  ])\n  .addField(document.querySelector('#basic_password'), [{\n      rule: 'required',\n\terrorMessage: '必須入力項目です。',\n    },{\n      rule: 'password',\n\terrorMessage: 'パスワードは8文字以上で入力してください。その際に数字を1文字以上含める必要があります。',\n\t},\n  ])\n  .addField(document.querySelector('#basic_age'), [{\n      rule: 'required',\n\terrorMessage: '必須入力項目です。',\n    },{\n      rule: 'number',\n\terrorMessage: '数字で入力してください。',\n    },{\n      rule: 'minNumber',\n      value: 18,\n\terrorMessage: '18以上の数字を入力してください。',\n    },{\n      rule: 'maxNumber',\n      value: 150,\n\terrorMessage: '150以下の数字を入力してください。',\n    },\n\t])\n  .addField(document.querySelector('#basic_address'), [\n\t{\n\t  rule: 'required',\n\t  errorMessage: '必須入力項目です。',\n\t},\n\t])\n\t.onSuccess((event) =>{\n\t\tlet formData = new FormData(event.target);\n\t\tconsole.log(formData.get(\"name\"));\n\t\tconsole.log(formData.get(\"email\"));\n\t\tconsole.log(formData.get(\"password\"));\n\t\tconsole.log(formData.get(\"age\"));\n\t\tconsole.log(formData.get(\"address\"));\n\t});\n\n//# sourceURL=webpack://homepage/./src/index.js?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./src/index.js"]();
/******/ 	
/******/ })()
;