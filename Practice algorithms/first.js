/* Write an algorithm that recieves an array and returns all 0 at the end*/

var moveZeros = function (arr) {
	// iteration only once
	var zeros = [];
	var notZeros = [];

	arr.forEach((element) => {
		if (element === 0) {
			zeros.push(element);
		} else {
			notZeros.push(element);
		}
	});
	return notZeros.concat(zeros);
};

var moveZeros = function (arr) {
	const arrSinCeros = arr.filter((el) => el !== 0); //se queda con todos los diferentes a cero
	const ceros = new Array(arr.length - arrSinCeros.length).fill(0);
	//crea una array con 4 empty slots y los reemplaza por ceros
	return arrSinCeros.concat(ceros);
	//concateno los arrays y quedan ceros al final
};

var moveZerosTwo = function (arr) {
	// iteration only once
	const { notZeros, zeros } = arr.reduce(
		({ notZeros, zeros }, element) => {
			if (element === 0) {
				return { notZeros, zeros: [...zeros, element] };
			} else {
				return { notZeros: [...notZeros, element], zeros };
			}
		},
		{ notZeros: [], zeros: [] }
	);
	return notZeros.concat(zeros);
};

var array = [1, 2, 4, 6, 0, 8, 0, 3, 0, 0, 7, 8];

console.log(moveZeros(array));
