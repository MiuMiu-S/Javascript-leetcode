/**
 * Encodes a URL to a shortened URL.
 *
 * @param {string} longUrl
 * @return {string}
 */
var urls = {};
var encode = function(longUrl) {
	let shortUrl = Date.now().toString(36);
	urls[shortUrl] = longUrl;
	return 'http://tinyurl.com/' + shortUrl;
};
/**
 * Decodes a shortened URL to its original URL.
 *
 * @param {string} shortUrl
 * @return {string}
 */
var decode = function(shortUrl) {
	let longUrl = urls[shortUrl.split("com/")[1]];
	return longUrl
};

