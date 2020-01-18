
const account = {
	name: 'Radu Cazacu',
	expenses: [],
	income: [],
	addIncome: function (description, amount) {
		this.income.push({
			description: description,
			amount: amount
		})
	},
	addExpense: function (description, amount) {
		this.expenses.push({
			description: description,
			amount: amount
		})
	},
	getAccountSummary: function () {
		let totalExpenses = 0
		let totalIncome = 0
		let accountBalance = 0

		this.expenses.forEach(function (expense) {
			totalExpenses = totalExpenses + expense.amount
		})

		this.income.forEach(function (income) {
			totalIncome = totalIncome + income.amount
		})

		accountBalance = totalIncome - totalExpenses;

		return`${this.name} has a balance of $${accountBalance}. $${totalIncome} in income. $${totalExpenses} in expenses`

	},


}

account.addExpense('Sac', 950)
account.addExpense('ACard', 2300)
account.addIncome('Total', 1000)
console.log(account.getAccountSummary())

//expense => description, amount
//addExpense => description, amount
//getAccountSummary => total up all expenses -> Radu has 1250$ in expense