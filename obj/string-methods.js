let name = 'Radu Cazacu'


//Length property
console.log(name.length)

//convert to upper case
console.log(name.toUpperCase())

//includes
let password ='123password'
console.log(password.includes(123))


//Challenge area

let isValidPassword = function (password) {
	return password.length >= 8 && !password.includes('password')
} 

console.log(isValidPassword('122ddadsaadpaword'))