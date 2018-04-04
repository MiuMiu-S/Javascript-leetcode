/**
 * 485
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
	let str = nums.join("").split("0");
	let maximum = str[0].length;
	for (let i = 1; i < str.length; i++) {
		if (maximum < str[i].length) maximum = str[i].length;
	}
	return maximum
};




/**
 * 485
 * @param {number[]} nums
 * @return {number}
 */
var findMaxConsecutiveOnes = function(nums) {
	var str = nums.join("").split("0").map(value => value.length);
	return Math.max.apply(null, str);
};
