// Count occurence of each character in a string

const countCharsMap = (str) => {
  const charMap = {};
  for (let i = 0; i < str.length; i++) {
    const char = str[i];
    if (charMap[char]) {
      charMap[char]++;
    } else {
      charMap[char] = 1;
    }
  }
  return charMap;
};

const countCharsArr = (str) => {
  const countArr = new Array(128).fill(0); // 128 ASCII characters
  for (let i = 0; i < str.length; i++) {
    countArr[str[i].charCodeAt(0)]++;
  }
  return countArr;
};

const countOccurence = (str) => {
  const charMap = countCharsMap(str);
  for (let char in charMap) {
    console.log(char, charMap[char]);
  }

  console.log("-------");

  const countArr = countCharsArr(str);
  for (let i = 0; i < countArr.length; i++) {
    if (countArr[i] > 0) {
      console.log(String.fromCharCode(i), countArr[i]);
    }
  }
};

countOccurence("Hello World");
