function check(str, ans) {
  if (str === '') return ans;
  const fitem = str.slice(0, 1);
  if (fitem === '(') {
    return check(str.slice(1, str.length), ans + fitem);
  }
  if (fitem === ')') {
    const litem = ans.slice(ans.length - 1, ans.length);
    if (litem === '(') {
      return check(str.slice(1, str.length), ans.slice(0, str.length - 1));
    }
  }
}
console.log(check('()()', ''));

const check2 = (str) => {
  let count = 0;
  for (let i = 0; i < str.length; i += 1) {
    const ele = str.charAt(i);
    if (ele === '(') count += 1;
    if (ele === ')') count -= 1;
    if (count < 0) return 'unbalanced';
  }

  if (count === 0) {
    return 'balanced';
  }
  return 'unbalanced';
};

console.log(check2('()(()'));
