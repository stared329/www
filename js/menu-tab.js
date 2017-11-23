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

    var related = $('.related-list');
    related.on('focusin', function() {
      $(this).addClass('list-open');
    });
    $('.related-list li:last-child a').on('focusout', function() {
      $(this).parents('.related-list').removeClass('list-open');
    });
    // $('[role="tab"]').on('click focusin', function(e) {
    //   e.preventDefault();
    //   // 클릭한 tab 요소에 aria-selected=true로 지정하고 
    //   // 형제요소중에 자신 tab 이외의 나머지 tab 요소들을 aria-selected=false로 지정한다.
    //   $(this).attr('aria-selected', true).siblings().attr('aria-selected', false);

    //   var selectedId = "#" + $(this).attr('aria-controls');
    //   //자신은 보이게하고 다른 tabpanel은 보이지 않게 지정한다.
    //   $(selectedId).removeClass('unvisual').siblings().addClass('unvisual');
    // });
  }
);