const fs = require('fs')
const chalk = require('chalk')

// set constants for chalky output
const error = chalk.bold.red.inverse;
const confirm = chalk.bold.green.inverse;
const text = chalk.bold.white.inverse;

// define our functions below
const getNotes = () => console.log(loadNotes())

const readNote = (title) => {
    debugger
    const notes = loadNotes()
    const noteToRead = notes.find((note) => note.title === title)
    if (noteToRead) {
        console.log(text('Note says:'))
        console.log(noteToRead.body)
    } else {
        console.log(error("Note with that title not found!"))
    }
}

const addNote = (title, body) => {
    const notes = loadNotes()
    const duplicateNote = notes.find((note) => note.title === title)

    if (!duplicateNote) {
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

const removeNote = (title) => {
    const notes = loadNotes()
    existingNote = notes.filter((note) => note.title === title)
    if (existingNote.length > 0) {
        const newNotes = notes.filter((note) => note.title !== title)
        saveNotes(newNotes)
        console.log(confirm('Note titled:', title, 'removed!'))
    } else {
        console.log(error("Note doesn't exist!"))
    }
}

const saveNotes = (notes) => fs.writeFileSync('notes.json', JSON.stringify(notes))

const loadNotes = () => {
    try {
        const dataBuffer = fs.readFileSync('notes.json')
        const dataJSON = dataBuffer.toString()
        return JSON.parse(dataJSON)
    } catch (e) {
        return []
    }
}

const listNotes = () => {
    try {
        const currentNotes = loadNotes()
        currentNotes.forEach((note) => console.log(note.title))
    } catch (e) {
        return []
    }
}

module.exports = {
    confirm: confirm,
    readNote: readNote,
    getNotes: getNotes,
    addNote: addNote,
    removeNote: removeNote,
    listNotes: listNotes
} 