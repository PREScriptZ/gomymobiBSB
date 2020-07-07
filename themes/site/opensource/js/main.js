;(function () {
	
	'use strict';



	// iPad and iPod detection	
	var isiPad = function(){
		return (navigator.platform.indexOf("iPad") != -1);
	};

	var isiPhone = function(){
	    return (
			(navigator.platform.indexOf("iPhone") != -1) || 
			(navigator.platform.indexOf("iPod") != -1)
	    );
	};


	// Go to next section
	var gotToNextSection = function(){
		var el = $('.fh5co-learn-more'),
			w = el.width(),
			divide = -w/2;
		el.css('margin-left', divide);
	};

	// Loading page
	var loaderPage = function() {
		$(".fh5co-loader").fadeOut("slow");
	};



	// Scroll Next
	var ScrollNext = function() {
		$('body').on('click', '.scroll-btn', function(e){
			e.preventDefault();

			if( $(this).hasClass('scroll-to-top') ) {
				$('html, body').animate({
					scrollTop: 0
				}, 1000, 'easeInOutExpo');
				return false;
			}

			$('html, body').animate({
				scrollTop: $( $(this).closest('[data-next="yes"]').next()).offset().top
			}, 1000, 'easeInOutExpo');
			return false;
		});
	};

	

	var styleToggle = function() {

		
		if ( $.cookie('styleCookie') !== undefined ) {
			if ( $.cookie('styleCookie') === 'style-light.css'  ) { 
				
				$('.js-style-toggle').attr('data-style', 'light');
			} else  {
				$('.js-style-toggle').attr('data-style', 'default');
			}
			$('#theme-switch').attr('href', 'css/' + $.cookie('styleCookie'));
		} 


		if ( $.cookie('btnActive') !== undefined ) $('.js-style-toggle').addClass($.cookie('btnActive'));
		



		// $('.js-style-toggle').on('click', function(){
		$('body').on('click','.js-style-toggle',function(event){

			

			var data = $('.js-style-toggle').attr('data-style'), style = '', $this = $(this);

			if ( data === 'default') {

				// switch to light
				style = 'style-light.min.css';
				$this.attr('data-style', 'light');

				// add class active to button
				$.cookie('btnActive', 'active', { expires: 365, path: '/'});
				$this.addClass($.cookie('btnActive'));

				$('.dark-style').css('display', 'none');
				$('.light-style').css('display', 'block');
			} else {
				// switch to dark color
				style = 'style.min.css';
				$this.attr('data-style', 'default');

				// remove class active from button
				$.removeCookie('btnActive', { path: '/' });
				$(this).removeClass('active'); 

				// switch to style
				$.cookie('styleCookie', style, { expires: 365, path: '/'});

				$('.dark-style').css('display', 'block');
				$('.light-style').css('display', 'none');
			}

			// switch to style 
			$.cookie('styleCookie', style, { expires: 365, path: '/'});

			// apply the new style
			$('#theme-switch').attr('href', 'css/' + $.cookie('styleCookie'));
				

			if ( $.cookie('styleCookie') === 'style-light.min.css') {
				$('html, body').css('background', '#eeeeee');
			} else if ($.cookie('styleCookie') === 'style.min.css') {
				$('html, body').css('background', '#222222');
			}
			
			event.preventDefault();

		});
		
	}
	
	// Animations

	var contentWayPoint = function() {
		var i = 0;
		$('.animate-box').waypoint( function( direction ) {

			if( direction === 'down' && !$(this.element).hasClass('animated') ) {
				
				i++;

				$(this.element).addClass('item-animate');
				setTimeout(function(){

					$('body .animate-box.item-animate').each(function(k){
						var el = $(this);
						setTimeout( function () {
							el.addClass('fadeInUp animated');
							el.removeClass('item-animate');
						},  k * 200, 'easeInOutExpo' );
					});
					
				}, 100);
				
			}

		} , { offset: '95%' } );
	};
	

	var moreProjectSlider = function() {
		$('.flexslider').flexslider({
			animation: "slide",
			animationLoop: false,
			itemWidth: 310,
			itemMargin: 20,
			controlNav: false
		});
	}
	

	// Document on load.
	$(function(){
		
		gotToNextSection();
		loaderPage();
		ScrollNext();
		moreProjectSlider();
		styleToggle();
		
		// Animate
		contentWayPoint();

	});


}());

function googleTranslateElementInit() {
    /*HORIZONTAL, VERTICAL, SIMPLE*/
    new google.translate.TranslateElement({pageLanguage: 'en', layout: google.translate.TranslateElement.InlineLayout.SIMPLE, autoDisplay: true, gaTrack: true, gaId: 'UA-2417948-17'}, 'google_translate_element');
}

function click_buy(name, price) {
	if( name!='' ) {
		if( $('#click_buy_form').size()<=0 )
			$('body').append(`<form id="click_buy_form" action="https://www.paypal.com/cgi-bin/webscr" method="post" target="_blank" style="display:none;">
<input type="hidden" name="cmd" value="_xclick">
<input type="hidden" name="business" value="phongsgc@outlook.com">
<input type="hidden" name="lc" value="US">
<input type="hidden" name="item_name" value="">
<input type="hidden" name="amount" value="">
<input type="hidden" name="currency_code" value="USD">
<input type="hidden" name="button_subtype" value="services">
<input type="hidden" name="no_note" value="0">
<input type="hidden" name="tax_rate" value="3.000">
<input type="hidden" name="shipping" value="0.00">
<input type="hidden" name="return" value="https://www.prescriptz.com/terms/">
<input type="hidden" name="cancel_return" value="https://www.prescriptz.com/script/gomymobi-site-builder-platform/">
</form>`);

		$('#click_buy_form').find('[name="item_name"]').val( 'gomymobiBSB License: ' + name );
		$('#click_buy_form').find('[name="amount"]').val( price );
		$('#click_buy_form').trigger('submit');
	}
}

$(document).ready(function() {

	$("body").css("display", "none");

    $("body").fadeIn(2000);
    $("body").stop().animate({
    	opacity: 1
    });

	if ( $.cookie('styleCookie') === 'style-light.min.css') {
		$('html, body').css('background', '#eeeeee');

		$('.dark-style').css('display', 'none');
		$('.light-style').css('display', 'block');
	} else if ($.cookie('styleCookie') === 'style.min.css') {
		$('html, body').css('background', '#222222');

		$('.dark-style').css('display', 'block');
		$('.light-style').css('display', 'none');
	}

	/*$("a.transition").click(function(event){

		event.preventDefault();
		linkLocation = this.href;
		$("body").fadeOut(1000, redirectPage);		

	});*/

	$('.fh5co-project ul li').hover(
		function() {
			$(this).find('i').addClass('animated infinite bounceIn');
		}, function() {
			$(this).find('i').removeClass('animated infinite bounceIn');
		}
	);

	$('.scroll-btn').hover(
		function() {
			$(this).find('i').addClass('animated infinite fadeInDown');
		}, function() {
			$(this).find('i').removeClass('animated infinite fadeInDown');
		}
	);

	$('.price-box').hover(
		function() {
			$(this).find('.price-heading i, .price-heading img').addClass('color-focus animated infinite bounceIn');
		}, function() {
			$(this).find('.price-heading i, .price-heading img').removeClass('color-focus animated infinite bounceIn');
		}
	);

	$(document).on('click', '.click_buy', function(e){
		click_buy($(this).data('name'), $(this).data('price'));
	});

	$('.tooltips').tooltip();
		
	function redirectPage() {
		window.location = linkLocation;
	}
	
});