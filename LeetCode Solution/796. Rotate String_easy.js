/**
 * 796. Rotate String
 * @param {string} A
 * @param {string} B
 * @return {boolean}
 */
var rotateString = function(A, B) {
	return A.length == B.length && ((A + A).indexOf(B) != -1);
};
