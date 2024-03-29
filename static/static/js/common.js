


$('.burger').click(function() {
  $(this)
    .next()
    .slideToggle()
})
$('.hamburger').click(function() {
  $('.hamburger').toggleClass('is-active')
  $('.header_cont_nav').toggleClass('active')
})

$(window).scroll(function() {
  var scroll = $(window).scrollTop()
  if (scroll >= 50) {
    $('.header').addClass('active')
  } else {
    $('.header').removeClass('active')
  }
})

$('.header_cont_nav_list_items').click(function() {
  if (!$(this).hasClass('active')) {
    $('.header_cont_nav_list_items').removeClass('active')
  }
  $(this).toggleClass('active')
})


let frame = $('.video_cont').data("video");
$('.video_cont_play').click(function() {
  $('.video_modal').addClass('active');
  let createIframe = document.createElement("iframe");
  createIframe.setAttribute("frameborder", "0");
  createIframe.setAttribute("allow", "autoplay; fullscreen");
  createIframe.setAttribute("allowfullscreen", "");
  createIframe.setAttribute("src", frame);
  $('.video_modal_cont').append(createIframe);
  console.log('close')
});

 
$('.video_modal_close').click(function() {
  $('.video_modal').removeClass('active');
  $( ".video_modal iframe" ).remove();
});

$('.faq_item_title').toggleClass('inactive-header');
	
	//Set The Accordion Content Width
	var contentwidth = $('.faq_item_title').width();
	$('.faq_item_content').css({'width' : contentwidth });
	
	//Open The First Accordion Section When Page Loads
	$('.faq_item_title').first().toggleClass('active-header').toggleClass('inactive-header');
	$('.faq_item_content').first().slideDown().toggleClass('open-content');
	
	// The Accordion Effect
	$('.faq_item_title').click(function () {
		if($(this).is('.inactive-header')) {
			$('.active-header').toggleClass('active-header').toggleClass('inactive-header').next().slideToggle().toggleClass('open-content');
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
		
		else {
			$(this).toggleClass('active-header').toggleClass('inactive-header');
			$(this).next().slideToggle().toggleClass('open-content');
		}
  }); 
  

   