var validation = require('../src/index');
var expect = require('chai').expect;

var say = function () {

}

function say2() {

}

describe('validation测试', function() {
    it('验证数组', function() {
        expect(validation.isArray([])).to.be.ok;
        expect(validation.isArray({})).to.not.be.ok;
    });
    it('验证整数', function() {
        expect(validation.isInteger(12)).to.be.ok;
        expect(validation.isInteger(-12)).to.be.ok;
        expect(validation.isInteger('12')).to.be.ok;
        expect(validation.isInteger('-12')).to.be.ok;
        expect(validation.isInteger('12.1')).to.not.be.ok;
        expect(validation.isInteger('a')).to.not.be.ok;
    });
    it('验证数字', function() {
        expect(validation.isNumber(12)).to.be.ok;
        expect(validation.isNumber(-12)).to.be.ok;
        expect(validation.isNumber(-12.1)).to.be.ok;
        expect(validation.isNumber(12.1)).to.be.ok;
        expect(validation.isNumber('12.1')).to.be.ok;
        expect(validation.isNumber('12.12342343241')).to.be.ok;
        expect(validation.isNumber('-12.12342343241')).to.be.ok;
        expect(validation.isNumber(-12.12342343241)).to.be.ok;
        expect(validation.isNumber('a')).to.not.be.ok;
        expect(validation.isNumber('12a')).to.not.be.ok;
    });
    it('验证邮箱号', function() {
        expect(validation.isEmail('641212003@qq.com')).to.be.ok;
        expect(validation.isEmail('1@1.com')).to.be.ok;
        expect(validation.isEmail('1@sdfsadfds.q')).to.be.ok;
        expect(validation.isEmail('641212003qq.com')).to.not.be.ok;
        expect(validation.isEmail('641212003@.com')).to.not.be.ok;
        expect(validation.isEmail('641212003@qq.')).to.not.be.ok;
        expect(validation.isEmail('641212003@qq')).to.not.be.ok;
    });
    it('验证函数', function() {
        expect(validation.isFunction(say)).to.be.ok;
        expect(validation.isFunction(say2)).to.be.ok;
        expect(validation.isFunction('say')).to.not.be.ok;
        expect(validation.isFunction(1)).to.not.be.ok;
        expect(validation.isFunction({})).to.not.be.ok;
    });
    it('验证正则', function() {
        expect(validation.isRegExp(/^-?\d+$/)).to.be.ok;
        expect(validation.isRegExp(new RegExp())).to.be.ok;
        expect(validation.isRegExp(1)).to.not.be.ok;
        expect(validation.isRegExp('1')).to.not.be.ok;
        expect(validation.isRegExp({})).to.not.be.ok;
    });
    it('验证是否为空的(字符串/数组/对象)', function() {
        expect(validation.isEmpty('')).to.be.ok;
        expect(validation.isEmpty([])).to.be.ok;
        expect(validation.isEmpty({})).to.be.ok;
        expect(validation.isEmpty('a')).to.not.be.ok;
        expect(validation.isEmpty([1])).to.not.be.ok;
        expect(validation.isEmpty({name:'tom'})).to.not.be.ok;
    });
    it('验证url', function() {
        expect(validation.isUrl("http://www.baidu.com")).to.be.ok;
        expect(validation.isUrl("https://www.baidu.com")).to.be.ok;
        expect(validation.isUrl("ftp://www.baidu.com")).to.be.ok;
        expect(validation.isUrl("www.baidu.com")).to.not.be.ok;
    });
    it('验证全是中文', function() {
        expect(validation.isChinese("中")).to.be.ok;
        expect(validation.isChinese(1)).to.not.be.ok;
        expect(validation.isChinese("1")).to.not.be.ok;
        expect(validation.isChinese("a")).to.not.be.ok;
        expect(validation.isChinese("中国人")).to.be.ok;
        expect(validation.isChinese("中国人1")).to.not.be.ok;
        expect(validation.isChinese("中国人abc")).to.not.be.ok;
    });
    it('验证全是字母', function() {
        expect(validation.isChar("a")).to.be.ok;
        expect(validation.isChar("abc")).to.be.ok;
        expect(validation.isChar(1)).to.not.be.ok;
        expect(validation.isChar("abc1")).to.not.be.ok;
    });
    it('判断是否是以字母开头的字母和数字', function() {
        expect(validation.isCharNum("a")).to.be.ok;
        expect(validation.isCharNum("abc")).to.be.ok;
        expect(validation.isCharNum("abc134")).to.be.ok;
        expect(validation.isChar("123abc")).to.not.be.ok;
        expect(validation.isChar(1)).to.not.be.ok;
        expect(validation.isChar("123")).to.not.be.ok;
    });
    it('判断身份证号', function() {
        expect(validation.isIdNumber("a")).to.not.be.ok;
        expect(validation.isIdNumber("123456789012345")).to.be.ok;
        expect(validation.isIdNumber("123456789012345678")).to.be.ok;
        expect(validation.isIdNumber("023456789012345678")).to.not.be.ok;
        expect(validation.isIdNumber("12345678901234")).to.not.be.ok;
        expect(validation.isIdNumber("1234567890123456789")).to.not.be.ok;
        expect(validation.isIdNumber("12345678901234567")).to.not.be.ok;
    });
    it('判断ip地址', function() {
        expect(validation.isIp("1.1.1.1")).to.be.ok;
        expect(validation.isIp("0.0.0.0")).to.be.ok;
        expect(validation.isIp("192.168.1.1")).to.be.ok;
        expect(validation.isIp("192.168.1.255")).to.be.ok;
        expect(validation.isIp("192.168.1.256")).to.not.be.ok;
        expect(validation.isIp("0.168.1.255")).to.be.ok;
    });
    it('判断密码强弱，返回 1 弱 2 中 3 强 0 是错误', function() {
        expect(validation.getPasswordLevel("123456")).to.be.equal(1);
        expect(validation.getPasswordLevel("abcdef")).to.be.equal(1);
        expect(validation.getPasswordLevel("!!!!!!")).to.be.equal(1);

        expect(validation.getPasswordLevel("123456a")).to.be.equal(2);
        expect(validation.getPasswordLevel("abcdef1")).to.be.equal(2);
        expect(validation.getPasswordLevel("!!!!!!1")).to.be.equal(2);

        expect(validation.getPasswordLevel("123456abc!!")).to.be.equal(3);
        expect(validation.getPasswordLevel("abcdef123@")).to.be.equal(3);
        expect(validation.getPasswordLevel("!!!!!!123ab")).to.be.equal(3);
    });
    it('判断普通密码 只能输入6-20个字母、数字、下划线', function() {
        expect(validation.isPassword("123456")).to.be.ok;
        expect(validation.isPassword("123456abc")).to.be.ok;
        expect(validation.isPassword("123456abc___")).to.be.ok;
        expect(validation.isPassword("123456abc---")).to.not.be.ok;
        expect(validation.isPassword("12345")).to.not.be.ok;
        expect(validation.isPassword("abcdef")).to.be.ok;
        expect(validation.isPassword("12345678901234567890")).to.be.ok;
        expect(validation.isPassword("123456789012345678901")).to.not.be.ok;
    });
    it('判断手机号,11位，且开头限制', function() {
        expect(validation.isMobile("15757130093")).to.be.ok;
        expect(validation.isMobile("1575713009")).to.not.be.ok;
        expect(validation.isMobile("157-571-30093")).to.not.be.ok;
    });
    it('判断普通电话、传真号码：可以“+”开头，除数字外，可含有“-”', function() {
        expect(validation.isTelephone("057167641171")).to.be.ok;
        expect(validation.isTelephone("0571-67641171")).to.be.ok;
        expect(validation.isTelephone("+86-0571-67641171")).to.be.ok;
        expect(validation.isTelephone("67641171")).to.be.ok;
        expect(validation.isTelephone("a67641171")).to.not.be.ok;
    });
    it('判断域名', function() {
        expect(validation.isDomain("www.baidu.com")).to.be.ok;
        expect(validation.isDomain("baidu.com")).to.be.ok;
        expect(validation.isDomain("www.baidu")).to.be.ok;
        expect(validation.isDomain("baidu")).to.not.be.ok;
    });
    it('校验用户名：只能输入5-20个以字母开头、可带数字、“_”、“.”的字串', function() {
        expect(validation.isUsername("mackwang")).to.be.ok;
        expect(validation.isUsername("mackwang_9093")).to.be.ok;
        expect(validation.isUsername("mack.wang")).to.be.ok;
        expect(validation.isUsername("mack-wang")).to.not.be.ok;
        expect(validation.isUsername("123mackwang")).to.not.be.ok;
        expect(validation.isUsername("wang")).to.not.be.ok;
        expect(validation.isUsername("w1234567890123456789")).to.be.ok;
        expect(validation.isUsername("w12345678901234567890")).to.not.be.ok;
    });
});
