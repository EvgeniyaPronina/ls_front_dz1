$(document).ready(function() {
	
	console.log("js works");
	if($) {
		console.log("jQuery works");
	};
	
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
		$(".add_project_button_input").on("submit", function() {
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

	$("#contacts_form").validate({
		messages: {
			contacts_form_name: "Введите имя",
			contacts_form_email: {
				required: "Введите e-mail",
				email: "Не верный e-mail"
			},
			contacts_form_message: "Введите сообщение",
			contacts_form_capcha: "Введите код"
		}
		
	});

	var clearForm = function() {
		$(".clear_button").on("click", function() {
			$("#contacts_form_name").removeClass("error");
			$("#contacts_form_name").removeClass("valid");
			$("#contacts_form_name-error").remove();
			$("#contacts_form_email").removeClass("error");
			$("#contacts_form_email").removeClass("valid");
			$("#contacts_form_email-error").remove();
			$("#contacts_form_message").removeClass("error");
			$("#contacts_form_message").removeClass("valid");
			$("#contacts_form_message-error").remove();
			$("#contacts_form_capcha").removeClass("error");
			$("#contacts_form_capcha").removeClass("valid");
			$("#contacts_form_capcha-error").remove();
		});
	};
	
	clearForm();

	$("#portfolio_form").validate({
		messages: {
			portfolio_form_name: "Введите название",
			portfolio_form_url: "Введите ссылку",
			portfolio_form_descr: "Введите описание",
			
		},
		invalidHandler: function(event, validator) {
		// 'this' refers to the form
			var errors = validator.numberOfInvalids();
			if (errors) {
				$(".add_proj_error").show();
			} else {
				$(".add_proj_error").hide();
			}
		}
	});

});