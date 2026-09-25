const prompt = require('prompt-sync')();


//NUMBER 1
// function minimum(x, y){
//     if (x < y){
//         return console.log(x)
//     }
//     else if (x > y){
//         return console.log(y)
//     }
//     else if (x === y){
//         return console.log("These values are equal.")
//     }
//     else{
//         return console.log("The number input are not valid.")
//     }
// }
// console.log(minimum(4, 19))


//NUMBER 2
// function isEven(num){
//     if (num === 0){
//         return true;
//     }
//     else if (num === 1){
//         return false;
//     }
//     else if (num < 0){
//         return isEven(-num);
//     }
//     else {
//         return isEven(num-2);
//     }
// }
// console.log(isEven(50))
// console.log(isEven(75))
// console.log(isEven(-1))


//NUMBER 3
// function nthOfSeries(series, num) {
//     if (series === "plus4") {
//         let result = 2;
//         let add = 0;
//         for (let i = 0; i < num; i++) {
//             result  = result + add;
//             add = add + 4;
//         }
//         return result;
//     } else if (series === "multiply") {
//         let result = 1;
//         let multiplier = 1;
//         for (let i = 1; i <= num; i++) {
//             result = result * multiplier;
//             multiplier++;
//         }
//         return result;
//     } else if (series === "fibonacci") {
//         if (num === 1) {
//             return 1;
//         } else if (num === 2) {
//             return 1;
//         } else if (num > 2) {
//             return nthOfSeries(series, num - 1) + nthOfSeries(series, num - 2);
//         }
//     }
// }
// function hcf(x, y) {
//     if (y === 0) {
//         return x;
//     } else {
//         return hcf(y, x % y);
//     }
// }
// function lcm(x, y) {
//     return (x * y) / hcf(x, y);
// }

// console.log(nthOfSeries("multiply", 7));


//NUMBER 4
// function options() {
//     console.log("Press 1 to add \nPress 2 to subtract \nPress 3 to multiply \nPress 4 to divide \nPress 5 to quit");
//     let option = Number(prompt("Enter your option: "));
//     if (option < 1 || option > 5) {
//         console.log("Invalid option. Please try again.");
//         return options();
//     }
//     return option;
// }

// function getNumbers() {
//     let num1 = Number(prompt("Enter first number: "));
//     let num2 = Number(prompt("Enter second number: "));
//     return [num1, num2];
// }

// function calculate() {
//     let option = options();
//     let [num1, num2] = getNumbers();
//     if (option === 1) {
//         console.log(`${num1} + ${num2} = ${num1 + num2}`);
//     } else if (option === 2) {
//         console.log(`${num1} - ${num2} = ${num1 - num2}`);
//     } else if (option === 3) {
//         console.log(`${num1} * ${num2} = ${num1 * num2}`);
//     } else if (option === 4) {
//         if (num2 === 0) {
//             console.log("Cannot divide by zero. Please try again.");
//             return calculate();
//         }
//         console.log(`${num1} / ${num2} = ${num1 / num2}`);
//     } else if (option === 5) {
//         console.log("Exiting the program.");
//         return;
//     }
// }
// console.log(calculate());


//NUMBER 5
// function table1() {
//     let x = Number(prompt("Enter a number: "));
//     let a = Number(prompt("Enter a number: "));
//     let b = Number(prompt("Enter a number: "));
//     if (b > a) {
//         for (let i = a; i <= b; i++) {
//             console.log(`${x} * ${i} = ${x * i}`);
//         }
//     } else {
//         console.log("Third number should be greater than second number");
//         table1();
//     }
// }

// console.log(table1());

//NUMBER 6
// function table2(){
//     let x = Number(prompt("Enter a number: "));
//     let y = Number(prompt("Enter a number: "));
//     let a = Number(prompt("Enter a number: "));
//     let b = Number(prompt("Enter a number: "));
//     if (b > a) {
//         for (let i = a; i <= b; i++) {
//             console.log(`${x} * ${i} = ${x * i}`);
//         }
//         if (y > x) {
//             for (let p = x; p <= y; p++) {
//                 console.log(`${x} * ${p} = ${x * p}`);
//             }
//     } else {
//         console.log("Third number should be greater than second number");
//         table2();
//     }
// }
// }
// console.log(table2())




//-----IMPORTANT-----
// function nth(){
//     let input = Number(prompt("Enter the nth term you want: "));
//     let numba = 2
//     for(let i = 0; 1 < input; i++){
//         numba = numba + 4*i
//         console.log(numba)
//         }
//     return(input)
// }
// nth()

// function nth(){
//     let input = Number(prompt("Enter the nth term you want: "));
//     let numba = 1
//     let count = 0

//         while(count != input){
//             numba *= ++count
//             console.log(numba)
//         }
//     return(input)
// }
// nth()

//-----END OF IMPORTANT-----



// function nthTerm2(n){
//     let x = 1
//     for(let i = 1; i<n; i++)
//         x = 
// }


