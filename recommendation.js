const fs = require('fs');

const recommendation = () => {
  const map = new Map();
  fs.readFile('./list_of_artists.txt', (err, data) => {
    const arr = data.toString().split('\n');
    // console.log(arr);
    for (let i = 0; i < arr.length; i += 1) {
      const users = arr[i].split(',').sort();
      for (let j = 0; j < users.length; j += 1) {
        for (let k = j + 1; k < users.length; k += 1) {
          const pair = [users[j], users[k]].toString();
          if (map.has(pair)) {
            const count = map.get(pair);
            map.set(pair, count + 1);
          } else {
            map.set(pair, 1);
          }
        }
      }
    }
    // console.log(map);
    map.forEach((val, key) => {
      // console.log(val);
      if (val >= 50) {
        console.log(key, val);
      }
    });
  });
};
recommendation();
