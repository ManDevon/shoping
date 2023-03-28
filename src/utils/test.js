const curry = function (fn) {
  const len = fn.length; // 获取初始函数fn的形参个数

  // curry返回改造后的函数
  return function t() {
    const innerLength = arguments.length; // 获取t的实参个数
    const args = Array.prototype.slice.call(arguments); // 将类数组arguments对象转为真正的数组（类数组arguments对象是函数传入的实际参数，类似数组，拥有数组属性，但不是数组）

    if (innerLength >= len) {
      // 递归出口，如果t实参个数已经大于fn形参个数,则终止递归
      return fn.apply(undefined, args); // 执行改造后的函数
    } else {
      // 如果t的实参个数少于fn的形参个数，说明柯里化并没有完成，则继续执行柯里化
      return function () {
        const innerArgs = Array.prototype.slice.call(arguments); // 将类数组arguments对象转为真正的数组（类数组arguments对象是函数传入的实际参数，类似数组，拥有数组属性，但不是数组）
        const allArgs = args.concat(innerArgs);
        return t.apply(undefined, allArgs);
      };
    }
  };
};

// 测试
function add(num1, num2, num3, num4, num5) {
  return num1 + num2 + num3 + num4 + num5;
}

const finalFun = curry(add);
const result1 = finalFun(1)(2)(3)(4)(5);
const result2 = finalFun(1, 2)(3)(4)(5);
const result3 = finalFun(1, 2, 3)(4)(5);
const result4 = finalFun(1, 2, 3)(4, 5);

console.log(result1, result2, result3, result4);

function myadd(num1, num2, num3, num4, num5) {
  const nums = Array.prototype.slice.call(arguments);
  // const nums = [num1, num2, num3, num4, num5];
  return nums.reduce((preV, currV, index, array) => {
    return preV + currV;
  });
}
myadd(1, 2, 3, 4, 5);
function CliFun(fn) {
  const len = fn.length;
  console.log("len", len);
  return function t() {
    const argsLen = arguments.length;
    console.log("argsLen", argsLen);
    const args = Array.prototype.slice.call(arguments);
    if (argsLen >= len) {
      return fn.apply(undefined, args);
    } else {
      return function () {
        const innerArgs = Array.prototype.slice.call(arguments);

        console.log("args", args);
        const allArgs = args.concat(innerArgs);
        return t.apply(undefined, allArgs);
      };
    }
  };
}

const clifunction = CliFun(myadd);

const result11 = clifunction(1)(2)(3)(4)(5);
const result21 = clifunction(1, 2)(3)(4)(5);
const result31 = clifunction(1, 2, 3)(4)(5);
const result41 = clifunction(1, 2, 3)(4, 5);

console.log(result11, result21, result31, result41);

const str = "asdfasdfsad";

const arr1 = [
  [11, 2],
  [25, 4],
  [4, 3],
];
const map = new Map(arr1);
// console.log(str.lastIndexOf("a"));

const arr = [1, 2, 3, 4, 56, 456, 77];
console.log(arr.at(4));

function Person() {
  this.username = "xiaohong";
  this.say = function () {
    console.log("hello");
  };
}
function Student() {
  Person.call(this); // 将Student的对象this替换掉Persion中的this,say方法就自然被赋值到studnet的对象上了。
  this.username = "小明";
  this.study = function () {
    console.log("学习好快乐");
  };
  this.log = function () {
    console.log(this.username);
  };
}
