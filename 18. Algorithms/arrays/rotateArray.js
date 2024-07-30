// LC 189: Rotate Array

// Given an integer array nums, rotate the array to the right by k steps, where k is non-negative.

// Input: nums = [1,2,3,4,5,6,7], k = 3
// Output: [5,6,7,1,2,3,4]

const rotate1 = (nums, k) => {
  let arr = [];
  for (let i = 0; i < nums.length; i++) {
    arr[(i + k) % nums.length] = nums[i];
  }
  return arr;
};

console.log(rotate1([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate1([-1, -100, 3, 99], 2));

// Time Complexity: O(n)
// Space Complexity: O(n)

const reverse = (nums, start, end) => {
  while (start < end) {
    [nums[start], nums[end]] = [nums[end], nums[start]];
    start++;
    end--;
  }
};

const rotate2 = (nums, k) => {
  k = k % nums.length;
  reverse(nums, 0, nums.length - 1);
  reverse(nums, 0, k - 1);
  reverse(nums, k, nums.length - 1);
  return nums;
};

console.log(rotate2([1, 2, 3, 4, 5, 6, 7], 3));
console.log(rotate2([-1, -100, 3, 99], 2));

// Time Complexity: O(n)
// Space Complexity: O(1)
