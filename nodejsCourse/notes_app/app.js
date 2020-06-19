// If having errors not finding packages, run 'npm install' in the terminal in this project folder

// check docs for how to call pacakges
const yargs = require('yargs')
// When pulling from another .js, need to specificy a constant to "store" those values
const noteutils = require('./notes.js')


// Customize yarg with add,remove,read,list commands
yargs.command({
    command: 'add',
    describe: 'adds a new note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        },
        body: {
            describe: 'Note Body',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteutils.addNote(argv.title, argv.body)
        console.log("Title: " + argv.body)
    }
})

yargs.command({
    command: 'remove',
    describe: 'removes a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteutils.removeNote(argv.title)
        console.log('Removing note!')
    }
})

yargs.command({
    command: 'list',
    describe:'List all the notes',
    handler() {
        console.log(noteutils.confirm('Your notes below:'))
        noteutils.listNotes()
    }
})

yargs.command({
    command: 'read',
    describe: 'read a note',
    builder: {
        title: {
            describe: 'Note Title',
            demandOption: true,
            type: 'string'
        }
    },
    handler(argv) {
        noteutils.readNote(argv.title)
    }
})

// // print input from console
// console.log(argv)
console.log(yargs.argv)

const command = process.argv[process.argv.length -1]

// if (command === 'add') {
//     console.log('adding note :)')
// } else if (command === 'remove') {
//     console.log('removing note :(')
// }
