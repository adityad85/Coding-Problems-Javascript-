const product = (aNumber, stringNumber) => {
  // stringNumber is string and aNumber is number
  let remainder = 0;
  let carry = 0;
  let stringAnswer = '';
  for (let i = stringNumber.length - 1; i >= 0; i--) {
    let temp = Number(stringNumber[i]) * aNumber + carry;
    remainder = temp % 10;
    carry = Math.floor(temp / 10);
    stringAnswer += remainder;
  }
  if (carry !== 0) {
    carry = String(carry).split("").reverse().join("");
    stringAnswer += carry;
  }
  // returns a reversed product
  return stringAnswer;
}

const bigFactorial = (n) => {
  if (n === 0 || n === 1) {
    return '1';
  }
  const temp = bigFactorial(n - 1);
  const tempAnswer = product(n, temp);
  const reversedAnswer = tempAnswer.split("").reverse().join("");
  return reversedAnswer;
}

function reversestr(str) {
  const loop = ([head, ...tail]) => {
    if (head === undefined) return '';
    return loop(tail) + head;
  };
  return loop(str);
}

const sum = (a, b) => {
  // a must be less than b 
  if (a.length > b.length) {
    const swap = b;
    b = a;
    a = swap;
  }
  let r = 0;
  let carry = 0;
  let temp = 0;
  let stringAnswer = '';
  for (let i = 0; i < b.length; i++) {
    if (i < a.length) {
      temp = Number(a[i]) + Number(b[i]) + carry;
    } else {
      temp = Number(b[i]) + carry;

    }
    r = temp % 10;
    carry = Math.floor(temp / 10);
    stringAnswer += r;
  }
  if (carry !== 0) {
    stringAnswer += carry;
  }
  return reversestr(stringAnswer);
};

const fib = (n) => {
  if (n === 1 || n === 0) {
    return '1';
  }
  const temp = fib(n - 1);
  const temp2 = fib(n - 2);

  const tempAnswer = sum(temp, temp2);
  return tempAnswer;
}

const fib2 = (n) => {
  const fibArray = ['0', '1'];
  for (let i = 2; i <= n; i += 1) {
    fibArray[i] = sum(reversestr(fibArray[i - 1]), reversestr(fibArray[i - 2]));
  }
  return fibArray[n];
};

console.log(fib2(499));
console.log(fib2(7));
console.log(fib2(8));
console.log(fib2(9));
console.log(fib2(10));


// console.log(bigFactorial(499));
// console.log(bigFactorial(500));
// console.log(stringAnswer);
// console.log(str.substr(1));

// 499th fib number
// 86168291600238450732788312165664788095941068326060883324529903470149056115823592713458328176574447204501
