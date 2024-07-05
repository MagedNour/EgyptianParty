// Date for the counter
let partyDate = new Date("Dec 31, 2024 23:59:59").getTime();



$(".closebtn").click(closeSideNav)

$(".openNav").click(function () {
    $(".sidenav").css("left") == "0px" ? closeSideNav() : openSideNav();
})

function closeSideNav() {
    $(".sidenav").animate({ left: '-250px' })
    $(".openNav").animate({ left: '20px' })
}
function openSideNav() {
    $(".sidenav").animate({ left: '0px' })
    $(".openNav").animate({ left: '260px' })
}

// Singers accordion
$(".toggle").click(function () {
    $('.inner').slideUp();
    $(".inner").removeClass("d-none");

    if ($(this).next('.inner').is(':visible')) {
        $(".inner").slideUp()
    } else {
        $(this).next('.inner').slideToggle();
    }
})


//Counter
$(document).ready(function () {
    let counter = setInterval(function () {
        let now = new Date();
        let remainingTime = partyDate - now;

        if (remainingTime <= 0) {
            clearInterval(counter);
            $('.days').text("0 D");
            $('.hours').text("0 h");
            $('.minutes').text("0 m");
            $('.seconds').text("0 s");
            return  //stop the code once it reaches zero
        }

        var days = Math.floor(remainingTime / (1000 * 60 * 60 * 24));
        var hours = Math.floor((remainingTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        var minutes = Math.floor((remainingTime % (1000 * 60 * 60)) / (1000 * 60));
        var seconds = Math.floor((remainingTime % (1000 * 60)) / 1000);


        $(".days").text(days + " D");
        $(".hours").text(hours + " h");
        $(".minutes").text(minutes + " m");
        $(".seconds").text(seconds + " s");


    }, 1000)
})


$("#contactMsg").keyup(function(){
  let remainingChar = 100 - $(this).val().length;

  if(remainingChar < 0){
    $(".avail-char").text("You Don't have any")
    return;
  }

  $(".avail-char").text(remainingChar);


})

// openNav changes with Scroll
$(window).scroll(()=>{
    const homeHeight = $(".home").outerHeight();
    const singersHeight = $(".singers").outerHeight();
    const countHeight = $(".count").outerHeight();
    const openNavPosition = $(".openNav").position().top;

    const scrollPosition = $(window).scrollTop();

    const counterTrigger = (homeHeight + singersHeight)-openNavPosition;
    const counterEndTrigger = (homeHeight + singersHeight+countHeight)-openNavPosition;


    if (scrollPosition < homeHeight - openNavPosition) {
        $(".openNav").css("color", "white");
        $("#openKeyWord").text("open")
    } else if (scrollPosition > counterTrigger && scrollPosition < counterEndTrigger) {
        $(".openNav").css("color", "white");
    }else {
        $(".openNav").css("color", "rgba(214, 46, 51)");
        $("#openKeyWord").text("")
    }
    
})

//NavBar item
$(".homeNav").click(()=>{
    const homeOffset = $(".home").offset().top;
    $("html").animate({ scrollTop: homeOffset }, 300);
})
$(".partiesNav").click(()=>{
    const partiesOffset = $(".singers").offset().top;
    $("html").animate({ scrollTop: partiesOffset }, 300);
})
$(".detailsNav").click(()=>{
    const countOffset = $(".count").offset().top;
    $("html").animate({ scrollTop: countOffset }, 300);
})
$(".contactNav").click(()=>{
    const contactOffset = $(".contact").offset().top;
    $("html").animate({ scrollTop: contactOffset }, 300);
})