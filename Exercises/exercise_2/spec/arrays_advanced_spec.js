const expect = require('chai').expect;
const { reverseArray, getEveryOtherItem, concatArrays } = require("../arrays_advanced.js");

describe('reverseArray', () => {
    it ('should exist', () => {
        expect(reverseArray).to.be.a('function');
    });

    it('it should return an array', () => {
        const inputArray = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9];
        expect(reverseArray(inputArray)).to.be.an('array');
    });
});

describe('getEveryOtherItem', () => {

});

describe('concatArrays', () => {

});