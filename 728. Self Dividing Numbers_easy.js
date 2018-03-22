/**
 * @param {number} left
 * @param {number} right
 * @return {number[]}
 */
var selfDivide = function(num) {
	let arry = num.toString().split('')
	for (let j = 0; j < arry.length; j++) {
		if (num % arry[j] !== 0) return false
	}
	return true;
}

var selfDividingNumbers = function(left, right) {
	let num = new Array();　
	for (let i = left; i <= right; i++) {
		if (i % 10 == 0) continue;
		if (selfDivide(i)) num.push(i)
	}
	return num;
};


//Other solutions
var selfDividingNumbers = function(left, right) {
    let results = [];
    for (let number = left; number <= right; number++) {
        if (
            number
                .toString()
                .split('')
                .map(d => d !== 0 && number % d === 0)
                .reduce((acc, val) => acc && val)
        ) {
            results.push(number);
        }
    }
    return results;
};
