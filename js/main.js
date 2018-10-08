  (function($){
 
 $(document).ready(function() {



 	$('.js-slider-header').each(function(index, el) {


 		$(this).slick({
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 2000,
  dots:false,
  nextArrow:$(this).parent().find('.next-arrow'),
  prevArrow:$(this).parent().find('.prev-arrow'),
  responsive: [
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 1
      }
    },
    {
      breakpoint: 480,
      settings: {
     
        slidesToShow: 1
      }
    }
  ]
});

 		
 	});

$('.js-slider-normal').each(function(index, el) {


 		$(this).slick({
  slidesToShow: 4,
  slidesToScroll: 1,
  // autoplay: true,
  // autoplaySpeed: 2000,
  dots:false,
  nextArrow:$(this).parent().find('.next-arrow'),
  prevArrow:$(this).parent().find('.prev-arrow'),
  responsive: [
    {
      breakpoint: 968,
      settings: {
        slidesToShow: 3
      }
    },
    {
      breakpoint: 768,
      settings: {
        slidesToShow: 2
      }
    },
    {
      breakpoint: 480,
      settings: {
     
        slidesToShow: 1
      }
    }
  ]
});

 		
 	});

$(document).on('click', '#sidr .js-hamburger', function(event) {
	 $.sidr('close', $.sidr('status').opened);
	
});
$('.js-hamburger').sidr({
      // name: 'sidr-main',
      source: '#menu',
      displace:false,
      renaming:false,
      onOpen:function (){
      	
      	$('.js-hamburger').addClass('is-active');
      },
      onClose:function (){
      	$('.js-hamburger').removeClass('is-active');
      }
    });

// Ensure sidr close on blur.
$(document.body).click(function (e) {
  // If a sidr is open.
  if ($.sidr('status').opened) {
    var isBlur = true;
    // If the event is not coming from within the sidr.
    if ($(e.target).closest('.sidr').length !== 0) {
      isBlur = false;
    }
    // If the event is not coming from within a trigger.
    if ($(e.target).closest('.js-sidr-trigger').length !== 0) {
      isBlur = false;
    }
    // Close sidr is unfocused.
    if (isBlur) {
      $.sidr('close', $.sidr('status').opened);
    }
  }
});


});
      
    })(jQuery);
