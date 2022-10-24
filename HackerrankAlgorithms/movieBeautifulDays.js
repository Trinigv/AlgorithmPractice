// int i = 20
// int j = 23
// int k = 6

var i = 20;
var j = 23;
var k = 6;
var len = j - i + 1;

var arr = new Array(len); //creo un array con la diferencia

var index = 0; // leno el array de int i a int j incluidos
while (index <= len && i <= j) {
	arr[index] = i;
	i++;
	index++;
}
console.log(arr);

var num = 20;
num = num + ''; //converts number to string
var newArr = num.split('');
console.log(typeof 0 + newArr.reverse().join(''));
count = 0;
for (let z = 0; z < arr.length; z++) {
	var point = arr[z];
	arr[z] = arr[z] + '';
	var newArr = arr[z].split('');
	var point_two = 0 + newArr.reverse().join('');
	if ((point - point_two) % k === 0) {
		count++;
	}
}
console.log(count);
