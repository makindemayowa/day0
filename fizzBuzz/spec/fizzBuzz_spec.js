describe("Fizz Buzz tests ", function() {
  imp = require('../app/fizzBuzz.js')

  it("should return `Fizz` for number divisible by 3", function() {
    expect(imp.fizzBuzz(3)).toBe('Fizz');
  });

  it("should return `Buzz` for number divisible by 5", function() {
    expect(imp.fizzBuzz(5)).toBe('Buzz');
  });

  it("should return `FizzBuzz` for 15", function() {
    expect(imp.fizzBuzz(15)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 45", function() {
    expect(imp.fizzBuzz(45)).toBe('FizzBuzz');
  });

  it("should return `FizzBuzz` for 90", function() {
    expect(imp.fizzBuzz(90)).toBe('FizzBuzz');
  });

  it("should return `Fizz` for 63", function() {
    expect(imp.fizzBuzz(63)).toBe('Fizz');
  });

  it("should return `Buzz` for 70", function() {
    expect(imp.fizzBuzz(70)).toBe('Buzz');
  });

  it("should return 7 since its indivisible by 3 and 5", function() {
    expect(imp.fizzBuzz(7)).toBe(7);
  });

  it("should return 101 since its indivisible by 3 and 5", function() {
    expect(imp.fizzBuzz(101)).toBe(101);
  });

  it("should return invalid input since the value entered is not a number", function() {
    expect(imp.fizzBuzz('twenty')).toBe('Invalid input!');
  });
  

});