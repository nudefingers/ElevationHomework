// import moment from "moment"

// let timeNow = new Date()
// console.log(timeNow)

// let formattedTimeNow = moment().format("MMMM Do, YYYY")
// console.log(formattedTimeNow)

// const urllib = require('urllib')
import { request } from 'urllib'

request('http://data.nba.net/10s/prod/v1/2016/players.json', function(err, response){
    console.log(response.toString())
})