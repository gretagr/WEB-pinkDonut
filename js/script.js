var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.top').outerHeight();

$(window).scroll(function(event){
    didScroll = true;
});
setInterval(function() {
    if (didScroll) {
        hasScrolled();
        didScroll = false;
    }
}, 250);
function hasScrolled() {
    var st = $(this).scrollTop();
    if(Math.abs(lastScrollTop - st) <= delta)
        return;
    if (st > lastScrollTop && st > navbarHeight){
        $('.top').removeClass('visible').addClass('hidden');
    } else {
        if(st + $(window).height() < $(document).height()) {
            $('.top').removeClass('hidden').addClass('visible');
        }
    }
    lastScrollTop = st;
}
var marginY = 0;
var destination = 0;
var speed = 10;
var scroller = null;
//-----------------------funkcija 1 smooth scroll
