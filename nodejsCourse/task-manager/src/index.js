const express = require("express")
require('./db/mongoose')
const userRouter = require('./routers/users')
const taskRouter = require('./routers/tasks')
const jwt = require('jsonwebtoken')


const app = express()
const port = process.env.PORT || 3000

// app.use((req, res, next) => {
//     res.status(503).send("Server under repairs, please wait!")
// })

app.use(express.json())
app.use(userRouter)
app.use(taskRouter)


const myFunction = async () => {
    const token = jwt.sign({_id:"123"}, 'This is my new course', {expiresIn:"5 minutes"})
    console.log(token)

}
// myFunction()


app.listen(port, () => {
    console.log("Server is up on port" + port)
})