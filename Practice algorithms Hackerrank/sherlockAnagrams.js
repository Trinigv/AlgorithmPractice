//function ANAGRAMS
//The task is simple is there's an anagram in the following array, remove it.

arr = ['code', 'doce', 'doc', 'farm', 'fram', 'amfr'];

function sherlockAnagrams(string) {
	var subs = [];
	//nested loop to slice/divide the string in multiple substrings
	for (let i = 0; i < string.length; i++) {
		for (let j = i + 1; j < string.length + 1; j++) {
			subs.push(string.slice(i, j));
		}
	}
	//converts string to array and sorts is alphabetically
	finalArray = subs.map((el) => el.split('').sort().join(''));
	//checking for duplicates with forEach and a for loop
	var count = 0;
	finalArray.forEach((el, index) => {
		for (let i = index + 1; i < finalArray.length; i++) {
			// ir adelantado en uno en el segundo loop
			let ele2 = finalArray[i];
			if (ele2 === el) {
				count++;
			}
		}
	});
	console.log(count);
}

//sherlockAnagrams('abba');
//writing the code again. find anagrams for the next string acd
