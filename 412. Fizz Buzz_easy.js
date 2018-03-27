/**
 * @param {number} n
 * @return {string[]}
 */
var fizzBuzz = function(n) {
	let array = [];
	for (let i = 1; i <= n; i++) {
		if (i % 3 == 0 && i % 5 == 0) {
			j = 'FizzBuzz';
		} else if (i % 3 == 0) {
			j = 'Fizz';
		} else if (i % 5 == 0) {
			j = 'Buzz';
		} else {
			j = i.toString();
		}
		array.push(j);
	}
	return array
};
