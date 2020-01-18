const todos = [{
	text: 'Order cat food',
	completed: false
}, {
	text: 'Cleam kitchen',
	completed: true
}, {
	text: 'Buy food',
	completed: false
}, {
	text: 'Do work',
	completed: true
}, {
	text: 'Exercise',
	completed: false
}]

const filters = {
	searchText: '',
	hideCompleted: false
}

const renderTodos = function (todos, filters) {
	let filteredTodos = todos.filter(function (todo) {
		return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
	})

	filteredTodos = filteredTodos.filter(function (todo) {
		return !filters.hideCompleted || !todo.completed
		// if (filters.hideCompleted) {
		// 	return !todo.completed;
		// } else {
		// 	return true
		// }
	})

		const incompeteTodos = filteredTodos.filter(function (todo) {
			return !todo.completed
		})

		document.querySelector('#todos').innerHTML = ''

		const summary = document.createElement('h2')
		summary.textContent = `You have ${incompeteTodos.length} todos left`

		document.querySelector('#todos').appendChild(summary)

		filteredTodos.forEach(function (todo) {
			const p = document.createElement('p')
			p.textContent = todo.text
			document.querySelector('#todos').appendChild(p)
})

}

renderTodos(todos, filters)


document.querySelector('#search-text').addEventListener('input', function (e) {
	filters.searchText = e.target.value
	renderTodos(todos, filters)
})


document.querySelector('#checkbox').addEventListener('change',function (e) {
	filters.hideCompleted = e.target.checked
	renderTodos(todos, filters)
})






// let ph = document.querySelectorAll('p');

// ph.forEach(function (paragraph) {
// 	if(paragraph.textContent.includes('the')) {
// 		paragraph.remove()
// 	}
// })


//you have 2 todos left( p element)
//Add a p for each todo above (use text value)
