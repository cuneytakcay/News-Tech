$('#scraper').on('click', () => {
  $.ajax({
    method: 'GET',
    url: '/scrape'
  }).then(() => {
      console.log('DONE!');
      // Reload the page to get the updated list
      location.reload()
    }
  )
})







