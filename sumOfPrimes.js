
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