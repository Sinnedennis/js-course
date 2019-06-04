
function declaringAndDefining () {
    
    var myFirstVariable;
    console.log("myFirstVariable has been declared but not defined. Its value is ", myFirstVariable, " of type ", typeof myFirstVariable);
   
    // myFirstVariable = 5;    
    // console.log("myFirstVariable value is ", myFirstVariable, " of type ", typeof myFirstVariable);
    
    // myFirstVariable = 10;    
    // console.log("myFirstVariable value is ", myFirstVariable, " of type ", typeof myFirstVariable);
    
    // myFirstVariable = true;
    // console.log("myFirstVariable value is ", myFirstVariable, " of type ", typeof myFirstVariable);
    
    // myFirstVariable = "the value for this variable is now a string";
    // console.log("myFirstVariable value is ", myFirstVariable, " of type ", typeof myFirstVariable);
};



function sloppyCode () {
    //'use strict';
    undeclaredVariable = "this is bad practice";
    console.log(undeclaredVariable);
    
    // neverEverDoThis = true;
    // neverEverDoThis.ever = "this is even worse";
    // console.log(neverEverDoThis);
    // console.log(neverEverDoThis.ever);
    
    // var badLinting = true
    // console.log(badLinting)
};



function letAndConst () {
    const CONSTANT = 365;
    console.log(CONSTANT);

    // CONSTANT = 100;
    // console.log(CONSTANT);
};



function whenThingsGoWrong () {

    var iAmUndefined;
    console.log(iAmUndefined);
    console.log(typeof iAmUndefined);

    // var iAmNull = null;
    // console.log(iAmNull);
    // console.log(typeof iAmNull);


    // var iAmInfinity = 100 / 0 - 1;
    // console.log(iAmInfinity);
    // console.log(typeof iAmInfinity);

    // var iAmNan = 20 * "melon";
    // console.log(iAmNan);
    // console.log(typeof iAmNan);
    // console.log(undefined === undefined);
    // console.log(null === null);
    // console.log(iAmNaN === iAmNaN);
    // console.log(iAmNaN === NaN);
}