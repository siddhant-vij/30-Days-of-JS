const arrayStats = (arr) => {
  if (arr.length === 1) {
    return [arr[0], arr[0], arr[0]];
  }
  const min = Math.min(...arr);
  const max = Math.max(...arr);
  const sum = arr.reduce((acc, num) => acc + num, 0);
  return [min, max, sum];
};

console.log(arrayStats([1, 2, 3, 4, 5])); // [1, 5, 15]

const minCalc = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  return Math.min(arr[0], minCalc(arr.slice(1)));
};

const maxCalc = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  return Math.max(arr[0], maxCalc(arr.slice(1)));
};

const sumCalc = (arr) => {
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] + sumCalc(arr.slice(1));
};

const arrayStatsRecursive = (arr) => {
  return [minCalc(arr), maxCalc(arr), sumCalc(arr)];
};

console.log(arrayStatsRecursive([1, 2, 3, 4, 5])); // [1, 5, 15]