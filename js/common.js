$("nav").hide();
$("#header .btn_ham").click(function () {
    $("nav").fadeIn();
    $(this).fadeOut();
    $("#header .btn_close").fadeIn();
});
$("#header .btn_close").click(function () {
    $("nav").fadeOut();
    $(this).fadeToggle();
    $("#header .btn_ham").fadeIn();
});

$(window).scroll(function () {
    let scrollPos = $(this).scrollTop();
    if (scrollPos > 700) {
        $("#header").addClass("active");
    } else {
        $("#header").removeClass("active");
    }
}) //스크롤 시 header.active 걸리게 하는 법으로 윕도우 스크롤 기준 탑에서 부터 700px을 지나면 header에 active가 걸리고 다시 올려서 700에 도달하게 되면 active가 풀리는 코드



$("#header .btn_ham").click(function () {
    $("body").css({ "overflow": "hidden" });
});
$("#header .btn_close").click(function () {
    $("body").css({ "overflow": "auto" }); //모달 띄우면 스크롤 두 개 생기는데 그걸 없애고 나타나게 하는 코드
});