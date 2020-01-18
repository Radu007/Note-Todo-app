const notes = [{
	title: 'My next trip',
	body: 'Id like to go to Spain'
}, {
	title: 'Habbits to work on',
	body: 'Exercise. Eating a bit better'
}, {
	title: 'Office modification',
	body: 'Get a new seat'
}];


const filters = {
	searchText: ''
}

const renderNotes = function (notes, filters) {
 	const filteredNotes = notes.filter(function (note) {
 		return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
})

	document.querySelector('#n').innerHTML = ''


	filteredNotes.forEach(function (note) {
		const noteEl = document.createElement('p')
		noteEl.textContent = note.title
		document.querySelector('#n').appendChild(noteEl)
	})
}

renderNotes(notes, filters)


document.querySelector('.create').addEventListener('click', function (e) {
	e.target.textContent = 'The button was clicked'
})


// document.querySelector('.remove').addEventListener('click', function () {
// 	document.querySelectorAll('.note').forEach(function (note) {
// 		note.remove()
// 	})
// })


document.querySelector('#search').addEventListener('input',function (e) {
	filters.searchText = e.target.value
	renderNotes(notes, filters)
})



document.querySelector('#for_fun').addEventListener('change', function (e) {
	console.log(e.target.checked)
})


// document.querySelector('#name_form').addEventListener('submit', function (e) {
// 	e.preventDefault();	
// 	console.log(e.target.elements.firstName.value)
// 	e.target.elements.firstName.value = '';
// })




// const par = document.querySelectorAll('p')

// par.forEach(function (params) {
// 	params.textContent = '********'
// 	// console.log(params.textContent)
// 	// params.remove()
// })	

// //Add a new element
// const newParagraph = document.createElement('p')
// newParagraph.textContent = 'This ia a new element from JavaScript'
// document.querySelector('body').appendChild(newParagraph)