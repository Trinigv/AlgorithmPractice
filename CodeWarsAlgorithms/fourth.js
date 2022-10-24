/* Validate parenthesis: check if the order of the parenthesis is correct */

function validation(check) {
	if (check === '') {
		return true;
	}

	const replacement = check.replace(/\(\)/gi, ''); //caso de corte

	if (replacement === check) {
		return false;
	}

	return validation(replacement);
}

console.log(validation('()()('));

/* 
Regular expressions 

To make a regex, it has to be delimites by /'yourRegEx/
If there is a special character it has to be escaped with backlash:\ example: /\*\(/gi 
The modifiers (gi) indicate global and i = case sensitive

RegEx are typically use with replace, test, and split methods

*/
