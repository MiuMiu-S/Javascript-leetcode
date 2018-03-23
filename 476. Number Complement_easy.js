/**
 * @param {number} num
 * @return {number}
 */
var findComplement = function(num) {
	let a = num.toString(2).split("");
	for (let m = 0; m < a.length; m++) {
		a[m] == 1 ? a[m] = 0 : a[m] = 1;
	}
	return parseInt(a.join(""), 2)

};
