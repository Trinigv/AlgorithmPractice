/*
 * Complete the 'sockMerchant' function below.
 *
 * The function is expected to return an INTEGER.
 * The function accepts following parameters:
 *  1. INTEGER n
 *  2. INTEGER_ARRAY ar
 */

function sockMerchant(n, ar) {
	// Write your code here
	var count = 0;
	for (var i = 0; i < n; i++) {
		for (var j = i + 1; j < n; j++) {
			if (ar[i] == ar[j] && ar[i] > 0) {
				count++;
				ar[j] = 0;
				ar[i] = 0;
				continue;
			}
		}
	}
	console.log(count);
}

sockMerchant(10, [1, 1, 3, 1, 2, 1, 3, 3, 3, 3]);
