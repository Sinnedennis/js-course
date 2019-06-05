
const squareRoot = function (a) {
    if (typeof a === "number" && !Number.isNaN(a)) {
        return console.log(`Square root of number (${a}) is: ${Math.sqrt(a)} :)`);
    };
    console.error(`squareRoot was not passed a number :(`);
};

const flipString = function (a) {
    if (typeof a === "string") {
        var reversedString = a.split("").reverse().join("");
        return console.log(`Reversed string is ${reversedString} :)`);
    };
    console.log(`flipString was not passed a string :(`);
}

const isBoolean = function (a) {
    if (typeof a === "boolean") {
        return console.log(`Is a boolean! ${a} :)`);
    };
    console.log(`isBoolean was not passed a bool :(`);
}

const handleFunction = function (a) {
    if (typeof a === "function") {
        return console.log(`Received a function :)`);
    };
    console.log(`handleFunction was not passed a function :(`)
}

const handleUndefined = function (a) {
    if (typeof a === "undefined") {
        return console.log(`Received undefined. Handling error correctly :)`);
    };
    console.log(`handleUndefined was not passed undefined :(`);
}

const handleNull = function (a) {
    if (a === null) {
        return console.log(`Received null. Handling error correctly :)`);
    };
    console.log(`handleNull was not passed null :(`);
}

const handleNaN = function (a) {
    if (Number.isNaN(a)) {
        return console.log(`Received NaN. Handle error correctly :)`);
    };
    console.log(`handleNaN was not passed NaN :(`);
}

module.exports = { squareRoot, flipString, isBoolean, handleFunction, handleUndefined, handleNull, handleNaN };