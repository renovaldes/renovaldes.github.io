$(function(){
   $('#butt').on('click', function(){
      $.getJSON("http://quotesondesign.com/wp-json/posts?filter[orderby]=rand&filter[posts_per_page]=1&callback=", function(a) {
         $("#quote").html(a[0].content);
      });
   });
  
});
