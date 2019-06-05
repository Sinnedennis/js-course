const expect = require('chai').expect;
const { reverseArray, getEveryOtherItem, concatArrays } = require("../arrays_advanced.js");

describe('reverseArray', () => {
    it ('should exist', () => {
        expect(reverseArray).to.be.a('function');
    });

    it('it should return an array', () => {
        const inputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        var result = reverseArray(inputArray);
        expect(result).to.be.an('array');
    });

    it('it should return an array of the same length as the array given', () => {
        const inputArray = [0, 1, 2];
        var result = reverseArray(inputArray);
        expect(result.length).to.equal(inputArray.length);
    });

    it ('it should return an array in reverse order', () => {
        const inputArray = [0,1,2,3,4,5,6,7,8,9];
        var result = reverseArray(inputArray);
        expect(result).to.eql([9,8,7,6,5,4,3,2,1,0]);
    })
});

describe('getEveryOtherItem', () => {
    it ('be a function', () => {
        expect(getEveryOtherItem).to.be.a('function');
    });

    it ('Should return an array', () => {
        var inputArr = [0, 1, 2, 3];
        var result = getEveryOtherItem(inputArr);
        
        expect(result).to.be.an('array');
    });
    
    it ('Should return fewer items that what it\'s given', () => {
        var inputArr = [0,1,2,3,4,5,6,7,8,9];
        var result = getEveryOtherItem(inputArr);
        expect(result.length).to.be.lessThan(inputArr.length);
    })
    
    it ('should return a list of alternating items', () => {
        var inputArr = [0,1,2,3,4,5,6,7,8,9];
        var result = getEveryOtherItem(inputArr);
        expect(result).to.eql([0,2,4,6,8]);

        inputArr = ["hello", [1, 2, 3,], false, true, false];
        result = getEveryOtherItem(inputArr);
        expect(result).to.eql(["hello", false, false]);        
    })

});

describe('concatArrays', () => {
    it ('be a function', () => {
        expect(concatArrays).to.be.a('function');
    });

    it ('it should return an array', () => {
        var inputArr1 = [0, 1, 2, 3];
        var inputArr2 = [0, 1, 2, 3];
        var result = concatArrays(inputArr1, inputArr2);
        
        expect(result).to.be.an('array');
    })

    it ('returns a new array', () => {
        var inputArr1 = [0, 1, 2, 3];
        var inputArr2 = [0, 1, 2, 3];
        var result = concatArrays(inputArr1, inputArr2);
        
        expect(result).to.not.equal(inputArr1);
        expect(result).to.not.equal(inputArr2);
    })

    it ('should return a combined list of items', () => {
        var inputArr1 = [0, 1, 2, 3 ];
        var inputArr2 = [4, 5, 6, 7];
        var result = concatArrays(inputArr1, inputArr2);

        expect(result).to.eql([0,1,2,3,4,5,6,7]);
    })
});