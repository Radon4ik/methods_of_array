// const films = [
//   {
//     name: "Titanic",
//     rating: 9,
//   },
//   {
//     name: "Die hard 5",
//     rating: 5,
//   },
//   {
//     name: "Matrix",
//     rating: 8,
//   },
//   {
//     name: "Some bad film",
//     rating: 4,
//   },
// ];

// function showGoodFilms(arr) {
//   return arr.filter((item) => item.rating >= 8);
// }
// console.log(showGoodFilms(films));

// function showListOfFilms(arr) {
//   return arr.reduce(
//     (acc, cur) => `${typeof acc === "object" ? acc.name : acc}, ${cur.name}`
//   );
// }

// console.log(showListOfFilms(films));

// function setFilmsIds(arr) {
//   return arr.map((obj, index) => {
//     obj.id = index;
//     return obj;
//   });
// }

// console.log(setFilmsIds(films));

// const tranformedArray = setFilmsIds(films);

// function checkFilms(arr) {
//   return arr.every((obj) => {
//     for (let key in obj) {
//       if (key === "id") {
//         return obj;
//       }
//     }
//   });
// }

// console.log(checkFilms(tranformedArray));

const funds = [
  { amount: -1400 },
  { amount: 2400 },
  { amount: -1000 },
  { amount: 500 },
  { amount: 10400 },
  { amount: -11400 },
];

const getPositiveIncomeAmount = (data) => {
  return data
    .filter((item) => item.amount > 0)
    .reduce((acc, cur) => acc + cur.amount, 0);
};

console.log(getPositiveIncomeAmount(funds));

const getTotalIncomeAmount = (data) => {
  return data.some((item) => item.amount < 0)
    ? data.reduce((acc, cur) => acc + cur.amount, 0)
    : getPositiveIncomeAmount(data);
};

console.log(getTotalIncomeAmount(funds));
