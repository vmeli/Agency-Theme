$(document).ready(function(){
 
  $(window).scroll(function(){
    if( $(this).scrollTop() > 500 ){
      $('.navegador').addClass('navegador2');
    } else {
      $('.navegador').removeClass('navegador2');
    }
  });
 
});