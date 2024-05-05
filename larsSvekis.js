//Practice Exercise 3.1
// let myArray = ["Milk", "Bread", "Apples"];
// console.log(myArray.length);
// myArray[1] = "Bananas";
// console.log(myArray);

//Practice Exercise 3.2
const arr = [];
arr.push("Milk", "Bread", "Apples");
arr.splice = (1, 1, "Bananas", "Eggs");
const pop = arr.pop();
console.log("The leaving value is ",pop);
arr.sort();
console.log("the index of milk is ", arr.indexOf('Milk'));
arr.splice(1, 0, "Carrots", "Lettuce");
const arr2 = ["Juice", "Pop"];
arr = arr.concat(arr2, arr2);
console.log(arr.lastIndexOf("Pop"));
console.log(arr);