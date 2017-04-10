function fizzBuzz (num){
	if (typeof(num) !== "number") {
		return "Invalid input!"
	}
	if (num % 15 === 0) {
		return "FizzBuzz";
	}
	else if(num % 3 === 0){
		return "Fizz";
	}
	else if (num % 5 === 0) {
		return "Buzz";
	}
	else {
		return num;
	}
}
module.exports.fizzBuzz = fizzBuzz;