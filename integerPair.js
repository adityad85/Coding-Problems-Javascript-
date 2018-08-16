// const integerPair = (array, sum) => {

// };
// O(n)
const integerPairs = (array, sum) => {
  let last = array.length - 1;
  const set = new Set();
  let i = 0;
  for (; i < array.length; i += 1) {
    if ((array[i] + array[last]) < sum) {
      i += 1;
    } else if ((array[i] + array[last]) > sum) {
      last -= 1;
    }
    if (i > last) {
      break;
    }

    if ((array[i] + array[last]) === sum) {
      set.add([array[i], array[last]]);
    }
  }
  console.log(set);
};


const integerPairs2 = (array, sum) => {
  array.reduce((_, ele1) => {
    array.reduce((_, ele2) => {
      if ((ele1 + ele2) === sum) {
        console.log(ele1, ele2);
      }
    });
  }, []);
};

// O(n*n)
const integerPairs3 = (array, sum) => {
  for (let i = 0; i < array.length; i++) {
    const subtractedNumber = sum - array[i];

    const indexOfTheSubtractedNumber = array.indexOf(subtractedNumber);

    if (i > indexOfTheSubtractedNumber) {
      break;
    }

    if (indexOfTheSubtractedNumber !== -1) {
      console.log(array[i], array[indexOfTheSubtractedNumber]);
    }
  }
};

integerPairs([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
integerPairs2([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
integerPairs3([1, 2, 3, 4, 5, 6, 7, 8, 9, 10], 11);
