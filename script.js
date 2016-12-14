$(document).ready(function() {
	// $("#inspire").click(function() {
	// 	alert("Inspire Clicked")
	// });

	// $("#management").click(function() {
	// 	alert("Management Clicked")
	// });

	// $("#sports").click(function() {
	// 	alert("Sports Clicked")
	// });

	// $("#life").click(function() {
	// 	alert("Life Clicked")
	// });

	// $("#funny").click(function() {
	// 	alert("Funny Clicked")
	// });

	// $("#love").click(function() {
	// 	alert("Love Clicked")
	// });

	// $("#art").click(function() {
	// 	alert("Art Clicked")
	// });

	// $("#students").click(function() {
	// 	alert("Students Clicked")
	// });

	
	// var modal_title = document.getElementByID('modalTitle');
	// console.log(modal_title);

	$('img').on('click', function() {
		var sr = $(this).attr('src');
		$('#modalBody').attr('src', sr);
		$('#myModal').modal('show');
	});

});