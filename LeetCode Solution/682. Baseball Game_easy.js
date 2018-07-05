/**
 * @param {string[]} ops
 * @return {number}
 */
var calPoints = function(ops) {
	let sum = 0;
	let array = [];
	for (let i = 0; i < ops.length; i++) {
		if (ops[i] == 'C') {
			array.pop()
		} else if (ops[i] == 'D') {
			array.push(array[array.length - 1] * 2);
		} else if (ops[i] == '+') {
			array.push(array[array.length - 1] + array[array.length - 2]);
		} else {
			array.push(parseInt(ops[i]));
		}
	}
	for (let j = 0; j < array.length; j++) {
		sum += array[j]
	}
	return sum
};
