$(document).ready(function(){
			
	$(window).scroll(function(){

		if($(window).scrollTop() > 40)
		{
			$(".top_arrow").fadeIn();
			$(".fix_nav").css("position", "fixed");
			$(".fix_nav").css("top", 0);
			$(".fix_nav").css("z-index", "999");
			$(".fix_nav").css("background-color", "#fff");
			$(".fix_nav").css("box-shadow", "rgb(0 0 0 / 8%) 0px 0.125rem 0.25rem");
			
		}
		else
		{
			$(".top_arrow").fadeOut();
			$(".fix_nav").css("position", "static");
			$(".fix_nav").css("background-color", "transparent");
			$(".fix_nav").css("box-shadow", "none");
			$(".logo2 .fa").css("color", "#000");
		}
	});

	//////////////////////////////////////
	
	$(".top_arrow").click(function(){
		$("body,html").animate({
			"scrollTop":0
		});
	});

	
});
