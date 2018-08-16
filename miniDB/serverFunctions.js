const fs = require('fs');

const filePath = './store.json';

const store = JSON.parse(fs.readFileSync(filePath, 'utf8'));

const write = (storeData) => {
  fs.writeFileSync(filePath, JSON.stringify(storeData));
};

const select = (db, table, field, value) => {
  const currentDB = store[db];
  const currentTable = currentDB[table];

  const result = [];
  currentTable.forEach((element) => {
    const fieldValue = element[field];
    if (fieldValue === value) {
      result.push(element);
    }
  });

  return result;
};


module.expors = {
  select,
  write,
};
