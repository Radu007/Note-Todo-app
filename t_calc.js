//student score, total possible score
// 15-20 -> you got a C(75%)
//A 90-100, B 80-89, C 70-79, D 60-69, F 0-59


let gradeCalc = function (score, totalScore) {
	let percent = (score / totalScore) * 100,
			letter = '';

	if (percent >= 90) {
		letter = 'A'
	} else if (percent >= 80) {
		letter = 'B'
	} else if (percent >=70) {
		letter = 'C'
	} else if (percent >= 60) {
		letter = 'D'
	} else  {
		letter = 'F'
	} 

	return `You got a ${letter} (${percent}%)`
}


let result = gradeCalc(0,20)
console.log(result)