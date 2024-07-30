// Bubble Sort Demo

const bubbleSort = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < arr.length - i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        const temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
      }
    }
  }
  return arr;
};

const arr = [8, 5, 2, 9, 5, 6, 3];
console.log(bubbleSort(arr)); // [2, 3, 5, 5, 6, 8, 9]
