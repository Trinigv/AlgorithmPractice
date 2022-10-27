var array = [6, 4, 5, 3, 2, 1];
function bubbleSort(array) {
	for (let i = 0; i < array.length - 1; i++) {
		for (let j = 0; j < array.length - 1 - i; j++) {
			if (array[j] > array[j + 1]) {
				var temp = array[j];
				array[j] = array[j + 1];
				array[j + 1] = temp;
			}
		}
	}
	return array;
}

console.log(bubbleSort(array));

//Complexity = O(n * n )
