const fs = require('fs')
const chalk = require('chalk')

// set constants for chalky output
const error = chalk.bold.red.inverse;
const confirm = chalk.bold.green.inverse;

// define our functions below
const getNotes = () => console.log(loadNotes())

const addNote = function (title, body){
    const notes = loadNotes()
    const duplicateNotes = notes.filter(function(note) {
        return note.title === title
    })

    if (duplicateNotes.length === 0) {
        notes.push({
            title: title,
            body: body
        })
        saveNotes(notes)
        console.log(confirm('New Note successfully added!'))
    } else {
        console.log(error('Note title already taken!'))
    }
}

const removeNote = function(title) {
    const notes = loadNotes()
    existingNote = notes.filter(function(note) {
        return note.title === title
    })
    if (existingNote.length > 0) {
        const newNotes = notes.filter(function(note){
            return note.title !== title
        })
        saveNotes(newNotes)
        console.log(confirm('Note titled:', title, 'removed!'))
    } else {
        console.log(error("Note doesn't exist!"))
    }
}

const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes))

const loadNotes = function() {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

module.exports = {
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote
} 