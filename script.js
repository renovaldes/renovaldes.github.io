$(function(){
	var api = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
	
	$('#butt').on('click', function(){
		$.getJSON(api).success(function(data){
			$('#quote').html(""+data.quoteText);
			$('#author').html("-"+data.quoteAuthor);
		});
	});
});
