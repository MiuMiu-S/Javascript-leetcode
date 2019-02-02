### solution：
###### 解法1
```
/**
 * @param {string} word
 * @return {boolean}
 */
var detectCapitalUse = function(word) {
    return (/^[A-Z]+$/.test(word) || /^[a-z]+$/.test(word) || /^[A-Z][a-z]+$/.test(word)) ? true : false;
};
```
###### 解法2
```
//非正则解决办法
var detectCapitalUse = function(word) {
    return word === word.toUpperCase() || word === word[0] + word.substr(1).toLowerCase();
};
```


### 题目：
给定一个数组 nums，编写一个函数将所有 0<br> 移动到数组的末尾，同时保持非零元素的相对顺序。<br>

示例:<br>
输入: [0,1,0,3,12]<br>
输出: [1,3,12,0,0]



### 2018-03-29
### 2018-08-03
### 2019-02-02
```
var detectCapitalUse = function(word) {
    return (/^[A-Z]+$/.test(word) || /^[a-z]+$/.test(word) || /^[A-Z][a-z]+$/.test(word));
};
```
短路原则

1、只要“||”前面为false，不管“||”后面是true还是false，都返回“||”后面的值。

2、只要“||”前面为true，不管“||”后面是true还是false，都返回“||”前面的值。

3、只要“&&”前面是false，无论“&&”后面是true还是false，结果都将返“&&”前面的值；

4、只要“&&”前面是true，无论“&&”后面是true还是false，结果都将返“&&”后面的值；



<br><br><br><br><br><br>
<br><br><br><br><br><br>
<br><br><br><br><br><br>
