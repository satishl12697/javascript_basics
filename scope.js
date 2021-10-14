//   GLOBAL SCOPE

let food = "apple";
let fruits = 5;

function store() {
  // function SCOPE
  let food = "banana";
  let fruits = 10;
  var x = 5;
}

store();
// BLOCK SCOPE

for (let x = 0; x < 10; x++) {
  console.log(x);
}

// console.log(x);
