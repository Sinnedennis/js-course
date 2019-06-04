
//Array examples
var listOfNumbers = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var listOfStrings = ["this", "is", "a", "simple", "list", "of", "strings"];
var listOfMixedContent = [20, "apple pie", false, 1.5123, ["this", "is", "a", "nested", "array"], function hello () { console.log("Anything can go anywhere"); }, "another string" ];
var listOfListsofListsOfLists = [[[[["this"]]]],[[[[["is"]]]]],[[[["totally"]]]],[[[["valid"]]]]];
var listOfObjects = [
    { colour: "blue", price: 20000, topSpeed: 135 },
    { colour: "red", price: 35000, topSpeed: 140 },
    { colour: "brown", price: 20, topSpeed: 42 },
];

//Basic array methods
var exampleArray = [0, 1, 2, 3, 4, 5];
exampleArray.push(6);
exampleArray.pop();


//ES6 Methods
var exampleArray = [0, 1, 2, 3, 4, 5];
exampleArray.forEach(); 
exampleArray.map(); 
exampleArray.filter(); 
exampleArray.reduce(); 
exampleArray.some();



//Object examples
var exampleObj = {
    key: "value",
    anotherKey: "value",
    anotherObj : { yetAnotherObj: { hello : "world" } },
    anArray : ["anything", "can", "go", "in", "anything"],
};

console.log(exampleObk.anotherObj.yetAnotherObj.hello);
// console.log(exampleObk.anotherObj.yetAnotherObj.banana);
// console.log(exampleObk.anotherObj.yetAnotherObj.banana.orange);

//How to access object properties
var car = { colour: "blue", price: 20000, topSpeed: 135 };
console.log(car.colour);
console.log(car["colour"]);
var propertyToLog = "colour";
console.log(car[propertyToLog]);


//Functions
function exampleFunc () {
    console.log("Do I log first?");
}
var banana = exampleFunc;
console.log("Or do I log second?")
banana();

var arrayOfFunc = [exampleFunc, exampleFunc, exampleFunc];

function nonAnonFunc (func) {
    func();
}
arrayOfFunc.forEach(nonAnonFunc);

arrayOfFunc.forEach(function (func) {
    func();
});

arrayOfFunc.forEach(func => func());