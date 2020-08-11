const express = require('express')
const router = new express.Router()
const Task = require('../models/task')

router.post('/tasks', async (req, res) => {

    const task = await Task(req.body)

    try {
        task.save()
        res.status(201)
        res.send(task)
    } catch (e) {
        res.status(400)
        res.send(e)
    }
})

router.get('/tasks', async (req, res) => {

    const tasks = await Task.find({})

    try {
        res.send(tasks)
    } catch (e) {
        res.status(500).send()
    }

    // Task.find({}).then((tasks) => {
    //     res.send(tasks)
    // }).catch((e) => {
    //     res.status(500).send()
    // })
})

router.get('/tasks/:name', async (req,res) => {
    const _name = req.params.name

    const task = await Task.findById(_name)

    try {
        if(!task) {
            return Response.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }

    // Task.findById(_name).then((task) => {
    //     if(!task) {
    //         return Response.status(404).send()
    //     }
    //     res.send(task)
    // }).catch((e) => {
    //     res.status(500).send()

    // })

})

router.get('/tasks/:id', async (req,res) => {
    const _id = req.params.id

    const task = await Task.findById(_id)
    
    try {
        if(!task) {
            return Response.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(500).send()
    }

})

router.patch('/tasks/:id', async (req,res) => {

    const updates = Object.keys(req.body)
    const allowedUpdates = ['name','completed', 'description']
    const isValidOperation = updates.every((update) =>  allowedUpdates.includes(update) )

    if(!isValidOperation) {
        return res.status(400).send({error: 'Invalid Updates!'})
    }

    const _id = req.params.id

    try {
        const task = await Task.findById(_id)

        updates.forEach((update) => {
            task[update] =req.body[update]
        })
        await task.save()


        // const task = await Task.findByIdAndUpdate(_id, req.body, {new: true, runValidators: true})
        if(!task){
            return res.status(404).send()
    }
        res.send(task)

    } catch (e) {
        res.status(400).send(e)
    }

})

router.delete('/tasks/:id', async (req, res) => {
    try {
        const task = await Task.findByIdAndDelete(req.params.id)
        if(!task){
            return res.status(404).send()
        }
        res.send(task)
    } catch (e) {
        res.status(400).send(e)
        console.log(e)
    }
})

module.exports = router