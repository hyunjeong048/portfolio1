
const lenis = new Lenis();

lenis.on('scroll', ScrollTrigger.update);

gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});

gsap.ticker.lagSmoothing(0);


$('.nav-item a, .menu-item a').click(function(e){
    e.preventDefault();

    tab=$(this).data('cont');

    $('html').animate({
        scrollTop: $(tab).offset().top
    },500);
    if ($('#header .group-menu').hasClass('show')) {
        $('#header .group-menu').removeClass('show');
        $('body').removeClass('scroll-hide');
    }
})



ScrollTrigger.create({
    trigger:".sc-about",
    start:"0% 0%",
    // markers:true,
    endTrigger:"#footer",
    end:"100% 100%",
    toggleClass:{
        targets:"#header",
        className:"active"
    },
})

let Scroll = 0;
let menuOpen = false;

$(window).on('scroll', function(){
   if ($('.sc-team .modal-item.show').length > 0 || menuOpen) return;

    let curr = $(this).scrollTop();
    if(curr > Scroll){
        $('#header').addClass('hide');
    } else {
        $('#header').removeClass('hide');
    }
    Scroll = curr;
});
$('.sc-team .team-item').click(function(){
    $(this).find('.modal-item').addClass('show');
    lenis.stop();
});

$('.sc-team .modal-item .btn-close').click(function(){
    $(this).closest('.modal-item').removeClass('show');
    lenis.start();
});


$('#header .group-nav .btn-menu').click(function(e){
    e.preventDefault();
    $('#header .group-menu').addClass('show');
    $('body').addClass('scroll-hide');
    $('#header').removeClass('hide');
    lenis.stop();
    menuOpen = true;
    
})
$('#header .group-menu .btn-close').click(function(){
    $('#header .group-menu').removeClass('show');
    $('body').removeClass('scroll-hide');
    lenis.start();
    menuOpen = false;
})




var swiper3 = new Swiper('.sc-visual .visual-slide', {
    loop: true,
    autoplay: {
        delay: 0,
        disableOnInteraction: false
    },
    speed: 3000,
});


const about1 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-about .info-list",
        start:"0% 80%",
        end:"100% 30%",
        // markers:true,
        scrub:0,
    }
})
about1
.to('.sc-about .right .info-item',{
    opacity:1,
    x: 0,  
    stagger:0.1,
})



gsap.to('.sc-story .story-title .text',{
    scrollTrigger:{
        trigger:".sc-story .story-title",
        start:"0% 50%",
        end:"100% 0%",
        // markers:true,
        scrub:0,
    },
    scaleX: 0.5,
    scaleY: 0.5,
})




gsap.to('.sc-enjoy .head-area .title-color',{
    scrollTrigger:{
        trigger:".sc-enjoy",
        start:"0% 10%",
        end:"90% 100%",
        // markers:true,
        scrub:0,
        invalidateOnRefresh:true
    },
    color: "rgb(244, 147, 32)"  
})




const routine1 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-routine",
        start:"0% 0%",
        end:"80% 80%",
        // markers:true,
        scrub:0,
    }
})
routine1
.to('.sc-routine .info-item:nth-child(1)',{
    opacity:1,
    x: 0,  
})
.to('.sc-routine .info-item:nth-child(2)',{
    opacity:1,
    x: 0,  
})
.to('.sc-routine .info-item:nth-child(3)',{
    opacity:1,
    x: 0,  
})
.to('.sc-routine .info-item:nth-child(4)',{
    opacity:1,
    x: 0,  
})

var swiper2 = new Swiper(".sc-routine .routine-slide", {
    allowTouchMove: false, 
    effect:"fade",
    pagination: {
    el: ".swiper-pagination",
    clickable: true,
    },
    navigation: {
    nextEl: ".btn-next",
    prevEl: ".btn-prev",
    },
});

gsap.defaults({
    ease:'none'
})

const origin1 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-origin .sticky-wrap",
        start:"0% -30%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
    }
})
origin1
.to('.sc-origin .cont-origin1 .origin-title',1,{
    opacity: 0,
})
.to('.sc-origin .cont-origin1 .video',1,{
    scale: 1,
},'a')
.to('.sc-origin .cont-origin1 .origin-sub',1,{
    color: "rgb(255, 250, 231)"
},'a')


var swiper1 = new Swiper('.sc-best .best-slide', {
    freeMode: true,
    loop: true,

    speed: 5000,
    slidesPerView: 'auto',
    spaceBetween: 16,
});

const headTxt = new SplitType('.sc-best .head-area .title', { types: 'words, lines', });
$('.line').wrap('<div class="line-wrap">')

const best1 = gsap.timeline({ 
    scrollTrigger:{ 
        trigger:".sc-best", 
        start:"0% 50%", 
        end:"0% 0%", 
        // markers:true, 
    }
})
best1
.from('.sc-best .word',{ 
    stagger:0.1,
    yPercent:100,
})

const quote1 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-quote",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
    }
})
quote1
.to('.sc-quote .quote-mark',{
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,

})
.to('.sc-quote .quote-text .span .word',{
    opacity: 1,
    filter: "blur(0px)",
    duration: 1,
    stagger: 0.15,
})



$('.sc-team .team-item').click(function(){ 
    $(this).find('.modal-item').addClass('show');
    $('body').addClass('scroll-hide');
    $('#header').addClass('hide');
});

$('.sc-team .modal-item .btn-close').click(function(e){
    e.stopPropagation();
    $(this).closest('.modal-item').removeClass('show');
    $('body').removeClass('scroll-hide');
});



gsap.defaults({
    ease:'none'
})

ScrollTrigger.matchMedia({

"(min-width: 480px)": function() {
    const product1 = gsap.timeline({ 
    scrollTrigger:{ 
        trigger:".sc-product", 
        start:"0% 0%", 
        end:"100% 100%", 
        scrub:0,
        }
    });

    product1
    .to('.sc-product .text-inner .text-item1',{ y: "-100%" })
    .to('.sc-product',{ backgroundColor: "rgb(14, 36, 4)" },'b')
    .to('.sc-product .img-area',{ scale: 0.5 },'b') 
    .to('.sc-product .date-area',{ opacity: 1 })
    .to('.sc-product .img-area .img:nth-child(1)',{ y: "-100%" })
    .to('.sc-product .img-area .img:nth-child(2)',{ y: "-100%" })
    .to('.sc-product .img-area .img:nth-child(3)',{ y: "-100%" })
    .to('.sc-product .img-area .img:nth-child(4)',{ y: "-100%" })
    .to('.sc-product .img-area .img:nth-child(5)',{ y: "-100%" });
    },

"(max-width: 479px)": function() {
    const product1 = gsap.timeline({ 
        scrollTrigger:{ 
        trigger:".sc-product", 
        start:"0% 0%", 
        end:"100% 100%", 
        scrub:0,
        }
    });

    product1
    .to('.sc-product .date-area',{ opacity: 1 },'a')
    .to('.sc-product .img-area .img:nth-child(1)',{ y: "-100%" },'a')
    .to('.sc-product .img-area .img:nth-child(2)',{ y: "-100%" })
    .to('.sc-product .img-area .img:nth-child(3)',{ y: "-100%" })
    .to('.sc-product .img-area .img:nth-child(4)',{ y: "-100%" })
    .to('.sc-product .img-area .img:nth-child(5)',{ y: "-100%" });
    }
});


$('.btn-down').click(function(e){
    e.preventDefault();

    if($(this).hasClass('on')){
        $('.btn-down').removeClass('on').siblings('.down').stop().slideUp();

    }else{  
        $('.btn-down').removeClass('on').siblings('.down').stop().slideUp();
        $(this).addClass('on').siblings('.down').stop().slideDown();
    }
})
