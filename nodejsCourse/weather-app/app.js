// Use npm init -y to answer yes to all defaults

const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

const search_name = process.argv[2]

// Setup if statement for exceptions
if (!search_name){
    return console.log('Please type a location')
}

// Run Geocode
geocode(search_name, (error, {lat, long, name}= {}) => {
    if (error) {
        return console.log('Unexpected error')
    } else {
        forecast(lat, long, (error, {temp, feelslike} = {}) => {
            if (error){
                return console.log('Unexpected error')
            } else {
                console.log('Location is ' + name)
                console.log('Temperature is ' + temp + ' but feels like ' + feelslike)
            }
        })
    }
})

