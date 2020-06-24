const request = require('request')

// Setup mapbox API stuff
const mb_apikey = 'pk.eyJ1IjoiZGpwZWNvdCIsImEiOiJja2JyaHQzMmcwN2RyMnBxeHRoaXhnOTAxIn0.yqBtpGgrye1L-K6RKAIRag'

const geocode = (address, callback) => {

    const mb_url  = 'https://api.mapbox.com/geocoding/v5/mapbox.places/' + encodeURIComponent(address) + '.json?access_token=' + mb_apikey + '&limit=1'
    request({url:mb_url, json: true }, (error, response) => {
        if (error){
            callback('Unable to connect to weather service')
            
        } else if (response.body.features === 0) {
            callback('Unable to find location, check what you are searching')

        } else {
            callback(undefined, {
                lat : response.body.features[0].center[1],
                long : response.body.features[0].center[0],
                name : response.body.features[0].place_name
            })
        }
    })
}

module.exports = geocode