
function declaringAndDefining () {
    
    var myFirstVariable;
    // console.log("myFirstVariable has been declared but not defined. Its value is ", myFirstVariable, " of type ", typeof myFirstVariable);
   
    myFirstVariable = 5;    
    console.log("myFirstVariable value is ", myFirstVariable, " of type ", typeof myFirstVariable);
    
    myFirstVariable = 10;
    console.log("myFirstVariable value is ", myFirstVariable, " of type ", typeof myFirstVariable);
    
    myFirstVariable = true;
    console.log("myFirstVariable value is ", myFirstVariable, " of type ", typeof myFirstVariable);
    
    myFirstVariable = "the value for this variable is now a string";
    console.log("myFirstVariable value is ", myFirstVariable, " of type ", typeof myFirstVariable);
};

// declaringAndDefining();

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


function whenThingsGoWrong () {

    var iAmUndefined;
    console.log(iAmUndefined);
    console.log(typeof iAmUndefined);

    var iAmNull = null;
    console.log(iAmNull);
    console.log(typeof iAmNull);


    var iAmInfinity = 100 / 0 - 1;
    console.log(iAmInfinity);
    console.log(typeof iAmInfinity);

    var iAmNaN = 20 * "melon";
    console.log(iAmNaN);
    console.log(typeof iAmNaN);
    console.log(undefined === undefined);
    console.log(null === null);
    console.log(iAmNaN === iAmNaN);
    console.log(iAmNaN === NaN);
    
}

// whenThingsGoWrong();