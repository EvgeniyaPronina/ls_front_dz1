$(document).ready(function() {
	console.log("js works");
	console.log($);
	$(".lock_box").click(function(){
		$(this).toggleClass("lock_box_active");
	});
});