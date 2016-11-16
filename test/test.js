'use strict'
let pdf = require("../index")
let assert = require("assert")
describe('the test to uid', function () {
    it('should be a function', function () {
        assert(typeof pdf === 'function')
    })
    
    it('should return a number', function () {
        assert(typeof pdf() === 'number')
    })
})