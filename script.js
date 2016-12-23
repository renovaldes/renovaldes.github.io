$(function(){
   var url = api.forismatic.com/api/1.0/;
   
   var request = 'method=getQuote&format=json&lang=en';
	ajax(url, request, function(data){
   
      $('#quote').html(data);
   
   });
  
});
