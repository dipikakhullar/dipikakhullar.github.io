$(document).ready(function() {

	setTimeout(function() {
		$('.text-animation').removeClass('hidden');
	}, 500);

	let last_clicked = "home";
	let curr = " ";
	$(".navbar-item").click(function() {
		curr = $(this).attr("id");
		if (curr == "home") {
			$("#" + last_clicked).removeClass("active");
			$("#" + last_clicked).addClass("inactive");
			last_clicked = $(this).attr("id");
			$(this).addClass("active");
			$("body, html").animate({
				scrollTop: 0
			}, 800);
		}
		else if ($(this).hasClass("inactive")){	
			$("#" + last_clicked).removeClass("active");
			$("#" + last_clicked).addClass("inactive");
			last_clicked = $(this).attr("id");
			$(this).addClass("active");
			console.log(last_clicked);

		}
	


     });




});