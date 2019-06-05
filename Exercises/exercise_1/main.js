"use strict";
const { squareRoot, flipString, isBoolean, handleFunction, handleUndefined, handleNull, handleNaN } = require('./methods.js');
/**
 * 
 * The method findDataType will be called with a number of different primitive data types. 
 * Figure out what data type is given and pass it to the appropriate function. 
 * 
 */
console.log(typeof findDataType);
function findDataType (unknown) {

    // console.log("I am being called with " + unknown)
    
    //For numbers
    if ( typeof unknown === "number" && Number.isNaN(unknown) === false ) {        
        squareRoot(unknown);
    }

    //For strings
    if (typeof unknown === "string") {
        flipString(unknown);
    }

    //For bool
    if ( typeof unknown === "boolean" ) {
        isBoolean(unknown);
    }

    //For functions
    if ( typeof unknown === "function" ) {
        handleFunction(unknown);
    }

    //For undefined
    if ( typeof unknown === "undefined") {
        handleUndefined(unknown);
    }
        
    //For null
    if ( unknown === null ) {
        handleNull(unknown);
    }

    //For NaN
    if ( Number.isNaN(unknown)) {
        Math.sqrt()
        handleNaN(unknown);
    }
};

module.exports = { findDataType };