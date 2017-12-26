$(document).ready(function() {
  $('[role="tab"]').keyup(function(e) {
    var keyCode = e.keyCode || e.which; //키보드 코드값  
    if (keyCode == 39 || keyCode == 40) { // 오른쪽방향키 이거나 아래 방향키
      // 브라우저의 기본 동작을 취소한다.
      e.preventDefault();
      // 다음 tab 요소에 aria-selected=true로 지정하고 
      // 형제요소중에 자신 tab 이외의 나머지 tab 요소들을 aria-selected=false로 지정한다.
      $(this).next().attr('aria-selected', true).siblings().attr('aria-selected', false);

      var selectedId = "#" + $(this).next().attr('aria-controls');
      //자신은 보이게하고 다른 tabpanel은 보이지 않게 지정한다.
      $(selectedId).removeClass('unvisual').siblings().addClass('unvisual');
      // 다음요소로 포커스를 이동한다.
      $(this).next().focus();

      //마지막요소에서 오른쪽 방향키나 아래 방향키를 눌렀을 경우
      if ($(this).next().prevObject.attr('aria-controls') == 'pds') {
        //tab, tabpanel,focus 모두 처음으로 이동 
        $('#aria-notice-heading').attr('aria-selected', true).siblings().attr('aria-selected', false);
        $('#notice').removeClass('unvisual').siblings().addClass('unvisual');
        $('#aria-notice-heading').focus();
      }
    }
    if (keyCode == 37 || keyCode == 38) { // 왼쪽방향키 이거나 위쪽 방향키
      e.preventDefault();
      // 이전 tab 요소에 aria-selected=true로 지정하고 
      // 형제요소중에 자신 tab 이외의 나머지 tab 요소들을 aria-selected=false로 지정한다.
      $(this).prev().attr('aria-selected', true).siblings().attr('aria-selected', false);

      var selectedId = "#" + $(this).prev().attr('aria-controls');
      //자신은 보이게하고 다른 tabpanel은 보이지 않게 지정한다.
      $(selectedId).removeClass('unvisual').siblings().addClass('unvisual');
      // 이전요소로 포커스를 이동한다.
      $(this).prev().focus();
      //처음요소에서 왼쪽 방향키나 위쪽 방향키를 눌렀을 경우
      if ($(this).prev().prevObject.attr('aria-controls') == 'notice') {
        //tab, tabpanel,focus 모두 마지막으로 이동
        $('#aria-pds-heading').attr('aria-selected', true).siblings().attr('aria-selected', false);
        $('#pds').removeClass('unvisual').siblings().addClass('unvisual')
        $('#aria-pds-heading').focus();
      }
    }
    if (keyCode == 35) { //end 키를 눌렀을 때
      e.preventDefault();
      //tab, tabpanel,focus 모두 마지막으로 이동
      $('#aria-pds-heading').attr('aria-selected', true).siblings().attr('aria-selected', false);
      $('#pds').removeClass('unvisual').siblings().addClass('unvisual');
      $('#aria-pds-heading').focus();
    }
    if (keyCode == 36) { //home키를 눌렀을 때
      e.preventDefault();
      //tab, tabpanel,focus 모두 처음으로 이동 
      $('#aria-notice-heading').attr('aria-selected', true).siblings().attr('aria-selected', false);
      $('#notice').removeClass('unvisual').siblings().addClass('unvisual');
      $('#aria-notice-heading').focus();
    }

  });
  $('[role="tab"]').keydown(function(e) {

    var keyCode = e.keyCode || e.which; //키보드 코드값  
    if (keyCode == 9) { //탭키를 눌렀을 때
      e.preventDefault();
      var selectedId = "#" + $(this).attr('aria-controls');
      $(selectedId).children('a').focus();
    }

  });

  // tab 요소에 클릭 이벤트를 추가한다.
  $('[role="tab"]').on('click', function(e) {
    e.preventDefault();
    // 클릭한 tab 요소에 aria-selected=true로 지정하고 
    // 형제요소중에 자신 tab 이외의 나머지 tab 요소들을 aria-selected=false로 지정한다.
    $(this).attr('aria-selected', true).siblings().attr('aria-selected', false);

    var selectedId = "#" + $(this).attr('aria-controls');
    //자신은 보이게하고 다른 tabpanel은 보이지 않게 지정한다.
    $(selectedId).removeClass('unvisual').siblings().addClass('unvisual');
  });


});