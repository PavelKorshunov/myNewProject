var myHiddenForm = {
	call: function() {
		myHiddenForm.pressBlock();
		myHiddenForm.pressHtml();
	},
	pressBlock: function() {
		$(".sing_in").click(function(event) {
			$(".auth_click").toggleClass("auth_click_hide");
			event.stopPropagation();
		});
	},
	pressHtml: function() {
		$("html").click(function() {
			$(".auth_click").addClass("auth_click_hide");
		});
		$(".auth_click").click(function(event) {
			event.stopPropagation();
		});
	}
};
$(document).ready(myHiddenForm.call);

//Функция для скрытия входа при ширине экрана <= 1023
// var myBody = document.documentElement;
// function size () {
// 	if(myBody.clientWidth <= 1006) {
// 		$(".auth_click").addClass("auth_click_hide");
// 	}
// }

// setInterval (size, 1000);