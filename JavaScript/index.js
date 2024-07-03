$(".closebtn").click(closeSideNav)

$(".openNav").click(function () {
   $(".sidenav").css("left") == "0px"? closeSideNav(): openNav()
})

function closeSideNav() {
    $(".sidenav").animate({ left: '-250px' })
    $(".openNav").animate({ left: '20px' })
}
function openNav() {
    $(".sidenav").animate({ left: '0px' })
    $(".openNav").animate({ left: '260px' })
}

