require('../src/db/mongoose')
const Task = require('../src/models/task')

// 5f0ade939139044214d3e74e

// Task.findByIdAndUpdate('5f0ade939139044214d3e74e', {completed: true}).then((task) => {
//     console.log(task)
//     return Task.countDocuments({completed: false})
// }).then((result) => {
//     console.log(result)
// }).catch((e) => {
//     console.log(e)
// })

const DeleteAndCount = async (id, completed) => {
    await Task.findByIdAndDelete(id) // don't need access to this, so no need to set const
    const count = await Task.countDocuments({completed})
    // const updatedTask = await Task.findById(id)
    // console.log(count)
    return count

}

DeleteAndCount('5f0ade939139044214d3e74e', true).then((count) => {
    console.log(count)
}).catch((e) => {
    console.log(e)
})