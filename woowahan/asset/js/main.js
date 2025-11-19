

$('.lang-area .btn-select').click(function(){
    $('.lang-area .lang').toggleClass('on');
});

$('.lang-area .lang button').click(function() {
  $('.lang-area .lang button').prop('disabled', false);

  $(this).prop('disabled', true);
});


var swiper = new Swiper(".sc-visual .main-slide", {
    navigation: {
      nextEl: ".btn.next",
      prevEl: ".btn.prev",
    },
    loop: true,
    autoplay:{
        delay:5000,
        disableOnInteraction: false,
        pauseOnMouseEnter: true 
    },
    on:{
      "init":function() {

        pageTag = $('.sc-visual .control .swiper-pagination');
        total=this.slides.length;
        w=pageTag.width();

        pageTag.css('--beforeW',w/total+'px'); 
      },

      "slideChange":function() {
          pageTag = $('.sc-visual .control .swiper-pagination');
          total=this.slides.length;
          w=pageTag.width();
        
          한칸 = w/total;
          슬라이드인덱스 = this.realIndex; 

          console.log(this);

        $('.sc-visual .control .swiper-pagination').css('--beforeL',한칸*슬라이드인덱스+'px');
      }
    }
  });

var swiper = new Swiper('.sc-card .card-slide', {
  freeMode: true,
  loop: true,
  autoplay: {
    delay: 0,
    disableOnInteraction: false,
    pauseOnMouseEnter: true 
  },
  speed: 3000,
  slidesPerView: 'auto',
  spaceBetween: 24,

  breakpoints: {
    981: {
      spaceBetween: 32,
    },
    }
});





$('.sc-service .group-video .btn-control').click(function() {
  if($(this).hasClass('on')){
    $(this).removeClass('on')
    $('.sc-service video').get(0).currentTime = 0;
    $('.sc-service video').get(0).play();

  }else{
    $(this).addClass('on')
    $('.sc-service video').get(0).pause();
  }
});



$('.sc-service .group-video .btn-play').click(function() {

    $('.sc-service video').get(0).currentTime = 0;
    $('.sc-service video').get(0).play();


    $(this).hide();
    // $(this).siblings('.btn-stop').show();
});





$('#header .nav-list').hover(function() {
  $('.header').addClass('on');
},function() {
  $('.header').removeClass('on');
})

$('.header').mouseleave(function() {
  $(this).removeClass('on');
  $('.header .sub-item').removeClass('on');
});

$('.header-menu .down').click(function(){
  $(this).parent().siblings('.list').toggleClass('show');
  $(this).children('svg').toggleClass('rotate');
})


let lastScrollTop = 0;
let headerHeight = $('#header').outerHeight();

$(window).on('scroll', function () {
  let currentScroll = $(this).scrollTop();

  if ($('.header-menu').hasClass('show')) {
    lastScrollTop = currentScroll; 
    return;
  }

  if (currentScroll > headerHeight) {
    if (currentScroll < lastScrollTop) {
      $('#header').addClass('show');
    } else {
      $('#header').removeClass('show');
    }
  } else {
    $('#header').removeClass('show');
  }

  lastScrollTop = currentScroll;
});



$('.btn-header').click(function(e){
    e.preventDefault();
    if($('#header .header-menu').hasClass('show')){
      $(this).removeClass('active');
        $('#header .header-menu').removeClass('show');
        $('body').removeClass('scroll-hide');
    }else{
      $(this).addClass('active');
      $('#header .header-menu').addClass('show');
      $('body').addClass('scroll-hide');
    }
})


  $('#footer .btn-select').on('click', function () {
    const $list = $(this).siblings('.link-list');
    const $icon = $(this).find('svg');

    $list.toggleClass('on');

    if ($list.hasClass('on')) {
      $icon.css('transform', 'rotate(-180deg)');
    } else {
      $icon.css('transform', 'rotate(0deg)');
    }
  });