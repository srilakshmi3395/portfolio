$(document).ready(function(){
	$(".menu-icon").on("click",function(){
		$("nav ul").toggleClass("showing");

	});
	$(window).scroll(function(){
	if($(this).scrollTop()>100){
		
		$('.menu').addClass("sticky");
		$('nav ul').addClass("stickul");
	}
	else{
		
		$('.menu').removeClass("sticky");
		$('nav ul').removeClass("stickul");
	}

})
});

