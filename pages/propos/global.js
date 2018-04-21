
$(window).scroll(function() {
	if ($("#header").offset().top > 50) {
		$(".header").addClass("header--collapse");
	} else {
		$(".header").removeClass("header--collapse");
	}
});



function smoothScrollTo(element){
// 60 ==  menu size
    $('html, body').animate({
        scrollTop: $(element).offset().top - 60
    }, 1000)
}

$(".smoothScroll").click(function(e){
	console.log(e);
    e.preventDefault();
    smoothScrollTo($(this).data("scrollTo"));
});