function func1() {
	console.log(window);
	console.log("innerHeight " + window.innerHeight);
	console.log("innerWidth " + window.innerWidth);
	console.log("outerHeight " + window.outerHeight);
	console.log("outerWidth " + window.outerWidth);
}

window.onload = func1;

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

		$(".lock_text").click(function() {
			$(".lock_box").toggleClass("lock_box_active");
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
	};

	var addProjectPopup = function() {
		$(".add_project_box").click(function() {
			$(".project_popup").removeClass("hidden");
			$(".project_window").removeClass("hidden");
		});
		$(".project_window_close_x").click(function() {
			$(".project_popup").addClass("hidden");
			$(".project_window").addClass("hidden");
		});
	};

	var addProject = function() {
		$(".add_project_button_input").click(function() {
			$(".project_window").addClass("hidden");
			$(".sucsess_window").removeClass("hidden");
		});
	};

	var closeSucsessWindow = function() {
		$(".sucsess_window_close_x").click(function() {
			$(".project_popup").addClass("hidden");
			$(".project_window").addClass("hidden");
			$(".sucsess_window").addClass("hidden");
		});
	};

	var openCloseMenu = function() {
		$(".menu_button").click(function() {
			$(".triangel_arrow").toggleClass("hidden");
			$(".s_nav_in_header").toggleClass("hidden");
		});
	};

	openCloseMenu();

	closeSucsessWindow();

	addProject();

	addProjectPopup();

	openCloseAuthPopup();

});