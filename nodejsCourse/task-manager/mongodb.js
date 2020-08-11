

// const mongodb = require('mongodb')
// const MongoClient = mongodb.MongoClient
// const ObjectID = mongodb.ObjectID
// Destructuring practice

const { MongoClient, ObjectID } = require('mongodb')

const connectionURL = 'mongodb://127.0.0.1:27017'
const databaseName = 'task-manager'

MongoClient.connect(connectionURL, {useNewUrlParser: true, useUnifiedTopology: true}, (error, client) => {
    if (error){
        return console.log('Unable to connect to database')
    }
    const db = client.db(databaseName)

    // const deletePromise = db.collection('tasks').deleteOne({
    //     description:'Take out trash'
    // })

    // deletePromise.then((result) => {
    //     if (result.deletedCount >= 1){
    //         console.log('Documents deleted successfully!')
    //     } else {
    //         console.log('Document not deleted!')
    //     }
    // }).catch((error) => {
    //     console.log(error)
    // })

    // const updatePromise = db.collection('tasks').updateMany({
    //     completed: false
    // }, {
    //     $set:{
    //         completed: true
    //     }
    // })

    // updatePromise.then((result) =>{
    //     if (result.modifiedCount > 1){
    //         console.log('Documents modified successfully!')
    //     }
    //     console.log(result)
    // }).catch((error) => {
    //     console.log(error)
    // })

    // db.collection('users').find({ name: 'Doug'}).count((error, output) => {
    //     console.log(output)
    
    // })
    // db.collection('users').find({ _id: -1 }).toArray((error, output) => {
    //     console.log(output)
    // })



    // db.collection('tasks').find({ completed: false }).toArray((error, output) => {
    //     console.log(output)
    // })

    // console.log(db.collection('tasks').find({ completed: false }).toArray())


})


console.log("Connected!")


