function repeatedString(s, n) {
	// Write your code here
	var string = s.repeat(n);
	var arr = string.slice(0, n);
	var result = 0;
	for (let value of arr) {
		if (value === 'a') {
			result++;
		}
	}
	console.log(result);
}

repeatedString('ada', 10);
