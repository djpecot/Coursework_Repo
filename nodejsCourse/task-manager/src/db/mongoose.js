const mongoose = require('mongoose')

mongoose.connect('mongodb://127.0.0.1:27017/task-manager-api', {
    useNewUrlParser:true,
    useCreateIndex:true,
    useUnifiedTopology: true
})

// const Task = mongoose.model('Task', {
//     name: {
//         type: String,
//         required: true
//     }, 
//     description: {
//         type: String,
//         trim: true,
//         required: true

//     },
//     completed: {
//         type: Boolean,
//         default: false,
//         required: false
//     }
// })

// const task = new Task({
//     name: "PLay with dragon", 
//     description: "Watch out for his claws"
// })

// task.save().then(() => {
//     console.log(task)
// }).catch((error) => {
//     console.log('Error', error)
// })