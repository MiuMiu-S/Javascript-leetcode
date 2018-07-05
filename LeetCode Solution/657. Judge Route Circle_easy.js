/**
 * @param {string} moves
 * @return {boolean}
 */
var judgeCircle = function(moves) {
	let position = {
		x: 0,
		y: 0
	}
	for (let m = 0; m < moves.length; m++) {
		if (moves[m] == "U") {
			position.y++
		} else if (moves[m] == "D") {
			position.y--
		} else if (moves[m] == "R") {
			position.x++
		} else {
			position.x--
		}
	}
	if (position.x == 0 && position.y == 0) {
		return true
	} else {
		return false
	}
};
