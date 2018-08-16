
const printnumbers = val => new Promise((resolve) => {
  setTimeout(() => {
    console.log(val);
    resolve();
  }, Math.random() * 10);
});

const feedNumber = () => {
  let i = 0;
  while (i < 10) {
    printnumbers(i);
    i += 1;
  }
};
feedNumber();
