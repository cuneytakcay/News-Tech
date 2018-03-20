// Require dependencies
const express = require('express')
const logger = require('morgan')
const bodyParser = require('body-parser')
const mongoose = require('mongoose')

// Set up Express App
const app = express()

// Handlebars view engine setup
const exphbs = require('express-handlebars')
app.engine('handlebars', exphbs({ defaultLayout: 'main' }))
app.set('view engine', 'handlebars')

// Parse application
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

// Serve static content from public folder 
app.use(express.static('public'))

app.use(logger('dev'))

// Require and use routes modules
const index = require('./routes/index')
const scrape = require('./routes/scrape')
const article = require('./routes/articles')
const note = require('./routes/notes')

app.use('/', index)
app.use('/scrape', scrape)
app.use('/articles', article)
app.use('/notes', note)

// Set mongoose to use promises
mongoose.Promise = Promise;
mongoose.connect('mongodb://localhost/newstech')

// Catch 404 and forward to error handler
app.use((req, res, next) => {
  const err = new Error('Not Found')
  err.status = 404
  next(err)
})

// Error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message
  res.locals.error = req.app.get('env') === 'development' ? err : {}

  // Render the error page
  res.status(err.status || 500)
  res.render('error')
})

module.exports = app
