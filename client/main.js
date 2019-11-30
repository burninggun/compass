$(document).ready(initApp)


function initApp(){
    navScroll
}

function navScroll(){
    // console.log ($("#navbar").offset())
    if( $("#navbar").offset().top >= 65){
        console.log('shrinking')
        $("#navbar").removeClass("bg-transparent")
        $("#navbar").addClass("navbar-show")
    } else {
        $("#navbar").removeClass("navbar-show")
        $("#navbar").addClass("bg-transparent")
    }

}

$(window).scroll(navScroll)