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

const sum = (a, b) => {
  // a must be less than b 
  if(a.length>b.length){
    const swap = a;
    b=a;
    a=swap; 
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
  return stringAnswer;
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

console.log(sum('56', '411'));
console.log(fib(499));


// console.log(bigFactorial(499));
// console.log(bigFactorial(500));
// console.log(stringAnswer);
// console.log(str.substr(1));
