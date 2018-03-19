// Require dependencies 
const express = require( 'express' )
const router = express.Router()

// Require models
const db = require('../models')

// GET route to bring articles from database to the homepage
router.get('/', (req, res, next) => {
	// Grab all articles from database
  db.Article.find({})
    .then(function(dbArticle) {
      // If successfully find Articles, send them to the homepage
      //res.json(dbArticle);
      res.render('home', { 
      	articles: dbArticle
      })
    })
    .catch(function(err) {
      // If an error occurred, send it to the client
      res.json(err);
    });
})

module.exports = router
