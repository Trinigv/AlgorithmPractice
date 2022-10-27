/*
 * Complete the 'bonAppetit' function below.
 *
 * The function accepts following parameters:
 *  1. INTEGER_ARRAY bill
 *  2. INTEGER k
 *  3. INTEGER b
 */

function bonAppetit(bill, k, b) {
	// Write your code here
	var anna = 0;
	for (let i = 0; i < bill.length; i++) {
		if (i == k) {
			continue;
		}
		var sum = bill[i] / 2;
		anna += sum;
	}
	if (b == anna) {
		console.log('Bon Appetit');
	} else {
		console.log(b - anna);
	}
}

var bill = [3, 10, 2, 9];
var k = 1;
var b = 12;

console.log(bonAppetit(bill, k, b));
