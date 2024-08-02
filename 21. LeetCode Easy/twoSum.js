// LC 1: Two Sum

/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */

var twoSum = function (nums, target) {
  const mapElIdx = new Map();
  for (let i = 0; i < nums.length; i++) {
    if (mapElIdx.has(target - nums[i])) {
      return [mapElIdx.get(target - nums[i]), i];
    }
    mapElIdx.set(nums[i], i);
  }
};

console.log(twoSum([2, 7, 11, 15], 9));
console.log(twoSum([3, 2, 4], 6));
console.log(twoSum([3, 3], 6));
