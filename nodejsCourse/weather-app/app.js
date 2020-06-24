// Use npm init -y to answer yes to all defaults

const geocode = require('./utils/geocode.js')
const forecast = require('./utils/forecast.js')

// Run Geocode
// geocode('Taipei', (error, location) => {
//     const lat = location[0]
//     const long
// })

//
// Goal: Create a reusable function for getting the forecast
//
// 1. Setup the "forecast" function in utils/forecast.js
// 2. Require the function in app.js and call it as shown below
// 3. The forecast function should have three potential calls to callback:
//    - Low level error, pass string for error
//    - Coordinate error, pass string for error
//    - Success, pass forecast string for data (same format as from before)

forecast(-75.7088, 44.1545, (error, data) => {
    console.log('Error', error)
    console.log('Data', data)
})