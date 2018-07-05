/**
 * @param {number[]} nums
 * @return {void} Do not return anything, modify nums in-place instead.
 */

var moveZeroes = function(nums) {
	let array = [];
	let count = 0;
	for (let i = 0; i < nums.length; i++) {
		if (nums[i] !== 0) {
			array.push(nums[i]);
		} else {
			count++;
		}
	};
	for (let j = 0; j < count; j++) {
		array.push(0);
	};
	for (let m = 0; m < array.length; m++) {
		nums[m] = array[m]
	}
	return;
};

 
//the most important is :You must do this in-place without making a copy of the array.
