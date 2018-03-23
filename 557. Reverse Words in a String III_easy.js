var reverseWords = function(s) {
	let a = s.split(" ")
	for (let m = 0; m < a.length; m++) {
		a[m] = a[m].split("").reverse().join("")
	}
	return a.join(" ")
};
