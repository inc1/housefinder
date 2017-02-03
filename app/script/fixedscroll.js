// JavaScript Document

$(document).ready(function(){
	
	$(window).scroll(function(){
		
		console.log($(window).scrollTop())
		if($(window).scrollTop() > 20) {
			$('.nav').addClass('nav-fixed');
		}
		if($(window).scrollTop() < 20){
			$('.nav').removeClass('nav-fixed');
		}
	});
});