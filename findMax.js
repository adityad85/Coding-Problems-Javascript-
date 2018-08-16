function findmax(arr) {
  const loop = ([head, ...tail], currentmax) => {
    if (head === undefined) {
      return currentmax;
    }
    if (head > currentmax) return loop(tail, head);
    if (head < currentmax) return loop(tail, currentmax);
  };
  return loop(arr, Number.NEGATIVE_INFINITY);
}

console.log(findmax([1, 2, 5, 3, 4]));

