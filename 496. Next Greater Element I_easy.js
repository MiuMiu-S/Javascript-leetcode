/**
 * @param {number[]} findNums
 * @param {number[]} nums
 * @return {number[]}
 */
var nextGreaterElement = function(findNums, nums) {
    let obj = {}
    let stack = []
    for (let i of nums) {
        while (stack[stack.length - 1] < i) {
            obj[stack.pop()] = i
        }
        stack.push(i)
    }
    return findNums.map(i => obj[i] || -1)
}
