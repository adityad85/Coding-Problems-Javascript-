function listoflastnitems(arr, nElements) {
  const posToStart = arr.length - nElements - 1;
  const loop = ([head, ...tail], index) => {
    if (head === undefined) return '';
    if (posToStart === index) return tail;
    if (head) return loop(tail, index + 1);
  };
  return loop(arr, 0);
}

console.log(listoflastnitems([1, 2, 3, 4, 5, 6], 3));
