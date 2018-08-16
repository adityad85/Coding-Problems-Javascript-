// slow
const unique = (str) => {
  let string = '';
  let result = 'unique';

  for (const element of str) {
    if (string.indexOf(element) !== -1) {
      result = 'not unique';
    } else {
      string += element;
    }
  }

  return result;
};

// fast, use of set
const unique2 = (str) => {
  const set = new Set();
  let i = 0;
  while (i < str.length) {
    if (set.has(str.charAt(i))) {
      return false;
    }
    set.add(str.charAt(i));
    i += 1;
  }
  return true;
};

console.log(unique2('aditya'));
