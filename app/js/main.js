$(document).ready(function() {
	
	console.log("js works");
	console.log($);
	
	// Переделать эту функцию после того, как будет реализован функционал регистрации.
	var openCloseAuthPopup = function() {
		$(".lock_box").click(function() {
			$(this).toggleClass("lock_box_active");
			if ($(".authorize_popup").hasClass("hidden")) {
				$(".authorize_popup").removeClass("hidden");
				$(".authorize_window").removeClass("hidden");
				$(".s_header").addClass("unvisible");
				$(".page_wrap").addClass("unvisible");
				$(".footer").addClass("unvisible");
			} else {
				$(".authorize_popup").addClass("hidden");
				$(".authorize_window").addClass("hidden");
				$(".s_header").removeClass("unvisible");
				$(".page_wrap").removeClass("unvisible");
				$(".footer").removeClass("unvisible");
			}
		});

		$(".authorize_window_close_x").click(function() {
			$(".lock_box").removeClass("lock_box_active");
			$(".authorize_popup").addClass("hidden");
			$(".authorize_window").addClass("hidden");
			$(".s_header").removeClass("unvisible");
			$(".page_wrap").removeClass("unvisible");
			$(".footer").removeClass("unvisible");
		});
	}

	openCloseAuthPopup();

});