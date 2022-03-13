/**
*****************************************
* main.js
*
* JQUERY FILE FOR CUSTOM JS AND ACTIVE JS
*
*****************************************
**/


			$('.slide_area').owlCarousel({
				items: 1,
				loop: true,
				autoplay: true,
				dots: true,
			});


			// Example starter JavaScript for disabling form submissions if there are invalid fields
			(function() {
			  'use strict';
			  window.addEventListener('load', function() {
			    // Fetch all the forms we want to apply custom Bootstrap validation styles to
			    var forms = document.getElementsByClassName('needs-validation');
			    // Loop over them and prevent submission
			    var validation = Array.prototype.filter.call(forms, function(form) {
			      form.addEventListener('submit', function(event) {
			        if (form.checkValidity() === false) {
			          event.preventDefault();
			          event.stopPropagation();
			        }
			        form.classList.add('was-validated');
			      }, false);
			    });
			  }, false);
			})();


			$(document).ready(function() {

			    $(".video-play").magnificPopup({

			      type:'video',

			    });
			});


			$(document).ready(function() {

	      $(".menu_trigger").on('click', function() {
	        $(".off-canvas-menu").addClass("show-off-canvas-menu");
	        $(".off_canvas_menu_shade").addClass("active");
	      });
	      $(".menu_close, .off_canvas_menu_shade").on('click', function() {
	        $(".off-canvas-menu").removeClass("show-off-canvas-menu");
	        $(".off_canvas_menu_shade").removeClass("active");
	      });
	      $(".single_testimonial_section").hover(function(){
	        $(".single_testimonial_section").removeClass("active");
	        $(this).addClass("active");
	      });
	    });

			// Sticky Header
			$(document).ready(function(){
		    $(".header_menu").sticky({topSpacing:0});
		  });
			$(document).ready(function(){
				$('h1').click(function(){
					$('p').hide();
				});
			});
