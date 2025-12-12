AOS.init({});
const Room01_visual_list = new Swiper(".Room01_visual_list", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 1500,
    effect: "fade"
});
const room_con01_list = new Swiper(".room01_con01_list", {
    loop: true,
    speed: 1500,
    navigation: { //슬라이드 방향 버튼 생성 코드
        nextEl: ".room01_next", //다음 슬라이드
        prevEl: ".room01_prev", //이전 슬라이드 
    },
    effect: "fade"
});
const room01_con02_list = new Swiper(".room01_con02_list", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 1500,
    effect: "fade"
});
const room01_con02_list_2 = new Swiper(".room01_con02_list_2", {
    autoplay: {
        delay: 2000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 1500,
    effect: "fade"
});


$(".reservation_con01 p").click(function () {
    $(".reservation_con01_modal").fadeIn();
});
$(".reservation_con01_modal_button").click(function () {
    $(".reservation_con01_modal").fadeOut();
});
$(".reservation_con01_modal_button02").click(function () {
    $(".reservation_con01_modal").fadeOut();
});































