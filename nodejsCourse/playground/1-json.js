const fs = require('fs')

const infoBuffer = fs.readFileSync('1-json.json')
const infostring = infoBuffer.toString()
const data = JSON.parse(infostring)
data.name = 'Doug'
data.age = 27
data.planet = 'Mars'
console.log(data.name)

const tosave = JSON.stringify(data)
console.log(tosave)

fs.writeFileSync('myinfo.json', tosave)