//Playing around with arrays.

const numbers = [3, 4];

//Add element to the end of array
numbers.push(5, 6);

//Add element to the start of the element.
numbers.unshift(1, 2);

// Add it somewhere in the middle.
numbers.splice(2, 0, "a", "b");

console.log(numbers);

//Index of the elements.

console.log("Index of A", numbers.indexOf("A"));
console.log("Index of a", numbers.indexOf("a"));

if (numbers.includes("a")) {
  console.log("a is included");
}

// Objects and references. Find reference

const courses = [
  { id: 1, name: "a" },
  { id: 2, name: "b" },
];

const searchCourses = { id: 1, name: "a" };

let result = courses.find(function (el) {
  return el.name === "a";
});

let undefindResult = courses.find(function (el) {
  return el.name === "ab";
});

console.log(result);

console.log(undefindResult);

//Removing Elements

// End
numbers.pop();

//Begining

numbers.shift();

// Somewhere in the middle.
//From the second index [third item] removes two elements
numbers.splice(2, 2);

console.log(numbers);

//Reduce function

const sumMe = [1, 5, 2, 8, 633, 77, 98];
let sum = 0;
for (let n of sumMe) sum += n;

console.log(sum);

//Reduce function
sum = sumMe.reduce((accumulator, currentValue) => accumulator + currentValue);

console.log(sum);

const numberArray = arrayFromRange(-10, -7);

function arrayFromRange(min, max) {
  //Initializing array=
  let result = [min];
  //Some Basic validation
  if (min > max) return "Min is higher than max";
  if (isNaN(min) && isNaN(max)) return "Hey one is not a number";

  while (min++ < max) result.push(min);

  return result;
}

console.log(numberArray);

const unMovedArray = [1, 2, 3, 4, 5, 6, 7];

const output = move(unMovedArray, 2, 2);

function move(array, index, offset) {
  const position = index + offset;
  if (position < 0 || position > array.length) {
    console.error("Invalid offset.");
    return;
  }

  let moveArray = [...array];
  let moveElement = moveArray.splice(index, 1)[0];
  moveArray.splice(index + offset, 0, moveElement);

  return moveArray;
}

console.log("Moved Item", output);
