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

// When save article button is clicked, that article is saved in database
$('.save-btn').on('click', 'button', () => {
	// Save the id of the button
	const id = $(this).attr('data-id')

	// Ajax call for the article
	$.ajax({
		method: 'GET',
		url: '/articles/' + id
	}).then((data) => {
		console.log('Article was saved!')
	}) 
})







