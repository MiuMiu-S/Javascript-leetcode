/**
 * @param {number[]} nums
 * @return {number}
 */
var singleNumber = function(nums) {
	let obj = {},
		single = {};
	for (let item of nums) {
		if (!obj[item]) {
			obj[item] = true;
			single[item] = true;
		} else {
			delete single[item];
		}
	}
	return parseInt(Object.keys(single)[0])
};
