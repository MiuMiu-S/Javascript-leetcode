var reverseWords = function(s) {
	let b = s.split(" ")
	for (let m = 0; m < b.length; m++) {
		b[m] = b[m].split("").reverse().join("")
	}
	return b.join(" ")
};
