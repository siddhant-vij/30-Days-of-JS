// LC 3: Longest Substring Without Repeating Characters

const lengthOfLongestSubstring = (str) => {
  let max = 0;
  let left = 0;
  let right = 0;
  let map = new Map();
  while (right < str.length) {
    if (map.has(str[right])) {
      left = Math.max(map.get(str[right]) + 1, left);
    }
    map.set(str[right], right);
    max = Math.max(max, right - left + 1);
    right++;
  }
  return max;
};

const str1 = "abcabcbb";
console.log(lengthOfLongestSubstring(str1));

const str2 = "bbbbb";
console.log(lengthOfLongestSubstring(str2));

const str3 = "pwwkew";
console.log(lengthOfLongestSubstring(str3));
