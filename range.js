function range(a, b) {
  if (a === b) return [a];
  return [a, ...(range(a + 1, b))];
}

console.log(range(2, 9));
