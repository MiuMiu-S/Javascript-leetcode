/**
 * @param {number} x
 * @param {number} y
 * @return {number}
 */
var hammingDistance = function(x, y) {
	let distance = 0,
		a = x.toString(2),
		b = y.toString(2);
	let len = a.length - b.length
	if (x > y) {
		for (let m = 0; m < len; m++) {
			b = "0" + b;
		}
	} else {
		for (let m = 0; m < -len; m++) {
			a = "0" + a;
		}
	}
	for (var i = 0; i < a.length; i++) {
		if (a[i] != b[i]) {
			distance++;
		}
	}
	return distance;
};
