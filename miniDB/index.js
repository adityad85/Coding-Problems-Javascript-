import { select, deleteTuple } from './serverFunctions';

const stdin = process.openStdin();

console.log('starting the db shell, enter your query: ');

const regex = /^(\w+)\s+\*\s+FROM\s+(\w+)\s+WHERE\s+(\w+)="(\w+)"$/;

stdin.addListener('data', (d) => {
  const input = d.toString().trim();

  const selectDeleteMatch = regex.exec(input);

  const db = 'smallDB';

  if (selectDeleteMatch) {
    const [, query, table, field, value] = selectDeleteMatch;

    switch (query) {
      case 'SELECT': {
        console.log(select(db, table, field, value));
        break;
      }
      case 'DELETE': {
        console.log(deleteTuple(db, table, { field, value }));
        break;
      }
      default:
    }
  }
});

