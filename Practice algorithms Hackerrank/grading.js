function birthdayTwo(s, d, m) {
	let count = 0;
	let sum = 0;
	for (let i = 0; i < m; i++) sum += s[i];
	if (sum === d) count++;
	for (let i = m, j = 0; i < s.length; i++) {
		console.log((sum -= s[j]), s[j]);
		sum += s[i];
		j++;
		if (sum === d) count++;
	}
	console.log(count);
}

function beautifulTriplets(d, arr) {
	let result = 0;
	for (let i = 0; i < arr.length; i++) {
		if (arr.includes(arr[i] + d) && arr.includes(arr[i] + d * 2)) {
			result++;
		}
	}
	return result;
}

function grading(grades) {
	var finalGrade = [];
	for (let i = 0; i < grades.length; i++) {
		if (grades[i] >= 40) {
			var decimal = grades[i] / 5;
			var res = Math.ceil(decimal) * 5;
			if (res - grades[i] < 3) {
				finalGrade.push(res);
			} else {
				finalGrade.push(grades[i]);
			}
		} else {
			finalGrade.push(grades[i]);
		}
	}
	console.log(finalGrade);
}

grading([84, 57, 29]);

function diagonalDifference(arr) {
	// Write your code here
	var firstSum = 0;
	var secondSum = 0;
	for (let i = 0; i < arr.length; i++) {
		firstSum += arr[i][i];
		secondSum += arr[i][arr.length - 1 - i];
	}
	if (firstSum - secondSum < 0) {
		var result = (firstSum - secondSum) * -1;
		return result;
	} else {
		return firstSum - secondSum;
	}
}

function longestPalindrome(s) {
	var letters = {};
	for (let i = 0; i < s.length; i++) {
		var si = s[i];
		if (letters[si]) {
			letters[si]++;
		} else {
			letters[si] = 1;
		}
	}
}
