// const spliceArray = ["I", "study", "JavaScript", "right", "now"];
// const removed = spliceArray.splice(2, 3, "dance");
// console.log(removed);
// console.log(spliceArray);

// function displayComponent({ height = 200, width = 100, title }) {
//   console.log(
//     `<div style="width:${width}px; height:${height}px"><h2>${title}</h2></div>`
//   );
// }
// displayComponent({ width: 200, title: "My Awesome Component" });
// displayComponent({ title: "My Amazing Component" });
// displayComponent({ width: 300, height: 300, title: "My Average Component" });

// //Date and Time

// const now = new Date()
// console.log( now ) // 2023-03-26T11:45:59.096Z
// console.log( +now ) // 1679832116638 - number of milliseconds since epoch

const now = new Date();
console.log(now);
console.log(now.toLocaleDateString());
console.log(now.toLocaleTimeString());
console.log(now.toLocaleString());
