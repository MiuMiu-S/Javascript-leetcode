// 2021-01-12
// 1395. 统计作战单位数

//  n 名士兵站成一排。每个士兵都有一个 独一无二 的评分 rating 。
// 每 3 个士兵可以组成一个作战单位，分组规则如下：
// 从队伍中选出下标分别为 i、j、k 的 3 名士兵，他们的评分分别为 rating[i]、rating[j]、rating[k]
// 作战单位需满足： rating[i] < rating[j] < rating[k] 或者 rating[i] > rating[j] > rating[k] ，
// 其中  0 <= i < j < k < n
// 请你返回按上述条件可以组建的作战单位数量。每个士兵都可以是多个作战单位的一部分。

// 示例 1：
// 输入：rating = [2,5,3,4,1]
// 输出：3
// 解释：我们可以组建三个作战单位 (2,3,4)、(5,4,1)、(5,3,1) 。

// 示例 2：
// 输入：rating = [2,1,3]
// 输出：0
// 解释：根据题目条件，我们无法组建作战单位。

// 示例 3：
// 输入：rating = [1,2,3,4]
// 输出：4
//  
// 提示：
// n == rating.length
// 3 <= n <= 1000
// 1 <= rating[i] <= 10^5
// rating 中的元素都是唯一的

/**
 * @param {number[]} rating
 * @return {number}
 */
var numTeams = function(rating) {
  let len = rating.length,res=0;
  for (let i = 1; i < len-1; i++) {
    const item = rating[i];
    let s1=s2=b1=b2=0;
    
    //看看前边有几个合适的
    for(j=0;j<i;j++){
      if(rating[j]<item){
        s1++;//比自己小的 +1
      }else{// 因为战斗力都是独一无二的 所以else就是大
        b1++;//比自己大的+1
      }
    }

    //看看后边有几个合适的
    for(j=i+1;j<len;j++){
      if(rating[j]>item){
        s2++;//比自己大的+1
      }else{// 因为战斗力都是独一无二的 所以else就是大
        b2++;//比自己小的+1
      }
    }

    res += s1*s2 + b1*b2;//自己可以组成的数 
  }
  return res;
};

console.log(numTeams([1,2,3,4]))

// 解题思路
// 站在士兵角度看 看看前边有small个比自己小 后边有big个比自己大 对自己来说 自己可参与的就是 small X big 次
// 链接：https://leetcode-cn.com/problems/count-number-of-teams/solution/zhan-zai-shi-bing-jiao-du-kao-lu-by-rainbowlover/