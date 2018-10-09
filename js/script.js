$(document).ready(function() {
				$('.back_to_top').css({"display": "none"});
				var offset = 600;				 
				var duration = 100;
				var scroll_duration = 800;	

				$(window).scroll(function() {
				 
				if ($(this).scrollTop() > offset) {
				 
				$('.back_to_top').fadeIn(duration);
				 
				} else {
				 
				$('.back_to_top').fadeOut(duration);
				 
				}
			 
			});
			$('.back_to_top').click(function(event) {

				event.preventDefault();
				 
				$('html, body').animate({scrollTop: 0}, scroll_duration);
				 
				return false;
				 
				})
			 
			});
			$(document).ready(function($){
				$('.nav_btn').on('click', function(e){
					e.preventDefault();
					if ($('nav').hasClass('shown')) {
						$('nav').removeClass('shown');
						$('nav').addClass('hidden');
						$('nav').slideUp();
					} else {
						$('nav').removeClass('hidden');
						$('nav').addClass('shown');
						$('nav').slideDown();
					}
				});
			});