/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	let installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId])
/******/ 			return installedModules[moduleId].exports;
/******/
/******/ 		// Create a new module (and put it into the cache)
/******/ 		let module = installedModules[moduleId] = {
/******/ 			exports: {},
/******/ 			id: moduleId,
/******/ 			loaded: false
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.loaded = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(0);
/******/ })
/************************************************************************/
/******/ ([
/* 0 */
/***/ function(module, exports, __webpack_require__) {

	let __WEBPACK_AMD_DEFINE_ARRAY__, __WEBPACK_AMD_DEFINE_RESULT__;/*istanbul ignore next*/'use strict';
	
	let info = __webpack_require__(1);
	let utils = __webpack_require__(2);
	let Watcher = __webpack_require__(3);
	let Observer = __webpack_require__(5);
	let Template = __webpack_require__(9);
	let Component = __webpack_require__(31);
	let EventEmitter = __webpack_require__(6);
	let Router = __webpack_require__(36);
	
	//持载模板相关对象
	utils.copy(Template, Component);
	
	Component.version = info.version;
	Component.Template = Template;
	Component.Watcher = Watcher;
	Component.Observer = Observer;
	Component.EventEmitter = EventEmitter;
	Component.utils = utils;
	Component.Router = Router;
	
	//定义安装插件的方法
	Component.use = function (plugin) {
	  if (utils.isNull(plugin) || !utils.isFunction(plugin.install)) {
	    throw new Error('Invalid Plugin');
	  }
	  plugin.install(this);
	};
	
	//安装内置的路由插件
	Component.use(Router);
	
	//兼容 amd 模块
	if (true) {
	  !(__WEBPACK_AMD_DEFINE_ARRAY__ = [], __WEBPACK_AMD_DEFINE_RESULT__ = function () {
	    return Component;
	  }.apply(exports, __WEBPACK_AMD_DEFINE_ARRAY__), __WEBPACK_AMD_DEFINE_RESULT__ !== undefined && (module.exports = __WEBPACK_AMD_DEFINE_RESULT__));
	}
	
	//普通脚本引入
	if (typeof window !== 'undefined') {
	  window[info.name] = Component;
	}
	
	module.exports = Component;

/***/ },
/* 1 */
/***/ function(module, exports) {

	/*istanbul ignore next*/"use strict";
	
	module.exports = {
		"name": "mokit",
		"version": "3.0.0-rc15"
	};

/***/ },
/* 2 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/"use strict";
	
	let _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function (obj) { return typeof obj; } : function (obj) { return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj; };
	
	(function (ntils) {
	
	  /**
	   * 空函数
	   */
	  ntils.noop = function () {};
	
	  /**
	   * 验证一个对象是否为NULL
	   * @method isNull
	   * @param  {Object}  obj 要验证的对象
	   * @return {Boolean}     结果
	   * @static
	   */
	  ntils.isNull = function (obj) {
	    return obj === null || typeof obj === "undefined";
	  };
	
	  /**
	   * 除去字符串两端的空格
	   * @method trim
	   * @param  {String} str 源字符串
	   * @return {String}     结果字符串
	   * @static
	   */
	  ntils.trim = function (str) {
	    if (this.isNull(str)) return str;
	    if (str.trim) {
	      return str.trim();
	    } else {
	      return str.replace(/(^[\\s]*)|([\\s]*$)/g, "");
	    }
	  };
	
	  /**
	   * 替换所有
	   * @method replace
	   * @param {String} str 源字符串
	   * @param {String} str1 要替换的字符串
	   * @param {String} str2 替换为的字符串
	   * @static
	   */
	  ntils.replace = function (str, str1, str2) {
	    if (this.isNull(str)) return str;
	    return str.replace(new RegExp(str1, 'g'), str2);
	  };
	
	  /**
	   * 从字符串开头匹配
	   * @method startWith
	   * @param {String} str1 源字符串
	   * @param {String} str2 要匹配的字符串
	   * @return {Boolean} 匹配结果
	   * @static
	   */
	  ntils.startWith = function (str1, str2) {
	    if (this.isNull(str1) || this.isNull(str2)) return false;
	    return str1.indexOf(str2) === 0;
	  };
	
	  /**
	   * 是否包含
	   * @method contains
	   * @param {String} str1 源字符串
	   * @param {String} str2 检查包括字符串
	   * @return {Boolean} 结果
	   * @static
	   */
	  ntils.contains = function (str1, str2) {
	    let self = this;
	    if (this.isNull(str1) || this.isNull(str2)) return false;
	    return str1.indexOf(str2) > -1;
	  };
	
	  /**
	   * 从字符串结束匹配
	   * @method endWidth
	   * @param {String} str1 源字符串
	   * @param {String} str2 匹配字符串
	   * @return {Boolean} 匹配结果
	   * @static
	   */
	  ntils.endWith = function (str1, str2) {
	    if (this.isNull(str1) || this.isNull(str2)) return false;
	    return str1.indexOf(str2) === str1.length - str2.length;
	  };
	
	  /**
	   * 是否包含属性
	   * @method hasProperty
	   * @param  {Object}  obj  对象
	   * @param  {String}  name 属性名
	   * @return {Boolean}      结果
	   * @static
	   */
	  ntils.has = ntils.hasProperty = function (obj, name) {
	    if (this.isNull(obj) || this.isNull(name)) return false;
	    return name in obj || obj.hasOwnProperty(name);
	  };
	
	  /**
	   * 验证一个对象是否为Function
	   * @method isFunction
	   * @param  {Object}  obj 要验证的对象
	   * @return {Boolean}     结果
	   * @static
	   */
	  ntils.isFunction = function (obj) {
	    if (this.isNull(obj)) return false;
	    return typeof obj === "function";
	  };
	
	  /**
	   * 验证一个对象是否为String
	   * @method isString
	   * @param  {Object}  obj 要验证的对象
	   * @return {Boolean}     结果
	   * @static
	   */
	  ntils.isString = function (obj) {
	    if (this.isNull(obj)) return false;
	    return typeof obj === 'string' || obj instanceof String;
	  };
	
	  /**
	   * 验证一个对象是否为Number
	   * @method isNumber
	   * @param  {Object}  obj 要验证的对象
	   * @return {Boolean}     结果
	   * @static
	   */
	  ntils.isNumber = function (obj) {
	    if (this.isNull(obj)) return false;
	    return typeof obj === 'number' || obj instanceof Number;
	  };
	
	  /**
	   * 验证一个对象是否为Boolean
	   * @method isBoolean
	   * @param  {Object}  obj 要验证的对象
	   * @return {Boolean}     结果
	   * @static
	   */
	  ntils.isBoolean = function (obj) {
	    if (this.isNull(obj)) return false;
	    return typeof obj === 'boolean' || obj instanceof Boolean;
	  };
	
	  /**
	   * 验证一个对象是否为HTML Element
	   * @method isElement
	   * @param  {Object}  obj 要验证的对象
	   * @return {Boolean}     结果
	   * @static
	   */
	  ntils.isElement = function (obj) {
	    if (this.isNull(obj)) return false;
	    if (window.Element) {
	      return obj instanceof Element;
	    } else {
	      return obj.tagName && obj.nodeType && obj.nodeName && obj.attributes && obj.ownerDocument;
	    }
	  };
	
	  /**
	   * 验证一个对象是否为HTML Text Element
	   * @method isText
	   * @param  {Object}  obj 要验证的对象
	   * @return {Boolean}     结果
	   * @static
	   */
	  ntils.isText = function (obj) {
	    if (this.isNull(obj)) return false;
	    return obj instanceof Text;
	  };
	
	  /**
	   * 验证一个对象是否为Object
	   * @method isObject
	   * @param  {Object}  obj 要验证的对象
	   * @return {Boolean}     结果
	   * @static
	   */
	  ntils.isObject = function (obj) {
	    if (this.isNull(obj)) return false;
	    return (/*istanbul ignore next*/(typeof obj === "undefined" ? "undefined" : _typeof(obj)) === "object"
	    );
	  };
	
	  /**
	   * 验证一个对象是否为Array或伪Array
	   * @method isArray
	   * @param  {Object}  obj 要验证的对象
	   * @return {Boolean}     结果
	   * @static
	   */
	  ntils.isArray = function (obj) {
	    if (this.isNull(obj)) return false;
	    let v1 = Object.prototype.toString.call(obj) === '[object Array]';
	    let v2 = obj instanceof Array;
	    let v3 = !this.isString(obj) && this.isNumber(obj.length) && this.isFunction(obj.splice);
	    let v4 = !this.isString(obj) && this.isNumber(obj.length) && obj[0];
	    return v1 || v2 || v3 || v4;
	  };
	
	  /**
	   * 验证是不是一个日期对象
	   * @method isDate
	   * @param {Object} val   要检查的对象
	   * @return {Boolean}           结果
	   * @static
	   */
	  ntils.isDate = function (val) {
	    if (this.isNull(val)) return false;
	    return val instanceof Date;
	  };
	
	  /**
	   * 验证是不是一个正则对象
	   * @method isDate
	   * @param {Object} val   要检查的对象
	   * @return {Boolean}           结果
	   * @static
	   */
	  ntils.isRegexp = function (val) {
	    return val instanceof RegExp;
	  };
	
	  /**
	   * 转换为数组
	   * @method toArray
	   * @param {Array|Object} array 伪数组
	   * @return {Array} 转换结果数组
	   * @static
	   */
	  ntils.toArray = function (array) {
	    if (this.isNull(array)) return [];
	    return Array.prototype.slice.call(array);
	  };
	
	  /**
	   * 转为日期格式
	   * @method toDate
	   * @param {Number|String} val 日期字符串或整型数值
	   * @return {Date} 日期对象
	   * @static
	   */
	  ntils.toDate = function (val) {
	    let self = this;
	    if (self.isNumber(val)) return new Date(val);else if (self.isString(val)) return new Date(self.replace(self.replace(val, '-', '/'), 'T', ' '));else if (self.isDate(val)) return val;else return null;
	  };
	
	  /**
	   * 遍历一个对像或数组
	   * @method each
	   * @param  {Object or Array}   obj  要遍历的数组或对象
	   * @param  {Function} fn            处理函数
	   * @return {void}                   无返回值
	   * @static
	   */
	  ntils.each = function (list, handler, scope) {
	    if (this.isNull(list) || this.isNull(handler)) return;
	    if (this.isArray(list)) {
	      let listLength = list.length;
	      for (let i = 0; i < listLength; i++) {
	        let rs = handler.call(scope || list[i], i, list[i]);
	        if (!this.isNull(rs)) return rs;
	      }
	    } else {
	      for (let key in list) {
	        let rs = handler.call(scope || list[key], key, list[key]);
	        if (!this.isNull(rs)) return rs;
	      }
	    }
	  };
	
	  /**
	   * 格式化日期
	   * @method formatDate
	   * @param {Date|String|Number} date 日期
	   * @param {String} format 格式化字符串
	   * @param {object} dict 反译字典
	   * @return {String} 格式化结果
	   * @static
	   */
	  ntils.formatDate = function (date, format, dict) {
	    if (this.isNull(format) || this.isNull(date)) return date;
	    date = this.toDate(date);
	    dict = dict || {};
	    let placeholder = {
	      "M+": date.getMonth() + 1, //month
	      "d+": date.getDate(), //day
	      "h+": date.getHours(), //hour
	      "m+": date.getMinutes(), //minute
	      "s+": date.getSeconds(), //second
	      "w+": date.getDay(), //week
	      "q+": Math.floor((date.getMonth() + 3) / 3), //quarter
	      "S": date.getMilliseconds() //millisecond
	    };
	    if (/(y+)/.test(format)) {
	      format = format.replace(RegExp.$1, (date.getFullYear() + "").substr(4 - RegExp.$1.length));
	    }
	    for (let key in placeholder) {
	      if (new RegExp("(" + key + ")").test(format)) {
	        let value = placeholder[key];
	        value = dict[value] || value;
	        format = format.replace(RegExp.$1, RegExp.$1.length == 1 ? value : ("00" + value).substr(("" + value).length));
	      }
	    }
	    return format;
	  };
	
	  /**
	   * 拷贝对象
	   * @method copy
	   * @param {Object} src 源对象
	   * @param {Object} dst 目标对象
	   * @param {String} err 错误消息模板
	   * @static
	   */
	  ntils.copy = function (src, dst, igonres, err) {
	    dst = dst || (this.isArray(src) ? [] : {});
	    this.each(src, function (key) {
	      if (igonres && igonres.indexOf(key) > -1) {
	        if (err) throw new Error(err.replace('{name}', key));
	        return;
	      }
	      try {
	        if (Object.getOwnPropertyDescriptor) {
	          Object.defineProperty(dst, key, Object.getOwnPropertyDescriptor(src, key));
	        } else {
	          dst[key] = src[key];
	        }
	      } catch (ex) {}
	    });
	    return dst;
	  };
	
	  /**
	   * 深度克隆对象
	   * @method clone
	   * @param {Object} src 源对象
	   * @return {Object} 新对象
	   * @static
	   */
	  ntils.clone = function (src, igonres) {
	    if (this.isNull(src) || this.isString(src) || this.isNumber(src) || this.isBoolean(src) || this.isDate(src)) {
	      return src;
	    }
	    let objClone = src;
	    try {
	      objClone = new src.constructor();
	    } catch (ex) {}
	    this.each(src, function (key, value) {
	      if (objClone[key] != value && !this.contains(igonres, key)) {
	        if (this.isObject(value)) {
	          objClone[key] = this.clone(value, igonres);
	        } else {
	          objClone[key] = value;
	        }
	      }
	    }, this);
	    ['toString', 'valueOf'].forEach(function (key) {
	      if (this.contains(igonres, key)) return;
	      this.defineFreezeProp(objClone, key, src[key]);
	    }, this);
	    return objClone;
	  };
	
	  /**
	   * 合并对象
	   * @method mix
	   * @return 合并后的对象
	   * @param {Object} dst 目标对象
	   * @param {Object} src 源对象
	   * @param {Array} igonres 忽略的属性名,
	   * @param {Number} mode 模式
	   */
	  ntils.mix = function (dst, src, igonres, mode) {
	    //根据模式来判断，默认是Obj to Obj的  
	    if (mode) {
	      switch (mode) {
	        case 1:
	          // proto to proto  
	          return ntils.mix(dst.prototype, src.prototype, igonres, 0);
	        case 2:
	          // object to object and proto to proto  
	          ntils.mix(dst.prototype, src.prototype, igonres, 0);
	          break; // pass through  
	        case 3:
	          // proto to static  
	          return ntils.mix(dst, src.prototype, igonres, 0);
	        case 4:
	          // static to proto  
	          return ntils.mix(dst.prototype, src, igonres, 0);
	        default: // object to object is what happens below  
	      }
	    }
	    //---
	    src = src || {};
	    dst = dst || (this.isArray(src) ? [] : {});
	    this.keys(src).forEach(function (key) {
	      if (this.contains(igonres, key)) return;
	      if (this.isObject(src[key]) && (src[key].constructor == Object || src[key].constructor == Array || src[key].constructor == null)) {
	        dst[key] = ntils.mix(dst[key], src[key], igonres, 0);
	      } else {
	        dst[key] = src[key];
	      }
	    }, this);
	    return dst;
	  };
	
	  /**
	   * 定义不可遍历的属性
	   **/
	  ntils.defineFreezeProp = function (obj, name, value) {
	    Object.defineProperty(obj, name, {
	      value: value,
	      enumerable: false,
	      configurable: true, //能不能重写定义
	      writable: false //能不能用「赋值」运算更改
	    });
	  };
	
	  /**
	   * 获取所有 key 
	   */
	  ntils.keys = function (obj) {
	    if (Object.keys) return Object.keys(obj);
	    let keys = [];
	    this.each(obj, function (key) {
	      keys.push(key);
	    });
	    return keys;
	  };
	
	  /**
	   * 创建一个对象
	   */
	  ntils.create = function (proto) {
	    if (Object.create) return Object.create(proto);
	    return { __proto__: proto };
	  };
	
	  /**
	   * 设置 proto
	   */
	  ntils.setProto = function (obj, prototype) {
	    if (obj.__proto__) {
	      return ntils.setPrototype(obj.__proto__);
	    } else {
	      obj.__proto__ = prototype;
	    }
	  };
	
	  /**
	   * 是否深度相等
	   */
	  ntils.deepEqual = function (a, b) {
	    if (a === b) return true;
	    if (!this.isObject(a) || !this.isObject(b)) return false;
	    let aKeys = this.keys(a);
	    let bKeys = this.keys(b);
	    if (aKeys.length !== bKeys.length) return false;
	    let allKeys = aKeys.concat(bKeys);
	    let checkedMap = this.create(null);
	    let result = true;
	    this.each(allKeys, function (i, key) {
	      if (checkedMap[key]) return;
	      if (!this.deepEqual(a[key], b[key])) result = false;
	      checkedMap[key] = true;
	    }, this);
	    return result;
	  };
	
	  /**
	   * 从一个数值循环到别一个数
	   * @param {number} fromNum 开始数值
	   * @param {Number} toNum 结束数值
	   * @param {Number} step 步长值
	   * @param {function} handler 执行函数
	   * @returns {void} 无返回
	   */
	  ntils.fromTo = function (fromNum, toNum, step, handler) {
	    if (!handler) handler = [step, step = handler][0];
	    step = Math.abs(step || 1);
	    if (fromNum < toNum) {
	      for (let i = fromNum; i <= toNum; i += step) /*istanbul ignore next*/{
	        handler(i);
	      }
	    } else {
	      for (let i = fromNum; i >= toNum; i -= step) /*istanbul ignore next*/{
	        handler(i);
	      }
	    }
	  };
	
	  /**
	   * 生成一个Guid
	   * @method newGuid
	   * @return {String} GUID字符串
	   * @static
	   */
	  ntils.newGuid = function () {
	    let S4 = function S4() {
	      return ((1 + Math.random()) * 0x10000 | 0).toString(16).substring(1);
	    };
	    return S4() + S4() + "-" + S4() + "-" + S4() + "-" + S4() + "-" + S4() + S4() + S4();
	  };
	
	  /**
	   * 对象变换
	   **/
	  ntils.map = function (list, fn) {
	    let buffer = this.isArray(list) ? [] : {};
	    this.each(list, function (name, value) {
	      buffer[name] = fn(name, value);
	    });
	    return buffer;
	  };
	
	  /**
	   * 通过路径设置属性值
	   */
	  ntils.setByPath = function (obj, path, value) {
	    if (this.isNull(obj) || this.isNull(path) || path === '') {
	      return;
	    }
	    if (!this.isArray(path)) {
	      path = path.replace(/\[/, '.').replace(/\]/, '.').split('.');
	    }
	    this.each(path, function (index, name) {
	      if (this.isNull(name) || name.length < 1) return;
	      if (index === path.length - 1) {
	        obj[name] = value;
	      } else {
	        obj[name] = obj[name] || {};
	        obj = obj[name];
	      }
	    }, this);
	  };
	
	  /**
	   * 通过路径获取属性值
	   */
	  ntils.getByPath = function (obj, path) {
	    if (this.isNull(obj) || this.isNull(path) || path === '') {
	      return obj;
	    }
	    if (!this.isArray(path)) {
	      path = path.replace(/\[/, '.').replace(/\]/, '.').split('.');
	    }
	    this.each(path, function (index, name) {
	      if (this.isNull(name) || name.length < 1) return;
	      if (!this.isNull(obj)) obj = obj[name];
	    }, this);
	    return obj;
	  };
	
	  /**
	   * 数组去重
	   **/
	  ntils.unique = function (array) {
	    if (this.isNull(array)) return array;
	    let newArray = [];
	    this.each(array, function (i, value) {
	      if (newArray.indexOf(value) > -1) return;
	      newArray.push(value);
	    });
	    return newArray;
	  };
	
	  /**
	   * 解析 function 的参数列表
	   **/
	  ntils.getFunctionArgumentNames = function (fn) {
	    if (!fn) return [];
	    let src = fn.toString();
	    let parts = src.split(')')[0].split('=>')[0].split('(');
	    return (parts[1] || parts[0]).split(',').map(function (name) {
	      return name.trim();
	    }).filter(function (name) {
	      return name != 'function';
	    });
	  };
	
	  /**
	   * 缩短字符串
	   */
	  ntils.short = function (str, maxLength) {
	    if (!str) return str;
	    maxLength = maxLength || 40;
	    let strLength = str.length;
	    let trimLength = maxLength / 2;
	    return strLength > maxLength ? str.substr(0, trimLength) + '...' + str.substr(strLength - trimLength) : str;
	  };
	
	  /**
	   * 首字母大写
	   */
	  ntils.firstUpper = function (str) {
	    if (this.isNull(str)) return;
	    str[0] = str[0].toLowerCase();
	    return str;
	  };
	
	  /**
	   * 解析字符串为 dom 
	   * @param {string} str 字符串
	   * @returns {HTMLNode} 解析后的 DOM 
	   */
	  ntils.parseDom = function (str) {
	    this._PARSER_DOM_DIV = this._PARSER_DOM_DIV || document.createElement('dev');
	    this._PARSER_DOM_DIV.innerHTML = str;
	    let domNodes = this.toArray(this._PARSER_DOM_DIV.childNodes);
	    this._PARSER_DOM_DIV.innerHTML = '';
	    return domNodes;
	  };
	})( false ? window.ntils = {} : exports);

/***/ },
/* 3 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Class = __webpack_require__(4);
	let utils = __webpack_require__(2);
	
	/**
	 * Watcher 类
	 * 通过「计算函数」、「执行函数」可以创建一个 Watcher 实例
	 */
	let Watcher = new Class({
	  $name: 'Watcher',
	
	  /**
	   * 通过「计算函数」、「执行函数」构建一个 Watcher 实例
	   * @param {function} calcor 计算函数
	   * @param {function} handler 处理函数
	   * @param {boolean} first 是否自动执行第一次
	   * @param {void} 无返回
	   */
	  constructor: function /*istanbul ignore next*/constructor(calcor, handler, first) {
	    if (!utils.isFunction(calcor) || !utils.isFunction(handler)) {
	      throw new Error('Invalid parameters');
	    }
	    this.calcor = calcor;
	    this.handler = handler;
	    if (first) this.calc(true);
	  },
	
	  /**
	   * 执行计算
	   * @param {boolean} force 是否强制触发「计算函数」
	   * @returns {Object} 计算后的值
	   */
	  calc: function /*istanbul ignore next*/calc(force) {
	    let newValue = this.calcor();
	    if (force || !utils.deepEqual(newValue, this.value)) {
	      this.handler(newValue, this.value);
	    }
	    this.value = utils.clone(newValue);
	  }
	
	});
	
	module.exports = Watcher;

/***/ },
/* 4 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let utils = __webpack_require__(2);
	
	let RESERVED = ['$extends', '$name', '$class', '$super', '$super_result', '$super_called'];
	
	function Class(options) {
	  //处理 options
	  options = options || utils.create(null);
	  options.$name = options.$name || 'Class';
	  options.$extends = options.$extends || Class;
	  options.$static = options.$static || utils.create(null);
	  //处理父类 prototype
	  let superPrototype = utils.isFunction(options.$extends) ? options.$extends.prototype : options.$extends;
	  //定义新类
	  let NewClass = function NewClass() {
	    //处理 super
	    if (!this.$super) {
	      utils.defineFreezeProp(this, '$super', function () {
	        if (this.$super_called) return this.$super_result;
	        this.$super_called = true;
	        if (utils.isFunction(options.$extends)) {
	          this.$super_result = this.__proto__.__proto__ = options.$extends.apply(this, arguments);
	        } else {
	          this.$super_result = options.$extends;
	        }
	        return this.$super_result;
	      });
	      utils.each(superPrototype, function (name, value) {
	        if (utils.isFunction(value)) {
	          this.$super[name] = value.bind(this);
	        } else {
	          this.$super[name] = value;
	        }
	      }, this);
	    }
	    //调用构造
	    if (utils.isFunction(options.constructor)) {
	      return options.constructor.apply(this, arguments);
	    }
	  };
	  //处理 prototype
	  NewClass.prototype.__proto__ = superPrototype;
	  utils.copy(options, NewClass.prototype, RESERVED);
	  utils.defineFreezeProp(NewClass.prototype, '$class', NewClass);
	  //处理静态成员
	  utils.copy(options.$static, NewClass);
	  if (utils.isFunction(options.$extends)) {
	    NewClass.__proto__ = options.$extends;
	  }
	  if (!options.$extends.$extend) {
	    utils.copy(Class, NewClass);
	  }
	  utils.defineFreezeProp(NewClass, 'name', options.$name);
	  utils.defineFreezeProp(NewClass, '$super', options.$extends);
	  //--
	  return NewClass;
	}
	
	//定义扩展方法
	Class.$extend = function (options) {
	  options.$extends = this;
	  return new Class(options);
	};
	
	Class.Class = Class;
	module.exports = Class;

/***/ },
/* 5 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Class = __webpack_require__(4);
	let utils = __webpack_require__(2);
	let EventEmitter = __webpack_require__(6);
	
	let OBSERVER_PROP_NAME = '__observer__';
	let CHANGE_EVENT_NAME = 'change';
	let EVENT_MAX_DISPATCH_LAYER = 20;
	
	/**
	 * 对象观察类，可以监控对象变化
	 * 目前方案问题:
	 *   对于父子关系和事件冒泡，目前方案如果用 delete 删除一个属性，无关真实删除关系，
	 *   即便调用 clearReference 也无法再清除关系，子对象的 parents 中会一直有一个引用，当前方案最高效
	 * 其它方法一:
	 *   将「关系」放入全局数组中，然后将 ob.parents 变成一个「属性」从全局数组件中 filter 出来，
	 *   基本和目前方法类似，但是关系在外部存领教，所以 clearReference 可清除。
	 * 其它方案二: 
	 *   构造时添加到全局数组，每一个 observer change 时都让放到全局的 observer 遍历自身的，
	 *   检果事件源是不是自已的子对象，如果是则触发自身 change 事件，这样 ob 对象本身没有相关引用
	 *   clearReference 时只从全局清除掉就行了，并且 delete 操作也不会影响，但效率稍差。
	 * 其它方案三: 
	 *   给构造函数添加一个 deep 属性，只有 deep 的 ob 对象，才放入到全局数组中，检查时逻辑同方案二
	 *   但是因为要检查的对象会少很多，效率会更高一点。
	 */
	let Observer = new Class({
	  $name: 'Observer',
	  $extends: EventEmitter,
	
	  /**
	   * 通过目标对象构造一个观察对象
	   * @param {Object} target 目标对象
	   * @returns {void} 无返回
	   */
	  constructor: function /*istanbul ignore next*/constructor(target, options) {
	    if (utils.isNull(target)) {
	      throw new Error('Invalid target');
	    }
	    options = options || Object.create(null);
	    let observer = target[OBSERVER_PROP_NAME];
	    if (observer) {
	      utils.copy(options, observer.options);
	      if (observer.options.root) {
	        observer.parents.length = 0;
	      }
	      observer.apply();
	      return observer;
	    }
	    EventEmitter.call(this);
	    utils.defineFreezeProp(this, 'options', options);
	    utils.defineFreezeProp(this, 'shadow', Object.create(null));
	    utils.defineFreezeProp(this, 'target', target);
	    utils.defineFreezeProp(this, 'parents', []);
	    utils.defineFreezeProp(target, OBSERVER_PROP_NAME, this);
	    this.apply();
	  },
	
	  /**
	   * 添加一个属性，动态添中的属性，无法被观察，
	   * 但是通过 set 方法添加的属性可能被观察。
	   */
	  set: function /*istanbul ignore next*/set(name, value) {
	    if (utils.isFunction(value)) return;
	    Object.defineProperty(this.target, name, {
	      get: function /*istanbul ignore next*/get() {
	        return this[OBSERVER_PROP_NAME].shadow[name];
	      },
	      set: function /*istanbul ignore next*/set(value) {
	        let observer = this[OBSERVER_PROP_NAME];
	        let oldValue = observer.shadow[name];
	        if (oldValue === value) return;
	        if (utils.isObject(value)) {
	          let childObserver = new Observer(value);
	          observer.addChild(childObserver, name);
	        }
	        //移除旧值的父引用
	        //如果用 delete 删除属性将无法移除父子引用
	        if (oldValue && oldValue[OBSERVER_PROP_NAME]) {
	          observer.removeChild(oldValue[OBSERVER_PROP_NAME], name);
	        }
	        observer.shadow[name] = value;
	        observer.emitChange({ path: name, value: value });
	      },
	      configurable: true,
	      enumerable: true
	    });
	    this.target[name] = value;
	  },
	
	  /**
	   * 自动应用所有动态添加的属性
	   * @returns {void} 无返回
	   */
	  apply: function /*istanbul ignore next*/apply() {
	    if (utils.isArray(this.target)) {
	      this._wrapArray(this.target);
	    }
	    let names = this._getPropertyNames(this.target);
	    names.forEach(function (name) {
	      let desc = Object.getOwnPropertyDescriptor(this.target, name);
	      if (!('value' in desc)) return;
	      this.set(name, this.target[name]);
	    }, this);
	  },
	
	  /**
	   * 清除所有父子引用
	   * @returns {void} 无返回
	   */
	  clearReference: function /*istanbul ignore next*/clearReference() {
	    utils.each(this.target, function (name, value) {
	      if (utils.isNull(value)) return;
	      let child = value[OBSERVER_PROP_NAME];
	      if (child) this.removeChild(child);
	    }, this);
	  },
	
	  /**
	   * 派发一个事件，事件会向父级对象冒泡
	   * @param {string} eventName 事件名称
	   * @param {Object} event 事件对象
	   * @returns {void} 无返回
	   */
	  dispatch: function /*istanbul ignore next*/dispatch(eventName, event) {
	    event.__layer__ = event.__layer__ || 0;
	    event.__layer__++;
	    if (event.__layer__ >= EVENT_MAX_DISPATCH_LAYER) return;
	    this.emit(eventName, event);
	    if (!this.parents || this.parents.length < 1) return;
	    this.parents.forEach(function (item) {
	      if (!(item.name in item.parent.target)) {
	        return item.parent.removeChild(this);
	      }
	      let parentEvent = utils.copy(event);
	      parentEvent.path = item.name + '.' + event.path;
	      item.parent.dispatch(eventName, parentEvent);
	    }, this);
	  },
	
	  /**
	   * 添子观察者对象
	   * @param {Object} child 父对象
	   * @param {String} name 属性名
	   * @returns {void} 无返回
	   */
	  addChild: function /*istanbul ignore next*/addChild(child, name) {
	    if (utils.isNull(child) || utils.isNull(name)) {
	      throw new Error('Invalid paramaters');
	    }
	    if (child.options.root) return;
	    child.parents.push({ parent: this, name: name });
	  },
	
	  /**
	   * 移除子对象
	   * @param {Object} child 父对象
	   * @param {String} name 属性名
	   * @returns {void} 无返回
	   */
	  removeChild: function /*istanbul ignore next*/removeChild(child, name) {
	    if (utils.isNull(child)) {
	      throw new Error('Invalid paramaters');
	    }
	    let foundIndex = -1;
	    child.parents.forEach(function (item, index) {
	      if (item.parent === this && item.name === name) {
	        foundIndex = index;
	      }
	    }, this);
	    if (foundIndex > -1) {
	      child.parents.splice(foundIndex, 1);
	    }
	  },
	
	  /**
	   * 触发 change 事件
	   * @param {Object} event 事件对象
	   * @returns {void} 无返回
	   */
	  emitChange: function /*istanbul ignore next*/emitChange(event) {
	    this.dispatch(CHANGE_EVENT_NAME, event);
	  },
	
	  /**
	   * 获取所有成员名称列表
	   * @returns {Array} 所有成员名称列表
	   */
	  _getPropertyNames: function /*istanbul ignore next*/_getPropertyNames() {
	    let names = utils.isArray(this.target) ? this.target.map(function (item, index) {
	      return index;
	    }) : Object.keys(this.target);
	    return names.filter(function (name) {
	      return name !== OBSERVER_PROP_NAME;
	    });
	  },
	
	  /**
	   * 包裹数组
	   * @param {array} array 源数组
	   * @returns {array} 处理后的数组
	   */
	  _wrapArray: function /*istanbul ignore next*/_wrapArray(array) {
	    utils.defineFreezeProp(array, 'push', function () {
	      let items = [].slice.call(arguments);
	      items.forEach(function (item) {
	        //这里也会触发对应 index 的 change 事件
	        this[OBSERVER_PROP_NAME].set(array.length, item);
	      }, this);
	      this[OBSERVER_PROP_NAME].emitChange({ path: 'length', value: this.length });
	    });
	    utils.defineFreezeProp(array, 'pop', function () {
	      let item = [].pop.apply(this, arguments);
	      this[OBSERVER_PROP_NAME].emitChange({ path: this.length, value: item });
	      this[OBSERVER_PROP_NAME].emitChange({ path: 'length', value: this.length });
	      return item;
	    });
	    utils.defineFreezeProp(array, 'unshift', function () {
	      let items = [].slice.call(arguments);
	      items.forEach(function (item) {
	        //这里也会触发对应 index 的 change 事件
	        this[OBSERVER_PROP_NAME].set(0, item);
	      }, this);
	      this[OBSERVER_PROP_NAME].emitChange({ path: 'length', value: this.length });
	    });
	    utils.defineFreezeProp(array, 'shift', function () {
	      let item = [].shift.apply(this, arguments);
	      this[OBSERVER_PROP_NAME].emitChange({ path: 0, value: item });
	      this[OBSERVER_PROP_NAME].emitChange({ path: 'length', value: this.length });
	      return item;
	    });
	    utils.defineFreezeProp(array, 'splice', function () {
	      let startIndex = arguments[0];
	      let endIndex = utils.isNull(arguments[1]) ? startIndex + arguments[1] : this.length - 1;
	      let items = [].splice.apply(this, arguments);
	      for (let i = startIndex; i <= endIndex; i++) {
	        this[OBSERVER_PROP_NAME].emitChange({ path: i, value: items[i - startIndex] });
	      };
	      this[OBSERVER_PROP_NAME].emitChange({ path: 'length', value: this.length });
	      return items;
	    });
	    utils.defineFreezeProp(array, 'set', function (index, value) {
	      if (index >= this.length) {
	        this[OBSERVER_PROP_NAME].emitChange({ path: 'length', value: this.length });
	      }
	      this[OBSERVER_PROP_NAME].set(index, value);
	    });
	  }
	
	});
	
	/**
	 * 观察一个对象
	 * @param {Object} target 目标对象
	 * @return {Observer} 观察者对象
	 */
	Observer.observe = function (target) {
	  return new Observer(target);
	};
	
	module.exports = Observer;

/***/ },
/* 6 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let EventEmitter = __webpack_require__(7);
	let touch = __webpack_require__(8);
	
	EventEmitter.touch = touch;
	EventEmitter.register(touch);
	
	module.exports = EventEmitter;

/***/ },
/* 7 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let utils = __webpack_require__(2);
	let Class = __webpack_require__(4);
	
	/**
	 * 事件触发器基类
	 */
	let EventEmitter = new Class({
	  $name: 'EventEmitter',
	  $extends: Function,
	
	  /**
	   * 构建一个一个事修的触发器对象
	   * @param {object} target 将代理的目标对象可以省略
	   * @returns {void} 无返回
	   */
	  constructor: function /*istanbul ignore next*/constructor(target) {
	    target = target || this;
	    let emitter = target.__emitter__;
	    if (emitter) return emitter;
	    utils.defineFreezeProp(this, '_target', target);
	    utils.defineFreezeProp(target, '__emitter__', this);
	    this._isElement = utils.isElement(this._target);
	    this._listeners = this._listeners || {};
	    this.on = this.$on = this.$addListener = this.addListener;
	    this.off = this.$off = this.$removeListener = this.removeListener;
	    this.$emit = this.emit;
	  },
	
	  /**
	   * 添加一个事件监听函数
	   * @param {string} name 事件名称
	   * @param {function} listener 事件处理函数
	   * @param {capture} capture 是否是捕获阶段事件(只在代理 dom 对象时有效)
	   * @returns {void} 无返回
	   */
	  addListener: function /*istanbul ignore next*/addListener(name, listener, capture) {
	    if (this._isElement) {
	      this._addElementEventListener(name, listener, capture);
	    }
	    this._listeners[name] = this._listeners[name] || [];
	    this._listeners[name].push(listener);
	    if (this._listeners[name].length > EventEmitter._maxListeners) {
	      throw new Error('The `' + name + '` event listener is not more than 10');
	    }
	  },
	
	  /**
	   * 移除「一个/一组/所有」事件监听函数
	   * @param {string} name 事件名称
	   * @param {function} listener 事件处理函数
	   * @param {capture} capture 是否是捕获阶段事件(只在代理 dom 对象时有效)
	   * @returns {void} 无返回
	   */
	  removeListener: function /*istanbul ignore next*/removeListener(name, listener, capture) {
	    if (name && listener) {
	      if (this._isElement) {
	        this._removeElementEventListener(name, listener, capture);
	      }
	      if (!this._listeners[name]) return;
	      let index = this._listeners[name].indexOf(listener);
	      this._listeners[name].splice(index, 1);
	    } else if (name) {
	      if (this._isElement && this._listeners[name]) {
	        this._listeners[name].forEach(function (_listener) {
	          this.removeListener(name, _listener, capture);
	        }, this);
	      }
	      delete this._listeners[name];
	    } else {
	      utils.each(this._listeners, function (name) {
	        this.removeListener(name, null, capture);
	      }, this);
	      this._listeners = {};
	    }
	  },
	
	  /**
	   * 触发自身的一个事件
	   * @param {string} name 事件名称
	   * @param {object} data 传递的对象
	   * @param {string} canBubble 能否冒泡(只在代理 dom 对象时有效)
	   * @param {object} cancelAble 能否取消(只在代理 dom 对象时有效)
	   * @returns {void} 无返回
	   */
	  emit: function /*istanbul ignore next*/emit(name, data, canBubble, cancelAble) {
	    if (this._isElement) {
	      return this._emitElementEvent(name, data, canBubble, cancelAble);
	    }
	    if (!this._listeners[name]) return;
	    let stopBubble = false;
	    this._listeners[name].forEach(function (handler) {
	      let rs = handler.call(this._target, data);
	      if (rs === false) stopBubble = true;
	    }, this);
	    return stopBubble;
	  },
	
	  /**
	   * 添加 DOM 元素事件
	   * @param {string} name 事件名称
	   * @param {function} listener 事件处理函数
	   * @param {capture} capture 是否是捕获阶段事件
	   * @returns {void} 无返回
	   */
	  _addElementEventListener: function /*istanbul ignore next*/_addElementEventListener(name, listener, capture) {
	    this._target.addEventListener(name, listener, capture);
	    //如果存在已注册的自定义 “组合事件”
	    let descriptor = EventEmitter._events[name];
	    if (descriptor) {
	      descriptor.addListener = descriptor.addListener || descriptor.on;
	      descriptor.addListener(this, name, listener, capture);
	    }
	  },
	
	  /**
	   * 移除 DOM 元素事件
	   * @param {string} name 事件名称
	   * @param {function} listener 事件处理函数
	   * @param {capture} capture 是否是捕获阶段事件
	   * @returns {void} 无返回
	   */
	  _removeElementEventListener: function /*istanbul ignore next*/_removeElementEventListener(name, listener, capture) {
	    this._target.removeEventListener(name, listener, capture);
	    //如果存在已注册的自定义 “组合事件”
	    let descriptor = EventEmitter._events[name];
	    if (descriptor) {
	      descriptor.removeListener = descriptor.removeListener || descriptor.off;
	      descriptor.removeListener(this, name, listener, capture);
	    }
	  },
	
	  /**
	   * 触发 DOM 元素事件
	   * @param {string} name 事件名称
	   * @param {object} data 传递的对象
	   * @param {string} canBubble 能否冒泡
	   * @param {object} cancelAble 能否取消
	   * @returns {void} 无返回
	   */
	  _emitElementEvent: function /*istanbul ignore next*/_emitElementEvent(name, data, canBubble, cancelAble) {
	    let event = document.createEvent('HTMLEvents');
	    event.initEvent(name, canBubble, cancelAble);
	    utils.copy(data, event, ['data']);
	    event.data = data;
	    return this._target.dispatchEvent(event);
	  }
	
	});
	
	//最多添加多少个 listener
	EventEmitter._maxListeners = 10;
	
	//所有自定义事件
	EventEmitter._events = [];
	
	/**
	 * 注册自定义事件(只在代理 dom 对象时有效)
	 * @param {object} descriptor 事件定义
	 * @returns {void} 无返回
	 */
	EventEmitter.register = function (descriptor) {
	  let names = descriptor.name;
	  if (!names) return;
	  if (!utils.isArray(names)) names = names.split(',');
	  names.forEach(function (name) {
	    this._events[name] = descriptor;
	  }, this);
	};
	
	module.exports = EventEmitter;

/***/ },
/* 8 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let EventEmitter = __webpack_require__(7);
	let utils = __webpack_require__(2);
	
	let SUPPORT_TOUCH = 'ontouchstart' in document;
	let START_EVENT_NAME = SUPPORT_TOUCH ? 'touchstart' : 'mousedown';
	let MOVE_EVENT_NAME = SUPPORT_TOUCH ? 'touchmove' : 'mousemove';
	let END_EVENT_NAME = SUPPORT_TOUCH ? 'touchend' : 'mouseup';
	let CUSTOM_EVENT_NAMES = "tap,taphold,dbltap,swipe,swipeup,swiperight,swipedown,swipeleft,pointdown,pointmove,pointup";
	
	module.exports = {
	  name: CUSTOM_EVENT_NAMES,
	
	  option: {
	    swipeDurationThreshold: 1000,
	    swipeHorizontalDistanceThreshold: 25,
	    swipeVerticalDistanceThreshold: 45,
	    holdDurationThreshold: 1000,
	    dblDurationThreshold: 450,
	    scrollSupressionThreshold: 25
	  },
	
	  addListener: function /*istanbul ignore next*/addListener(emitter, name, listener, capture) {
	    if (!utils.isFunction(listener)) return;
	
	    let self = this;
	
	    //处理 touchstart 事件
	    listener.touchstart = listener.touchstart || function (event) {
	      let point = event.changedTouches ? event.changedTouches[0] : event;
	      listener.startPoint = listener.endPoint = {
	        "x": point.pageX,
	        "y": point.pageY,
	        "timeStamp": event.timeStamp,
	        "point": point
	      };
	      if (name == 'taphold') {
	        listener.createHoldHandler(event);
	      }
	      //模拟鼠标事件
	      if (name == 'pointdown') {
	        utils.copy(listener.startPoint, event);
	        emitter.emit('pointdown', event);
	        emitter.isPointDown = true;
	      }
	    };
	
	    //创建 hold 处理器
	    listener.createHoldHandler = listener.createHoldHandler || function (event) {
	      // 处理 taphold 事件
	      if (!listener.holdTimer && !listener.holdHandler) {
	        let option = self.option;
	        listener.holdHandler = function () {
	          event.taphold = true;
	          emitter.emit('taphold', event);
	        };
	        listener.holdTimer = setTimeout(function () {
	          if (listener.holdHandler) listener.holdHandler();
	        }, option.holdDurationThreshold);
	      }
	    };
	
	    //清除 hold 处理器
	    listener.clearHoldHandler = listener.clearHoldHandler || function () {
	      if (listener.holdTimer) {
	        clearTimeout(listener.holdTimer);
	        listener.holdTimer = null;
	        listener.holdHandler = null;
	      }
	    };
	
	    //获取划动信息
	    listener.getTouchInfo = function (event) {
	      let point = event.changedTouches ? event.changedTouches[0] : event;
	      listener.endPoint = {
	        "x": point.pageX,
	        "y": point.pageY,
	        "timeStamp": event.timeStamp,
	        "point": point
	      };
	      //
	      let option = self.option;
	      // 一些计算结果
	      let info = {};
	      info.timeStamp = listener.endPoint ? listener.endPoint.timeStamp : null;
	      info.existStartAndStop = listener.endPoint && listener.startPoint;
	      info.horizontalDistance = info.existStartAndStop ? listener.endPoint.x - listener.startPoint.x : 0;
	      info.verticalDistance = info.existStartAndStop ? listener.endPoint.y - listener.startPoint.y : 0;
	      info.horizontalDistanceValue = Math.abs(info.horizontalDistance);
	      info.verticalDistanceVlaue = Math.abs(info.verticalDistance);
	      info.isHorizontal = info.horizontalDistanceValue >= info.verticalDistanceVlaue;
	      info.isVertical = !info.sHorizontal;
	      info.isSwipeMove = info.horizontalDistanceValue >= option.swipeHorizontalDistanceThreshold || info.verticalDistanceVlaue >= option.swipeVerticalDistanceThreshold;
	      info.isSwipeTime = info.existStartAndStop ? listener.endPoint.timeStamp - listener.startPoint.timeStamp <= option.swipeDurationThreshold : true;
	      info.isHoldTime = info.existStartAndStop ? listener.endPoint.timeStamp - listener.startPoint.timeStamp >= option.holdDurationThreshold : false;
	      //这里的 direction 仅是指划动方法，不代表 swipe 动作，swipe 动作还有时间或划动距离等因素
	      if (info.isHorizontal && info.horizontalDistance > 0) {
	        info.direction = 'right';
	      } else if (info.isHorizontal && info.horizontalDistance < 0) {
	        info.direction = 'left';
	      } else if (info.isVertical && info.verticalDistance > 0) {
	        info.direction = 'down';
	      } else if (info.isVertical && info.verticalDistance < 0) {
	        info.direction = 'up';
	      }
	      return info;
	    };
	
	    //处理 touchmove 事件
	    listener.touchmove = listener.touchmove || function (event) {
	      let info = listener.getTouchInfo(event);
	      if (info.isSwipeMove) {
	        listener.clearHoldHandler();
	      }
	      let stopBubble = false;
	      //模拟鼠标事件
	      if (emitter.isPointDown && name == 'pointmove') {
	        utils.copy(listener.endPoint, event);
	        emitter.emit('pointmove', event);
	        stopBubble = true;
	      }
	      //在绑定划动的方向上禁止滚动，因为 Android 4.x 不如此处理，touchend 事件将不触发
	      if (name == 'swipe' || name == 'swipe' + info.direction) {
	        stopBubble = true;
	      }
	      //如果需要阻止冒泡
	      if (stopBubble) {
	        return false;
	      }
	    };
	
	    //完成事件
	    listener.done = listener.done || function (event) {
	      listener.clearHoldHandler();
	      let info = listener.getTouchInfo(event);
	      //模拟鼠标事件
	      if (name == 'pointup') {
	        utils.copy(listener.endPoint, event);
	        emitter.emit('pointup', event);
	        emitter.isPointDown = false;
	      }
	      // 根据计算结果判断
	      if (info.isSwipeTime && info.isSwipeMove) {
	        event.swipe = true;
	        event.direction = info.direction;
	        if (name == 'swipe') {
	          emitter.emit('swipe', event);
	        }
	        if (name == 'swipe' + event.direction) {
	          emitter.emit('swipe' + event.direction, event);
	        }
	      } else if (info.isSwipeTime && !info.isSwipeMove && !info.isHoldTime) {
	        if (name == 'tap') {
	          emitter.emit('tap', event);
	        }
	        if (name == 'dbltap') {
	          //处理 “双击”
	          let option = self.option;
	          event.dbltap = listener.PreTapTime && info.timeStamp - listener.PreTapTime <= option.dblDurationThreshold;
	          if (event.dbltap) {
	            emitter.emit('dbltap', event);
	            listener.PreTapTime = null;
	          } else {
	            listener.PreTapTime = listener.endPoint.timeStamp;
	          }
	        }
	      }
	    };
	
	    //绑定组合事件
	    emitter.on(START_EVENT_NAME, listener.touchstart);
	    emitter.on(MOVE_EVENT_NAME, listener.touchmove);
	    emitter.on(END_EVENT_NAME, listener.done);
	  },
	
	  removeListener: function /*istanbul ignore next*/removeListener(emitter, name, listener, useCapture) {
	    //只有指定了 handler 才能取消构成组合事件的 “原事件”
	    //否则会直接移除会将其他 touchstart 等事件也移除
	    if (utils.isFunction(listener)) {
	      if (utils.isFunction(listener.touchstart)) {
	        emitter.off(START_EVENT_NAME, listener.touchstart);
	      }
	      if (utils.isFunction(listener.touchmove)) {
	        emitter.off(MOVE_EVENT_NAME, listener.touchmove);
	      }
	      if (utils.isFunction(listener.done)) {
	        emitter.off(END_EVENT_NAME, listener.done);
	      }
	    }
	  }
	
	};

/***/ },
/* 9 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Compiler = __webpack_require__(10);
	let Directive = __webpack_require__(11);
	let Expression = __webpack_require__(12);
	let Template = __webpack_require__(30);
	let directives = __webpack_require__(13);
	
	Template.Template = Template;
	Template.Compiler = Compiler;
	Template.Directive = Directive;
	Template.directives = directives;
	Template.Expression = Expression;
	
	module.exports = Template;

/***/ },
/* 10 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Class = __webpack_require__(4);
	let Directive = __webpack_require__(11);
	let utils = __webpack_require__(2);
	let Expression = __webpack_require__(12);
	let directives = __webpack_require__(13);
	
	let DEFAULT_PREFIX = 'm';
	
	/**
	 * 模板编译器
	 * 可以通过指定「前缀」或「指令集」构建实例
	 */
	let Compiler = new Class({
	  $name: 'Compiler',
	
	  /**
	   * 构造一个编译器
	   * @param {Object} options 选项
	   * @returns {void} 无返回
	   */
	  constructor: function /*istanbul ignore next*/constructor(options) {
	    options = options || Object.create(null);
	    options.directives = options.directives || [];
	    this.prefix = options.prefix || DEFAULT_PREFIX;
	    this.directives = directives.concat(options.directives);
	  },
	
	  /**
	   * 解析要匹配的名称
	   * @param {string} name 要解析的名称字符串
	   * @param {HTMLNode} node 当前 HTML 元素结点
	   * @returns {Object} 解析后的对象
	   */
	  _parseMatchInfo: function /*istanbul ignore next*/_parseMatchInfo(name, type, node) {
	    let parts = name.toLowerCase().split(':');
	    let info = {
	      type: type,
	      compiler: this,
	      node: node
	    };
	    if (parts.length > 1) {
	      info.prefix = parts[0];
	      info.name = parts[1];
	      info.decorates = parts.slice(2);
	    } else {
	      info.prefix = null;
	      info.name = parts[0];
	      info.decorates = [];
	    }
	    return info;
	  },
	
	  /**
	   * 查找所有匹配的指令
	   * @param {Object} matchInfo 匹配信息
	   * @returns {Array} 指令列表
	   */
	  _findDirectives: function /*istanbul ignore next*/_findDirectives(matchInfo) {
	    return this.directives.filter(function (Directive) {
	      return Directive.definition.test(matchInfo);
	    }, this);
	  },
	
	  /**
	   * 创建一个指令实例
	   * @param {Directive} Directive 指令类
	   * @param {Object} options 指令构建选项
	   * @returns {Directive} 指令实例
	   */
	  _createDirectiveInstance: function /*istanbul ignore next*/_createDirectiveInstance(Directive, options) {
	    options.compiler = this;
	    options.prefix = this.prefix;
	    return new Directive(options);
	  },
	
	  /**
	   * 初始化一个编译完成的 handler
	   * @param {function} handler 编译后的的模板函数
	   * @returns {void} 无返回
	   */
	  _bindHandler: function /*istanbul ignore next*/_bindHandler(handler) {
	    //排序 directives
	    handler.directives = handler.directives.sort(function (a, b) {
	      return b.level - a.level;
	    });
	    //初始化 directives
	    let boundDirectives = [];
	    utils.each(handler.directives, function (index, directive) {
	      directive.index = index;
	      directive.bind();
	      boundDirectives.push(directive);
	      //移除完成绑定的指令对应的 attribute
	      if (directive.remove !== false && directive.attribute) {
	        directive.node.removeAttribute(directive.attribute.name);
	      }
	      //如果遇到一个「终态」指令，停止向下初始化
	      //如果 each、if 等为「终态指令」
	      if (directive.final) {
	        return handler.final = true;
	      }
	    }, this);
	    handler.directives = boundDirectives;
	  },
	
	  /**
	   * 编译一个元素本身
	   * @param {function} handler 当前模板函数
	   * @param {HTMLNode} node 当前 HTML 结点
	   * @returns {void} 无返回
	   */
	  _compileElement: function /*istanbul ignore next*/_compileElement(handler, node) {
	    let matchInfo = this._parseMatchInfo(node.nodeName, Directive.TYPE_ELEMENT, node);
	    let elementDirectives = this._findDirectives(matchInfo);
	    elementDirectives.forEach(function (Directive) {
	      handler.directives.push(this._createDirectiveInstance(Directive, {
	        handler: handler,
	        node: node,
	        decorates: matchInfo.decorates
	      }));
	    }, this);
	  },
	
	  /**
	   * 编译一个元素所有 attributes 
	   * @param {function} handler 当前模板函数
	   * @param {HTMLNode} node 当前 HTML 结点
	   * @returns {void} 无返回
	   */
	  _compileAttributes: function /*istanbul ignore next*/_compileAttributes(handler, node) {
	    utils.toArray(node.attributes).forEach(function (attribute) {
	      let matchInfo = this._parseMatchInfo(attribute.name, Directive.TYPE_ATTRIBUTE, node);
	      let attributeDirectives = this._findDirectives(matchInfo);
	      attributeDirectives.forEach(function (Directive) {
	        let definition = Directive.definition;
	        handler.directives.push(this._createDirectiveInstance(Directive, {
	          handler: handler,
	          node: node,
	          attribute: attribute,
	          expression: definition.literal ? attribute.value : new Expression(attribute.value),
	          decorates: matchInfo.decorates
	        }));
	      }, this);
	    }, this);
	  },
	
	  /**
	   * 编译所有子结点
	   * @param {function} handler 当前模板函数
	   * @param {HTMLNode} node 当前 HTML 结点
	   * @returns {void} 无返回
	   */
	  _compileChildren: function /*istanbul ignore next*/_compileChildren(handler, node) {
	    if (handler.final) return;
	    utils.toArray(node.childNodes).forEach(function (childNode) {
	      let childHandler = this.compile(childNode);
	      childHandler.parent = this;
	      handler.children.push(childHandler);
	    }, this);
	  },
	
	  /**
	   * 编译一个模板
	   * @param {HTMLNode} node 模板根元素
	   * @param {Object} options 选项
	   * @returns {function} 模板函数
	   */
	  compile: function /*istanbul ignore next*/compile(node, options) {
	    if (!node) {
	      throw new Error('Invalid node for compile');
	    }
	    options = options || utils.create(null);
	    //定义编译结果函数
	    let handler = function handler(scope) {
	      if (utils.isNull(scope)) scope = Object.create(null);
	      //执行指令
	      handler.directives.forEach(function (directive) {
	        directive.scope = scope;
	        directive.execute(scope);
	      }, this);
	      //执行子元素编译函数
	      handler.children.forEach(function (childHandler) {
	        childHandler(scope);
	      }, this);
	    };
	    handler.dispose = function () {
	      //执行指令
	      handler.directives.forEach(function (directive) {
	        directive.unbind();
	      }, this);
	      //执行子元素编译函数
	      handler.children.forEach(function (childHandler) {
	        childHandler.dispose();
	      }, this);
	    };
	    handler.node = node;
	    //定义 children & directives 
	    handler.directives = [];
	    handler.children = [];
	    //编译相关指令
	    if (options.element !== false) this._compileElement(handler, node);
	    if (options.attribute !== false) this._compileAttributes(handler, node);
	    this._bindHandler(handler);
	    if (options.children !== false) this._compileChildren(handler, node);
	    //返回编译后函数
	    return handler.bind(null);
	  }
	
	});
	
	module.exports = Compiler;

/***/ },
/* 11 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Class = __webpack_require__(4);
	let utils = __webpack_require__(2);
	let Expression = __webpack_require__(12);
	
	/**
	 * 指令定义信息类
	 * 可以通过每一个「指令类」的的「静态成员」访问
	 * 也可通过「指令实例」的「实例成员」访问
	 */
	let DirectiveDefinition = new Class({
	  $name: 'DirectiveDefinition',
	
	  $extends: Directive.prototype,
	
	  /**
	   * 构造一个指令定义信息对象
	   * @param {Object} options 选项
	   * @returns {void} 无返回
	   */
	  constructor: function /*istanbul ignore next*/constructor(options) {
	    if (!options || !utils.isString(options.name) || options.name.length < 1) {
	      throw new Error('Invalid directive options');
	    }
	    //拷贝所有成员到当前 definition 实例
	    this.customTest = options.test;
	    delete options.test;
	    utils.copy(this._faultHanlde(options), this);
	  },
	
	  /**
	   * 针对「选项」做容错处理
	   * @param {Object} options 原姓选项
	   * @returns {Object} 处理后的选项
	   */
	  _faultHanlde: function /*istanbul ignore next*/_faultHanlde(options) {
	    options.type = options.type || Directive.TYPE_ATTRIBUTE;
	    options.level = options.level || Directive.LEVEL_GENERAL;
	    options.match = options.match || options.name;
	    if (!(options.match instanceof RegExp)) {
	      let expr = options.match.replace(/([A-Z])/g, '-$1').toLowerCase();
	      if (expr[0] == '-') expr = expr.slice(1);
	      options.match = new RegExp('^' + expr + '$', 'i');
	    }
	    if (options.tag && !(options.tag instanceof RegExp)) {
	      options.tag = new RegExp('^' + options.tag + '$', 'i');
	    }
	    return options;
	  },
	
	  /**
	   * 检查指令是否匹配
	   * @returns {boolean} 测试结果
	   */
	  test: function /*istanbul ignore next*/test(matchInfo) {
	    return this.type === matchInfo.type && (!this.tag || matchInfo.node && this.tag.test(matchInfo.node.nodeName)) && (this.prefix === false || matchInfo.prefix === matchInfo.compiler.prefix) && this.match.test(matchInfo.name) && (!this.customTest || this.customTest(matchInfo));
	  }
	
	});
	
	/**
	 * 指定定义工场函数
	 * @param {Object} defineOpts 选项
	 * @returns {Directive} 指令类
	 */
	function Directive(options) {
	  //创建 definition 实例
	  let definition = new DirectiveDefinition(options);
	  //生成指令类
	  let DirectiveClass = new Class({
	    $name: 'Directive',
	
	    $extends: definition,
	    //指令构建函数
	    constructor: function /*istanbul ignore next*/constructor(instanceOptions) {
	      utils.copy(instanceOptions, this);
	    },
	    //挂载实例上的 definition
	    definition: definition,
	    //挂载实例核心方法
	    bind: options.bind || utils.noop,
	    execute: options.execute || function (scope) {
	      this.scope = scope;
	      if (this.definition.type === Directive.TYPE_ELEMENT) {
	        return this.update();
	      }
	      let newValue = this.definition.literal ? this.attribute.value : this.expression.execute(scope);
	      if (!utils.deepEqual(this.__value__, newValue)) {
	        this.update(newValue, this.__value__);
	        this.__value__ = newValue;
	      }
	    },
	    update: options.update || utils.noop,
	    unbind: options.unbind || utils.noop,
	    //挂载指令常用的类型
	    utils: utils,
	    Expression: Expression
	  });
	  //向指令类添加「指令定义信息」
	  DirectiveClass.definition = definition;
	  DirectiveClass.__proto__ = definition;
	  return DirectiveClass;
	};
	
	//挂载指令定义信息类
	Directive.Definition = DirectiveDefinition;
	
	//指令类型
	Directive.TYPE_ATTRIBUTE = 'attribute';
	Directive.TYPE_ELEMENT = 'element';
	
	//指令级别
	Directive.LEVEL_PREVENT = 3000;
	Directive.LEVEL_STATEMENT = 2000;
	Directive.LEVEL_ELEMENT = 1000;
	Directive.LEVEL_GENERAL = 0;
	Directive.LEVEL_ATTRIBUTE = -1000;
	Directive.LEVEL_CLOAK = -2000;
	
	utils.defineFreezeProp(Directive, 'name', 'Directive');
	
	module.exports = Directive;

/***/ },
/* 12 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Class = __webpack_require__(4);
	let utils = __webpack_require__(2);
	
	/**
	 * 表达式类型，将字符串构析为可执行表达式实例
	 */
	let Expression = new Class({
	  $name: 'Expression',
	
	  /**
	   * 通过字符串构造一个表达式实例
	   * @param {string} code 代码字符串
	   * @param {boolean} mix 是否是混合代码
	   * @returns {void} 无返回
	   */
	  constructor: function /*istanbul ignore next*/constructor(code, mix) {
	    this.func = mix ? this._compileMixedCode(code) : this._compileCode(code);
	  },
	
	  /**
	   * 编译普通表达式代码
	   * @param {string} code 代码字符串
	   * @returns {function} 编辑后的函数
	   */
	  _compileCode: function /*istanbul ignore next*/_compileCode(code) {
	    code = this._escapeEOL(this._wrapCode(code));
	    return this._createFunction(code);
	  },
	
	  /**
	   * 编辑混合的表达式代码
	   * @param {string} code 代码字符串
	   * @returns {function} 编辑后的函数
	   */
	  _compileMixedCode: function /*istanbul ignore next*/_compileMixedCode(code) {
	    let statements = this._parseMixedCode(code);
	    code = this._escapeEOL(statements.join('+'));
	    return this._createFunction(code);
	  },
	
	  /**
	   * 通过符串代码创建一个可执行函数
	   * @param {string} code 代码字符串
	   * @returns {function} 创建的函数
	   */
	  _createFunction: function /*istanbul ignore next*/_createFunction(code) {
	    let func = new Function('utils', 'scope', 'with(scope){return ' + code + '}');
	    return func.bind(null, utils);
	  },
	
	  /**
	   * 解析混合代码字符串
	   * @param {string} code 混合代码字符串
	   * @returns {Array} 解析后的「token」列表
	   */
	  _parseMixedCode: function /*istanbul ignore next*/_parseMixedCode(code) {
	    let index = 0,
	        length = code.length;
	    let token = '',
	        isExpr = false,
	        tokens = [];
	    while (index <= length) {
	      let char = code[index++];
	      let nextChar = code[index];
	      if (utils.isNull(char)) {
	        if (token.length > 0) {
	          tokens.push('"' + this._escapeCode(token) + '"');
	        }
	        token = '';
	        isExpr = false;
	      } else if (!isExpr && char + nextChar == '{{') {
	        if (token.length > 0) {
	          tokens.push('"' + this._escapeCode(token) + '"');
	        }
	        token = '';
	        isExpr = true;
	        index++;
	      } else if (isExpr && char + nextChar == '}}') {
	        if (token.length > 0) {
	          tokens.push(this._wrapCode(token));
	        }
	        token = '';
	        isExpr = false;
	        index++;
	      } else {
	        token += char;
	      }
	    }
	    return tokens;
	  },
	
	  /**
	   * 转义处理代码字符串
	   * @param {string} str 源字符串
	   * @returns {string} 处理后的字符串
	   */
	  _escapeCode: function /*istanbul ignore next*/_escapeCode(str) {
	    return str.replace(/"/, '\\"').replace('\r\n', '\\r\\n').replace('\n', '\\n');
	  },
	
	  /**
	   * 转义换行符
	   * @param {string} str 源字符串
	   * @returns {string} 处理后的字符串
	   */
	  _escapeEOL: function /*istanbul ignore next*/_escapeEOL(code) {
	    return code.replace(/\n/gm, '\\\n');
	  },
	
	  /**
	   * 通过闭包和 try/cache 包裹代码
	   * 将模板中错误的代码直接显示在「模板中用到的位置」，更易于定位错误。
	   * @param {string} str 源字符串
	   * @returns {string} 处理后的字符串
	   */
	  _wrapCode: function /*istanbul ignore next*/_wrapCode(code) {
	    return '((function(){try{return (' + code + ')}catch(err){console.error(err);return err;}})())';
	  },
	
	  /**
	   * 通过 scope 对象执行表达式
	   * @param {Object} scope 上下文对象
	   * @returns {Object} 执行结果
	   */
	  execute: function /*istanbul ignore next*/execute(scope) {
	    if (utils.isNull(scope)) {
	      scope = Object.create(null);
	    }
	    return this.func.call(scope, scope);
	  }
	
	});
	
	module.exports = Expression;

/***/ },
/* 13 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	module.exports = [__webpack_require__(14), __webpack_require__(15), __webpack_require__(16), __webpack_require__(17), __webpack_require__(18), __webpack_require__(19), __webpack_require__(20), __webpack_require__(21), __webpack_require__(22), __webpack_require__(23), __webpack_require__(24), __webpack_require__(25), __webpack_require__(26), __webpack_require__(27), __webpack_require__(28), __webpack_require__(29)];

/***/ },
/* 14 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	let Expression = __webpack_require__(12);
	
	module.exports = new Directive({
	  name: '#text',
	  type: Directive.TYPE_ELEMENT,
	  prefix: false,
	  test: function /*istanbul ignore next*/test(matchInfo) {
	    return matchInfo.node.nodeValue.trim().length > 4;
	  },
	
	  /**
	   * 初始化指令
	   * @returns {void} 无返回
	   */
	  bind: function /*istanbul ignore next*/bind() {
	    this.expr = new Expression(this.node.nodeValue, true);
	    this.node.nodeValue = '';
	  },
	
	  execute: function /*istanbul ignore next*/execute(scope) {
	    this.scope = scope;
	    let newValue = this.expr.execute(scope);
	    if (this.node.nodeValue !== newValue) {
	      this.node.nodeValue = newValue;
	    }
	  }
	
	});

/***/ },
/* 15 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	
	/**
	 * 通用的 attribute 指令
	 * 用于所有 attribute 的处理
	 * 例如:
	 *  <div attr1="{{expr1}}" {{expr2}} {{attr3}}="{{expr3}}">
	 *  </div>
	 */
	module.exports = new Directive({
	  name: 'attr',
	  type: Directive.TYPE_ATTRIBUTE,
	  level: Directive.LEVEL_ATTRIBUTE,
	  prefix: false,
	  literal: true,
	  remove: false,
	  match: /[\s\S]/i,
	
	  /**
	   * 初始化指令
	   * @returns {void} 无返回
	   */
	  bind: function /*istanbul ignore next*/bind() {
	    this.computedName = this.attribute.name;
	    this.computedValue = this.attribute.value;
	    this.nameExpr = new this.Expression(this.attribute.name, true);
	    this.valueExpr = new this.Expression(this.attribute.value, true);
	  },
	
	  execute: function /*istanbul ignore next*/execute(scope) {
	    let newComputedName = this.nameExpr.execute(scope);
	    if (this.computedName !== newComputedName) {
	      this.node.removeAttribute(this.computedName);
	      this.computedName = newComputedName;
	      if (!this.utils.isNull(this.computedName) && this.computedName.length > 0) {
	        this.node.setAttribute(this.computedName, '');
	      }
	    }
	    let newComputeValue = this.valueExpr.execute(scope);
	    newComputeValue = this.utils.isNull(newComputeValue) ? '' : newComputeValue;
	    if (this.computedValue !== newComputeValue) {
	      this.computedValue = newComputeValue;
	      this.node.setAttribute(this.computedName, this.computedValue);
	    }
	  }
	
	});

/***/ },
/* 16 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	
	module.exports = new Directive({
	  name: 'each',
	  type: Directive.TYPE_ATTRIBUTE,
	  level: Directive.LEVEL_STATEMENT,
	  final: true,
	  literal: true,
	
	  /**
	   * 初始化指令
	   * @returns {void} 无返回
	   */
	  bind: function /*istanbul ignore next*/bind() {
	    this.mountNode = document.createTextNode('');
	    this.node.parentNode.insertBefore(this.mountNode, this.node);
	    //虽然，bind 完成后，也会进行 attribute 的移除，
	    //但 each 指令必须先移除，否再进行 item 编译时 each 还会生效
	    this.node.removeAttribute(this.attribute.name);
	    this.node.parentNode.removeChild(this.node);
	    this.parseExpr();
	    this.eachItems = [];
	  },
	
	  parseExpr: function /*istanbul ignore next*/parseExpr() {
	    this.eachType = this.attribute.value.indexOf(' in ') > -1 ? 'in' : 'of';
	    let tokens = this.attribute.value.split(' ' + this.eachType + ' ');
	    let fnText = 'with(scope){utils.each(' + tokens[1] + ',fn,this)}';
	    this.each = new Function('utils', 'scope', 'fn', fnText).bind(null, this.utils);
	    let names = tokens[0].split(',').map(function (name) {
	      return name.trim();
	    });
	    if (this.eachType == 'in') {
	      this.keyName = names[0];
	      this.valueName = names[1];
	    } else {
	      this.keyName = names[1];
	      this.valueName = names[0];
	    }
	  },
	
	  execute: function /*istanbul ignore next*/execute(scope) {
	    let eachCount = 0;
	    let itemsFragment = document.createDocumentFragment();
	    this.each(scope, function (key, value) {
	      //创建新 scope
	      let newScope = { __proto__: scope };
	      if (this.keyName) newScope[this.keyName] = key;
	      if (this.valueName) newScope[this.valueName] = value;
	      let oldItem = this.eachItems[key];
	      if (oldItem) {
	        if (!oldItem.handler) console.log('a', this.eachItems, oldItem);
	        oldItem.handler(newScope);
	      } else {
	        let newItem = Object.create(null);
	        //创建新元素
	        newItem.node = this.node.cloneNode(true);
	        itemsFragment.appendChild(newItem.node);
	        newItem.handler = this.compiler.compile(newItem.node);
	        newItem.handler(newScope);
	        this.eachItems[key] = newItem;
	      }
	      eachCount++;
	    }.bind(this));
	    this.eachItems.splice(eachCount).forEach(function (item) {
	      item.node.parentNode.removeChild(item.node);
	    });
	    if (itemsFragment.childNodes.length > 0) {
	      this.mountNode.parentNode.insertBefore(itemsFragment, this.mountNode);
	    }
	  }
	
	});

/***/ },
/* 17 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	
	module.exports = new Directive({
	  name: 'if',
	  type: Directive.TYPE_ATTRIBUTE,
	  level: Directive.LEVEL_STATEMENT,
	  final: true,
	
	  /**
	   * 初始化指令
	   * @returns {void} 无返回
	   */
	  bind: function /*istanbul ignore next*/bind() {
	    this.mountNode = document.createTextNode('');
	    this.node.parentNode.insertBefore(this.mountNode, this.node);
	    //虽然，bind 完成后，也会进行 attribute 的移除，
	    //但 if 指令必须先移除，否再进行 item 编译时 if 还会生效
	    this.node.removeAttribute(this.attribute.name);
	    this.node.parentNode.removeChild(this.node);
	    this._oldValue = false;
	    this._handler = this.compiler.compile(this.node);
	  },
	
	  execute: function /*istanbul ignore next*/execute(scope) {
	    let newValue = this.expression.execute(scope);
	    let node = this.node.$substitute || this.node;
	    if (newValue) {
	      //如果新计算的结果为 true 才执行 
	      this._handler(scope);
	      if (!this._oldValue) {
	        this.mountNode.parentNode.insertBefore(node, this.mountNode);
	      }
	    } else if (this._oldValue && node.parentNode) {
	      node.parentNode.removeChild(node);
	    }
	    this._oldValue = newValue;
	  }
	
	});

/***/ },
/* 18 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	
	module.exports = new Directive({
	  name: 'prop',
	  type: Directive.TYPE_ATTRIBUTE,
	
	  update: function /*istanbul ignore next*/update(value) {
	    let target = this.node.$target || this.node;
	    target[this.decorates[0]] = value;
	  }
	
	});

/***/ },
/* 19 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	let EventEmitter = __webpack_require__(6);
	
	module.exports = new Directive({
	  name: 'on',
	  type: Directive.TYPE_ATTRIBUTE,
	  literal: true,
	
	  /**
	   * 初始化指令
	   * @returns {void} 无返回
	   */
	  bind: function /*istanbul ignore next*/bind() {
	    let attrValue = this.attribute.value || '';
	    if (attrValue.indexOf('(') < 0 && attrValue.indexOf(')') < 0) {
	      attrValue += '($event)';
	    }
	    this.expr = new this.Expression(attrValue);
	    let eventTarget = this.node.$target || this.node;
	    this.emiter = new EventEmitter(eventTarget);
	    this.emiter.addListener(this.decorates[0], function (event) {
	      if (this.utils.isNull(this.scope)) return;
	      let scope = { __proto__: this.scope };
	      scope.event = scope.$event = event;
	      this.expr.execute(scope);
	    }.bind(this), false);
	  },
	
	  unbind: function /*istanbul ignore next*/unbind() {
	    this.emiter.removeListener();
	  },
	
	  execute: function /*istanbul ignore next*/execute(scope) {
	    this.scope = scope;
	  }
	
	});

/***/ },
/* 20 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	
	module.exports = new Directive({
	  name: 'html',
	  type: Directive.TYPE_ATTRIBUTE,
	
	  update: function /*istanbul ignore next*/update(newValue) {
	    this.node.innerHTML = newValue;
	  }
	
	});

/***/ },
/* 21 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	
	module.exports = new Directive({
	  name: 'text',
	  type: Directive.TYPE_ATTRIBUTE,
	
	  update: function /*istanbul ignore next*/update(newValue) {
	    this.node.innerText = newValue;
	  }
	
	});

/***/ },
/* 22 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	
	module.exports = new Directive({
	  name: 'prevent',
	  type: Directive.TYPE_ATTRIBUTE,
	  level: Directive.LEVEL_PREVENT,
	  final: true
	});

/***/ },
/* 23 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	
	module.exports = new Directive({
	  name: 'id',
	  type: Directive.TYPE_ATTRIBUTE,
	  literal: true,
	
	  update: function /*istanbul ignore next*/update(id) {
	    if (id in this.scope) {
	      throw new Error('Conflicting component id `' + id + '`');
	    }
	    this.scope[id] = this.node.$target || this.node;
	  }
	
	});

/***/ },
/* 24 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	
	module.exports = new Directive({
	  name: 'cloak',
	  type: Directive.TYPE_ATTRIBUTE,
	  level: Directive.LEVEL_CLOAK,
	  literal: true,
	  prefix: false,
	
	  bind: function /*istanbul ignore next*/bind() {
	    this.node.removeAttribute(this.attribute.name);
	  }
	
	});

/***/ },
/* 25 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	let EventEmitter = __webpack_require__(6);
	
	module.exports = new Directive({
	  name: 'model',
	  type: Directive.TYPE_ATTRIBUTE,
	  level: Directive.LEVEL_ATTRIBUTE,
	  tag: /^(input|textarea)$/i,
	  test: function /*istanbul ignore next*/test(matchInfo) {
	    let inputType = matchInfo.node.getAttribute('type');
	    return inputType !== 'radio' && inputType !== 'checkbox';
	  },
	
	  /**
	   * 初始化指令
	   * @returns {void} 无返回
	   */
	  bind: function /*istanbul ignore next*/bind() {
	    this.bindPath = this.attribute.value;
	    this.emiter = new EventEmitter(this.node);
	    this.emiter.addListener('input', function () {
	      if (this.utils.isNull(this.scope)) return;
	      this.utils.setByPath(this.scope, this.bindPath, this.node.value);
	    }.bind(this), false);
	  },
	
	  unbind: function /*istanbul ignore next*/unbind() {
	    this.emiter.removeListener();
	  },
	
	  execute: function /*istanbul ignore next*/execute(scope) {
	    let value = this.expression.execute(scope);
	    if (this.node.value !== value) {
	      this.node.value = value;
	    }
	  }
	
	});

/***/ },
/* 26 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	let EventEmitter = __webpack_require__(6);
	
	module.exports = new Directive({
	  name: 'model',
	  type: Directive.TYPE_ATTRIBUTE,
	  level: Directive.LEVEL_ATTRIBUTE,
	  final: true,
	  tag: 'select',
	
	  /**
	   * 初始化指令
	   * @returns {void} 无返回
	   */
	  bind: function /*istanbul ignore next*/bind() {
	    this.bindPath = this.attribute.value;
	    this.node.removeAttribute(this.attribute.name);
	    this._handler = this.compiler.compile(this.node);
	    this.emiter = new EventEmitter(this.node);
	    this.emiter.addListener('change', function () {
	      if (this.utils.isNull(this.scope)) return;
	      let selectedOptions = this.node.selectedOptions;
	      let value = this.node.multiple ? [].slice.call(selectedOptions).map(function (option) {
	        return option.value;
	      }, this) : selectedOptions[0].value;
	      this.utils.setByPath(this.scope, this.bindPath, value);
	    }.bind(this), false);
	  },
	
	  unbind: function /*istanbul ignore next*/unbind() {
	    this.emiter.removeListener();
	  },
	
	  execute: function /*istanbul ignore next*/execute(scope) {
	    this.scope = scope;
	    this._handler(scope);
	    let value = this.expression.execute(scope);
	    if (!this.utils.isArray(value)) value = [value];
	    [].slice.call(this.node.options).forEach(function (option) {
	      option.selected = value.indexOf(option.value) > -1;
	    }, this);
	  }
	
	});

/***/ },
/* 27 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	let EventEmitter = __webpack_require__(6);
	
	module.exports = new Directive({
	  name: 'model',
	  type: Directive.TYPE_ATTRIBUTE,
	  level: Directive.LEVEL_ATTRIBUTE,
	  tag: 'input',
	  test: function /*istanbul ignore next*/test(matchInfo) {
	    let inputType = matchInfo.node.getAttribute('type');
	    return inputType === 'radio';
	  },
	
	  /**
	   * 初始化指令
	   * @returns {void} 无返回
	   */
	  bind: function /*istanbul ignore next*/bind() {
	    this.bindPath = this.attribute.value;
	    this.emiter = new EventEmitter(this.node);
	    this.emiter.addListener('change', function () {
	      if (this.utils.isNull(this.scope)) return;
	      this.utils.setByPath(this.scope, this.bindPath, this.node.value);
	    }.bind(this), false);
	  },
	
	  unbind: function /*istanbul ignore next*/unbind() {
	    this.emiter.removeListener();
	  },
	
	  execute: function /*istanbul ignore next*/execute(scope) {
	    this.scope = scope;
	    let value = this.expression.execute(scope);
	    this.node.checked = value == this.node.value;
	  }
	
	});

/***/ },
/* 28 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	let EventEmitter = __webpack_require__(6);
	
	module.exports = new Directive({
	  name: 'model',
	  type: Directive.TYPE_ATTRIBUTE,
	  level: Directive.LEVEL_ATTRIBUTE,
	  tag: 'input',
	
	  test: function /*istanbul ignore next*/test(matchInfo) {
	    let inputType = matchInfo.node.getAttribute('type');
	    return inputType === 'checkbox';
	  },
	
	  /**
	   * 初始化指令
	   * @returns {void} 无返回
	   */
	  bind: function /*istanbul ignore next*/bind() {
	    this.bindPath = this.attribute.value;
	    this.emiter = new EventEmitter(this.node);
	    this.emiter.addListener('change', function () {
	      if (this.utils.isNull(this.scope)) return;
	      let value = this.utils.getByPath(this.scope, this.bindPath);
	      if (this.utils.isArray(value) && this.node.checked) {
	        value.push(this.node.value);
	      } else if (this.utils.isArray(value) && !this.node.checked) {
	        let index = value.indexOf(this.node.value);
	        value.splice(index, 1);
	      } else {
	        this.utils.setByPath(this.scope, this.bindPath, this.node.checked);
	      }
	    }.bind(this), false);
	  },
	
	  unbind: function /*istanbul ignore next*/unbind() {
	    this.emiter.removeListener();
	  },
	
	  execute: function /*istanbul ignore next*/execute(scope) {
	    this.scope = scope;
	    let value = this.expression.execute(scope);
	    if (this.utils.isArray(value)) {
	      this.node.checked = value.indexOf(this.node.value) > -1;
	    } else {
	      this.node.checked = value;
	    }
	  }
	
	});

/***/ },
/* 29 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	let EventEmitter = __webpack_require__(6);
	
	module.exports = new Directive({
	  name: 'model',
	  type: Directive.TYPE_ATTRIBUTE,
	  level: Directive.LEVEL_ATTRIBUTE,
	  test: function /*istanbul ignore next*/test(matchInfo) {
	    return matchInfo.node.isContentEditable;
	  },
	
	  /**
	   * 初始化指令
	   * @returns {void} 无返回
	   */
	  bind: function /*istanbul ignore next*/bind() {
	    this.bindPath = this.attribute.value;
	    this.emiter = new EventEmitter(this.node);
	    this.emiter.addListener('input', function () {
	      if (this.utils.isNull(this.scope)) return;
	      this.utils.setByPath(this.scope, this.bindPath, this.node.innerHTML);
	    }.bind(this), false);
	  },
	
	  unbind: function /*istanbul ignore next*/unbind() {
	    this.emiter.removeListener();
	  },
	
	  execute: function /*istanbul ignore next*/execute(scope) {
	    let value = this.expression.execute(scope);
	    if (this.node.innerHTML !== value) {
	      this.node.innerHTML = value;
	    }
	  }
	
	});

/***/ },
/* 30 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Class = __webpack_require__(4);
	let Observer = __webpack_require__(5);
	let EventEmitter = __webpack_require__(6);
	let Compiler = __webpack_require__(10);
	
	/**
	 * 模板类
	 * 可能通过 element 作为参数，创建一个模板实例
	 */
	let Template = new Class({
	  $name: 'Template',
	
	  $extends: EventEmitter,
	
	  /**
	   * 构建一个模板板实例
	   * @param {HTMLNode} element HTML 元素
	   * @param {Object} options 选项
	   * @returns void 无返回
	   */
	  constructor: function /*istanbul ignore next*/constructor(element, options) {
	    options = options || Object.create(null);
	    EventEmitter.call(this);
	    this.options = options;
	    this.element = element;
	    this.compiler = options.compiler || new Compiler(options);
	    this.render = this.compiler.compile(this.element);
	    this.update = this.update.bind(this);
	    this._update = this._update.bind(this);
	    this._updateTimer = 0;
	  },
	
	  /**
	   * 更新当前模板 (会过滤不必要的更新)
	   * @returns {void} 无返回
	   */
	  update: function /*istanbul ignore next*/update() {
	    if (this._updateTimer) {
	      clearTimeout(this._updateTimer);
	      this._updateTimer = null;
	    }
	    this._updateTimer = setTimeout(this._update, 0);
	  },
	
	  /**
	   * 更新当前模板内部方法 
	   * @returns {void} 无返回
	   */
	  _update: function /*istanbul ignore next*/_update() {
	    if (!this._updateTimer || !this.observer) return;
	    this.emit('update', this);
	    this.render(this.observer.target);
	    this._onBind();
	  },
	
	  /**
	   * 在绑定成功时
	   * @returns {void} 无返回
	   */
	  _onBind: function /*istanbul ignore next*/_onBind() {
	    if (this._bound) return;
	    this._bound = true;
	    this.emit('bind', this);
	  },
	
	  /**
	   * 将模板绑定到一个 scope
	   * @param {Object} scope 绑定的上下文对象
	   * @param {boolean} disableFirst 是否禁用第一次的自动渲染
	   * @returns {void} 无返回
	   */
	  bind: function /*istanbul ignore next*/bind(scope, disableFirst) {
	    this.unbind();
	    this.observer = new Observer(scope, {
	      root: this.options.root
	    });
	    this.observer.on('change', this.update);
	    if (disableFirst) {
	      this._onBind();
	    } else {
	      this.update();
	    }
	  },
	
	  /**
	   * 解绑定
	   * @returns {void} 无返回
	   */
	  unbind: function /*istanbul ignore next*/unbind() {
	    if (!this.observer) return;
	    this.observer.removeListener('change', this.update);
	    this.observer.clearReference();
	    this.observer = null;
	  },
	
	  /**
	   * 释放
	   * @returns {void} 无返回
	   */
	  dispose: function /*istanbul ignore next*/dispose() {
	    this.unbind();
	    this.render.dispose();
	  }
	
	});
	
	module.exports = Template;

/***/ },
/* 31 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Component = __webpack_require__(32);
	let components = __webpack_require__(34);
	
	Component.components = components;
	Component.Component = Component;
	
	Component.component = function (name, component) {
	  if (!component) return components[name];
	  components[name] = component;
	};
	
	module.exports = Component;

/***/ },
/* 32 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Class = __webpack_require__(4);
	let Template = __webpack_require__(9);
	let Watcher = __webpack_require__(3);
	let utils = __webpack_require__(2);
	let EventEmitter = __webpack_require__(6);
	let Observer = __webpack_require__(5);
	let ComponentDirective = __webpack_require__(33);
	
	let RESERVED_WORDS = ['$compile', '$data', '$dispose', '$element', '$mount', '$properties', '$remove', '$watch', '_callHook', '_compiled', '_createData', '_createProperties', '_createWatches', '$extends', '_mounted', '_observer', '_onTemplateUpdate', '_removed', '_template', '_watchers', '$children', '$parent', '_directives', '_importComponents', '$nextTick', '_isElement', '_listeners', '__emitter__', '__observer__', '_target', '$on', '$off', '$emit', '$dispatch'];
	
	/**
	 * 组件类
	 * 用于定义一个新的组件
	 */
	function Component(classOpts) {
	
	  //处理组件选项
	  classOpts = classOpts || Object.create(null);
	
	  //处理「继承」，目前的机制，只能用「合并类选项」
	  let mixObjects = classOpts.mixs;
	  delete classOpts.mixs;
	  if (mixObjects && !utils.isArray(mixObjects)) {
	    mixObjects = [mixObjects];
	  } else {
	    mixObjects = [];
	  }
	  let extendComponent = classOpts.extends || Component;
	  delete classOpts.extends;
	  mixObjects.push(extendComponent);
	  mixObjects.push(classOpts);
	  let mixedClassOpts = {};
	  mixObjects.forEach(function (mixObject) {
	    if (mixObject instanceof Component || mixObject == Component) {
	      mixObject = mixObject._options || {};
	    }
	    utils.mix(mixedClassOpts, mixObject);
	  });
	  classOpts = mixedClassOpts;
	  /**
	   * 定义组件类
	   * 可以通过 new ComponentClass() 创建组件实例
	   */
	  let ComponentClass = new Class({
	    $name: classOpts.$name || 'Component',
	    $extends: extendComponent,
	
	    /**
	     * 组件类构造函数
	     * @returns {void} 无返回
	     */
	    constructor: function /*istanbul ignore next*/constructor(instanceOpts) {
	      if (this == window) {
	        return new this.$class(instanceOpts);
	      }
	      EventEmitter.call(this);
	      instanceOpts = instanceOpts || {};
	      utils.copy(instanceOpts, this);
	      this._onTemplateUpdate = this._onTemplateUpdate.bind(this);
	      this._createData(this.data);
	      delete this.data;
	      this._createProperties(this.properties);
	      delete this.properties;
	      this._createWatches(this.watches);
	      delete this.watches;
	      this._importComponents(__webpack_require__(34));
	      this._importComponents(this.components);
	      delete this.components;
	      this._callHook('onInit');
	      this._observer = Observer.observe(this);
	      utils.defineFreezeProp(this, '$children', []);
	      utils.defineFreezeProp(this, '$parent', instanceOpts.parent);
	      if (this.$parent) this.$parent.$children.push(this);
	      this.$compile();
	      this._mounted = !!this.element;
	    },
	
	    /**
	     * 导入用到的子组件类
	     * @param {Object} components 引入的组件
	     * @returns 无返回
	     */
	    _importComponents: function /*istanbul ignore next*/_importComponents(components) {
	      utils.each(components, this._importComponent, this);
	    },
	
	    /**
	     * 导入一个用到的子组件类
	     * @param {Object} components 引入的组件
	     * @returns 无返回
	     */
	    _importComponent: function /*istanbul ignore next*/_importComponent(name, component) {
	      this.$components = this.$components || {};
	      this.$components[name] = component;
	      this._directives = this._directives || [];
	      this._directives.push(new ComponentDirective({
	        name: name,
	        component: component,
	        parent: this
	      }));
	    },
	
	    /**
	     * 调用生命周期 hook
	     * @param {string} name 调用的 hook 名称
	     * @param {Array} args 调用 hook 的参数列表
	     * @returns {void} 无反回
	     */
	    _callHook: function /*istanbul ignore next*/_callHook(name, args) {
	      if (!utils.isFunction(this[name])) return;
	      this[name].apply(this, args);
	    },
	
	    /**
	     * 创建数据对象
	     * @param {Object} data 组件数据对象
	     * @returns {void} 无返回
	     */
	    _createData: function /*istanbul ignore next*/_createData(data) {
	      if (utils.isFunction(data)) {
	        this.$data = data.call(this);
	      } else {
	        this.$data = data || {};
	      }
	      utils.each(this.$data, function (name) {
	        Object.defineProperty(this, name, {
	          configurable: true,
	          enumerable: true,
	          get: function /*istanbul ignore next*/get() {
	            if (!this.$data) return;
	            return this.$data[name];
	          },
	          set: function /*istanbul ignore next*/set(value) {
	            if (!this.$data) return;
	            this.$data[name] = value;
	          }
	        });
	      }, this);
	    },
	
	    /**
	     * 创建组件属性
	     * @param {Object} properties 属性定义对象
	     * @returns {void} 无返回
	     */
	    _createProperties: function /*istanbul ignore next*/_createProperties(properties) {
	      this.$properties = {};
	      let isArray = utils.isArray(properties);
	      utils.each(properties, function (name, descriptor) {
	        if (utils.isFunction(descriptor)) {
	          descriptor = { get: descriptor };
	        }
	        if (!utils.isObject(descriptor)) {
	          descriptor = { value: descriptor };
	        }
	        let hasGetterOrSetter = !!descriptor.get || !!descriptor.set;
	        if (!hasGetterOrSetter) {
	          descriptor.value = descriptor.value || null;
	          descriptor.get = function () {
	            return descriptor.value;
	          };
	          descriptor.set = function (value) {
	            descriptor.value = value;
	          };
	        }
	        Object.defineProperty(this, name, {
	          configurable: true,
	          enumerable: true,
	          get: function /*istanbul ignore next*/get() {
	            if (!descriptor.get) {
	              throw new Error('Property `' + name + '` cannot be read');
	            }
	            return descriptor.get.call(this);
	          },
	          set: function /*istanbul ignore next*/set(value) {
	            if (!descriptor.set) {
	              throw new Error('Property `' + name + '` cannot be written');
	            }
	            if (descriptor.test && !descriptor.test(value)) {
	              throw new Error('Invalid value `' + value + '` for property `' + name + '`');
	            }
	            descriptor.set.call(this, value);
	            if (this.__observer__) {
	              this.__observer__.emitChange({ path: name, value: value });
	            }
	          }
	        });
	        this.$properties[name] = descriptor;
	      }, this);
	    },
	
	    /**
	     * 创建监控
	     * 为什么用 watches 而不是 watchers 或其它？
	     * 因为，这里仅是「监控配置」并且是「复数」
	     * @param {Object} watches 监控定义对象
	     * @returns {void} 无返回
	     */
	    _createWatches: function /*istanbul ignore next*/_createWatches(watches) {
	      this._watchers = this._watchers || [];
	      utils.each(watches, function (name, handler) {
	        this.$watch(name, handler);
	      }, this);
	    },
	
	    /**
	     * 在模板发生更新时
	     * @returns {void} 无返回
	     */
	    _onTemplateUpdate: function /*istanbul ignore next*/_onTemplateUpdate() {
	      this._watchers.forEach(function (watcher) {
	        watcher.calc();
	      }, this);
	    },
	
	    /**
	     * 添加一个监控
	     * @param {string|function} calcer 计算函数或路径
	     * @param {function} handler 处理函数
	     * @returns {void} 无返回
	     */
	    $watch: function /*istanbul ignore next*/$watch(calcer, handler) {
	      if (!utils.isFunction(handler)) return;
	      if (!utils.isFunction(calcer)) {
	        let path = calcer;
	        calcer = function /*istanbul ignore next*/calcer() {
	          return utils.getByPath(this, path);
	        };
	      }
	      this._watchers.push(new Watcher(calcer.bind(this), handler.bind(this)));
	    },
	
	    /**
	     * 编译自身模板并完成绑定
	     * @returns {void} 无返回
	     */
	    $compile: function /*istanbul ignore next*/$compile() {
	      if (this._compiled) return;
	      this._compiled = true;
	      this._callHook('onCreate');
	      utils.defineFreezeProp(this, '$element', this.element || utils.parseDom(this.template)[0]);
	      if (!this.$element || this.$element.nodeName === '#text') {
	        throw new Error('Invalid component template');
	      }
	      this._callHook('onCreated');
	      utils.defineFreezeProp(this, '_template', new Template(this.$element, {
	        directives: this._directives,
	        root: true
	      }));
	      this._template.bind(this);
	      this._template.on('update', this._onTemplateUpdate);
	      this._template.on('bind', function () {
	        this._callHook('onReady');
	      }.bind(this));
	    },
	
	    /**
	     * 向 DOM tree 中挂截组件
	     * @param {HTMLNode} mountNode 挂载点元素
	     * @returns 无返回 
	     */
	    $mount: function /*istanbul ignore next*/$mount(mountNode, append) {
	      if (!mountNode || this._mounted) return;
	      this._callHook('onMount');
	      mountNode.$substitute = this.$element;
	      this.$element._mountNode = mountNode;
	      if (append) {
	        mountNode.appendChild(this.$element);
	      } else if (mountNode.parentNode) {
	        mountNode.parentNode.insertBefore(this.$element, mountNode);
	      }
	      this._mounted = true;
	      this._removed = false;
	      this._callHook('onMounted');
	    },
	
	    /**
	     * 移除组件
	     * @returns {void} 无返回
	     */
	    $remove: function /*istanbul ignore next*/$remove() {
	      if (this._removed || !this._mounted) return;
	      this._callHook('onRemove');
	      if (this.$element.parentNode) {
	        this.$element.parentNode.removeChild(this.$element);
	      }
	      this._removed = true;
	      this._mounted = false;
	      this._callHook('onRemoved');
	    },
	
	    /**
	     * 触发自身的一个事件并向上冒泡
	     * @param {string} name 事件名称
	     * @param {object} data 传递的对象
	     * @returns {void} 无返回
	     */
	    $dispatch: function /*istanbul ignore next*/$dispatch(name, data) {
	      let stopBubble = this.$emit(name, data);
	      if (this.$parent && !stopBubble) {
	        this.$parent.$dispatch(name, data);
	      }
	    },
	
	    /**
	     * 释放组件
	     * @returns {void} 无返回
	     */
	    $dispose: function /*istanbul ignore next*/$dispose() {
	      this.$remove();
	      this.__emitter__.off();
	      this.$children.forEach(function (child) {
	        child.$dispose();
	      }, this);
	      if (this.$parent) {
	        let index = this.$parent.$children.indexOf(this);
	        this.$parent.$children.splice(index, 1);
	      }
	      this._callHook('onDispose');
	      if (this._compiled) {
	        this._template.unbind();
	      }
	      this._callHook('onDisposed');
	      for (name in this) {
	        delete this[name];
	      }
	      ['__observer__', '$element', '$children', '$parent', '_template'].forEach(function (name) {
	        delete this[name];
	      }, this);
	      this.__proto__ = null;
	    }
	
	  });
	
	  //保存类选项
	  ComponentClass._options = classOpts;
	
	  //向 ComponentClass.prototype 上拷贝成员
	  utils.copy(classOpts, ComponentClass.prototype, RESERVED_WORDS, 'Name `{name}` is reserved');
	
	  //使 ComponentClass instanceof Component === true
	  ComponentClass.__proto__ = Component.prototype;
	
	  return ComponentClass;
	}
	
	Component.prototype.__proto__ = EventEmitter.prototype;
	utils.defineFreezeProp(Component, 'name', 'Component');
	
	//组件扩展方法，简单封装 extends
	Component.extend = function (classOpts) {
	  return new Component(classOpts);
	};
	
	//定义扩展方法
	Component.prototype.extend = function (classOpts) {
	  classOpts = classOpts || Object.create(null);
	  classOpts.extends = this;
	  return new Component(classOpts);
	};
	
	//创建实例的方法
	Component.prototype.create = function (instanceOpts) {
	  return new this(instanceOpts);
	};
	
	//针对包括 element 组件类的启动方法
	Component.prototype.start = function (instanceOpts) {
	  if (!this._options || !this._options.element) {
	    throw new Error('Start method cannot be called');
	  }
	  return this.create(instanceOpts);
	};
	
	module.exports = Component;

/***/ },
/* 33 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Class = __webpack_require__(4);
	let Template = __webpack_require__(9);
	let utils = __webpack_require__(2);
	let Directive = Template.Directive;
	let Expression = Template.Expression;
	
	/**
	 * 创建一个组件指令
	 * @param {object} options 选项
	 */
	function ComponentDirective(options) {
	
	  let Component = options.component;
	  let parent = options.parent;
	
	  return new Directive({
	    name: options.name,
	    type: Directive.TYPE_ELEMENT,
	    literal: true,
	    final: true,
	    level: Directive.LEVEL_ELEMENT,
	
	    bind: function /*istanbul ignore next*/bind() {
	      this.component = new Component({
	        parent: options.parent || this.scope
	      });
	      this.node.$target = this.component;
	      this.handler = this.compiler.compile(this.node, {
	        element: false,
	        children: false
	      });
	      //this.handleId();
	      this.handleAttrs();
	      this.handleContents();
	      this.component.$mount(this.node);
	      if (this.node.parentNode) {
	        this.node.parentNode.removeChild(this.node);
	      }
	    },
	
	    handleId: function /*istanbul ignore next*/handleId() {
	      if (!parent) return;
	      let idAttr = this.prefix + ':id';
	      let id = this.node.getAttribute(idAttr);
	      if (id in parent) throw new Error('Conflicting component id `' + id + '`');
	      parent[id] = this.component;
	      this.node.removeAttribute(idAttr);
	    },
	
	    handleAttrs: function /*istanbul ignore next*/handleAttrs() {
	      this.propExprs = {};
	      this.attrs = [].slice.call(this.node.attributes);
	      let directiveRegexp = new RegExp('^' + this.prefix + ':', 'i');
	      this.attrs.forEach(function (attr) {
	        if (directiveRegexp.test(attr.name)) return;
	        if (attr.name in this.component.$properties) {
	          //this.propExprs[attr.name] = new Expression(attr.value);
	          this.component[attr.name] = attr.value;
	        } else {
	          this.component.$element.setAttribute(attr.name, attr.value);
	        }
	      }, this);
	    },
	
	    handleContents: function /*istanbul ignore next*/handleContents() {
	      this.placeHandlers = [];
	      let places = [].slice.call(this.component.$element.querySelectorAll('[' + this.prefix + '\\:content]'));
	      places.forEach(function (place) {
	        //将内容插入到指定的「位置」
	        let contents = null;
	        let selector = place.getAttribute(this.prefix + ':content');
	        if (!selector) {
	          contents = [].slice.call(this.node.childNodes);
	        } else {
	          contents = [].slice.call(this.node.querySelectorAll(selector));
	        }
	        if (!contents || contents.length < 1) return;
	        place.innerHTML = '';
	        contents.forEach(function (content) {
	          place.appendChild(content.cloneNode(true));
	        }, this);
	        //编译插入后的子「内容模板」
	        let handler = this.compiler.compile(place);
	        this.placeHandlers.push(handler);
	      }, this);
	    },
	
	    execute: function /*istanbul ignore next*/execute(scope) {
	      this.handler(scope);
	      // utils.each(this.propExprs, function (name) {
	      //   let value = this.propExprs[name].execute(scope);
	      //   this.propExprs[name]._oldValue = value;
	      //   this.component[name] = value;
	      // }, this);
	      this.placeHandlers.forEach(function (handler) {
	        handler(scope);
	      }, this);
	    }
	
	  });
	};
	
	module.exports = ComponentDirective;

/***/ },
/* 34 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	module.exports = {
	  View: __webpack_require__(35)
	};

/***/ },
/* 35 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Component = __webpack_require__(32);
	let utils = __webpack_require__(2);
	
	let View = new Component({
	
	  template: '<div></div>',
	
	  properties: {
	    component: {
	      test: function /*istanbul ignore next*/test(value) {
	        if (!value) return false;
	        return value instanceof Component || utils.isString(value);
	      },
	      set: function /*istanbul ignore next*/set(component) {
	        //如果 value 是字符串则尝试从 $parent.components 中获取组件类 
	        if (utils.isString(component)) {
	          if (this.$parent && this.$parent.$components) {
	            this.component = this.$parent.$components[component];
	          } else {
	            this.component = null;
	          }
	          return;
	        }
	        //销毁旧组件实例
	        if (this.componentInstance) {
	          this.componentInstance.$dispose();
	        }
	        //创建新组件实例
	        if (utils.isFunction(component)) {
	          this.componentInstance = new component({
	            parent: this
	          });
	        } else {
	          this.componentInstance = component;
	        }
	        //挂载新组件实例
	        this.componentInstance.$mount(this.$element, true);
	      },
	      get: function /*istanbul ignore next*/get() {
	        return this._Component;
	      }
	    }
	  }
	
	});
	
	module.exports = View;

/***/ },
/* 36 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let utils = __webpack_require__(2);
	let Class = __webpack_require__(4);
	let RouterBase = __webpack_require__(37);
	let HashDirver = __webpack_require__(38);
	let RouterView = __webpack_require__(39);
	let LinkDirective = __webpack_require__(40);
	let Component = __webpack_require__(31);
	
	let ROOT_PATH = '/';
	
	let Router = new Class({
	  $name: 'Router',
	  $extends: RouterBase,
	
	  /**
	   * 路由类构造函数
	   * @param {Object} options 选项
	   * @returns {void} 无返回
	   */
	  constructor: function /*istanbul ignore next*/constructor(options) {
	    this.$super();
	    options = options || utils.create(null);
	    if (options.view) this.view = options.view;
	    this.dirvier = options.dirvier || new HashDirver(this);
	    this.dirvier.on('changed', this._onChanged.bind(this));
	  },
	
	  /**
	   *「路由视组」访问器
	   * @returns {RouterView} 路由视图组件实例
	   */
	  get view() {
	    return this._view;
	  },
	
	  /**
	   *「路由视组」设置器
	   * @param {RouterView} view 路由视图组件实例
	   * @returns {void} 无返回
	   */
	  set view(view) {
	    if (!(view instanceof RouterView)) {
	      throw new Error('Invalid RouterView');
	    }
	    this._view = view;
	    this._view._router = this;
	    this._onChanged(this.dirvier.get());
	  },
	
	  /**
	   * 路由发生变化时的处理函数
	   * @param {string} path 将要转到的路径
	   * @param {void} 无返回
	   */
	  _onChanged: function /*istanbul ignore next*/_onChanged(path) {
	    path = path || '/';
	    let routes = this.get(path.split('?')[0]);
	    if (!routes || routes.length < 1) return;
	    this.route = routes[0];
	    this.route.path = path;
	    this.route.query = this.parseQuery();
	    if (this.view) {
	      this.view.component = this.route.component;
	    }
	  },
	
	  /**
	   * 转到一个路径
	   * @param {string} path 将要转到的路径
	   * @param {void} 无返回
	   */
	  go: function /*istanbul ignore next*/go(path) {
	    this.dirvier.set(path);
	  },
	
	  /**
	   * 映射路由配置
	   * @param {Object} map 路由配置
	   * @returns (void) 无返回
	   */
	  map: function /*istanbul ignore next*/map(_map) {
	    utils.each(_map, function (pattern, item) {
	      if (utils.isString(item)) {
	        item = _map[item];
	      }
	      if (item instanceof Component) {
	        item = { component: item };
	      }
	      if (!item) throw new Error('Invalid route `' + pattern + '`');
	      item.pattern = pattern;
	      this.addOne(item);
	    }, this);
	  },
	
	  /**
	   * 解析相对路径
	   * @param {string} toUri 原始路径
	   * @param {string} fromUri 参数路径
	   * @returns {string} 解析后的相关路径
	   */
	  resolveUri: function /*istanbul ignore next*/resolveUri(toUri, fromUri) {
	    toUri = toUri || ROOT_PATH;
	    if (toUri[0] == ROOT_PATH) return toUri;
	    fromUri = fromUri || ROOT_PATH;
	    fromUri = fromUri.split('?')[0].split('#')[0];
	    let baseDir = fromUri.substring(0, fromUri.lastIndexOf(ROOT_PATH));
	    let uriParts = toUri.split('#')[0].split(ROOT_PATH);
	    let uriHash = toUri.split('#')[1];
	    let newUriParts = baseDir.length > 0 ? baseDir.split(ROOT_PATH) : [];
	    uriParts.forEach(function (part) {
	      if (part == '..') {
	        newUriParts.pop();
	      } else if (part && part != '.') {
	        newUriParts.push(part);
	      }
	    }, this);
	    return ROOT_PATH + newUriParts.join(ROOT_PATH) + (uriHash ? '#' + uriHash : '');
	  },
	
	  /**
	   * 解析查询字符串并生成查询参数对象
	   * @returns {Object} 查询参数对象
	   */
	  parseQuery: function /*istanbul ignore next*/parseQuery() {
	    let queryString = (location.href.split('#')[1] || '').split('?')[1] || '';
	    let pairs = queryString.split('&');
	    let query = utils.create(null);
	    pairs.forEach(function (pair) {
	      let strs = pair.split('=');
	      query[strs[0]] = strs[1];
	    }, this);
	    return query;
	  },
	
	  /**
	   * 启动应用
	   * @param {Component} root 应用根组件类
	   * @param {element} element 挂载元素
	   * @param {Component} 应用根件实例
	   */
	  start: function /*istanbul ignore next*/start(root, element) {
	    this.app = new root({
	      _router: this
	    });
	    this.app.$mount(element, true);
	    return this.app;
	  }
	
	});
	
	Router.HashDirver = HashDirver;
	
	/**
	 * 路由插件安装方法
	 * @parent {Component} owner 组件类
	 */
	Router.install = function (owner) {
	
	  //为组件实例扩展 $router 属性
	  Object.defineProperty(owner.prototype, '$router', {
	    get: function /*istanbul ignore next*/get() {
	      if (this instanceof RouterView) {
	        return this._router || this.$parent && this.$parent.$router;
	      } else if (this.$parent) {
	        return this.$parent.$router;
	      } else if (!this.$parent) {
	        return this._router || this.router;
	      } else {
	        return null;
	      }
	    }
	  });
	
	  //为组件实例扩展 $route 属性
	  Object.defineProperty(owner.prototype, '$route', {
	    get: function /*istanbul ignore next*/get() {
	      return this.$router && this.$router.route;
	    }
	  });
	
	  //添加全局组件 RouterView
	  owner.component('RouterView', RouterView);
	
	  //添加 link 指令
	  owner.directives.push(LinkDirective);
	};
	
	module.exports = Router;

/***/ },
/* 37 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/"use strict";
	
	let utils = __webpack_require__(2);
	
	/**
	 * 定义正则表达式常量
	 */
	let PLACE_HOLDER_EXPR = /\{.+?\}/gim;
	let COLLECT_EXPR_STR = "([^\\/]+)";
	let GREEDY_COLLECT_EXPR_STR = "(.+)";
	
	/**
	 * 定义路由实例扩展 __proto__
	 **/
	let routeInstanceProto = {};
	
	/**
	 * 生成 action URL
	 **/
	routeInstanceProto.actionUrl = function (action) {
	  let self = this;
	  let actionUrl = self.withoutActionUrl + "/" + action;
	  actionUrl = actionUrl.replace(/\/\//igm, "/");
	  return actionUrl;
	};
	
	/**
	 * 定义路由对象
	 */
	function Router(routes, options) {
	  let self = this;
	  options = options || {};
	  self.options = options;
	  self.table = [];
	  if (routes) {
	    self.add(routes);
	  }
	};
	
	/**
	 * 解析占位符 key 定义
	 **/
	Router.prototype._parseKeyDef = function (_keyDefStr) {
	  let keyDefStr = _keyDefStr.substring(1, _keyDefStr.length - 1);
	  let keyDefParts = keyDefStr.split(':');
	  let keyDef = {};
	  keyDef.name = keyDefParts[0];
	  if (keyDef.name[0] == "*") {
	    keyDef.greedy = true;
	    keyDef.name = keyDef.name.substring(1);
	  }
	  if (keyDefParts[1]) {
	    keyDef.expr = new RegExp(keyDefParts[1], 'igm');
	  }
	  return keyDef;
	};
	
	/**
	 * 添加一个路由配置
	 */
	Router.prototype.addOne = function (route) {
	  let self = this;
	  if (!route || !route.pattern) return;
	  //取到所有路由key
	  PLACE_HOLDER_EXPR.lastIndex = 0;
	  let keyDefs = route.pattern.match(PLACE_HOLDER_EXPR) || [];
	  route.keys = {};
	  //初始化 url 匹配测试表达式字符串
	  let exprStr = '^' + route.pattern + '$';
	  utils.each(keyDefs, function (i) {
	    //处理 key 定义
	    let keyDef = self._parseKeyDef(keyDefs[i]);
	    route.keys[keyDef.name] = {
	      index: i,
	      expr: keyDef.expr
	    };
	    //将 "key 占位符" 的表达式，替换为 "提交值的正则表达式"
	    let collectExprStr = keyDef.greedy ? GREEDY_COLLECT_EXPR_STR : COLLECT_EXPR_STR;
	    exprStr = exprStr.replace(keyDefs[i], collectExprStr);
	  });
	  //生成 url 匹配测试表达式
	  route.expr = new RegExp(exprStr, 'igm');
	  //处理所有 route 的 method 
	  route.methods = route.methods || self.options.defaultMethods;
	  if (route.methods && route.methods.length > 0) {
	    route.methods = route.methods.map(function (method) {
	      return method.toUpperCase();
	    });
	  }
	  //继承原型
	  route.__proto__ = routeInstanceProto;
	  self.table.push(route);
	};
	
	/**
	 * 添加路由配置表
	 * @param {Route} route 一个路由实体,格式:{pattern:'',target:object}
	 * @method addRoute
	 * @static
	 */
	Router.prototype.add = function (routes) {
	  let self = this;
	  utils.each(routes, function (_name, _route) {
	    //判断是字符串还是一个对象，并都将 _route 转为对象
	    let route = utils.isString(_route) ? { "target": _route } : _route;
	    //尝试从名称中解析出 method 和 pattern
	    let name = (_name || "/").toString();
	    let nameParts = name.split(' ');
	    if (nameParts.length > 1) {
	      route.methods = nameParts[0].split(",");
	      route.pattern = route.pattern || nameParts[1];
	    } else {
	      route.pattern = route.pattern || nameParts[0];
	    }
	    //解析 controller 和 action
	    //target 和 controller 不可同时配置，target 可以为 "controller action" 这样的格式
	    if (route.target) {
	      let targetParts = route.target.split(' ');
	      route.controller = route.controller || targetParts[0];
	      route.action = route.action || targetParts[1];
	    }
	    route.target = route.controller;
	    //添加 route
	    self.addOne(route);
	  });
	};
	
	/**
	 * 解析路由动态 action
	 **/
	Router.prototype._parseDynamicAction = function (route) {
	  if (route && route.action && route.action.indexOf('{') > -1) {
	    utils.each(route.params, function (key, val) {
	      route.action = utils.replace(route.action, "{" + key + "}", val);
	    });
	  }
	  return route;
	};
	
	/**
	 * 创建一个路由实例
	 **/
	Router.prototype._createRouteInstance = function (srcRoute, url, params) {
	  let self = this;
	  let routeInstance = { __proto__: srcRoute };
	  routeInstance.params = params;
	  if (routeInstance.action) {
	    let urlParts = url.split('/');
	    routeInstance.withoutActionUrl = urlParts.slice(0, urlParts.length - 1);
	  } else {
	    routeInstance.withoutActionUrl = url;
	  }
	  routeInstance = self._parseDynamicAction(routeInstance);
	  return routeInstance;
	};
	
	/**
	 * 通过请求路径获取第一个匹配的路由
	 * @param  {String} url 请求路径
	 * @return {Route} 路由实体
	 * @method get
	 * @static
	 */
	Router.prototype.get = function (url, handleActionFromUrl) {
	  let self = this;
	  let routeArray = [];
	  if (utils.isNull(url)) {
	    return routeArray;
	  }
	  url = url.replace(/\/\//igm, "/");
	  utils.each(self.table, function (i, route) {
	    route.expr.lastIndex = 0;
	    if (!route.expr.test(url)) return;
	    //通过子表达式 "正则的()" 取值
	    route.expr.lastIndex = 0;
	    let values = route.expr.exec(url);
	    //生成 params
	    let params = {};
	    let failed = utils.each(route.keys, function (key, keyDef) {
	      params[key] = values[keyDef.index + 1];
	      if (!keyDef.expr) return;
	      keyDef.expr.lastIndex = 0;
	      if (!keyDef.expr.test(params[key])) {
	        return true;
	      }
	    });
	    if (failed) return;
	    routeArray.push(self._createRouteInstance(route, url, params));
	  });
	  //确定 parseActionFromUrl 的值
	  handleActionFromUrl = utils.isNull(handleActionFromUrl) ? self.options.parseActionFromUrl : handleActionFromUrl;
	  //如果需要 parseActionFromUrl
	  if (handleActionFromUrl) {
	    let _routeArray = self._getForActionFromUrl(url);
	    routeArray.push.apply(routeArray, _routeArray);
	  }
	  return routeArray;
	};
	
	/**
	 * 从 url 中分解出来 action ，然后获取 route array
	 **/
	Router.prototype._getForActionFromUrl = function (url) {
	  let self = this;
	  /*
	  一是在如果直接匹配不成功时，才将 “/” 分隔的最后一个 “字串” 当作 action 进行再一次匹配
	  */
	  let urlParts = url.split('/');
	  let lastIndex = urlParts.length - 1;
	  let action = urlParts[lastIndex];
	  //检查分解出来的 action 是否合法
	  if (action === "" || action.indexOf('.') > -1) {
	    return null;
	  }
	  let ctrlRouteUrl = urlParts.slice(0, lastIndex).join('/');
	  if (ctrlRouteUrl === '') ctrlRouteUrl = "/";
	  let ctrlRouteArray = self.get(ctrlRouteUrl, false) || [];
	  let routeArray = ctrlRouteArray.filter(function (route) {
	    /**
	     * 从 URL 分解出来的 action 不可能是动态的 action
	     * route.action 没有指定时才能作为 parseAction 的合法 route
	     **/
	    if (route.action) return false;
	    //设定 action 作为指向 action 的 route
	    route.action = action;
	    //标记一下 action 在 url 中
	    route.actionFromUrl = true;
	    return true;
	  });
	  return routeArray;
	};
	
	/**
	 * 过滤出包含指定 method 的 route
	 **/
	Router.prototype.matchByMethod = function (routeArray, method) {
	  if (!routeArray || routeArray.length < 1) {
	    return routeArray;
	  }
	  return routeArray.filter(function (route) {
	    if (!route || !route.methods || route.methods.length < 1) {
	      return false;
	    }
	    return route.methods.indexOf(method) > -1;
	  })[0];
	};
	
	module.exports = Router;
	
	/*end*/

/***/ },
/* 38 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Class = __webpack_require__(4);
	let EventEmitter = __webpack_require__(6);
	let utils = __webpack_require__(2);
	
	let SEPARATOR = '#!';
	let ROOT_PATH = '/';
	
	/**
	 * 基于 has 的路由驱动
	 */
	let HashDriver = new Class({
	  $name: 'HashDriver',
	  $extends: EventEmitter,
	
	  /**
	   * 路由驱动构造函数
	   * @param {Object} router 路径实例
	   * @returns {void} 无返回
	   */
	  constructor: function /*istanbul ignore next*/constructor(router) {
	    this.$super();
	    this.router = router;
	    window.addEventListener('hashchange', function () {
	      this._onChange();
	    }.bind(this));
	  },
	
	  /**
	   * 获取当前路径
	   * @returns {string} 当前路径
	   */
	  get: function /*istanbul ignore next*/get() {
	    return location.hash.split(SEPARATOR)[1] || ROOT_PATH;
	  },
	
	  /**
	   * 设置当前路径
	   * @param {string} 要转到的路径
	   * @returns {void} 无返回
	   */
	  set: function /*istanbul ignore next*/set(path) {
	    path = path || ROOT_PATH;
	    location.hash = SEPARATOR + this.router.resolveUri(path, this.get());
	  },
	
	  /**
	   * 路由发生变化时的处理函数
	   * @param {string} path 将要转到的路径
	   * @param {void} 无返回
	   */
	  _onChange: function /*istanbul ignore next*/_onChange(path) {
	    path = path || this.get() || '';
	    if (path[0] != ROOT_PATH) path = ROOT_PATH + path;
	    this.emit('changed', path);
	  }
	
	});
	
	module.exports = HashDriver;

/***/ },
/* 39 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Class = __webpack_require__(4);
	let View = __webpack_require__(31).components.View;
	
	let RouterView = View.extend({
	  properties: {
	    router: {
	      test: function /*istanbul ignore next*/test(router) {
	        return !!router;
	      },
	      get: function /*istanbul ignore next*/get() {
	        return this._router;
	      },
	      set: function /*istanbul ignore next*/set(router) {
	        this._router = router;
	        this._router.view = this;
	      }
	    }
	  },
	  onCreated: function /*istanbul ignore next*/onCreated() {
	    if (!this.router && this.$router) {
	      this.router = this.$router;
	    }
	  }
	});
	
	module.exports = RouterView;

/***/ },
/* 40 */
/***/ function(module, exports, __webpack_require__) {

	/*istanbul ignore next*/'use strict';
	
	let Directive = __webpack_require__(11);
	let EventEmitter = __webpack_require__(6);
	
	module.exports = new Directive({
	  name: 'link',
	  type: Directive.TYPE_ATTRIBUTE,
	  literal: true,
	
	  bind: function /*istanbul ignore next*/bind() {
	    let eventTarget = this.node.$target || this.node;
	    this.emiter = new EventEmitter(eventTarget);
	    this.emiter.addListener(this.decorates[0] || 'tap', function (event) {
	      if (!this.scope || !this.scope.$router) return;
	      this.scope.$router.go(this.path);
	    }.bind(this), false);
	  },
	
	  unbind: function /*istanbul ignore next*/unbind() {
	    this.emiter.removeListener();
	  },
	
	  update: function /*istanbul ignore next*/update(path) {
	    this.path = path;
	  }
	
	});

/***/ }
/******/ ]);
//# sourceMappingURL=mokit.js.map