// Require dependencies 
const express = require( 'express' )
const router = express.Router()

// Require models
const db = require('../models')

// POST route
router.post('/', (req, res, next) => {
  const article = {
    title: req.body.title,
    link: req.body.link
  }
	// Save article into mongoDB collection
  db.Collection.create(article)
    .then(dbCollection => {
      console.log(dbCollection)
    })
    .catch(err => {
      // If an error occurred, send it to the client
      res.json(err)
    })
    res.send('Collection created')
})

// GET route to find all saved articles in the collections
router.get('/', (req, res, next) => {
  // Grab articles from collections
  db.Collection.find({})
    .then(dbCollection => {
      // Send collections data to be rendered
      res.render('home', { articles: dbCollection, saved: true })
    })
    .catch(err => {
      // If an error occurred, send it to the client
      res.json(err)
    })
})

// Export router
module.exports = router
