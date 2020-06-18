// $(function() {
//     //caches a jQuery object containing the header element
//     var header = $(".dark-header");
//     $(window).scroll(function() {
//         var scroll = $(window).scrollTop();

//         if (scroll >= 200) {
//             header.removeClass('dark-header').addClass("lite-header");
//         } else {
//             header.removeClass("lite-header").addClass('dark-header');
//         }
//     });
// });

// scroll

// (function (jQuery) {
//   jQuery.mark = {
//     jump: function (options) {
//       var defaults = {
//         selector: 'a.scroll-on-page-link'
//       };
//       if (typeof options == 'string') defaults.selector = options;
//       var options = jQuery.extend(defaults, options);
//       return jQuery(options.selector).click(function (e) {
//         var jumpobj = jQuery(this);
//         var target = jumpobj.attr('href');
//         var thespeed = 1000;
//         var offset = jQuery(target).offset().top;
//         jQuery('html,body').animate({
//           scrollTop: offset
//         }, thespeed, 'swing')
//         e.preventDefault();
//       })
//     }
//   }
// })(jQuery);


// jQuery(function(){  
//   jQuery.mark.jump();
// });
if ($(window).width() > 550) {

$("a.scroll-on-page-link").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ 
        scrollTop: $(this.hash).offset().top - $('header').outerHeight(true)
    }, 600);
});
}
else
{ 
  $("a.scroll-on-page-link").on('click', function(e) {
    e.preventDefault();
    $('html, body').animate({ 
        scrollTop: $(this.hash).offset().top - $(0).outerHeight(true)
    }, 600);
});
}

// $(window).scroll(function() { alert("Scrolled"); });

// Mobile menu

$(document).ready(function(){
  $('.js-menu-trigger,.js-menu-screen').on('click touchstart',function (e) {
    $('.js-menu,.js-menu-screen').toggleClass('is-visible');
    e.preventDefault();
  });
});