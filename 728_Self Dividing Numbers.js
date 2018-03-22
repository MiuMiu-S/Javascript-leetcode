// link:https://leetcode.com/problems/self-dividing-numbers/description/

/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDivide = function(num) {
	let arry = num.toString().split('')
	console.log(num);
	for (let j = 0; j < arry.length; j++) {
		if (num % arry[j] !== 0) {
			return false
		}
	}
	return true;
}

var selfDividingNumbers = function(left, right) {
	let num = new Array();　
	for (let i = left; i <= right; i++) {
		console.log("-----------" + i);
		if (i % 10 == 0) continue;
		if (selfDivide(i)) {
			num.push(i)
		}

	}
	return num;
};

