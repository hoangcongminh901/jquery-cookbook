$(function(){
  $('#slide').click(function(){
    $('.slideMe').slideToggle(1000, function(){
      $('.output').append("<li>Slide effect completed.</li>");
    });
  });
  $('#stop').click(function(){
    $('.slideMe').stop();
  });
  $('#finish').click(function(){
    $('.slideMe').finish();
  });
});
