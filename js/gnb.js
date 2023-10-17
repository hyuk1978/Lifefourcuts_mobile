// 서브메뉴
$('.sub_gnb_btn').click(function(){
    if($(this).hasClass('active')){
        $(this).removeClass('show');
        $(this).removeClass('active');
        $(this).siblings('.sub_menu_box').slideUp('fast');
        $(this).children('img').attr('src', './images/icon/down.png');
    }else{
        $(this).addClass('show');
        $(this).addClass('active');
        $(this).siblings('.sub_menu_box').slideDown('fast');
        $(this).children('img').attr('src', './images/icon/up-arrow.png');
    }
})