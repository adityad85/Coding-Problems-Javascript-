// function rangeAndMap(a, b) {
//     if (a === b) return [a * a];
//     return [a * a, ...(range(a + 1, b))];
// }

// function reverse(arr) {
//     if (arr.length === 1) return arr;
//     return [arr[0], ...(reverse(arr.slice(0, arr.length - 1)))]
// }

// function reversestr(str) {
//     if (str === '') return '';
//     let pos = str.(',');
//     let item = str.slice(pos + 1);
//     return item;
// }

// console.log(reversestr(1, 2, 3, 4));

// function check(str, ans) {
//     if (str === '') return ans;
//     let fitem = str.slice(0, 1);
//     if(fitem==='(')
//     return check(str.slice(1,str.length),ans+fitem);
//     if(fitem===')')
//     {
//         let litem = ans.slice(ans.length - 1, ans.length);
//         if(litem==='(')
//         return check(str.slice(1,str.length),ans.slice(0,str.length-1));
//     }
// }
// console.log(check('()()',''));

function findmax(arr) {
  const loop = ([head, ...tail], currentmax) => {
    if (head === undefined) {
      return currentmax;
    }
    if (head > currentmax) return loop(tail, head);
    if (head < currentmax) return loop(tail, currentmax);
  };
  loop(arr, Number.NEGATIVE_INFINITY);
}
findmax([1, 2, 3, 4]);

function range(a, b) {
  if (a === b) return [a];
  return [a, ...(range(a + 1, b))];
}
// console.log(range(2,9));
function sumAll(a, b) {
  const loop = (a, b, curSum) => {
    if (a == b) return curSum + a;
    return loop(a + 1, b, curSum + a);
  };
  return loop(a, b, 0);
}
// console.log(sumAll(2,5));
function listoflastnitems(arr, nElements) {
  const posToStart = arr.length - nElements - 1;
  const loop = ([head, ...tail], index) => {
    if (head === undefined) return '';
    if (posToStart === index) return tail;
    if (head) return loop(tail, index + 1);
  };
  return loop(arr, 0);
}
// console.log(listoflastnitems([1,2,3,4,5,6],3));

const printnumbers = val => new Promise((resolve, reject) => {
  setTimeout(() => {
    console.log(val);
    resolve();
  }, Math.random() * 10);
});

const feedNumber = () => {
  let i = 0;
  while (i < 10) {
    printnumbers(i);
    i += 1;
  }
};
// feedNumber();
const wait = i => new Promise((resolve) => {
  setTimeout(() => resolve(i), Math.floor(Math.random() * 10000));
});
const print = () => {
  const loop = () => Promise.resolve(0).then(function cb(i) {
    if (i === 10) {
      return '';
    }
    console.log(i);
    return wait(i)
      .then(() => {
        // console.log(i);
        cb(i + 1);
      });
  });
  loop();
};

// print();
const array = [];
// let p=0;
function fun() {
  // let p=0;
  for (let p = 0; p < 5; p++) {
    array.push(() => {
      console.log(p);
    });
  }
}
// fun();
// console.log(array[0]());
// console.log(array[1]());
// console.log(array[2]());
// console.log(array[3]());

const integerPairs = (array, sum) => {
  let last = array.length - 1;
  const set = new Set();
  let i = 0;
  for (; i < array.length; i++) {
    if ((array[i] + array[last]) < sum) {
      i++;
    } else if ((array[i] + array[last]) > sum) {
      last--;
    }
    if (i > last) {
      break;
    }

    if ((array[i] + array[last]) === sum) {
      set.add([array[i], array[last]]);
      console.log(array[i], array[last]);
    }
  }
};

// integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);

const integerPairs2 = (array, sum) => {
  array.reduce((acc, ele1, index1) => {
    array.reduce((acc, ele2, index2) => {
      if ((ele1 + ele2) === sum) {
        console.log(ele1, ele2);
      }
      if (index1 > index2) {}
    });
  }, []);
};

// integerPairs2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
// O(n lg n)
const integerPairs3 = (array, sum) => {
  for (let i = 0; i < array.length; i++) {
    const subtractedNumber = sum - array[i];

    const indexOfTheSubtractedNumber = array.indexOf(subtractedNumber);

    if (i > indexOfTheSubtractedNumber) {
      break;
    }

    if (indexOfTheSubtractedNumber !== -1) {
      console.log(array[i], array[indexOfTheSubtractedNumber]);
    }
  }
};

// integerPairs3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);

const unique = (str) => {
  let string = '',
    result = 'unique';

  for (const element of str) {
    if (string.indexOf(element) !== -1) {
      result = 'not unique';
    } else {
      string += element;
    }
  }

  return result;
};

const isPermutation = (input, permutation) => {
  if (input.length !== permutation.length) {
    return false;
  }
  const map = new Map();
  for (const ele of input) {
    let count = 0;
    if (map.has(ele)) {
      count = map.get(ele);
      map.set(ele, count + 1);
    } else {
      map.set(ele, 1);
    }
    console.log(count);
  }

  for (const ele of input) {
    if (map.has(ele)) {
      const count = map.get(ele);
      map.set(ele, count - 1);
    } else {
      return false;
    }
  }

  for (const [key, value] of map) {
    if (value !== 0) {
      return false;
    }
  }
  return true;
};

// console.log(isPermutation('asdd','assd'));

// console.log(unique('moni'));

// console.log(('a'));


//  qqqqqwwwww

const SymbolBalance = (str, left, right) => {
  let count = 0;
  for (const i of str) {
    if (i === left) {
      count += 1;
    } else if (i === right) {
      count -= 1;
    }
    if (count < 0) return 'unbalanced';
  }
  if (count === 0) {
    return 'balanced';
  }
  return 'unbalanced';
};

const SymbolBalanceMain = (str) => {
  console.log(SymbolBalance(str, '(', ')'));
  console.log(SymbolBalance(str, '[', ']'));
  console.log(SymbolBalance(str, '{', '}'));
};

// console.log(SymbolBalanceMain('[][][]{}{}()()()'));
// console.log('\\');

const namesOfNumber = (n) => {
  // let a = [];
  // a[1] = 1;
  // a[0] = 0;
  // for (let i = 1; i < n; i++) {
  //     a[i] = a[n - i] + a[i];
  //     console.log(a[i]);
  // }
  const loop = (n, i) => {
    if (n === 1) {
      return 1;
    }
    loop(n - 1, sum);
  };
};

// namesOfNumber(5);

const findSubsets = (arr, sum) => {
  const hold = new Array();
  const loop = (arr, total, index) => {
    if (total === 0) {
      console.log();
      return 1;
    }
    if (total < 0) {
      return 0;
    }
    if (index === 0) {
      return 0;
    }
    if (arr[index - 1] > total) {
      return loop(arr, total, index - 1);
    }

    const hold2 = new Array();
    // console.log(hold1);
    // console.log(hold2);
    // hold2=hold1;
    hold2.push(arr[index - 1]);

    const left = loop(arr, total - arr[index - 1], index - 1);
    const right = loop(arr, total, index - 1);
    if (left === 1 || right === 1) {
      console.log(arr[index - 1]);
    }
    return left + right;
  };

  return loop(arr, sum, arr.length, []);
};

// console.log(findSubsets([1, 3, 4, 5, 6], 10));

const postfixToInfix = (str) => {
  const arr = str.split(' ');
  const stack = [];
  for (const ele of arr) {
    if (ele === '+' || ele === '-' || ele === '*' || ele === '/' || ele === '%') {
      // do
      const right = stack.pop();
      const left = stack.pop();
      const toPushExpression = `(${left}${ele}${right})`;
      stack.push(toPushExpression);
    } else if (ele !== ' ') {
      stack.push(ele);
    }
  }
  return stack[0];
};
// console.log(postfixToInfix('32 2 - 5 *'));


const postfixToPre = (str) => {
  const arr = str.split(' ');
  const stack = [];
  for (const ele of arr) {
    if (ele === '+' || ele === '-' || ele === '*' || ele === '/' || ele === '%') {
      // do
      const right = stack.pop();
      const left = stack.pop();
      const toPushExpression = `${ele} ${left} ${right} `;
      stack.push(toPushExpression);
    } else {
      stack.push(ele);
    }
  }
  return stack[0];
};
// (2+3)-(6*8)
// 23+68*-

// console.log(postfixToPre('2 3 + 6 8 * -'));

class Node {
  constructor(data) {
    this.data = data;
    this.left = null;
    this.right = null;
  }
}
const buildNode = (rootNode, left, right) => {
  rootNode.left = left;
  rootNode.right = right;
  return rootNode;
};

const newNode = (data) => {
  const newNode = new Node(data);
  return newNode;
};
class ExpressionTree {
  constructor(expression) {
    this.root = this.createExpressiontree(expression);
    this.inorderExpression = '';
    this.preorderExpression = '';
    this.postorderExpression = '';
  }
  isOperator(element) {
    const operator = ['+', '-', '/', '*', '%'];
    if (operator.indexOf(element) !== -1) {
      return true;
    }
    return false;
  }
  createExpressiontree(str) {
    const array = str.split(' ');
    const stack = [];
    for (const ele of array) {
      if (this.isOperator(ele)) {
        // do
        const right = stack.pop();
        const left = stack.pop();
        const root = newNode(ele);
        const toPushNode = buildNode(root, left, right);
        stack.push(toPushNode);
      } else {
        const nodeNumber = newNode(ele);
        stack.push(nodeNumber);
      }
    }
    return stack[0];
  }
  inorder() {
    const rootNode = this.root;
    this._recursiveInorder(rootNode);
    return this.inorderExpression;
  }
  _recursiveInorder(root) {
    if (root === null) {
      return '';
    }
    if (this.isOperator(root.data)) {
      this.inorderExpression += '(';
    }
    this._recursiveInorder(root.left);
    this.inorderExpression += `${root.data} `;
    this._recursiveInorder(root.right);
    if (this.isOperator(root.data)) {
      this.inorderExpression += ')';
    }
  }

  postorder() {
    const rootNode = this.root;
    this._recursivePostorder(rootNode);
    return this.postorderExpression;
  }
  _recursivePostorder(root) {
    if (root === null) {
      return '';
    }
    this._recursivePostorder(root.left);
    this._recursivePostorder(root.right);
    this.postorderExpression += `${root.data} `;
  }

  preorder() {
    const rootNode = this.root;
    this._recursivePreorder(rootNode);
    return this.preorderExpression;
  }
  _recursivePreorder(root) {
    if (root === null) {
      return '';
    }
    this.preorderExpression += `${root.data} `;
    this._recursivePreorder(root.left);
    this._recursivePreorder(root.right);
  }
  evaluate() {
    this.inorderExpression = '';
    this.inorder();
    const answer = eval(this.inorderExpression);
    return answer;
  }
}

// const tree = new ExpressionTree('2 3 + 6 8 * -');
// console.log(tree.inorder());
// console.log(tree.preorder());
// console.log(tree.postorder());
// console.log('inorder', tree.inorderExpression);
// console.log('preorder', tree.preorderExpression);
// console.log('postorder', tree.postorderExpression);
// console.log(tree.evaluate());


// console.log(exptree('2 3 + 6 8 * -'));

// printAllTheOrders(exptree('2 3 + 6 8 * -'));

// ```numberNames is a function.
// numberNames(5) should equal 7.
// numberNames(12) should equal 77.
// numberNames(18) should equal 385.
// numberNames(23) should equal 1255.
// numberNames(42) should equal 53174.
// numberNames(123) should equal 2552338241.```


// Where

// The integer 1 has 1 name “1”.
// The integer 2 has 2 names “1+1”, and “2”.
// The integer 3 has 3 names “1+1+1”, “2+1”, and “3”.
// The integer 4 has 5 names “1+1+1+1”, “2+1+1”, “2+2”, “3+1”, “4”.
// The integer 5 has 7 names “1+1+1+1+1”, “2+1+1+1”, “2+2+1”, “3+1+1”, “3+2”, “4+1”, “5”.

// 1
// 1   1
// 1   1   1
// 1   2   1   1
// 1   2   2   1   1
// 1   3   3   2   1   1

// 1   4   4   3   2   1   1

// const partition = (arr, index, num, rnum) => {
//   if (rnum < 0) { return; }
//   if (rnum === 0) {
//     console.log(arr);
//   }
//   const prev = (index == 0) ? 1 : arr[index - 1];
//   for (let i = prev; i <= num; i++) {
//     arr[index] = i;
//     partition(arr, index + 1, num, rnum - i);
//   }
// };

// partition([], 0, 5, 5);
// const sumloop = (n) => {
//     let a= [];
//     for (let j = 0; j <= n; j++) {
//         a[j] = 0;;
//     }
//     console.log(a);
//     a[0]=1;
//     for (let i = 1; i <= n; i++) {
//         for (let j = i; j <= n; j++) {
//             a[j] += a[j - i];
//         }
//         console.log(a);
//     }
//     // for (let i = 0; i < n; i++) {
//     //     for (let j = i; j <= n; j++) {
//     //         console.log(a[j]);
//     //     }
//     // }
//     console.log(a[n]);
// }

// // sumloop(2);
// for (let i = 1; i <= n; i++) {
//     for (let j = i; j <= n; j++) {
//         a[j] += a[j - i];
//     }
//     console.log(a);
// }
const loop = (n, i) => {
  if (n === 1 || n === 0) {
    return 1;
  }
  return loop(n - i, i) + loop(i, i);
};

// console.log(loop(4,3));

const findPairsinTwo = (s1, s2, x) => {
  s1.sort((a, b) => a - b);
  s2.sort((a, b) => a - b);
  let i = 0;
  let j = s2.length - 1;
  while (i < s1.length && j >= 0) {
    if (s1[i] + s2[j] < x) {
      i += 1;
    } else if (s1[i] + s2[j] > x) {
      j -= 1;
    } else if (s1[i] + s2[j] === x) {
      return true;
    }
  }
  return false;
};

// console.log(findPairsinTwo([1, 2, 3, 4, 5], [4, 3, 2, 1], 23));

const findmaxProduct = (matrix) => {
  const colLength = matrix[0].length;
  const rowLength = matrix.length;
  let max = Number.NEGATIVE_INFINITY;
  for (let i = 0; i < rowLength; i += 1) {
    tempMax = Number.NEGATIVE_INFINITY;
    for (let j = 0; j < colLength; j += 1) {
      if (j < colLength - 3) { tempMax = Math.max(tempMax, product(matrix[i][j], matrix[i][j + 1], matrix[i][j + 2], matrix[i][j + 3])); }
      if (i < rowLength - 3) { tempMax = Math.max(tempMax, product(matrix[i][j], matrix[i + 1][j], matrix[i + 2][j], matrix[i + 3][j])); }
      if (i < rowLength - 3 && j < colLength - 3) { tempMax = Math.max(tempMax, product(matrix[i][j], matrix[i + 1][j + 1], matrix[i + 2][j + 2], matrix[i + 3][j + 3])); }
      if (i < rowLength - 3 && j < colLength - 3) { tempMax = Math.max(tempMax, product(matrix[i][j], matrix[i + 1][j - 1], matrix[i + 2][j - 2], matrix[i + 3][j - 3])); }
    }
    max = Math.max(tempMax, max);
  }
  console.log(max);
};

const product = (a = 0, b = 0, c = 0, d = 0) => a * b * c * d;

const matrix = [
  [
    8, 2, 22, 97, 38, 15, 0, 40, 0, 75, 4, 5, 7, 78, 52, 12, 50, 77, 91, 8,
  ],
  [49, 49, 99, 40, 17, 81, 18, 57, 60, 87, 17, 40, 98, 43, 69, 48, 4, 56, 62, 0],
  [81, 49, 31, 73, 55, 79, 14, 29, 93, 71, 40, 67, 53, 88, 30, 3, 49, 13, 36, 65],
  [52, 70, 95, 23, 4, 60, 11, 42, 69, 24, 68, 56, 1, 32, 56, 71, 37, 2, 36, 91],
  [22, 31, 16, 71, 51, 67, 63, 89, 41, 92, 36, 54, 22, 40, 40, 28, 66, 33, 13, 80],
  [24, 47, 32, 60, 99, 3, 45, 2, 44, 75, 33, 53, 78, 36, 84, 20, 35, 17, 12, 50],
  [32, 98, 81, 28, 64, 23, 67, 10, 26, 38, 40, 67, 59, 54, 70, 66, 18, 38, 64, 70],
  [67, 26, 20, 68, 2, 62, 12, 20, 95, 63, 94, 39, 63, 8, 40, 91, 66, 49, 94, 21],
  [24, 55, 58, 5, 66, 73, 99, 26, 97, 17, 78, 78, 96, 83, 14, 88, 34, 89, 63, 72],
  [21, 36, 23, 9, 75, 0, 76, 44, 20, 45, 35, 14, 0, 61, 33, 97, 34, 31, 33, 95],
  [78, 17, 53, 28, 22, 75, 31, 67, 15, 94, 3, 80, 4, 62, 16, 14, 9, 53, 56, 92],
  [16, 39, 5, 42, 96, 35, 31, 47, 55, 58, 88, 24, 0, 17, 54, 24, 36, 29, 85, 57],
  [86, 56, 0, 48, 35, 71, 89, 7, 5, 44, 44, 37, 44, 60, 21, 58, 51, 54, 17, 58],
  [19, 80, 81, 68, 5, 94, 47, 69, 28, 73, 92, 13, 86, 52, 17, 77, 4, 89, 55, 40],
  [4, 52, 8, 83, 97, 35, 99, 16, 7, 97, 57, 32, 16, 26, 26, 79, 33, 27, 98, 66],
  [88, 36, 68, 87, 57, 62, 20, 72, 3, 46, 33, 67, 46, 55, 12, 32, 63, 93, 53, 69],
  [4, 42, 16, 73, 38, 25, 39, 11, 24, 94, 72, 18, 8, 46, 29, 32, 40, 62, 76, 36],
  [20, 69, 36, 41, 72, 30, 23, 88, 34, 62, 99, 69, 82, 67, 59, 85, 74, 4, 36, 16],
  [20, 73, 35, 29, 78, 31, 90, 1, 74, 31, 49, 71, 48, 86, 81, 16, 23, 57, 5, 54],
  [1, 70, 54, 71, 83, 51, 54, 69, 16, 92, 33, 48, 61, 43, 52, 1, 89, 19, 67, 48],
];
// run till 74 at the last 4 row and
// findmaxProduct(matrix);

const primes = (n) => {
  const a = new Array(n).fill(1);
  a[0] = 0;
  a[1] = 0;
  for (let i = 2; i < n; i++) {
    if (a[i] === 1) {
      for (let j = i * i; j < n; j += i) {
        a[j] = 0;
      }
    }
  }
  const b = [];
  for (let i = 0; i < n; i += 1) {
    if (a[i] === 1) {
      b.push(i);
      // console.log(i);
    }
  }
  return b;
};

// console.log(primesArraySum(100));
const sumOfPrimes = (n) => {
  const a = primes(n);
  const sum = 0;
  const count = 0;
  const maxCount = 0;
  let prime = 0;
  // console.log(a);
  // for(let i=0;i<a.length;i++){
  //     sum=a[i];
  //     count=1;
  //     for(let j = i+1;j<a.length;j++){
  //         sum+=a[j];
  //         count++;
  //       if( a.indexOf(sum)!==-1 &&count > maxCount){
  //         prime = sum;
  //         // console.log(prime);
  //         console.log('count',count);
  //         maxCount = Math.max(maxCount,count);
  //         // console.log(maxCount);
  //       }
  //     }
  //     // sum=0;
  //   }

  const primesArraySum = new Array(a.length + 1).fill(0);

  for (let i = 0; i < a.length; i++) { primesArraySum[i + 1] = primesArraySum[i] + a[i]; }
  let primeCount = 0;

  for (let i = primeCount; i < primesArraySum.length; i++) {
    for (let j = i - (primeCount + 1); j >= 0; j--) {
      if (primesArraySum[i] - primesArraySum[j] < n) {
        if (a.indexOf(primesArraySum[i] - primesArraySum[j]) !== -1) {
          primeCount = i - j;
          prime = primesArraySum[i] - primesArraySum[j];
        }
      }
    }
  }

  // console.log(a);
  console.log(prime);
};
// primesArraySum(100);

sumOfPrimes(1000000);

export default {
  findmax,
  fun,
  listoflastnitems,
  range,
  sumAll,
  namesOfNumber,
  feedNumber,
  
}