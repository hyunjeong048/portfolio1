


$('.lang-wrap .btn-go').click(function (e) { 
  e.preventDefault();

  url=$('#lang').val()

  window.open(url)
  
});


$('.sc-visual .title').click(function(e){
  e.preventDefault();
  
  $(this).closest('.content').addClass('active').siblings().removeClass('active');



  if ( $(this).closest('.content').hasClass('news')) {
    newsSlide.autoplay.start();
    citizenSlide.autoplay.stop();
  }else{
    newsSlide.autoplay.stop();
    citizenSlide.autoplay.start();
  }
})



$('.sc-visual .btn-all').click(function(){
  $('.pop-visual').addClass('show');
  $('body').addClass('scroll-hide');
})
$('.pop-visual .btn-close').click(function(){
  $('.pop-visual').removeClass('show');
  $('body').removeClass('scroll-hide');
})





var newsSlide = new Swiper(".news .swiper", {
  autoplay:{
    delay:1000,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  pagination: {
    el: ".fraction",
    type: "fraction",
  },
});


$('.news .autoplay').click(function(){
  if ($(this).hasClass('on')) {
    newsSlide.autoplay.start();
    $(this).removeClass('on');
  }else{
    newsSlide.autoplay.stop();
    $(this).addClass('on');
  }
})


var citizenSlide = new Swiper(".citizen .swiper", {
  autoplay:{
    delay:1000,
  },
  navigation: {
    nextEl: ".next",
    prevEl: ".prev",
  },
  pagination: {
    el: ".fraction",
    type: "fraction",
  },
});
citizenSlide.autoplay.stop();

$('.citizen .autoplay').click(function(){
  if ($(this).hasClass('on')) {
    citizenSlide.autoplay.start();
    $(this).removeClass('on');
  }else{
    citizenSlide.autoplay.stop();
    $(this).addClass('on');
  }
})









var swiper = new Swiper("#tab1", {
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
      pagination: {
        el: ".swiper-pagination",
        type: "fraction",
      },
    });
    var swiper = new Swiper("#tab2", {
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    });



    var bannerSlide = new Swiper(".sc-slide .swiper", {
      slidesPerView:3,
      spaceBetween:43,
      pagination: {
        el: ".fraction",
        type: "fraction",
      },
      navigation: {
        nextEl: ".next",
        prevEl: ".prev",
      },
    });




    $('.weather-close').click(function(){
    $('.weather-bg').addClass('hide');
})

    $('.tab-nav a').click(function(e){
      e.preventDefault();

      tab=$(this).data('tab');

      $(tab).addClass('on').siblings().removeClass('on');
      $('.tab-nav a').removeClass('on');
      $(this).addClass('on');
    });

    $('.gov-title').click(function(e){
      if ($(this).siblings('.gov-sub').length) {
        e.preventDefault();
  
        if($(this).hasClass('on')){
          $('.gov-title').removeClass('on').siblings('.gov-sub').stop().slideUp();
        }
        else{
          $('.gov-title').removeClass('on').siblings('.gov-sub').stop().slideUp();
          $(this).addClass('on').siblings('.gov-sub').stop().slideDown();
        }
      }
    });

    $(window).scroll(function(){

      curr = $(this).scrollTop();
      sect = $('#header').height()

      if(curr >= sect){
        $('.btn-top').addClass('on')
      } else{
        $('.btn-top').removeClass('on')
      }
    })


    $('.btn-top').click(function(e){
      e.preventDefault();
      window.scrollTo({top:0,behavior:"smooth"})
    })