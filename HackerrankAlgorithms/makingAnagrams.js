function makingAnagrams(s1, s2) {
	var arrayOne = s1.split('');
	var arrayTwo = s2.split('');
	let count = 0;
	for (let i = 0; i < arrayOne.length; i++) {
		if (!arrayTwo.includes(arrayOne[i])) {
			//arrayOne[i] = ''; //lo cambio por null
			count++;
		} else {
			// si esta la saco del OTRO array para no comparar. si no la saco no es anagram
			var index = arrayTwo.indexOf(arrayOne[i]);
			arrayTwo[index] = '';
		}
	}
	console.log(arrayOne);
	arrayTwo = s2.split('');
	for (let j = 0; j < arrayTwo.length; j++) {
		if (!arrayOne.includes(arrayTwo[j])) {
			//arrayTwo[j] = ''; //lo cambio por null
			count++;
		} else {
			let jindex = arrayOne.indexOf(arrayTwo[j]);
			arrayOne[j] = '';
		}
	}
	console.log(arrayTwo);
	console.log(count);
}
makingAnagrams('sos', 'sol');
