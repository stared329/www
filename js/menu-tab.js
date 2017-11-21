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

    var boardtab = $('.board h2');
    boardtab.on('click focusin', function() {
      // $(this).parents().find('.board-act').removeClass('board-act');
      $(this).parent().addClass('board-act').siblings().removeClass('board-act');
    });
  }
);