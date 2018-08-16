const wait = i => new Promise((resolve) => {
  setTimeout(() => resolve(i), Math.floor(Math.random() * 10000));
});

const print = () => {
  const loop = () => Promise.resolve(0).then(function cb(i) {
    if (i === 10) {
      return '';
    }
    console.log(i);
    return wait(i)
      .then(() => {
        // console.log(i);
        cb(i + 1);
      });
  });
  loop();
};

print();
