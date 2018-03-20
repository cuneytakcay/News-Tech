// When the Scrape button is clicked, send an ajax call to start scraping
$('#scraper').on('click', () => {
  $.ajax({
    method: 'GET',
    url: '/scrape'
  }).then((data) => {
      console.log('DONE!');
      // Reload the page to get the updated list
      location.reload()
    }
  )
})

// When save article button is clicked, that article is saved in collection
$(document).on('click', '.save-btn', function() {
	// Save the title of the selected article
	const title = $(this).attr('data-title')
	const link = $(this).attr('data-link')

	console.log(title)
	console.log(link)

	// Ajax call for the article
	$.ajax({
		method: 'POST',
		url: '/articles',
		data: { title: title, link: link }
	}).then((data) => {
		console.log('Article was saved in the collection!')
	}) 
})







