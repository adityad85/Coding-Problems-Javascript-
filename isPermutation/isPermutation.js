const isPermutation = (input, permutation) => {
  if (input.length !== permutation.length) {
    return false;
  }
  const map = new Map();
  Array(...input).forEach((ele) => {
    let count = 0;
    if (map.has(ele)) {
      count = map.get(ele);
      map.set(ele, count + 1);
    } else {
      map.set(ele, 1);
    }
  });

  for (let i = 0; i < permutation.length; i += 1) {
    const ele = permutation.charAt(i);
    if (map.has(ele)) {
      const count = map.get(ele);
      map.set(ele, count - 1);
    } else {
      return false;
    }
  }

  const keys = map.keys();
  let tempKey = keys.next().value;
  do {
    if (map.get(tempKey) !== 0) {
      return false;
    }
    tempKey = keys.next().value;
  } while (tempKey);
  return true;
};

console.log(isPermutation('assdd', 'adssd'));

// console.log(unique('moni'));

console.log(('a'));
