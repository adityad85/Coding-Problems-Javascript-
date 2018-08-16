const isAbundant = (n) => {
  let sum = 0;
  for (let i = 1; i <= n / 2; i += 1) {
    if (n % i === 0) {
      sum += i;
    }
  }
  if (sum > n) {
    return true;
  }
  return false;
};

const genAbundantList = () => {
  const abundantNumbers = new Set();
  for (let i = 2; i <= 28123; i += 1) {
    if (isAbundant(i)) {
      abundantNumbers.add(i);
    }
  }
  return abundantNumbers;
};

const twoAdjacentSum = () => {
  const set = new Set();
  const abundantList = genAbundantList();
  const array = [...abundantList];
  for (let i = 0; i < array.length; i += 1) {
    for (let j = i; j < array.length; j += 1) {
      if (array[i] + array[j] <= 28123) {
        set.add(array[i] + array[j]);
      }
    }
  }
  return set;
};

const sumAll = () => {
  const test = twoAdjacentSum();
  let answer = 0;
  for (let i = 1; i <= 28123; i += 1) {
    if (!test.has(i)) {
      answer += i;
    }
  }
  console.log(answer);
  return answer;
};
sumAll();
