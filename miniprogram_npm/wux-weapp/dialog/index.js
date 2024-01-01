"use strict";var _baseComponent=_interopRequireDefault(require("../helpers/baseComponent")),_classNames3=_interopRequireDefault(require("../helpers/classNames")),_utils=require("./utils");function _interopRequireDefault(t){return t&&t.__esModule?t:{default:t}}function ownKeys(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter(function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable})),n.push.apply(n,o)}return n}function _objectSpread(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?ownKeys(n,!0).forEach(function(t){_defineProperty(e,t,n[t])}):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):ownKeys(n).forEach(function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))})}return e}function _defineProperty(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}(0,_baseComponent.default)({useFunc:!0,data:_utils.defaults,computed:{classes:["prefixCls, buttons, verticalButtons",function(n,t,e){return{prompt:"".concat(n,"__prompt"),input:"".concat(n,"__input"),buttons:(0,_classNames3.default)("".concat(n,"__buttons"),_defineProperty({},"".concat(n,"__buttons--").concat(e?"vertical":"horizontal"),!0)),button:t.map(function(t){var e;return{wrap:(0,_classNames3.default)("".concat(n,"__button"),(_defineProperty(e={},"".concat(n,"__button--").concat(t.type||"default"),t.type||"default"),_defineProperty(e,"".concat(n,"__button--bold"),t.bold),_defineProperty(e,"".concat(n,"__button--disabled"),t.disabled),_defineProperty(e,"".concat(t.className),t.className),e)),hover:t.hoverClass&&"default"!==t.hoverClass?t.hoverClass:"".concat(n,"__button--hover")}})}}]},methods:{onClosed:function(){if(this.data.resetOnClose){var t=_objectSpread({},this.$$mergeOptionsToData(_utils.defaults),{prompt:null});this.$$setData(t)}},onClose:function(){this.hide()},hide:function(t){this.$$setData({in:!1}),"function"==typeof t&&t.call(this)},show:function(t){var e=0<arguments.length&&void 0!==t?t:{},n=this.$$mergeOptionsAndBindMethods(Object.assign({},_utils.defaults,e));return this.$$setData(_objectSpread({in:!0},n)),this.originalButtons=n.buttons,this.hide.bind(this)},runCallbacks:function(t,e){var n=t.currentTarget.dataset.index,o=this.originalButtons[n];o.disabled||this.hide(function(){return"function"==typeof o[e]&&o[e](t)})},buttonTapped:function(t){this.runCallbacks(t,"onTap")},bindgetuserinfo:function(t){this.runCallbacks(t,"onGetUserInfo")},bindcontact:function(t){this.runCallbacks(t,"onContact")},bindgetphonenumber:function(t){this.runCallbacks(t,"onGotPhoneNumber")},bindopensetting:function(t){this.runCallbacks(t,"onOpenSetting")},bindlaunchapp:function(t){this.runCallbacks(t,"onLaunchApp")},bindchooseavatar:function(t){this.runCallbacks(t,"onChooseAvatar")},onError:function(t){this.runCallbacks(t,"onError")},bindinput:function(t){this.$$setData({"prompt.response":t.detail.value})},open:function(t){var e=0<arguments.length&&void 0!==t?t:{};return this.show(e)},alert:function(t){var e=0<arguments.length&&void 0!==t?t:{};return this.open(Object.assign(_objectSpread({},e,{buttons:[{text:e.confirmText||_utils.defaultOptions.confirmText,type:e.confirmType||_utils.defaultOptions.confirmType,onTap:function(t){"function"==typeof e.onConfirm&&e.onConfirm(t)}}]})))},confirm:function(t){var e=0<arguments.length&&void 0!==t?t:{};return this.open(Object.assign(_objectSpread({},e,{buttons:[{text:e.cancelText||_utils.defaultOptions.cancelText,type:e.cancelType||_utils.defaultOptions.cancelType,onTap:function(t){"function"==typeof e.onCancel&&e.onCancel(t)}},{text:e.confirmText||_utils.defaultOptions.confirmText,type:e.confirmType||_utils.defaultOptions.confirmType,onTap:function(t){"function"==typeof e.onConfirm&&e.onConfirm(t)}}]})))},prompt:function(){var e=this,n=0<arguments.length&&void 0!==arguments[0]?arguments[0]:{},t={fieldtype:n.fieldtype?n.fieldtype:"text",password:!!n.password,response:n.defaultText?n.defaultText:"",placeholder:n.placeholder?n.placeholder:"",maxlength:n.maxlength?parseInt(n.maxlength):""};return this.open(Object.assign(_objectSpread({},n,{prompt:t,buttons:[{text:n.cancelText||_utils.defaultOptions.cancelText,type:n.cancelType||_utils.defaultOptions.cancelType,onTap:function(t){"function"==typeof n.onCancel&&n.onCancel(t)}},{text:n.confirmText||_utils.defaultOptions.confirmText,type:n.confirmType||_utils.defaultOptions.confirmType,onTap:function(t){"function"==typeof n.onConfirm&&n.onConfirm(t,e.data.prompt.response)}}]})))}}});