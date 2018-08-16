
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


console.log(findPairsinTwo([1, 2, 3, 4, 5], [4, 3, 2, 1], 9));
