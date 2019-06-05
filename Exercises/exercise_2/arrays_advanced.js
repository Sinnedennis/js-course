
// /**
//  * Write a function that takes an array and returns the array in reverse order
//  */
function reverseArray(arr) {
    var reversedArray = [];
    for (var i = arr.length - 1; i >= 0; i--) {
        var item = arr[i];
        reversedArray.push(item);
    }

    return reversedArray;
}



// /**
//  * Write a function that takes an array and returns an array containing every other item
//  * e.g. [0, 1, 2, 3, 4] => [0, 2, 4]
//  */
function getEveryOtherItem (arr) {
    var shouldInclude = false;

    return arr.filter(function(){
        shouldInclude = !shouldInclude;
        return shouldInclude;
    });
}

// // /**
// //  * Write a function that takes two arrays and returns a new array consisting of both input arrays joined together
// //  */
function concatArrays (arr1, arr2) {
    // var combinedArray =  arr1.concat(arr2);
    // return combinedArray; 

    var combinedArray = arr1.slice();
    arr2.forEach(function(e, i){
        combinedArray.push(e)
    });

    return combinedArray;
}



 module.exports = { reverseArray, getEveryOtherItem, concatArrays };