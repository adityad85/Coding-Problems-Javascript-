function rangeAndMap(a, b) {
  if (a === b) return [a * a];
  return [a * a, ...(rangeAndMap(a + 1, b))];
}

console.log(rangeAndMap(2, 5));
