/**
 * @param {string} J
 * @param {string} S
 * @return {number}
 */
var numJewelsInStones = function(J, S) {
	let count = 0;
	for (let m = 0; m < S.length; m++) {
		for (let n = 0; n < J.length; n++) {
			if (J[n] == S[m]) {
				count++
			}
		}
	}
	return count;
};
console.log(numJewelsInStones("aA", "aAAbbbb"));
