'use strict';
/**
 * object
 * @description 封装object对象
 * @author mack wang
 * @website yurencloud.com
 */

var _regExp = {
    int: /^-?\\d+$/,
    num: /^(-?\\d+)(\\.\\d+)?$/,
    email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
    // url: /^[a-zA-z]+://(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$/,
    chinese: /[u4e00-u9fa5]/,
    // html:  /<(.*)>.*</1>|<(.*)/>/,
    ip: /(d+).(d+).(d+).(d+)/,
    file: /^((\w+)(\.{1})(\w+))$/,
    idNumber: /^\d{15}|\d{18}$/,
    char: /^[a-zA-Z]*$/,
    charNumber: /^[a-zA-Z0-9]*$/
};

var validation = {
    // 判断是否是数字,包括字符串数字
    isInteger: function (value) {
        return _regExp.int.test(value);
    },

    // 判断是否是数字,包括字符串数字
    isNumber: function (value) {
        return _regExp.num.test(value);
    },

    // 判断是否是数组
    isArray: function (value) {
        return Object.prototype.toString.call(value) === "[object Array]";
    },
    //检测是否是函数
    isFunction: function (value) {
        return Object.prototype.toString.call(value) === "[object Function]";
    },
    //检测是否是正则式
    isRegExp: function (value) {
        return Object.prototype.toString.call(value) === "[object RegExp]";
    },

    //检测是否是原生的JSON对象
    isNativeJSON: function (value) {
        return window.JSON && Object.prototype.toString.call(JSON) === "[object JSON]";
    },

    //判断是否为空，空字符串，空数数组，空对象 都可以称为空，但null, undefined不是空
    isEmpty: function (value) {
        return value === '' || value.length === 0 || JSON.stringify(value) === '{}';
    },

    isEmail: function (value) {
        return _regExp.email.test(value);
    },

    // 判断是否是url
    isUrl: function (value) {
        return _regExp.url.test(value);
    },

    // 判断是否是中文
    isChinese: function (value) {
        return _regExp.chinese.test(value);
    },

    // 判断是否是字母
    isChar: function (value) {
        return _regExp.char.test(value);
    },

    // 判断是否是以字母开头的字母和数字
    isCharNum: function (value) {
        return _regExp.charNum.test(value);
    }
};

module.exports = validation;
