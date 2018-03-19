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

		let articles = []

		$('.c-entry-box--compact__title').each((i, element) => {
			// Get title and link of the article and store in the article object
			let article = {
				title: $(element).children('a').text(),
				link: $(element).children('a').attr('href')
			}

			articles.push(article)
		})

		// Render articles list to the homepage
		res.render('home', { articles: articles })
	})
})

module.exports = router