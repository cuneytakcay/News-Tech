// Require dependencies 
const express = require( 'express' )
const router = express.Router()
const cheerio = require( 'cheerio' )
const request = require( 'request' )

// GET route to scrape The Verge - Tech website
router.get('/', ( req, res, next ) => {
	const url = 'https://www.theverge.com/tech'
	let results = []

	request(url, (err, response, html) => {
		if ( err ) throw err
		
		const $ = cheerio.load(html)

		$('.c-entry-box--compact__title').each((i, element) => {
			const title = $(element).children('a').text()
			const link = $(element).children('a').attr('href')

			results.push({
				title: title,
				link: link
			})	
		})
		
		res.json(results)
	})
})

module.exports = router