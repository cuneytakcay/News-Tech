// When the Scrape button is clicked, send an ajax call to start scraping
$('#scraper').on('click', () => {
  $.ajax({
    method: 'GET',
    url: '/scrape'
  }).then(data => {
      // Reload the page to get the updated list
      location.assign('/')
      console.log('start scraping button sent ajax call');
    }
  )
})

// When save article button is clicked, that article is saved in collection
$(document).on('click', '.save-btn', function() {
	// Save the title of the selected article
	const title = $(this).attr('data-title')
	const link = $(this).attr('data-link')

	console.log(`Title: ${title}`)
	console.log(`Link: ${link}`)

	// Ajax call for the article
	$.ajax({
		method: 'POST',
		url: '/articles',
		data: { title: title, link: link }
	}).then(data => {
		console.log('Article saved in the collection!')
	}) 
})

// When Saved Articles button is clicked, send an ajax call to bring saved articles
$('#collection').on('click', () => {
	$.ajax({
		method: 'GET',
		url: '/articles'
	}).then(data => {
		// Reload new page to get the saved articles list
    location.assign('/articles')
    console.log('saved articles button sent ajax call')
	})
})







