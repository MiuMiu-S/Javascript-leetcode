// 2020.11.30
// 1672. 最富有客户的资产总量
// 给你一个 m x n 的整数网格 accounts ，
// 其中 accounts[i][j] 是第 i​​​​​​​​​​​​ 位客户在第 j 家银行托管的资产数量。
// 返回最富有客户所拥有的资产总量。
// 客户的资产总量就是他们在各家银行托管的资产数量之和。最富有客户就是资产总量最大的客户。

// 示例 1：
// 输入：accounts = [[1,2,3],[3,2,1]]
// 输出：6
// 解释：
// 第 1 位客户的资产总量 = 1 + 2 + 3 = 6
// 第 2 位客户的资产总量 = 3 + 2 + 1 = 6
// 两位客户都是最富有的，资产总量都是 6 ，所以返回 6 。

// 示例 2：
// 输入：accounts = [[1,5],[7,3],[3,5]]
// 输出：10
// 解释：
// 第 1 位客户的资产总量 = 6
// 第 2 位客户的资产总量 = 10 
// 第 3 位客户的资产总量 = 8
// 第 2 位客户是最富有的，资产总量是 10

// 示例 3：
// 输入：accounts = [[2,8,7],[7,1,3],[1,9,5]]
// 输出：17
 
/**
 * @param {number[][]} accounts
 * @return {number}
 */
// var maximumWealth = function(accounts) {
//     const array = accounts.map((item) => {
//         return item.reduce((acc,cur) => {
//             return acc + cur;
//         }, 0);
//     },[]);
//     return Math.max.apply(Math,array);
// };
// const accounts = [[2,8,7],[7,1,3],[1,9,5]];
// maximumWealth(accounts);

var maximumWealth = function(accounts) {
    const array = accounts.map((item) => (item.reduce((prev,cur) => (prev + cur), 0)),[]);
    return Math.max.apply(Math,array);
};
const accounts = [[2,8,7],[7,1,3],[1,9,5]];
maximumWealth(accounts);

// 笔记
// 使用js获取数组中最大、最小的数字
// 1、查询最大值const maxValue=Math.max.apply(Math,array);
// 2、查询最小值const minValue=Math.min.apply(Math,array);
 