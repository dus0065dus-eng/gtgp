AOS.init({});
const visual_list = new Swiper(".visual_list", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 1500,
    navigation: { //슬라이드 방향 버튼 생성 코드
        nextEl: ".swiper-button-next", //다음 슬라이드
        prevEl: ".swiper-button-prev", //이전 슬라이드 
    },
    /*     pagination: { //아래쪽 페이지 위치 버튼 생성
            el: ".swiper-pagination",
            type: "progressbar",
        }, */
});
const pre_list = new Swiper(".pre_list", {
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    loop: true,
    speed: 1000,
    navigation: { //슬라이드 방향 버튼 생성 코드
        nextEl: ".pre_next", //다음 슬라이드
        prevEl: ".pre_prev", //이전 슬라이드 
    },
    effect: "fade"
});

// const ani1 = gsap.timeline();
// ani1.to(".pre_txt_right .pre_txt_r_img", { translateX: -400, })
//     .to(".pre_txt_right .pre_txt_r_img", { translateX: 100, })

// ScrollTrigger.create({
//     animation: ani1,
//     trigger: ".pre_txt", //스크롤 이벤트의 기준이 되는 부분 , 스크롤 이벤트가 들어갔으면 하는 부분보다 조금 더 높게 잡아야함
//     start: "top top", //시작지점
//     end: "+=1500", //스크롤 범위
//     scrub: true,
//     pin: true,
//     anticipatePin: 2, //높이면 좀 부드러움 원래 1이였음
//     markers: false, // 시작지점 끝 지점을 알려줌
// });


gsap.registerPlugin(ScrollTrigger);

ScrollTrigger.saveStyles(".mobile, .desktop");

ScrollTrigger.matchMedia({

    // desktop
    "(min-width: 1100px)": function () {
        const ani1 = gsap.timeline();
        ani1.to(".pre_txt_right .pre_txt_r_img", { translateX: -400, })
            .to(".pre_txt_right .pre_txt_r_img", { translateX: 100, })

        ScrollTrigger.create({
            animation: ani1,
            trigger: ".pre_txt", //스크롤 이벤트의 기준이 되는 부분 , 스크롤 이벤트가 들어갔으면 하는 부분보다 조금 더 높게 잡아야함
            start: "top top", //시작지점
            end: "+=1500", //스크롤 범위
            scrub: true,
            pin: true,
            anticipatePin: 2, //높이면 좀 부드러움 원래 1이였음
            markers: false, // 시작지점 끝 지점을 알려줌
        });
    },

    // mobile에서 동작 없애기
    "(max-width: 1099px)": function () {
        const ani1 = gsap.timeline();
        ani1.to(".pre_txt_right .pre_txt_r_img", { translateX: 0, }) // 애니메이션 뺌
            .to(".pre_txt_right .pre_txt_r_img", { translateX: 0, })// 애니메이션 뺌

        ScrollTrigger.create({
            animation: ani1,
            trigger: ".pre_txt", //스크롤 이벤트의 기준이 되는 부분 , 스크롤 이벤트가 들어갔으면 하는 부분보다 조금 더 높게 잡아야함
            start: "top top", //시작지점
            end: "+=0", //스크롤 범위 없앰
            scrub: true,
            pin: true,
            anticipatePin: 2, //높이면 좀 부드러움 원래 1이였음
            markers: false, // 시작지점 끝 지점을 알려줌
        });
    },

    // all 
    "all": function () {
    }

});






// const ani2 = gsap.timeline();
// ani2.to(".main_room .main_room_b_sc_img", { rotation: 15, borderRadius: 200 })
//     .to(".main_room .main_room_b_sc_img", { rotation: 20, borderRadius: 20 })

// ScrollTrigger.create({
//     animation: ani2,
//     trigger: ".main_room",
//     start: "top top",
//     end: "+=1000",
//     scrub: true,
//     pin: true,
//     anticipatePin: 1,
//     markers: false /* 오른쪽 상단에 나타나는 플러그인이 들어가는 표시 나타나게 함 */
// });



// gsap.registerPlugin(ScrollTrigger);

// ScrollTrigger.saveStyles(".mobile, .desktop");

// ScrollTrigger.matchMedia({

//     // desktop
//     "(min-width: 900px)": function () {
//         const ani2 = gsap.timeline();
//         ani2.to(".main_room .main_room_b_sc_img", { rotation: 15, borderRadius: 200 })
//             .to(".main_room .main_room_b_sc_img", { rotation: 20, borderRadius: 20 })

//         ScrollTrigger.create({
//             animation: ani2,
//             trigger: ".main_room",
//             start: "top top",
//             end: "+=1000",
//             scrub: true,
//             pin: true,
//             anticipatePin: 1,
//             markers: false /* 오른쪽 상단에 나타나는 플러그인이 들어가는 표시 나타나게 함 */
//         });
//     },

//     // mobile에서 동작 없애기
//     "(max-width: 899px)": function () {
//         const ani2 = gsap.timeline();
//         ani2.to(".main_room .main_room_b_sc_img", { rotation: 0, borderRadius: 0 })
//             .to(".main_room .main_room_b_sc_img", { rotation: 0, borderRadius: 0 })

//         ScrollTrigger.create({
//             animation: ani2,
//             trigger: ".main_room",
//             start: "top top",
//             end: "+=0",
//             scrub: true,
//             pin: true,
//             anticipatePin: 1,
//             markers: false /* 오른쪽 상단에 나타나는 플러그인이 들어가는 표시 나타나게 함 */
//         });
//     },

//     // all
//     "all": function () {
//     }

// });





const around_list = new Swiper(".around_list", {
    breakpoints: {
        600: { // 가로해상도 1400px 이상에서 보이는 갯수 min-width
            slidesPerView: 1.5,
            spaceBetween: 30,
        },
    },
    autoplay: {
        delay: 3000,
        disableOnInteraction: false,
    },
    slidesPerView: 1.2, //한 줄에 보이는 슬라이드 갯수
    spaceBetween: 20,//슬라이드 사이의 간격 px단위
    loop: true,
    speed: 1500,
    navigation: { //슬라이드 방향 버튼 생성 코드
        nextEl: ".swiper-button-next", //다음 슬라이드
        prevEl: ".swiper-button-prev", //이전 슬라이드
    },
    /*     pagination: { //아래쪽 페이지 위치 버튼 생성
            el: ".swiper-pagination",
            type: "progressbar",
        }, */
});






