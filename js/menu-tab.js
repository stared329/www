//문서 준비 이벤트 웹브라우저가 html 렌더링을 완료했을 때 함수를 실행한다.
$(document).ready(function() {
  var menu = $('.main-menu > li');
  var subMenu = $('.sub-menu');
  var lastSub = $('.sub-menu li:last-child a'); //.마지막 li요소
  //main-menu 하위의 span 요소가 hover 됐을 때 
  menu.hover(function() {
    $(this).find('.sub-menu').toggleClass('menu-act');
  });
  menu.focusin(function() { //cf.focus
    $(this).find('.sub-menu').addClass('menu-act');
  });
  lastSub.focusout(function() {
    $(this).parents('.sub-menu').removeClass('menu-act');
  });

  //   $(menu).hover(function() {
  //     //this(=span)의 형제 중 sub-menu 클래스를 선택하면 menu-act 클래스를 토글시킨다.
  //     $(this).siblings('.sub-menu').toggleClass('menu-act');
  //   });
});