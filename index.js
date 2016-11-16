'use strict'
module.exports = function (mu, sigma) {
    if (mu === undefined) mu = 0
    if (sigma === undefined) sigma = 1
    const  two_pi = 2.0*3.14159265358979323846;
    let z0 = Math.sqrt(-2.0 * Math.log(Math.random())) * Math.cos(two_pi * Math.random());
	return z0 * sigma + mu;
}