// How many digits are there in a given number?


function numDigits(num) {
	let n = Math.abs(num); 
    let i = 0;
	while (n>= 1) { 
        n=n/10;
        i++; 
    }
	return i;
}

console.log(numDigits(427394724837));

/*

function num_of_digits(num) {
	let n = Math.abs(num), i = 1;
	while ((n /= 10)  >= 1) { i++; }
	return i;
}

console.log(num_of_digits(23456)); */