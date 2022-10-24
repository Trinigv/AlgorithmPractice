function viralAdvertising(n) {
	// Write your code here
	var people = 5;
	var cumulative = 0;
	while (n > 0) {
		var people_like = Math.floor(people / 2);
		var share = people_like * 3;
		people = share;
		cumulative = cumulative + people_like;
		n--;
	}
	return cumulative;
}

console.log(viralAdvertising(5));
