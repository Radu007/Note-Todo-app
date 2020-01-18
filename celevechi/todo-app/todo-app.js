let todos = []

const filters = {
		searchText: '',
		hideCompleted: false
}


const todosJSON = localStorage.getItem('todos')

if (todosJSON !== null) {
	todos = JSON.parse(todosJSON)
}


const renderTodos = function (todos, filters) {
    let filteredTodos = todos.filter(function (todo) {
        return todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
    })

		filteredTodos =filteredTodos.filter(function (todo) {
			if(filters.hideCompleted) {
				return !todo.completed
			} else {
				return true
			}
		})

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''

    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
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

document.querySelector('#form_id').addEventListener('submit',function (e) {
	e.preventDefault()
	console.log(e.target.elements.secondName.value)
	todos.push({
		text: e.target.elements.secondName.value,
		completed: false
	})

	localStorage.setItem('todos',JSON.stringify(todos))
	renderTodos(todos, filters)
	e.target.elements.secondName.value =""
})

document.querySelector('#hide-completed').addEventListener('change', function (e) {
	filters.hideCompleted = e.target.checked
	renderTodos(todos, filters)
})