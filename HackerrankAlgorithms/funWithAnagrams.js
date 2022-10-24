function funAna(array) {
	var result = [];
	var test = array;
	for (let i = 0; i < test.length; i++) {
		if (test[i] !== null) {
			result.push(test[i]);
			var first = test[i];
			first = first.split('').sort().join('');
			for (let j = i + 1; j < test.length; j++) {
				var second = test[j];
				second = second.split('').sort().join('');
				if (first === second) {
					test[j] = null;
				}
			}
		}
	}
	console.log(result);
}

funAna(['code', 'doce', 'ecod', 'framer', 'frame']);
