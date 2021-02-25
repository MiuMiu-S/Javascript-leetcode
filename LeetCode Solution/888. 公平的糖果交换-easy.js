// 
// 888. 公平的糖果交换-简单
// 爱丽丝和鲍勃有不同大小的糖果棒：A[i] 是爱丽丝拥有的第 i 块糖的大小，B[j] 是鲍勃拥有的第 j 块糖的大小。
// 因为他们是朋友，所以他们想交换一个糖果棒，这样交换后，他们都有相同的糖果总量。（一个人拥有的糖果总量是他们拥有的糖果棒大小的总和。）
// 返回一个整数数组 ans，其中 ans[0] 是爱丽丝必须交换的糖果棒的大小，ans[1] 是 Bob 必须交换的糖果棒的大小。
// 如果有多个答案，你可以返回其中任何一个。保证答案存在。

// 示例 1：
// 输入：A = [1,1], B = [2,2]
// 输出：[1,2]

// 示例 2：
// 输入：A = [1,2], B = [2,3]
// 输出：[1,2]

// 示例 3：
// 输入：A = [2], B = [1,3]
// 输出：[2,3]

// 示例 4：
// 输入：A = [1,2,5], B = [2,4]
// 输出：[5,4]
 
// 提示：
// 1 <= A.length <= 10000
// 1 <= B.length <= 10000
// 1 <= A[i] <= 100000
// 1 <= B[i] <= 100000
// 保证爱丽丝与鲍勃的糖果总量不同。答案肯定存在。

/**
 * @param {number[]} A
 * @param {number[]} B
 * @return {number[]}
 */
// 第一次尝试❌
// var fairCandySwap = function(A, B) {
//     const sumA = A.reduce((pre, cur) => (pre + cur), 0);
//     const sumB = B.reduce((pre, cur) => (pre + cur), 0);
//     const average = (sumA + sumB) / 2;
//     const aIndex = A.find( item => (item === (Math.abs(average - sumB))));
//     const bIndex = B.find( item => (item === (Math.abs(sumA - aIndex))));
//     return [aIndex, bIndex];
// };

var fairCandySwap = function(A, B) {
    let sum1 = A.reduce((prev,next) => prev + next)
    let sum2 = B.reduce((prev,next) => prev + next)
    let gap = (sum1 - sum2) / 2; //7
    for (let i = 0; i < A.length; i++) {
      if(B.includes(A[i]-gap)){
        return [A[i],A[i]-gap]
      }
    }
  };
fairCandySwap([1,1], [2,2])
fairCandySwap([1,2], [2,3])
fairCandySwap([1,2,5], [2,4])