let myBook = {
	title: '1984',
	autohor: 'Howard Ziad',
	pageCount: 777
}

let otherBook = {
	title: 'A Peoples History',
	autohor: 'George Duna',
	pageCount: 333
}

let getSummary = function (book) {
	return {
		summary: `${book.title} by ${book.autohor}`,
		pageCountSummary:`${book.title} is ${book.pageCount} page long`
	}
}

let bookSummary = getSummary(myBook)
let otherBookSummary = getSummary(otherBook)

console.log(bookSummary.pageCountSummary);