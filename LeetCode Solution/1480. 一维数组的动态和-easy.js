// 2020.12.
// 1480. 一维数组的动态和
// 给你一个数组nums。数组「动态和」的计算公式为：runningSum[i] = sum(nums[0]…nums[i]) 。
// 请返回 nums 的动态和。

// 示例 1：
// 输入：nums = [1,2,3,4]
// 输出：[1,3,6,10]
// 解释：动态和计算过程为 [1, 1+2, 1+2+3, 1+2+3+4] 。

// 示例 2：
// 输入：nums = [1,1,1,1,1]
// 输出：[1,2,3,4,5]
// 解释：动态和计算过程为 [1, 1+1, 1+1+1, 1+1+1+1, 1+1+1+1+1] 。

// 示例 3：
// 输入：nums = [3,1,2,10,1]
// 输出：[3,4,6,16,17]
//  

/**
 * @param {number[]} nums
 * @return {number[]}
 */
// var runningSum = function(nums) {
//     return nums.map((item, index) => {
//         const arr = nums.slice(0, index + 1);
//         return arr.reduce((prev, cur) => (prev + cur), 0)
//     })
// };

var runningSum = function(nums) {
    return nums.map((item, index) => {
        return nums.slice(0, index + 1).reduce((prev, cur) => (prev + cur), 0)
    })
};

let nums = [3,1,2,10,1];
console.log(111, runningSum(nums));