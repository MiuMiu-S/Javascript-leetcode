/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return (/^[A-Z]+$/.test(word) || /^[a-z]+$/.test(word) || /^[A-Z][a-z]+$/.test(word)) ? true : false;
};

 
//非正则解决办法
var detectCapitalUse = function(word) {
    return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();
};
