function filter(arr) {
  const max = Math.max(...arr);
  for (let i = 0; i < arr.length; i++) {
    arr[i] = Math.floor((arr[i] / max) * 100);
  }
  return arr;
}

const draw = async (arr) => {
  const filtered = filter(arr);
  // console.log(filtered);
  const dom = document.getElementById('#test');
  while (dom.lastChild) {
    dom.removeChild(dom.lastChild);
  }
  for (const ele of filtered) {
    const bar = document.createElement('div');
    const bar2 = document.createElement('div');
    bar2.classList.add('number-height');
    bar.classList.add('number');
    bar.style.height = `${ele}%`;
    bar2.appendChild(bar);
    document.getElementById('#test').appendChild(bar2);
  }
};

const arr = new Array(25);
function genData() {
  for (let i = 0; i < 25; i++) {
    arr[i] = Math.floor(Math.random() * 1000);
  }
  draw(arr);
}

const wait = timeinMs => (new Promise((resolve) => {
  setTimeout(() => resolve(1), timeinMs);
}));

const bubble = async () => {
  for (let i = 0; i < 25; i += 1) {
    for (let j = i; j < 25; j += 1) {
      if (arr[j] < arr[i]) {
        const temp = arr[j];
        arr[j] = arr[i];
        arr[i] = temp;
        await wait(150);
        draw(arr);
      }
    }
    // console.log(arr);
  }
};
const insertionSort = async () => {
  // const n = arr.length;
  // let arr = a;
  for (let i = 1; i < 25; i += 1) {
    let j = i - 1;
    const temp = arr[i];
    while (j >= 0 && arr[j] > temp) {
      arr[j + 1] = arr[j];
      j -= 1;
    }
    arr[j + 1] = temp;
    await wait(100);
    draw(arr);
  }
  // return arr;
}
function sort() {
  // bubble();
  insertionSort();
  console.log(arr);
  // draw(arr);
}
