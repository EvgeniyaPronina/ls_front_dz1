$(document).ready(function() {
	
	// Проверка наличия JS, jQuery.
	console.log("js works");
	if($) {
		console.log("jQuery works");
	}
	
	// Переделать эту функцию после того, как будет реализован функционал регистрации.
	// Функция открывает/закрывает окошко авторизации.
	var openCloseAuthPopup = function() {
		$(".lock_box").click(function() { // Нажатие на замочек.
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

		$(".lock_text").click(function() { // Нажатие на текст рядом с замочком.
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

		$(".authorize_window_close_x").click(function() { // Нажатие на закрывающий окошко крестик.
			$(".lock_box").removeClass("lock_box_active");
			$(".authorize_popup").addClass("hidden");
			$(".authorize_window").addClass("hidden");
			$(".s_header").removeClass("unvisible");
			$(".page_wrap").removeClass("unvisible");
			$(".footer").removeClass("unvisible");
		});
	};

	// Функция открывает/закрывает окошко добавления работы портфолио.
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

	// Временная функция, показывает окно с сообщением от успешноб добавлении проекта после сабмита формы.
	var addProject = function() {
		$(".add_project_button_input").on("submit", function() {
			$(".project_window").addClass("hidden");
			$(".sucsess_window").removeClass("hidden");
		});
	};

	// Функция закрытия окна с sucsess-сообщением при нажатии на X. 
	var closeSucsessWindow = function() {
		$(".sucsess_window_close_x").click(function() {
			$(".project_popup").addClass("hidden");
			$(".project_window").addClass("hidden");
			$(".sucsess_window").addClass("hidden");
		});
	};

	// Функция открытия/закрытия меню (для версии с малой шириной окна браузера (адаптив)).
	var openCloseMenu = function() {
		$(".menu_button").click(function() {
			$(".triangel_arrow").toggleClass("hidden");
			$(".s_nav_in_header").toggleClass("hidden");
		});
	};

	// Иниализация функций.
	openCloseMenu();

	closeSucsessWindow();

	addProject();

	addProjectPopup();

	openCloseAuthPopup();

	// Валидация формы обратной связи, плагин http://jqueryvalidation.org/.
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

	// Функция убирает тултипы с сообщениями об ошибках и стили инпутов в статусе "ошибка", "ОК", при нажатии на кнопку "Очистить".
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
	
	// Иниализация функции.
	clearForm();

	// Валидация формы добавления работы в портфолио, плагин http://jqueryvalidation.org/.
	$("#portfolio_form").validate({
		messages: {
			portfolio_form_name: "Введите название",
			portfolio_form_url: "Введите ссылку",
			portfolio_form_descr: "Введите описание",
			
		},
		invalidHandler: function(event, validator) { // Сообщение об ошибке в верхней части формы при наличии ошибок ввода формы.
			var errors = validator.numberOfInvalids();
			if (errors) {
				$(".add_proj_error").show();
			} else {
				$(".add_proj_error").hide();
			}
		}
	});

	// Функция очистки формы добавления работы в портфолио при закрытии формы.
	var clearPortfolioForm = function() {
		$(".project_window_close_x").on("click", function() {
			$("#portfolio_form_name").removeClass("error");
			$("#portfolio_form_name").removeClass("valid");
			$("#portfolio_form_name-error").remove();
			$("#portfolio_form_url").removeClass("error");
			$("#portfolio_form_url").removeClass("valid");
			$("#portfolio_form_url-error").remove();
			$("#portfolio_form_descr").removeClass("error");
			$("#portfolio_form_descr").removeClass("valid");
			$("#portfolio_form_descr-error").remove();
			$(".add_proj_error").attr('style', '');
		});
	};

	clearPortfolioForm();

	// Прослушка события: изменение инпута загрузки файла.
	var setUpListnerFileupload = function (){
		$('#fileupload').on('change', changefileUpload);
	};

	// Функция добавления имени файла в инпут "filename".
	var changefileUpload = function (){
		var 
			input = $(this), // Инпут type="file"
			name = input[0].files[0].name; // Имя загруженного файла
		$('#filename').val(name) // Добавление имени в инпут "filename".
	};

	setUpListnerFileupload();

	changefileUpload();
});