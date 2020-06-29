const path = require('path')
const express = require('express')
const hbs = require('hbs')


const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')

const app = express()

// setup directory to serve
app.use(express.static(path.join(__dirname, '../public')))

// setup handlebars engine and views location
app.set('view engine', 'hbs')
app.set('views', viewsPath)
hbs.registerPartials(partialsPath)

// Homepage
app.get('', (req, res) =>{
    res.render('index',{
        title: 'Weather app',
        name: 'Dougy Fresh'
    })
})

// about page
app.get('/about', (req, res) =>{
    res.render('about', {
        title: 'Weather app',
        name:'Dougy Fresh'
    })
})

// help page
app.get('/help', (req, res) =>{
    res.render('help', {
        title: 'Weather app',
        designer:'Dougy Fresh'
    })
})

// weather page
app.get('/weather', (req, res) => {
    res.send({
        title: 'Weather app',
        location: 'London',
        temperature: 40
    })
})

// help 404
app.get("/help/*", (req, res) =>{
    res.render('404', {
        errorMessage: 'help article not found',
        title: 'Weather app',
        name: 'Dougy'
    })
})

// Setup 404
app.get('*', (req, res) => {
    res.render('404', {
        errorMessage: '404 not found',
        title: 'Weather app',
        name: 'Dougy'
    })
})

app.listen(3000, () =>{
    console.log('Server is up and running!')
})