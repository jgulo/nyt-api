$(".search").click(function(){
	console.log("clicked")
	var searchTerm = document.getElementById("searchTerm").value;
	var numRecords = document.getElementById("numRecords").value;
	var startYear = document.getElementById("startYear").value;
	var endYear = document.getElementById("endYear").value;

	var url = "https://api.nytimes.com/svc/search/v2/articlesearch.json";
	url += '?' + $.param({
	  'api-key': "fadd530a773c4a3aa7de7ad9c56ba4cd",
	  'q': searchTerm,
	  
	});
	$.ajax({
	  url: url,
	  method: 'GET',
	}).done(function(result) {
		for(i = 0; i<numRecords;i++){
			var articleDiv = $("<div class='article'>");
			var header = result.response.docs[i].snippet;
			var section = result.response.docs[i].section_name;
			var published = result.response.docs[i].pub_date;
			var paragraph = result.response.docs[i].lead_paragraph;

			$(articleDiv).append("<h2>"+header+"</h2>")
			$(articleDiv).append(section)
			$(articleDiv).append("<h5>"+published+"</h5>")
			$(articleDiv).append("<p>"+paragraph+"</p>")
			$(articleDiv).append("<hr>")


			$(".articles").append(articleDiv)

		}
	  console.log(result);
	}).fail(function(err) {
	  throw err;
	});

});

$(".empty").click(function(){
	document.getElementById("mainForm").reset();
});