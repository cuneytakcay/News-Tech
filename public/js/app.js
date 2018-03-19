$('#scraper').on('click', () => {
	// Ajax call when scraper button is hit to start scraping
	// and grabing the json results from /scrape api to display
	$.getJSON('/scrape', (data) => {
		for (var i = 0; i < data.length; i++) {
			$('#article-container')
				.append(`
					<div>
						<a href='${data[i].link}'>
							${data[i].title}
						</a>
						<button id="save-btn" class="btn btn-sm btn-primary float-right">Save article</button>
					</div>
				`)	
		}
	})
})







