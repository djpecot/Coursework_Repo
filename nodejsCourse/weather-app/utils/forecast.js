const request = require('request')

const forecast = (lat, long, callback) => {
    const ws_url = 'http://api.weatherstack.com/current?access_key=dd96cb9106ccf0559bfd9da3f3aa93bf&query=' + lat + ',' + long

    request({url:ws_url, json: true }, (error, response) => {
        if (error){
            callback('Unable to connect to weather service')
        } else if (!response.body.location.utc_offset) {
            callback('Unable to find location, check what you are searching')
        } else {
            callback(undefined, 'Temp = ' + response.body.current.temperature)
                // temp : response.body.current.temperature,
                // feelslike : response.body.current.feelslike
        }
    })
}


module.exports = forecast