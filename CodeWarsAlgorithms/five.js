var arr = [2, 2, 1, 3, 2];

function divide(m, arr, d) {
	var count = 0;
	if (m < arr.length) {
		b = 0;
		var division = arr.slice(b, m);
		var res = division.reduce((a, b) => a + b);
		if (res == d) {
			count++;
		}
		b = b + m;
		m = m + m;
		divide(m, arr, d);
	}
	console.log(count);
}

function birthday(m, arr, d) {
	// Write your code here

	divide(m, arr, d);
}

divide(2, arr, 4);
