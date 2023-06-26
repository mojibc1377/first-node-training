// Full Documentation - https://docs.turbo360.co
const vertex = require('vertex360')({ site_id: process.env.TURBO_APP_ID })
const express = require('express')

const app = express() // initialize app


app.use((req,res,next) =>{
  const timestamp = new Date()
  req.timestamp = timestamp.toString()
  next()
})

const config = {
  views: 'views', // Set views directory
  static: 'public', // Set static assets directory
  logging: true,

  /*  To use the Turbo 360 CMS, from the terminal run
      $ turbo extend cms
      then uncomment line 21 below: */

  // db: vertex.nedb()
}

vertex.configureApp(app, config)

// import routes
const index = require('./routes/index')
const api = require('./routes/api') // sample API Routes
const register = require('./routes/register')
// set routes
app.use('/', index)
app.use('/api', api) // sample API Routes
app.use('/register' , register)
module.exports = app
