### solution：
```
/**
 * @param {number} n
 * @return {boolean}
 */
var isHappy = function(n) {
	var seen = {};
	while (n !== 1 && !seen[n]) {
		seen[n] = true;
		n = sumOfSquares(n);
	}
	return n === 1 ? true : false;
};

function sumOfSquares(numString) {
	return numString.toString().split('').reduce(function(sum, num) {
		return sum + Math.pow(num, 2);
	}, 0);
}
```

### 题目：
一个happy数字是由以下过程定义的数字：<br>
从任何正整数开始，用数字的平方和来替换数字，
然后重复这个过程，
直到数字等于1（它将停留在那里），
或者不停地循环。


### 2018-04-14
我犹豫在如何判断不是happy数字的地方，看了讨论才反应过来这个sum如果曾经出现过，那么他就是在一直不停的循环了



<br><br><br><br><br><br>
