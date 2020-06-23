// Use npm init -y to answer yes to all defaults

const request = require('request')

const url = 'http://api.weatherstack.com/current?access_key=dd96cb9106ccf0559bfd9da3f3aa93bf&query=25.0330,121.5654&units=f'
request({url:url, json: true }, (error, response) => {
    // console.log(response.body.current)
    const real = response.body.current.temperature
    const feel = response.body.current.feelslike
    console.log(`It is currently ${real} degrees outside, but feels like ${feel}`)
})