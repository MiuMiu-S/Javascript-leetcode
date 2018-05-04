### solution：
```
/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function(nums1, nums2) {
	// track how often each number occurs in first list
	var store = nums1.reduce(function(map, n) {
		map[n] = (map[n] + 1) || 1;
		return map;
	}, {});
	console.log(store)
	//利用对象的键值唯一，统计数组中元素出现的次数
		// filter out numbers from second list based on
		// how often they occurred in the first list
	return nums2.filter(function(n) {
		if (store[n]) {
			store[n]--;
			return true;
		} else {
			return false;
		}
	});
	//比较数组nums2中的每一个元素是否在store中包含，存在就吧元素出现的次数减1
};
console.log(intersect([1, 2, 2, 1], [2, 2]))

```

### 题目：
给定两个数组，写一个函数来计算它们的交集。。<br>
Example:
Given nums1 = [1, 2, 2, 1], nums2 = [2, 2], return [2, 2].


### 2018-05-04
参考discuss的写法，写的真好，学习！
解析写在注释中了



same as 349. Intersection of Two Arrays_easy

<br><br><br><br><br><br>
