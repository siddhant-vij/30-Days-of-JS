const binarySearchIterative = (arr, target) => {
  let left = 0;
  let right = arr.length - 1;
  while (left <= right) {
    let middle = Math.floor((left + right) / 2);
    if (arr[middle] === target) {
      return middle;
    } else if (arr[middle] < target) {
      left = middle + 1;
    } else {
      right = middle - 1;
    }
  }
  return -1;
};

const binarySearchRecursive = (
  arr,
  target,
  left = 0,
  right = arr.length - 1
) => {
  if (left > right) {
    return -1;
  }
  let middle = Math.floor((left + right) / 2);
  if (arr[middle] === target) {
    return middle;
  } else if (arr[middle] < target) {
    return binarySearchRecursive(arr, target, middle + 1, right);
  } else {
    return binarySearchRecursive(arr, target, left, middle - 1);
  }
};

const arr = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(binarySearchIterative(arr, 5)); // 4
console.log(binarySearchRecursive(arr, 5)); // 4

console.log(binarySearchIterative(arr, 15)); // -1
console.log(binarySearchRecursive(arr, 15)); // -1