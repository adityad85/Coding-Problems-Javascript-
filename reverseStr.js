function reversestr(str) {
  const loop = ([head, ...tail]) => {
    if (head === undefined) return '';
    return loop(tail) + head;
  };
  return loop(str);
}

console.log(reversestr('1, 2, 3, 4'));