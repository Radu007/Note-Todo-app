

// Fetch existing todos from localStorage
const getSavedTodos = function () {
    const todosJSON = localStorage.getItem('todos')

    if (todosJSON !== null) {
        return JSON.parse(todosJSON)
    } else {
        return []
    }
}

// Save todos to localStorage
const saveTodos = function (todos) {
    localStorage.setItem('todos', JSON.stringify(todos))
}


//Remove Note
const removeTodo = function (id) {
	const todoIndex = todos.findIndex(function (todo) {
		return todo.id === id
	})
	if (todoIndex > -1) {
		todos.splice(todoIndex, 1)
	}
}


//Toggle the completed value for a given todo
	const toggleTodo = function (id) {
		const todo = todos.find(function (todo) {
			return todo.id === id
		})

		if (todo !== undefined) {
			todo.completed = !todo.completed
		}
	}


// Render application todos based on filters
const renderTodos = function (todos, filters) {
    const filteredTodos = todos.filter(function (todo) {
        const searchTextMatch = todo.text.toLowerCase().includes(filters.searchText.toLowerCase())
        const hideCompletedMatch = !filters.hideCompleted || !todo.completed

        return searchTextMatch && hideCompletedMatch
    })

    const incompleteTodos = filteredTodos.filter(function (todo) {
        return !todo.completed
    })

    document.querySelector('#todos').innerHTML = ''
    document.querySelector('#todos').appendChild(generateSummaryDOM(incompleteTodos))

    filteredTodos.forEach(function (todo) {
        document.querySelector('#todos').appendChild(generateTodoDOM(todo))
    })
}

// Get the DOM elements for an individual note
const generateTodoDOM = function (todo) {
		const divEl = document.createElement('div')
		const checkbox = document.createElement('input')
		const todoText = document.createElement('span')
		const rmbtn = document.createElement('button')

		//Set the attribute type="checkbox" to input element
		checkbox.setAttribute('type','checkbox')
		checkbox.checked = todo.completed
		divEl.appendChild(checkbox)
		checkbox.addEventListener('change', function () {
			toggleTodo(todo.id)
			saveTodos(todos)
			removeTodo(todos, filters)
})

		rmbtn.addEventListener('click',function () {
			removeTodo(todo.id)
			saveTodos(todos)
			renderTodos(todos, filters)
		})

		//setup the todo text
		todoText.textContent = todo.text
		divEl.appendChild(todoText)

		//setup the rm btn
		rmbtn.textContent = 'x'
		divEl.appendChild(rmbtn)
    return divEl
}

// Get the DOM elements for list summary
const generateSummaryDOM = function (incompleteTodos) {
    const summary = document.createElement('h2')
    summary.textContent = `You have ${incompleteTodos.length} todos left`
    return summary
}