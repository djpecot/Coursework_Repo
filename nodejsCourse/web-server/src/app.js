const express = require('express')

const app = express()

// homepage
app.get('', (req, res) => {
    res.send('<h1>Weather</h1>')
})

// help page
app.get('/help', (req, res) => {
    res.send({
        name:'Douglas Pecot',
        job: 'Freelancer',
        age: 27

    })
})

// about page
app.get('/about', (req, res) => {
    res.send('<h1>About</h1>')
})

// weather page
app.get('/weather', (req, res) => {
    res.send({
        location: 'London',
        temperature: 40
    })
})

app.listen(3000, () =>{
    console.log('Server is up and running!')
})