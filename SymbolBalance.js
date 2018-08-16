
const SymbolBalance = (str, left, right) => {
  let count = 0;
  Array(...str).forEach((i) => {
    if (i === left) {
      count += 1;
    } else if (i === right) {
      count -= 1;
    }
    if (count < 0) return 'unbalanced';
  });
  if (count === 0) {
    return 'balanced';
  }
  return 'unbalanced';
};

const SymbolBalanceMain = (str) => {
  console.log(SymbolBalance(str, '(', ')'));
  console.log(SymbolBalance(str, '[', ']'));
  console.log(SymbolBalance(str, '{', '}'));
};

console.log(SymbolBalanceMain('[][][]{}{}()()()'));
