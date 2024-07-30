// LC 3. Longest Substring Without Repeating Characters

// Given a string s, find the length of the longest substring without repeating characters.

const lengthOfLongestSubstring = (s) => {
  let max = 0;
  let left = 0;
  let right = 0;
  let map = new Map();
  while (right < s.length) {
    if (map.has(s[right])) {
      left = Math.max(map.get(s[right]) + 1, left);
    }
    map.set(s[right], right);
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
};

console.log(lengthOfLongestSubstring("abcabcbb")); // 3
console.log(lengthOfLongestSubstring("bbbbb")); // 1
console.log(lengthOfLongestSubstring("pwwkew")); // 3
console.log(lengthOfLongestSubstring("a"));    // 1
console.log(lengthOfLongestSubstring("dvdf")); // 3