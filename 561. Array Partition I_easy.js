/**
 * @param {number[]} nums
 * @return {number}
 */
var sortNumber = function(a, b) {
	return a - b
}
var arrayPairSum = function(nums) {
	var arr = nums.sort(sortNumber);
	var sum = 0;
	for (let m = 0; m < arr.length / 2; m++) {
		sum += Math.min(arr[2 * m], arr[2 * m + 1]);
	}
	return sum;
};
 
//一开始写的下面的方法，报错Time Limit Exceeded，时间复杂度的问题，我为什么有现成的方法不用呢？
 

/**
 * @param {number[]} nums
 * @return {number}
 */
 var bubbleSort = function(arr) {
	var i = 0,
		j = 0;
	for (i = 1; i < arr.length; i++) {
		for (j = 0; j <= arr.length - i; j++) {
			var temp = 0;
			if (arr[j] > arr[j + 1]) {
				temp = arr[j];
				arr[j] = arr[j + 1];
				arr[j + 1] = temp;
			}
		}
	}
	return arr;
}
var arrayPairSum = function(nums) {
	var arr = bubbleSort(nums);
	var sum = 0;
	for (let m = 0; m < arr.length / 2; m++) {
		sum += Math.min(arr[2 * m], arr[2 * m + 1]);
	}
	return sum;
};









