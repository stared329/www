$(document).ready(
  function() {
    var menu = $('.main-menu > li');
    menu.hover(function() {
      $(this).find('.sub-menu').toggleClass('menu-act');
    });
    menu.focusin('focusin', function() {
      $(this).siblings().find('.sub-menu').removeClass('menu-act');
      $(this).find('.sub-menu').addClass('menu-act');
    });

  }
);