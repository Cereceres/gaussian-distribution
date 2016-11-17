'use strict'
let pdf = require("../index")
let plot = require('plot-distribution')
let assert = require("assert")
describe('the test to pdf', function () {
    it('should be a function', function () {
        assert(typeof pdf === 'function')
    })
    
    it('should return a number', function () {
        console.log(plot(pdf,{min:-2,max:2, step: 0.1, points: 10000}))
        assert(typeof pdf() === 'number')
    })
})