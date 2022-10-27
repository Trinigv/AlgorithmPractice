function countingValleys(steps, path) {
	// Write your code here
	var seaLevel = 0;
	var count = 0;
	for (let i = 0; i < steps; i++) {
		if (path[i] == 'D') {
			seaLevel--;
		} else {
			seaLevel++;
		}
		if (path[i] == 'U' && seaLevel == 0) {
			count++;
		}
	}
	return count;
}

console.log(
	countingValleys(10, ['U', 'D', 'U', 'U', 'U', 'D', 'U', 'D', 'D', 'D'])
);
console.log(countingValleys(8, ['D', 'D', 'U', 'U', 'U', 'U', 'D', 'D']));
