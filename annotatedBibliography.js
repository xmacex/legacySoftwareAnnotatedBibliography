var dataUrl = "https://docs.google.com/spreadsheets/d/1bvX5CnE1MGEeu5Rch9IaL8-gI6YXtrh6gzA__N7X3hY/pub?output=csv";
var data;

d3.csv(dataUrl,
	// accessor
	function(d) {
		return {
			id: d["ID"],
			what: d["What is this item?"],
			who: d["Who made this?"],
			when: d["When was this made?"],
			why: d["For what purpose?"],
			reception: d["What reception has this got?"],
			relevance: d["What relevance for legacy software scholarship?"]
		}
	},
	// callback
	function(error, csv) {
		if(error) {
			throw error;
		}
		data = csv;
		console.log(data);

		baItemList = d3.select("div#content")
		baItemList.selectAll("div.abItem")
			.data(data)
			.enter()
			.append("div")
			.attr("class", "abItem")
			.html(function(d) {
				return "<H2>" + d.what + "<span class='id'>" + d.id + "</span>" + "</h2>"
				+ "Who: " + "<em>" + d.who + "</em>" + ", " + d.when + "<br>"
				+ "Why: " + d.why + "<br><br>"
				+ "Relevance here: " + d.relevance + ". "
				+ d.reception
		})
	});
