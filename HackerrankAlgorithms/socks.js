function socks(ar, n) {
	var count = 0;
	for (let i = 0; i < n; i++) {
		console.log(ar);
		if (ar[i] !== '') {
			var par = false;
			let j = i + 1;
			while (j < n && !par) {
				if (ar[i] === ar[j]) {
					par = true;
					count++;
					console.log(
						`indice ${i} valor ${ar[i]} indice: ${j} valor: ${ar[j]}`
					);
					console.log(count, 'borre');
					ar[j] = '';
				}
				j++;
			}
		}
	}
	console.log(count);
}
