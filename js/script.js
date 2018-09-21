var didScroll;
var lastScrollTop = 0;
var delta = 5;
var navbarHeight = $('.top').outerHeight();

$(document).ready(function(){
  var open = false;
  Moveit.put(first, {
    start: '0%',
    end: '14%'
  });
  Moveit.put(middle, {
    start: '0%',
    end: '100%'
  });
  Moveit.put(second, {
    start: '0%',
    end: '11.5%'
  });
  $('.trigger').click(function(){
    if(!open){
    Moveit.animate(first, {
      start: '78%',
      end: '93%',
      duration: 1
    });
    Moveit.animate(middle, {
      start: '50%',
      end: '50%',
      duration: 1
    });
    Moveit.animate(second, {
      start: '81.5%',
      end: '94%',
      duration: 1
    });
    }

    else {
      Moveit.animate(first, {
      start: '0%',
      end: '14%',
      duration: 1
    });
    Moveit.animate(middle, {
      start: '0%',
      end: '100%',
      duration: 1
    });
    Moveit.animate(second, {
      start: '0%',
      end: '11.5%',
      duration: 1
    });
    }
    open = !open;
  })
})

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

new Vivus('first-svg', {duration: 100});
new Vivus('second-svg', {duration: 100});
new Vivus('third-svg', {duration: 100});
