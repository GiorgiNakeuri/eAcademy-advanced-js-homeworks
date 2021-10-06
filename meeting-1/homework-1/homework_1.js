let getTable = (rows, cols) => {
  const table = [];
  let multiplayer = 0;
  let num = 0;

  for (i = 0; i < rows; i++) {
    table.push([]);
  }

  while (table[0].length < cols) {
    multiplayer++;
    for (i = 0; i < rows; i++) {
      const isOdd = multiplayer % 2 > 0;

      num++;

      if (isOdd) table[i].push(num);
      else table[rows - i - 1].push(num);
    }
  }

  console.log(table);
};

getTable(4, 5);
