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

const findNote = function (notes ,noteTitle) {
	const index = notes.findIndex(function (note, index) {
		return note.title.toLowerCase() === noteTitle.toLowerCase()
	})
		return notes[index]
};

// const findNote = function (notes, noteTitle) {
// 	const index = notes.findIndex(function (note, index) {
// 		return note.title.toLowerCase() === noteTitle.toLowerCase()
// 	})
// 	return notes[index]
// }

const note = findNote(notes, 'office modification');
console.log(note);


const filteredNotes = notes.filter(function (note,index) {
	const isTitleMatch = note.title.toLowerCase().includes('office');
	const isBodyMatch = note.title.toLowerCase().includes('offi');
	return isTitleMatch || isBodyMatch
});



