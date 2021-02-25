//
// 896. 单调数列-简单
// 如果数组是单调递增或单调递减的，那么它是单调的。
// 如果对于所有 i <= j，A[i] <= A[j]，那么数组 A 是单调递增的。 如果对于所有 i <= j，A[i]> = A[j]，那么数组 A 是单调递减的。
// 当给定的数组 A 是单调数组时返回 true，否则返回 false。

// 示例 1：
// 输入：[1,2,2,3]
// 输出：true

// 示例 2：
// 输入：[6,5,4,4]
// 输出：true

// 示例 3：
// 输入：[1,3,2]
// 输出：false

// 示例 4：
// 输入：[1,2,4,5]
// 输出：true

// 示例 5：
// 输入：[1,1,1]
// 输出：true
 
// 提示：
// 1 <= A.length <= 50000
// -100000 <= A[i] <= 100000


/**
 * @param {number[]} A
 * @return {boolean}
 */
var isMonotonic = function(A) {
    const addArray = [...A].sort(function(a,b){return a-b});
    const decreaseArray = [...A].sort(function(a,b){return b-a});
    return A.join("") === addArray.join("") || A.join("") === decreaseArray.join("");
};

isMonotonic([5,3,2]);

//执行用时：260 ms, 在所有 JavaScript 提交中击败了6.43%的用户❌