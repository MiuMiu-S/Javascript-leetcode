/**
 * @param {string[]} words
 * @return {string[]}
 */
var findWords = function(words) {
		return words.filter(word => /^([qwertyuiop]*|[asdfghjkl]*|[zxcvbnm]*)$/.test(word.toLowerCase()));
};




//other solution:
var findWords = function(words) {
	const keyboard = [
		['q', 'w', 'e', 'r', 't', 'y', 'u', 'i', 'o', 'p'],
		['a', 's', 'd', 'f', 'g', 'h', 'j', 'k', 'l'],
		['z', 'x', 'c', 'v', 'b', 'n', 'm']
	];
	return words.filter(word => keyboard.some(row =>
		word.split('').every(letter => row.includes(letter.toLowerCase()))
	));
};
