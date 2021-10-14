//  for loop
// for (let i = 0; i <= 100; i++) {
//   if (i === 20) {
//     console.log("hey you got 20");
//     continue;
//   }
//   console.log(i);
// }

const text = ["text1", "text2", "text3", "text4"];

// for (let i = 0; i <= text.length; i++) {
//   console.log(i);
// }

// for (let result of text) {
//   if (result === "text3") {
//     console.log("STOP");
// break; // BREAK WILL WORK
//   }
//   console.log(result);
// }

//  specfically for arrays

// text.forEach(function (name, index) {
//   if (name === "text1") {
//     // console.log("test"); // BREAK WILL NOT WORK
//   }
//   console.log(name, index);
// });

//   for WHILE LOOPS

// const user = {
//   name: "John", // key and value Both NAME AND JOHN IS PROPERTY
//   age: 25,
//   subscription: 200,
//   money: "No",
// };

// for (let x in user) {
//   console.log(user[x]);
// }

// while and do while

let i = 0;
// while (i < 30) {
//   console.log(i);
//   i += 2;
// }

do {
  console.log(i);
  i++;
} while (i > 10);
