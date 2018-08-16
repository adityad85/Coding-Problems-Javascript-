function sumAll(a, b) {
  const loop = (a, b, curSum) => {
    if (a === b) return curSum + a;
    return loop(a + 1, b, curSum + a);
  };
  return loop(a, b, 0);
}

console.log(sumAll(2, 5));
