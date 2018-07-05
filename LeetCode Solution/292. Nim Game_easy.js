/**
 * @param {number} n
 * @return {boolean}
 */
var canWinNim = function(n) {
     return (n % 4 != 0);
};
/**
 * If there are 8 stones,I can pick 3,Opponent can pick 3
 * I can pick 2 stones .I win. So how is this solution valid.
 * Key:
 * In this question, both of you and your friend are very clever and have optimal strategies for the game.
 * So if A pick 3, the opponent will pick 1 then A will lose.
 */
