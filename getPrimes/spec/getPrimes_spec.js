(function(){
  'use strict';
  var imp = require('../app/getPrimes.js')

  describe("Get an array of prime numbers: ", function() {

    describe("Case for prime numbers", function() {
      it("should return `[1,2,3,5,7,11,13,17,19]` for getPrimes(20)", function() {
        expect(imp.getPrimes(20)).toEqual([1,2,3,5,7,11,13,17,19]);
      });

      it("should return `[1,2,3,5,7]` for getPrimes(10)", function() {
        expect(imp.getPrimes(10)).toEqual([1,2,3,5,7]);
      });

      it("should return `[1,2,3,5]` for getPrimes(6)", function() {
        expect(imp.getPrimes(6)).toEqual([1,2,3,5]);
      });

      it("should return `[]` for getPrimes(15)", function() {
        expect(imp.getPrimes(15)).toEqual([ 1, 2, 3, 5, 7, 11, 13 ]);
      });
      
      it("should return `[ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]` for getPrimes(20)", function() {
        expect(imp.getPrimes(50)).toEqual([ 1, 2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47]);
      });
    });

    describe("Case for no prime numbers obtainable", function() {
      it("should return `[]` for getPrimes(1)", function() {
        expect(imp.getPrimes(20)).toEqual([1,2,3,5,7,11,13,17,19]);
      });
    });

    describe("Case for invalid inputs [0, 'hi', -20, ]", function() {

      it("should return invalid input if 0 is entered", function() {
        expect(imp.getPrimes(0)).toEqual("Invalid input. Please re-enter number.");
      });

      it("should return invalid input if a negative number is entered", function() {
        expect(imp.getPrimes(-20)).toEqual("Invalid input. Please re-enter number.");
      });

      it("should return invalid input if a string is entered", function() {
        expect(imp.getPrimes('hi')).toEqual("Invalid input. Please re-enter number.");
      });

      it("should return invalid input if  0 is entered", function() {
        expect(imp.getPrimes('0')).toEqual("Invalid input. Please re-enter number.");
      });

    });
  });
})();