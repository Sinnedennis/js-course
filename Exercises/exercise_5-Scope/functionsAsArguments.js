




function add (n1, n2) {
    //Your code here
};



function calculate (n1, n2, operator, symbol) {
    console.log(`${n1} ${symbol} ${n2} = ${operator(n1, n2)}`);
};

var num1 = 500;
var num2 = 2;

// 500 + 2 = 502
calculate(num1, num2, add);

// 500 * 2 = 1000
//calculate(num1, num2, multiply);    








// var exampleArray = ["a", "b", "c", "d"];

// exampleArray.forEach(function (value, index, array) {
//     console.log(`${value} is at index ${index} in the array.`);
// });



// var exampleArray = ["e", "f", "g", "h"];

// function higherOrderFunction (value, index, array) {
//     console.log(`${value} is at index ${index} in the array.`)
// };

// exampleArray.forEach(higherOrderFunction);








// function forEach2 (array, func) {

//     for(let i = 0; i < array.length; i++) {
//         func(array[i], i, array);
//     };
// };


// function normalLogger (message, i) {
//     console.log(`${message} - ${i}`);
// };

// function LOUDLOGGER (message, i) {
//     console.log(`${message.toUpperCase()} - ${i}`);
// };


// var messageArray = ["hello", "world", "!", ""];
// forEach2(messageArray, normalLogger);
// forEach2(messageArray, LOUDLOGGER);