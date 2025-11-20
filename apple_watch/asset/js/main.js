$(function() {
    const $header = $('#header');
    // const $scrollBg = $('.scroll-bg');

    $('.nav-item').on('mouseenter', function() {
        const $groupMenu = $(this).children('.group-menu');
        $('.group-menu').not($groupMenu).removeClass('show');
        $groupMenu.addClass('show');

        const height = $groupMenu.outerHeight();
        $header.css('--after-height', height + 'px');
        $header.addClass('menu');

        $('.scroll-bg').addClass('show'); 
    });

    function isHovering(e) {
        const offset = $header.offset();
        const width = $header.outerWidth();
        const height = $header.outerHeight() + parseInt($header.css('--after-height'));
        const x = e.pageX;
        const y = e.pageY;
        return (x >= offset.left && x <= offset.left + width &&
                y >= offset.top && y <= offset.top + height);
    }

    $(document).on('mousemove', function(e) {
        if ($header.hasClass('menu') && !isHovering(e)) {
            $('.group-menu').removeClass('show');
            $header.removeClass('menu');
            $header.css('--after-height', '0px');
            $('.scroll-bg').removeClass('show');
        }
    });
});

  $(function() {
    const $menuBtn = $('#header .nav-item1.open a');
    const $mMenu = $('#header .m-menu');
    const $body = $('body');


    const topOpen = document.getElementById('globalnav-anim-menutrigger-bread-top-open');
    const topClose = document.getElementById('globalnav-anim-menutrigger-bread-top-close');
    const bottomOpen = document.getElementById('globalnav-anim-menutrigger-bread-bottom-open');
    const bottomClose = document.getElementById('globalnav-anim-menutrigger-bread-bottom-close');

    $menuBtn.on('click', function(e) {
        e.preventDefault();


        $mMenu.toggleClass('on');
        const isOn = $mMenu.hasClass('on');

        if (isOn) {

            topOpen.beginElement();
            bottomOpen.beginElement();

            $body.addClass('scroll-hide');
        } else {

            topClose.beginElement();
            bottomClose.beginElement();

            $body.removeClass('scroll-hide');
        }
    });
});



$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();            
  var targetOffset = $('.sc-highlight').offset().top;
  var targetHeight = $('.sc-highlight').outerHeight();

  if(scrollTop >= targetOffset) {
    $('.sub-menu').addClass('on');
  } else {
    $('.sub-menu').removeClass('on');
  }
});

$(window).on('scroll', function() {
  var scrollTop = $(window).scrollTop();

  var healthOffset = $('.sc-health').offset().top;
  var healthHeight = $('.sc-health').outerHeight();

  var moveOffset = $('.sc-move').offset().top;
  var moveHeight = $('.sc-move').outerHeight();

  var goOffset = $('.sc-go').offset().top;
  var goHeight = $('.sc-go').outerHeight();

  if ((scrollTop >= healthOffset && scrollTop <= healthOffset + healthHeight) ||
      (scrollTop >= moveOffset && scrollTop <= moveOffset + moveHeight) ||
      (scrollTop >= goOffset && scrollTop <= goOffset + goHeight)) {
    $('.sub-menu').addClass('dark');
  } else {
    $('.sub-menu').removeClass('dark');
  }
});

$(document).on('click', '.btn-open .icon', function() {
  $('.sub-menu').toggleClass('open');
  $('.sub-cont .tray').toggleClass('on');
});



$('.sc-visual .video-control .btn').click(function() {
    var $btn = $(this);
    var $video = $('.sc-visual .video video').get(0);

    $btn.toggleClass('play'); 

    if ($btn.hasClass('play')) {
        $video.pause(); 
    } else {
        $video.play(); 
    }
});

gsap.from('.sc-highlight', {
  scrollTrigger: {
    trigger: ".sc-highlight",
    start: "0% 60%",
    // markers: true,
    invalidateOnRefresh: true,
    toggleActions: "play none none none"
  },
  opacity: 0,
  y: 50,
  duration: 1,
  stagger: 0.2,
});


$(function () {
  const delay = 4000;
  const $dots = $(".progress-indicators li"); 
  const animateDot = (index, duration) => {
    $dots.removeClass("curr").find(".fill").stop(true).css("width", "0");
    $dots.eq(index).addClass("curr").find(".fill")
      .animate({ width: "100%" }, duration, "linear");
  };

  const swiper1 = new Swiper(".sc-highlight .main-slide", {
    slidesPerView: 1,
    spaceBetween: 20,
    autoplay: {
      delay: delay,
    },
    on: {
      init: (s) => animateDot(s.realIndex, delay),
      slideChangeTransitionEnd: (s) => animateDot(s.realIndex, delay)
    }
  });

  $(".progress-indicators li").on("click", function () {
    swiper1.slideTo($(this).index()); 
    swiper1.autoplay.start();
    $(".btn-video").removeClass("play");
  });

  $(".btn-video").on("click", function () {
    const $btn = $(this);
    const $currFill = $dots.filter(".curr").find(".fill");

    if ($btn.hasClass("play")) {
      swiper1.autoplay.start();

      const currentWidth = parseFloat($currFill.css("width"));
      
      const Duration = delay * (1 - (currentWidth / 100)); 
      $currFill.animate({ width: "100%" }, 
        Duration, "linear");
      $btn.removeClass("play");
      
    } else {
      swiper1.autoplay.stop();
      $currFill.stop(); 
      $btn.addClass("play");
    }
  });
});


const product1 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-product",
        start:"0% 90%",
        // end:"20% 20%",
        // markers:true,
    }
})
product1
.from('.sc-product .headline', { 
  opacity: 0, y: 50, duration: 1 })
.from('.sc-product .control-list',0.8,{ 
  opacity: 0, y: 50, duration: 1 });



$(function(){
  const $root = $('.sc-product');
  const $items = $root.find('.control-item');
  const $videos = $root.find('.group-video .video');
  const $btnClose = $root.find('.btn-close');
  const $controlBox = $root.find('.control');


  $root.on('click', '.control-item .control-btn', function() {
    const $item = $(this).closest('.control-item');
    openItem($item.index());
  });


  $btnClose.on('click', '.close', function() {
    closeAll();
  });


  $controlBox.find('.btn.prev').click(() => navigate(-1));
  $controlBox.find('.btn.next').click(() => navigate(1));

  function navigate(direction) {
    const currIdx = $items.index($items.filter('.active'));
    const total = $items.length;
    const nextIdx = (currIdx + direction + total) % total;
    openItem(nextIdx);
  }

  function openItem(idx) {
    const $item = $items.eq(idx);
    const $video = $videos.eq(idx);

    $items.removeClass('active').find('.cont').removeClass('show');
    $item.addClass('active').find('.cont').addClass('show');

    $controlBox.addClass('show');
    $btnClose.addClass('show');

    $videos.removeClass('active').find('video').each(function() {
      this.pause();
      this.currentTime = 0;
    });
    $video.addClass('active');
    const vid = $video.find('video').get(0);
    if (vid) {
      vid.currentTime = 0;
      vid.play().catch(() => {
        console.warn('Autoplay prevented by browser.');
      });
    }
  }

  function closeAll() {
    $items.removeClass('active').find('.cont').removeClass('show');
    $videos.removeClass('active').find('video').each(function() {
      this.pause();
      this.currentTime = 0;
    });

    const firstVid = $videos.first().addClass('active').find('video').get(0);
    if (firstVid) {
      firstVid.currentTime = 0;
      firstVid.play().catch(() => {});
    }

    $controlBox.removeClass('show');
    $btnClose.removeClass('show');
  }
});


gsap.to('.sc-health .group-intro', {
  scrollTrigger: {
    trigger: ".sc-health",
    start: "0% 60%",
    // markers: true,
    invalidateOnRefresh: true,
    toggleActions: "play none none none"
  },
  opacity: 1,
  duration: 1,
  stagger: 0.2,
});

const mm = gsap.matchMedia();

mm.add("(min-width: 1069px)", () => {

  const health1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc-health",
      start: "10% 0%",
      end: "50% 100%",
      scrub: 0,
      // markers: true,
      invalidateOnRefresh: true
    }
  });

  health1
    .to('.sc-health .sticky', { 
      filter: "blur(20px)",
    }, 'a')
    .to('.sc-health .sticky .dimmed', { 
      opacity: 1,
    }, 'a+=0.5');
    


  return () => {
    if (health1.scrollTrigger) health1.scrollTrigger.kill();
    health1.kill();
    gsap.set('.sc-health .sticky', { filter: "none" });
    gsap.set('.sc-health .sticky .dimmed', { opacity: 0 });
  };
});



var swiper2 = new Swiper(".sc-health .main-slide2", {
    slidesPerView: 'auto', 
    spaceBetween:20,
    allowTouchMove: false,
    navigation: {
        nextEl: ".btn.next",
        prevEl: ".btn.prev",
    },
});


gsap.to('.sc-move .group-intro', {
  scrollTrigger: {
    trigger: ".sc-move",
    start: "0% 60%",
    // markers: true,
    invalidateOnRefresh: true,
    toggleActions: "play none none none"
  },
  opacity: 1,
  duration: 1,
  stagger: 0.2,
});


const mm1 = gsap.matchMedia();

mm1.add("(min-width: 1069px)", () => {

  const move1 = gsap.timeline({
    scrollTrigger: {
      trigger: ".sc-move",
      start: "20% 0%",
      end: "50% 50%",
      scrub: 1,
      // markers: true,
      invalidateOnRefresh: true
    }
  });

  move1
    .to('.sc-move .sticky', {
      filter: "blur(20px)"
    }, 'a')
    .to('.sc-move .sticky .dimmed', {
      opacity: 1
    }, 'a+=0.5');

  return () => {
    if (move1 && move1.scrollTrigger) {
      move1.scrollTrigger.kill();
    }
    if (move1) {
      move1.kill();
    }
    gsap.set('.sc-move .sticky', { filter: "none" });
    gsap.set('.sc-move .sticky .dimmed', { opacity: 0 });
  };
});


var swiper3 = new Swiper(".sc-move .main-slide3", {
    slidesPerView: 'auto',
    spaceBetween:20,
    allowTouchMove: false,
    navigation: {
        nextEl: ".btn.next",
        prevEl: ".btn.prev",
    },
});


const circle = document.querySelector(".progress-ring-circle");
const radius = circle.r.baseVal.value;
const circumference = 2 * Math.PI * radius;
circle.style.strokeDasharray = circumference;
circle.style.strokeDashoffset = circumference;

const number = document.querySelector(".text-area .number");
const targetNumber = 24;

gsap.to(circle, {
  strokeDashoffset: 0,
  duration: 2,
  ease: "power2.out",
  scrollTrigger: {
    trigger: ".sc-battery",
    start: "10% 50%",
    toggleActions: "play none none none",
    once: true,
    //  markers: true,
  },
  onUpdate: function() {
    const progress = 1 - circle.style.strokeDashoffset / circumference;
    number.textContent = Math.round(progress * targetNumber);
  }
});


const battery1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-battery",
    start: "0% 50%",
    end: "100% 100%",
    // scrub: 1,
    // markers: true,
    invalidateOnRefresh: true
  }
});
battery1
.from('.sc-battery .group-intro', { 
  opacity: 0,
  y: 50,
})
.from('.sc-battery .group-bottom .desc', { 
  opacity: 0,
  y: 50,
})

.from('.sc-battery .group-bottom .cont-area', { 
  opacity: 0,
  y: 50,
})



gsap.to('.sc-go .group-intro', {
  scrollTrigger: {
    trigger: ".sc-go",
    start: "0% 60%",
    // markers: true,
    invalidateOnRefresh: true,
    toggleActions: "play none none none"
  },
  opacity: 1,
  duration: 1,
  stagger: 0.2,
});


const mm3 = gsap.matchMedia();

mm3.add("(min-width: 1069px)", () => {

const go1 = gsap.timeline({
  scrollTrigger: {
    trigger: ".sc-go",
    start: "40% 0%",
    end: "70% 100%",
    scrub: 1,
    // markers: true,
    invalidateOnRefresh: true
  }
});
go1
.to('.sc-go .sticky .img', { 
  filter: 'blur(20px)', 
},'a')
.to('.sc-go .sticky .dimmed', { 
  opacity: 1,
},'a')
.from('.sc-go .group-blur',{ 
  opacity: 0,
},'b');

  return () => {
    if (go1 && go1.scrollTrigger) {
      go1.scrollTrigger.kill();
    }
    if (go1) {
      go1.kill();
    }
    gsap.set('.sc-go .sticky', { filter: "none" });
    gsap.set('.sc-go .sticky .dimmed', { opacity: 0 });
    gsap.set('.sc-go .group-blur', { opacity: 1 });
  };
});

var swiper4 = new Swiper(".sc-go .main-slide4", {
    slidesPerView: 'auto',
    spaceBetween:20,
    allowTouchMove: false,
    navigation: {
        nextEl: ".btn.next",
        prevEl: ".btn.prev",
    },
});
var swiper5 = new Swiper(".sc-shop .main-slide5", {
    slidesPerView: 'auto',
    spaceBetween:20,
    allowTouchMove: false,
    navigation: {
        nextEl: ".btn.next",
        prevEl: ".btn.prev",
    },
});

var swiper6 = new Swiper(".sc-env .main-slide6", {
    slidesPerView: 'auto',
    allowTouchMove: false,
    navigation: {
        nextEl: ".btn.next",
        prevEl: ".btn.prev",
    },
});

var swiper7 = new Swiper(".sc-values .main-slide7", {
    slidesPerView: 'auto',
    allowTouchMove: false,
    navigation: {
        nextEl: ".btn.next",
        prevEl: ".btn.prev",
    },
});

$('#footer .nav-item .column-list .hide').on('click', function () {
  const $list = $(this).closest('.column-list');

  $list.toggleClass('open');
});