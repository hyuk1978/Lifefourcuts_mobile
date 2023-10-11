// Footer 2depth 스크립트
// const PlusBtn = $(".footer_title");
const PlusBtn = document.querySelectorAll(".footer_title");

console.log(PlusBtn);
// PlusBtn item들 추출후 각각 할당하기
for(let i=0;i < PlusBtn.length; i++){
    PlusBtn[i].addEventListener('click', toggleFooterMenu);
}

// classList CSS 클래스명 연동
const CLICKED_CLASS = 'clicked';
const MARKED_CLASS = 'mark';

function toggleFooterMenu(){
    this.nextElementSibling.classList.toggle(CLICKED_CLASS);
    this.classList.toggle(MARKED_CLASS);
}

$('a[href="#"').click(function(e){
    e.preventDefault();
})

// 슬라이드 효과
$(function(){
    $('.slide_gallery').bxSlider({
        // mode: 'fade',
        pager: true,
        // slideWidth: 1920,
    });
});
$(function(){
    $('.slide_disney').bxSlider({
        // mode: 'fade',
        pager: true,
        // slideWidth: 1920,
    });
});
$(function(){
    $('.slide_mbti').bxSlider({
        // mode: 'fade',
        pager: true,
        // slideWidth: 1920,
    });
});
$(function(){
    $('.slide_pose').bxSlider({
        // mode: 'fade',
        pager: true,
        // slideWidth: 1920,
    });
});
$(function(){
    $('.slide_goods').bxSlider({
        // mode: 'fade',
        pager: true,
        // slideWidth: 1920,
    });
});

// 슬라이드 height값 동적으로 구하기
function setPoseBoxHeight() {
    var poseBoxes = document.querySelectorAll('.pose_box');
    var width = window.innerWidth - 40; // 현재 브라우저 width 값에서 30px를 뺀 값
  
    poseBoxes.forEach(function(poseBox) {
      poseBox.style.height = width + 'px';
    });
  }
  
  document.addEventListener('DOMContentLoaded', function() {
    setPoseBoxHeight();
    var poseBoxes = document.querySelectorAll('.pose_box');
    poseBoxes.forEach(function(poseBox) {
      poseBox.style.height = '480';
    });
  });
  
  window.addEventListener('resize', setPoseBoxHeight); // 브라우저 크기 변경 시 높이 업데이트


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