/* Move the first letter of each word to the end and add an 'ay!' */

function addingAy(string) {
	//separar los strings en espacios... se forma array? SI
	//luego agregar primer elemento y pasarlo al final como hago eso?
	//con slice puedo omitir la primer letra y agregarla al final.
	//ademas concatenarle 'ay!'
	var newArray = string.split(' ');
	console.log(newArray);
	return newArray.map((el) => el.concat(el[0]).slice(1).concat('ay'));
}

//console.log(addingAy('hola que lindo dia!'));
// add regex to check if there are ! or ? in the strings passed.

function addingAySecond(string) {
	return string
		.split(' ') //' ['hola', 'que', 'lindo' ... ]
		.map((word) =>
			word.match(/[a-zA-Z]/g) // checks for ! or ? etc
				? `${word.slice(1)}${word.charAt(0)}ay` //removes first letter of each word
				: //then adds the first character to the end of the word and finally 'ay'
				  word
		)
		.join(' ');
}

console.log(addingAySecond('hola que nice !'));

/* THINGS TO REMEMBER:
SLICE is a STRING METHOD
SLICE(start, end) start is for default 0 so slice(1) 'slices' the string form 0 to 1 
SPLIT(' ') is a STRING METHOD that transforms strings array diving string acording to parameter
SPLICE('', '', '') is an ARRAY METHOD for removing, adding or editing elements in array 
*/
