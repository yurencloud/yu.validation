var validation = require('../src/index');
var expect = require('chai').expect;


describe('validation测试', function() {
    it('验证数组', function() {
        expect(validation.isArray([])).to.be.equal(true);
        expect(validation.isArray({})).to.be.equal(false);
    });
    it('验证整数', function() {
        expect(validation.isInteger(12)).to.be.equal(true);
        // expect(validation.isInteger(-12)).to.be.equal(true);
        expect(validation.isInteger('12')).to.be.equal(true);
        // expect(validation.isInteger('-12')).to.be.equal(true);
        expect(validation.isInteger('12.1')).to.be.equal(false);
        expect(validation.isInteger('a')).to.be.equal(false);
    });
    it('验证数字', function() {
        expect(validation.isNumber(12)).to.be.equal(true);
        expect(validation.isNumber(-12)).to.be.equal(true);
        expect(validation.isNumber(-12.1)).to.be.equal(true);
        expect(validation.isNumber(12.1)).to.be.equal(true);
        expect(validation.isNumber('12.1')).to.be.equal(true);
        expect(validation.isNumber('12.12342343241')).to.be.equal(false);
        expect(validation.isNumber('a')).to.be.equal(false);
        expect(validation.isNumber('12a')).to.be.equal(false);
    });
    it('验证数组', function() {
        expect(validation.isArray([])).to.be.equal(true);
    });
    it('验证数组', function() {
        expect(validation.isArray([])).to.be.equal(true);
    });
    it('验证数组', function() {
        expect(validation.isArray([])).to.be.equal(true);
    });
});
