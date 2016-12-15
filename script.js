$(document).ready(function() {
	$('img').on('click', function() {
		var image_title = $(this).attr('alt');

		document.getElementById("modalTitle").innerHTML = image_title;

		var formData = {
		method: 'getQuote',
		format: 'json',
		lang: 'en',
		};

		$.ajax({
			type: 'POST',
			url: 'http://api.forismatic.com/api/1.0/',
			data: formData, 
			
			success: function(newData) {
				document.getElementById("modalBody").innerHTML = newData["quoteText"];
				document.getElementById("author").innerHTML = newData["quoteAuthor"];
				var twitterLink = "https://twitter.com/intent/tweet?text=" + '"' + newData["quoteText"] + '"' + " --" + newData["quoteAuthor"];
				$(".twitter-share-button").attr("href", twitterLink);

			},
			error: function() {
				alert("something went wrong...!")
			}
		});

		$('#modalTitle').attr('alt', image_title);
		$('#myModal').modal('show');
		
	});	

});