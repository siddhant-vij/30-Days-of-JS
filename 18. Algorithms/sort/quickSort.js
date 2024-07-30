// Quick Sort Demo

const partition = (arr, left, right) => {
  const pivot = arr[Math.floor((left + right) / 2)];
  while (left <= right) {
    while (arr[left] < pivot) {
      left++;
    }
    while (arr[right] > pivot) {
      right--;
    }
    if (left <= right) {
      const temp = arr[left];
      arr[left] = arr[right];
      arr[right] = temp;
      left++;
      right--;
    }
  }
  return left;
};

const quickSort = (arr, left = 0, right = arr.length - 1) => {
  if (left < right) {
    const pivot = partition(arr, left, right);
    quickSort(arr, left, pivot - 1);
    quickSort(arr, pivot, right);
  }
  return arr;
};

console.log(quickSort([8, 5, 2, 9, 5, 6, 3])); // [2, 3, 5, 5, 6, 8, 9]

console.log(quickSort([24, 76, 73, 64, 25, 12, 22, 11, 38, 27, 43, 10]));
// [10, 11, 12, 22, 24, 25, 27, 38, 43, 64, 73, 76];
