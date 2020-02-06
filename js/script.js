  $(function() {
    //ハンバーガーメニュー
    $('.toggle').click(function() {
      $(this).toggleClass('active');
      if ($(this).hasClass('active')) {
        $('.nav-menu').addClass('active'); 
        $('body').addClass('active');
      } else {
        $('.nav-menu').removeClass('active');
        $('body').removeClass('active');
      }
    });
  });
