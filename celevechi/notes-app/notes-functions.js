//Read existing notes from localScope
const getSavedNotes = function () {
    const notesJSON = localStorage.getItem('notes')

    if (notesJSON !== null) {
        return JSON.parse(notesJSON)
    } else {
        return []
    }
}

// Generate the DOM structure for a note
const generateNoteDOM = function () {
		const noteEl = document.createElement('p')

// 		if (note.title.length > 0) {
// 			noteEl.textContent = note.title
// 		} else {
// 			noteEl.textContent = 'Unnamed note'
// 		}

// 		return noteEl
// }

// //Render aplication notes
// const renderNotes = function (notes, filters) {
// 	const filteredNotes = notes.filter(function (note) {
// 		return note.title.toLowerCase().includes(filters.searchText.toLowerCase())
// 	})

// 	document.querySelector('#notes').innerHTML = ''

// 	filteredNotes.forEach(function (note) {
// 		const noteEl = generateNoteDOM()
// 		document.querySelector('#notes').appendChild(noteEl)
// 	})
// }

console.log(filters)
