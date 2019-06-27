const logFactory = require('./helperMethods.js');
const scopeGuess = logFactory();


var x = 10;
// scopeGuess(x, "your_guess_here");

var functionalScopeExample = function () {
    // scopeGuess(x, "your_guess_here");

    var x = 255;
    // scopeGuess(x, "your_guess_here");

    if (true) {
        var x = 999;
        // scopeGuess(x, "your_guess_here");
    };

    // scopeGuess(x, "your_guess_here");
}();

// scopeGuess(x, "your_guess_here");



var y = 10;
// scopeGuess(y, "your_guess_here");

var functionalScopeWithLetExample = function () {
    let y = 35;
    // scopeGuess(y, "your_guess_here");
    
    if (true) {
        let y = 0;
        // scopeGuess(y, "your_guess_here");
    };

    // scopeGuess(y, "your_guess_here");
}();

// scopeGuess(y, "your_guess_here");



// var i = 1024;
// for (var i = 0; i < 10; i++) {
//   // some statements
// }

// scopeGuess(i, "your_guess_here");



// var i = 2048;
// for (let i = 0; i < 10; i++) {
//     // some statements
// }

// scopeGuess(i, "your_guess_here");