// let button = document.querySelector("#submit");
// const todoLists = document.querySelector("#my-lists");
// const todoNr = document.querySelector(".todo-nr b");
// // console.log(todoNr);
// const items = todoLists.children;

// // click, scroll, resizing the browser are events
// // attach event listener

// button.addEventListener("click", function () {
//   const newItem = document.createElement("li");
//   newItem.classList.add("item");
//   newItem.innerText = `ITEM ${items.length + 1}`;
//   todoLists.appendChild(newItem);
//   todoNr.innerText = items.length;

//   // create and attach listener

//   for (item of items) {
//     item.addEventListener("click", deleteItem);
//   }
// });
// todoNr.innerText = items.length;

// // for (item of items) {
// //   item.addEventListener("click", deleteItem);
// // }

// function deleteItem(e) {
//   e.target.remove();
// }
