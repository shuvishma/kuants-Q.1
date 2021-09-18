// let clients = [
//   "Bigcorp",
//   "Bigcorp",
//   "Acme",
//   "Bigcorp",
//   "Zork",
//   "Zork",
//   "Abc",
//   "Bigcorp",
//   "Acme",
//   "Bigcorp",
//   "Bigcorp",
//   "Zork",
//   "Bigcorp",
//   "Zork",
//   "Zork",
//   "Bigcorp",
//   "Acme",
//   "Bigcorp",
//   "Acme",
//   "Bigcorp",
//   "Acme",
//   "Littlecorp",
//   "Nadircorp",
// ];

function solve(clients) {
  clients.sort();

  let arr = [];
  for (let i = 0; i < clients.length; i++) {
    let count = 0;
    while (i < clients.length - 1 && clients[i] === clients[i + 1]) {
      i++;
      count++;
    }
    if (count / clients.length > 0.07) arr.push(clients[i - 1]);
  }
  console.log(arr);
}

solve(clients) ;
