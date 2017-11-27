$(document).ready(function() {

	setTimeout(function() {
		$('.text-animation').removeClass('hidden');
	}, 500);
	// jQuery Function Number #1



	let last_clicked = "home";
	let curr = " ";
	$(".navbar-item").click(function() {
		// jQuery Function Number #2
		curr = $(this).attr("id");
		if (curr == "home") {
			$("#" + last_clicked).removeClass("active");
			$("#" + last_clicked).addClass("inactive"); // jQuery Function Number #3
			last_clicked = $(this).attr("id");
			$(this).addClass("active");
			$("body, html").animate({ 
				scrollTop: 0 // jQuery Function Number #4
			}, 800);
		}
		else if ($(this).hasClass("inactive")){	
			$("#" + last_clicked).removeClass("active");
			$("#" + last_clicked).addClass("inactive");
			last_clicked = $(this).attr("id"); // jQuery Function Number #5
			$(this).addClass("active");
			console.log(last_clicked);

		}
	


     });

	$(".self-photo").css("opacity", 0.7); // jQuery Function Number #6
    $(".self-photo").hover(function() { // jQuery Function Number #7
        $(this).animate({opacity: 1.0}, 500);
    }, function() {
        $(this).animate({opacity: 0.7}, 500);
    });


});