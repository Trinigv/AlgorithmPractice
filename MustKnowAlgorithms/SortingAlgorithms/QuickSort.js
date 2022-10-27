//DIVIDE AND CONQUER!!!
//Recursive algorithm
//Choose a pivot randomly (first one for example)
//Compare to pivot and separate based on larger or smaller than pivot
function quickSort(arr) {
	if (arr.length < 1) {
		return [];
	}
	var pivot = arr[0];
	var left = []; //smaller
	var right = []; //larger
	for (let i = 1; i < arr.length; i++) {
		if (arr[i] < pivot) {
			left.push(arr[i]);
		} else if (arr[i] > pivot) {
			right.push(arr[i]);
		}
	}
	return [].concat(quickSort(left), pivot, quickSort(right));
}

var arr = [6, 4, 5, 3, 2, 1];
console.log(quickSort(arr));
