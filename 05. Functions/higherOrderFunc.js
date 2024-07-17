const double = (num) => num * 2;
const square = (num) => num * num;

const applyFunc = (func1, func2, num) => {
  return func2(func1(num));
};

console.log(applyFunc(double, square, 3)); // 36
