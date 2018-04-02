'use strict';
/**
 * object
 * @description 封装object对象
 * @author mack wang
 * @website yurencloud.com
 */

var _regExp = {
    int: /^-?\d+$/,
    num: /^(-?\d+)(\.\d+)?$/,
    email: /^[\w-]+(\.[\w-]+)*@[\w-]+(\.[\w-]+)+$/,
    url: /^[a-zA-z]+:\/\/(\w+(-\w+)*)(\.(\w+(-\w+)*))*(\?\S*)?$/,
    chinese: /^[\u4e00-\u9fa5]+$/,
    ip: /^(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])\.(\d{1,2}|1\d\d|2[0-4]\d|25[0-5])$/,
    file: /^((\w+)(\.{1})(\w+))$/,
    idNumber: /^[1-9]{1}[0-9]{14}$|^[1-9]{1}[0-9]{16}([0-9]|[xX])$/,
    char: /^[a-zA-Z]*$/,
    charNumber: /^[a-zA-Z0-9]*$/,
    password: /^(\w){6,20}$/,
    password3: /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)(?![a-zA-z\d]+$)(?![a-zA-z!@#$%^&*]+$)(?![\d!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/,
    password2: /^(?![a-zA-z]+$)(?!\d+$)(?![!@#$%^&*]+$)[a-zA-Z\d!@#$%^&*]+$/,
    password1: /^(?:\d+|[a-zA-Z]+|[!@#$%^&*]+)$/,
    mobile: /^1[3-578]\d{9}$/,
    telephone: /^[+]{0,1}(\d){1,3}[ ]?([-]?((\d)|[ ]){1,12})+$/,
    domain: /[a-zA-Z0-9][-a-zA-Z0-9]{0,62}(\.[a-zA-Z0-9][-a-zA-Z0-9]{0,62})+\.?/,
    username: /^[a-zA-Z]{1}([a-zA-Z0-9]|[._]){4,19}$/
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
        return _regExp.charNumber.test(value);
    },

    // 判断身份证号，15或18位
    isIdNumber: function (value) {
        return _regExp.idNumber.test(value);
    },
    // 判断ip地址
    isIp: function (value) {
        return _regExp.ip.test(value);
    },
    // 判断密码强弱，返回 1 弱 2 中 3 强 0 是错误
    getPasswordLevel: function (value) {
        if(_regExp.password3.test(value)) return 3;
        if(_regExp.password2.test(value)) return 2;
        if(_regExp.password1.test(value)) return 1;
        return 0;
    },

    //普通密码 只能输入6-20个字母、数字、下划线
    isPassword: function (value) {
        return _regExp.password.test(value);
    },

    //判断手机号,必须以数字开头，除数字外，可含有“-”
    isMobile: function (value) {
        return _regExp.mobile.test(value);
    },

    //判断普通电话、传真号码：可以“+”开头，除数字外，可含有“-”
    isTelephone: function (value) {
        return _regExp.telephone.test(value);
    },

    //判断是否是域名
    isDomain: function (value) {
        return _regExp.domain.test(value);
    },

    // 校验用户名：只能输入5-20个以字母开头、可带数字、“_”、“.”的字串
    isUsername: function (value) {
        return _regExp.username.test(value);
    }

};

module.exports = validation;
