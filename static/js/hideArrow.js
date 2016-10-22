// JavaScript Document

$(window).scroll(function(){
  if($(this).scrollTop() > 100){
    $('.hideArrow').css({'display': 'none'});
  }
});