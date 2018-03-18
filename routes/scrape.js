// Require dependencies 
const express = require( 'express' )
const router = express.Router()
const cheerio = require( 'cheerio' )
const request = require( 'request' )

// Require models
const db = require('../models')

// GET route to scrape The Verge - Tech website
router.get('/', ( req, res, next ) => {
	const url = 'https://www.theverge.com/tech'

	request(url, (err, response, html) => {
		if ( err ) throw err
		
		const $ = cheerio.load(html)

		$('.c-entry-box--compact__title').each((i, element) => {
			// Save empty object for scrape results
			let results = {}

			// Get title and link of the article and store in the results object
			results.title = $(element).children('a').text()
			results.link = $(element).children('a').attr('href')

			// Create a new Article by using the results object.
			db.Article.create(results)
				.then((dbArticle) => {
					console.log(dbArticle)
				})
				.catch((err) => {
					return res.json(err)
				})
		})

		// Send a message to the client
		res.send('Scrape completed!')
	})
})

module.exports = router