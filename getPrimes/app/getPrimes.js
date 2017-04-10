function getPrimes (arg) {
	arr = [];
	upperLimit = Math.sqrt(arg);
	if (typeof(arg) !== "number" || arg <= 0) {
		return "Invalid input. Please re-enter number.";
	}
	for (var i = 1; i < arg; i++) {
		var isPrime = true;
		for (var j = 2; j < upperLimit; j++) {
			if( i % j === 0  && i !== j){
				isPrime = false;
			}
		}
		if (isPrime){
			arr.push(i); 
		}
	}
	return arr;	
}
module.exports.getPrimes = getPrimes 
