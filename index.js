//area of rectangle

let width = 6;
let length = 5;
let area = width * length;
console.log("The area of the rectangle is : " + area);

// The Temperature Converter

function fromCtoF(cel) {
  return (cel * 9) / 5 + 32;
}

console.log("20 C = ", fromCtoF(20), "in F");

function fromFtoC(feh) {
  return ((feh - 32) * 5) / 9;
}

console.log("50 F = ", fromFtoC(50.5), "in C");
console.log("");

// Numbers summations

let Numbers = [23, 54, 32, 87, 47];
let sum = 0;
for (let i = 0; i < Numbers.length; i++) {
  sum += Numbers[i];
}
console.log("sum of number : " + sum);

//MaximumNumbers

Nums = [16, 4, 2, 0, 19, 6];
let max;
max = Nums[0];
for (k = 0; k < Nums.length; k++) {
  if (Nums[k] > max) max = Nums[k];
}
console.log("Largest element is = " + max);

//ReverseArray

reverseArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
let i;
console.log("reverse array: ");

for (i = reverseArray.length - 1; i >= 0; i--) {
  console.log(reverseArray[i] + "");
}

//stars pattern

let n = 5;
let star = "";
console.log("Stars pattern : ");
for (let i = 1; i <= n; i++) {
  for (let j = 0; j < i; j++) {
    star += "*";
  }
  star += "\n";
}
console.log(star);
