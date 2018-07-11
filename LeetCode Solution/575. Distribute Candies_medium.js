/**
 * @param {number[]} candies
 * @return {number}
 */
var distributeCandies = function(candies) {
	let obj = {}
	for (let item of candies) {
		if (!obj[item]) obj[item] = true;
	}
	return (Object.keys(obj).length > (candies.length / 2)) ? candies.length / 2 : Object.keys(obj).length;
};

/**
 * other solution
 * @param {number[]} candies
 * @return {number}
 */

var distributeCandies = function(candies) {
    return Math.min(new Set(candies).size, candies.length / 2);
};
