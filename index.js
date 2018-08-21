const request = require('request')
const argv = require('yargs').argv

const apiKey = '334d554304b8b910b675982a0571f27b'
let city = argv.c || 'auckland' // yarn select (choose city), default is yarn start which is weather for Auckland
let units = 'metric'
const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=${units}`

request(url, (err, response, body) => {
  if (err) {
    // eslint-disable-next-line no-console
    console.log('error:', error)
  } else {
    let weather = JSON.parse(body)
    let response = (`It's currently ${weather.main.temp} degrees in ${weather.name} \nTodays High: ${weather.main.temp_max} \nTodays Low: ${weather.main.temp_min}`)
    // eslint-disable-next-line no-console
    console.log(response)
  }
})
