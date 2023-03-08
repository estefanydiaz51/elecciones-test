//  import library
const express = require('express')
require('dotenv').config()
const routes = require('./v1/routes')

const { create } = require('express-handlebars')
const hbs = require('hbs')

// create instance 
const app = express()


// create variables



// Validation route

routes(app)

// views 
const expressHbs = create({
  extname: '.hbs',
  defaultLayout: 'main',
  layoutsDir: __dirname + '/views/layout',
  partialsDir: __dirname + '/views/partials'
})

app.engine('.hbs', expressHbs.engine)
app.set('view engine', 'hbs')
app.set('views', __dirname + '/views/pages')

app.listen(process.env.PORT, (req,res) => {
  console.log('server listening on port ' + process.env.PORT)
})