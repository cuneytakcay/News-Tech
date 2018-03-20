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
			// Get title and link of the article and store in the article object
			let article = {
				title: $(element).children('a').text(),
				link: $(element).children('a').attr('href')
			}

			// Store articles in mongoDB 
			db.Article.create(article)
				.then((dbArticle) => {
					console.log(dbArticle)
				})
				.catch((err) => {
					return res.json(err)
				})
		})

		// Send a message to the client after scraping is complete
		res.send('Scraping was completed!')
	})
})

// Export router
module.exports = router