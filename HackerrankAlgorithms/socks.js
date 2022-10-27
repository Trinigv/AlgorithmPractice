function socks(ar, n) {
	var count = 0;
	for (let i = 0; i < n; i++) {
		if (ar[i] !== '') {
			var par = false;
			let j = i + 1;
			while (j < n && !par) {
				if (ar[i] === ar[j]) {
					par = true;
					count++;
					ar[j] = '';
				}
				j++;
			}
		}
	}
	console.log(count);
}
