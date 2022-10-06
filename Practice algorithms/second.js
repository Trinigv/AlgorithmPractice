/* Create the function prefill that returns an array of n elements in which all have the same value v without using a loop 
v can be anything
if v is omitted fill the array with undefined
if n is 0 return an empty array
if n is anything other than an integer or integer formatted string greater than 0 throw type error saying 'v is invalid with n being the value of the parameter' 

*/

// n -> number of elements in the array
// v -> variable which defines what happens to the array

function prefill(n, v) {
	if (v === undefined) {
		return new Array(n);
	}
	if (n === 0) {
		return [];
	}
	if (!Number.isInteger(n) || Number.isNaN(Number(n))) {
		throw TypeError(`${n} is invalid`);
		//if number is not integer or NaN then throw error invalid
	}
	return new Array(n).fill(v); //array filled with n elements with all value v
}

Number.isNaN(Number('hola')); // == true forma de chequear si numero es NaN
