(function() {
	
	
	$(document).ready(function(){ 
	
	$('.chat-message-counter').css('display','inline');
	    $('.chat').css('display','none');
	 });
	
	
	
	

	$('#live-chat header').on('click', function() {

		$('.chat').slideToggle(300, 'swing');
		$('.chat-message-counter').fadeToggle(300, 'swing');
		
		

	});

	$('.chat-close').on('click', function(e) {

		e.preventDefault();
		$('#live-chat').fadeOut(300);

	});

}) ();