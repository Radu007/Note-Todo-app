let myAccount = {
	name: 'Radu',
	expenses: 0,
	income: 0
}

let addExpense = function (account, amount) {
	account.expenses = account.expenses + amount
}

//addIncome
let addIncome = function (account, income) {
	account.income = account.income + income;
}
//resetAccount
let resetAccount = function (account) {
	account.income = 0,
	account.expenses = 0
}
//get AccountSummary
let getAccountSummary = function (account) {
	let balance = account.income - account.expenses
	return `Account for ${account.name} has $${balance}. $${account.income} in income. $${account.expenses} in expenses`
}
//Account for Radu has 900$. $1000 in income. 100$ in expenses.



addIncome(myAccount, 2000)
addExpense(myAccount,2.50)
addExpense(myAccount, 160)
console.log(getAccountSummary(myAccount))
resetAccount(myAccount)
console.log(getAccountSummary(myAccount))
//addIncome
//addExpense
//addExpense
//getAccountSummary
//resetAccount
//getAccountSummary	