$("header div").css("width", "+=75");
$(".personal-info").css("width", "+=100");
$(".resume-header").css("width", "+=50");


$(window).on("scroll", function(){
    if($(document).scrollTop() > 0) {
        $("header").css({"background-color": "white", "border-bottom": "10px solid orangered", "box-shadow": "none", "transition": "0.5s"});
        $("header p").css({"color": "black", "transition": "0.5s"});
    }
    else {
        $("header").css({"background-color": "rgb(31, 30, 30)", "border-bottom": "none", "box-shadow": "0 25px 50px rgb(26, 25, 25)", "transition": "0.3s"});
        $("header p").css({"color": "whitesmoke", "transition": "0.3s"});
    }

    if($(document).scrollTop() > 350) {
        $(".my-projects h1").css({"opacity": "1", "transition": "1s"});
    }
    else {
        $(".my-projects h1").css({"opacity": "0", "transition": "1s"});
    }

    if($(document).scrollTop() > 600) {
        $(".my-projects table").css({"opacity": "1", "transition": "1s"});
    }
    else {
        $(".my-projects table").css({"opacity": "0", "transition": "1s"});
    }

    if($(document).scrollTop() > 1300) {
        $(".about-me h1").css({"opacity": "1", "transition": "1s"});
    }
    else {
        $(".about-me h1").css({"opacity": "0", "transition": "1s"});
    }

    if($(document).scrollTop() > 1450) {
        $(".about-me p").css({"opacity": "1", "transition": "1s"});
    }
    else {
        $(".about-me p").css({"opacity": "0", "transition": "1s"});
    }

    // console.log($(document).scrollTop());
});