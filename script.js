$(function(){
	var api = 'http://api.forismatic.com/api/1.0/?method=getQuote&format=jsonp&lang=en&jsonp=?';
	
	$.getJSON(api,function(data){
			$('#quote').html(""+data.quoteText);
			$('#author').html("- "+data.quoteAuthor);
		});
	
	$('#butt').on('click', function(){
		$('#quote').hide();
		$('#author').hide();
		$.getJSON(api,function(data){
			$('#quote').html(""+data.quoteText);
			$('#author').html("- "+data.quoteAuthor);
		});
	});
});
