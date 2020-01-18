const todos = [{
	text: 'Order cat food',
	completed: true
}, {
	text: 'Clean kitchen',
	completed: false
}, {
	text: 'Buy food',
	completed: true
}, {
	text: 'Do work',
	completed: false
}, {
	text: 'Exercise',
	completed: true
}]

const deleteTodo = function (todos, todoText) {
	const index = todos.findIndex(function (todo) {
		return todo.text.toLowerCase() === todoText.toLowerCase()
	})

	if (index > -1){
		todos.splice(index, 1)
	}
}

deleteTodo(todos, 'buy food')
console.log(todos);



const getThingsToDo = function (todos) {
	return todos.filter(function (todo) {
		return todo.completed === false
	})
	
}

console.log(getThingsToDo(todos))


const completedSort = function (todos) {
	todos.sort(function (a,b) {
		if (!a.completed && b.completed) {
			return -1
		} else if (!b.completed && a.completed) {
			return 1
		} else {
			return 0
		}
	})
}