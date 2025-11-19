
const lenis = new Lenis();
lenis.on('scroll', ScrollTrigger.update);
gsap.ticker.add((time) => {
  lenis.raf(time * 1000);
});
gsap.ticker.lagSmoothing(0);



$('#header .btn-menu').click(function(e){
      e.preventDefault();

      $('#header .side-menu').addClass('show');
      $(this).css('display', 'none');
      $('#header .btn-close').css('display', 'flex');
      $('#header .header-wrap').addClass('show');
});

$('#header .btn-close').click(function(e){
    e.preventDefault();


      $('#header .side-menu').removeClass('show');
      $(this).css('display', 'none');
      $('#header .btn-menu').css('display', 'flex');
      $('#header .header-wrap').removeClass('show');
});


ScrollTrigger.create({
   trigger: ".sc-visual2",
   start: "30% 0%",
   endTrigger: ".sc-link .group-bottom",
   end: "100% 90%",
   // markers: true,
   toggleClass: {
      targets: "#header",
      className: "active"
   },
   onEnter: () => {
      $(".icon-go .dot").addClass("dark");
   },
   onLeave: () => {
      $(".icon-go .dot").removeClass("dark");
   },
   onEnterBack: () => {
      $(".icon-go .dot").addClass("dark");
   },
   onLeaveBack: () => {
      $(".icon-go .dot").removeClass("dark");
   } 
});

ScrollTrigger.create({
   trigger: ".sc-residential",
   start: "0% 0%",   
   endTrigger: ".sc-photo",
   end: "100% 0%",
   onEnter: () => {
      $("#header").removeClass("active").addClass("hide");
   },
   onLeave: () => {
      $("#header").addClass("active").removeClass("hide");
   },
   onEnterBack: () => {
      
      $("#header").removeClass("active").addClass("hide");
   },
   onLeaveBack: () => {
      
      $("#header").addClass("active").removeClass("hide");
   }
});


var swiper = new Swiper(".sc-visual .main-slide", {
   loop: true,
   autoplay: { delay: 3000, disableOnInteraction: false },
   effect: 'fade',
   pagination: false,
});


function updateVisualState(index) {
   $('.sc-visual .side-item').removeClass('show')
                              .find('.text, .control').removeClass('show');

   $('.sc-visual .side-item').eq(index).addClass('show')
                              .find('.text, .control').addClass('show');
}

$('.sc-visual .side-item').on('click', function(e){
   e.preventDefault();
   let index = $(this).index();

   swiper.slideToLoop(index); 
   updateVisualState(index);
});

swiper.on('slideChange', function() {
   let realIndex = swiper.realIndex;
   updateVisualState(realIndex);
});


const visual1 = gsap.timeline({
   scrollTrigger:{
      trigger:".sc-visual",
      start:"10% 0%",
      end:"100% 100%",
      // markers:true,
      scrub:1,
   }
})
visual1
.to(".group-bottom .line",{
   width: "0%",
},'a')
.to(".sc-visual",{
   scaleX: 0.975,
},'a')
.to(".sc-visual .main-slide",{
   borderBottomRightRadius: "32px",
   borderBottomLeftRadius: "32px",
},'a')




ScrollTrigger.matchMedia({
   "(min-width: 992px)": function() {

const residential1 = gsap.timeline({
   scrollTrigger:{
      trigger:".sc-residential",
      start:"0% 40%",
      end:"90% 75%",
      // markers:true,
      scrub:0,
   }
})
residential1
.from(".sc-residential .cont-item",{
   scale:0,
},'a')
.to(".sc-residential .img-area.is1 .border",{
   width: "160%",
   height: "160%",
},'a')
.to(".sc-residential .cont-item:nth-child(1) .text-area",{
   opacity: 1,
},'a')
.to(".sc-residential .cont-list",2,{
   x: "-180vh", 
},'b')
.to(".sc-residential .cont-item:nth-child(1) .text-area",{
   opacity: 0,
},'b')
.to(".sc-residential .img-area.is1 .border",{
   width: "100%",
   height: "100%", 
},'b')
.to(".sc-residential .img-area.is2 .border",1,{
   width: "160%",
   height: "160%",
},'b')
.to(".sc-residential .cont-item:nth-child(2) .text-area",1,{
   opacity: 1,
},'b')
.to(".sc-residential .img-area.is2 .border",1,{
   width: "100%",
   height: "100%",
},'b+=1')
.to(".sc-residential .cont-item:nth-child(2) .text-area",1,{
   opacity: 0,
},'b+=1')

.to(".sc-residential .img-area.is3 .border",{
   width: "160%",
   height: "160%",
},'b+=1')
.to(".sc-residential .cont-item:nth-child(3) .text-area",{
   opacity: 1,
},'b+=1')
.to(".sc-residential .img-area.is3 .border",1,{
   width: "100%",
   height: "100%",
},'b+=2')
.to(".sc-residential .cont-item:nth-child(3) .text-area",1,{
   opacity: 0,
},'b+=2')

.to(".sc-residential .cont-list",1,{
   y: "-90vh", 
},'b+=2')
.to(".sc-residential .group-bottom .title",1,{
   y: "-134px", 
},'b+=2')
.to(".sc-residential .img-area.is6 .border",{
   width: "160%",
   height: "160%",
},'b+=2')
.to(".sc-residential .cont-item:nth-child(6) .text-area",{
   opacity: 1,
},'b+=2')
.to(".sc-residential .cont-list",2,{
   x: "0vh", 
},'c')
.to(".sc-residential .img-area.is6 .border",{
   width: "100%",
   height: "100%",
},'c')
.to(".sc-residential .cont-item:nth-child(6) .text-area",{
   opacity: 0,
},'c')

.to(".sc-residential .img-area.is5 .border",{
   width: "160%",
   height: "160%",
},'c')
.to(".sc-residential .cont-item:nth-child(5) .text-area",{
   opacity: 1,
},'c')
.to(".sc-residential .img-area.is5 .border",{
   width: "100%",
   height: "100%",
},'c+=1')
.to(".sc-residential .cont-item:nth-child(5) .text-area",{
   opacity: 0,
},'c+=1')

.to(".sc-residential .img-area.is4 .border",{
   width: "160%",
   height: "160%",
},'c+=1')
.to(".sc-residential .cont-item:nth-child(4) .text-area",{
   opacity: 1,
},'c+=1')
.to(".sc-residential .img-area.is4 .border",{
   width: "100%",
   height: "100%",
},'c+=2')
.to(".sc-residential .cont-item:nth-child(4) .text-area",{
   opacity: 0,
},'c+=2')

.to(".sc-residential .cont-list",{
   y: "-180vh", 
},'c+=2')
.to(".sc-residential .img-area.is7 .border",{
   width: "160%",
   height: "160%",
},'c+=2')
.to(".sc-residential .group-bottom .title",{
   y: "-268px", 
},'c+=2')
.to(".sc-residential .cont-item:nth-child(7) .text-area",{
   opacity: 1,
},'c+=2')
.to(".sc-residential .cont-list",2,{
   x: "-180vh", 
},'d')
.to(".sc-residential .img-area.is7 .border",{
   width: "100%",
   height: "100%",
},'d')
.to(".sc-residential .cont-item:nth-child(7) .text-area",{
   opacity: 0,
},'d')
.to(".sc-residential .img-area.is8 .border",{
   width: "160%",
   height: "160%",
},'d')
.to(".sc-residential .cont-item:nth-child(8) .text-area",{
   opacity: 1,
},'d')
.to(".sc-residential .img-area.is8 .border",{
   width: "100%",
   height: "100%",
},'d+=1')
.to(".sc-residential .cont-item:nth-child(8) .text-area",{
   opacity: 0,
},'d+=1')
.to(".sc-residential .img-area.is9 .border",{
   width: "160%",
   height: "160%",
},'d+=1')
.to(".sc-residential .cont-item:nth-child(9) .text-area",{
   opacity: 1,
},'d+=1')
.to(".sc-residential .img-area.is9 .border",{
   width: "100%",
   height: "100%",
},'d+=2')
.to(".sc-residential .cont-item:nth-child(9) .text-area",{
   opacity: 0,
},'d+=2')
.to(".sc-residential .cont-list",{
   x: "-90vh", 
   y: "-90vh",
   scaleX: 0.333,
   scaleY: 0.333,
   opacity: 0,
},'d+=3')
.to(".sc-residential .img-area .img",{
   borderWidth: "100vh"
},'d+=3')
.to(".sc-residential .head-area",{
   display: 'none',
   opacity: 0,
},'d+=3')
.set(".sc-residential .head-area", {
  visibility: 'hidden',
})
   }
})

ScrollTrigger.matchMedia({
   "(max-width: 991px)": function() {

const residential11 = gsap.timeline({
   scrollTrigger:{
      trigger:".sc-residential",
      start:"0% 0%",
      end:"100% 100%",
      // markers:true,
      scrub:0,
   }
})
residential11
.from(".sc-residential .cont-item:nth-child(1)",{
   opacity: 0,
})
.from(".sc-residential .cont-item:nth-child(2)",{
   opacity: 0,
})
.from(".sc-residential .cont-item:nth-child(3)",{
   opacity: 0,
})
.from(".sc-residential .cont-item:nth-child(4)",{
   opacity: 0,
},'a')
.to(".sc-residential .group-bottom .title",{
   y: "-67px", 
},'a')
.from(".sc-residential .cont-item:nth-child(5)",{
   opacity: 0,
})
.from(".sc-residential .cont-item:nth-child(6)",{
   opacity: 0,
})
.from(".sc-residential .cont-item:nth-child(7)",{
   opacity: 0,
},'b')
.to(".sc-residential .group-bottom .title",{
   y: "-134px", 
},'b')
.from(".sc-residential .cont-item:nth-child(8)",{
   opacity: 0,
})
.from(".sc-residential .cont-item:nth-child(9)",{
   opacity: 0,
})

   }
})


ScrollTrigger.matchMedia({
   "(min-width: 992px)": function() {

const residential2 = gsap.timeline({
   scrollTrigger:{
      trigger:".sc-residential",
      start:"0% 80%",
      end:"0% 100%",
      // markers:true,
      scrub:1,
   }
})
residential2
.from(".sc-residential .group-bottom",{
   opacity: 0,
})
   }
})




ScrollTrigger.matchMedia({
   "(min-width: 992px)": function() {

const photo1 = gsap.timeline({
   scrollTrigger:{
      trigger:".sc-photo",
      start:" 45% 0%",
      end:"100% 100%",
      // markers:true,
      scrub:0,
   }
})
photo1
.to(".sc-photo .group-left .absol-con",2,{
    width: "50vh",
},'a')
.to(".sc-photo .group-right",2,{
   opacity: 1,
},'a')
.to(".sc-photo .group-right .circle-list",2,{
   width: "45vh",
   height: "45vh",
},'a')
.from(".sc-photo .group-right .circle-list",{
   y: "-90vh"
},'a')
.from(".sc-photo .group-right",{
   opacity: 0,
},'a')

.to(".sc-photo .group-right .circle-item:nth-child(1),.sc-photo .group-right .circle-item:nth-child(6),.sc-photo .group-right .circle-item:nth-child(7)", {
  borderColor: "#e95644",
  delay: 1,
}, 'b')

.to(".sc-photo .group-right .circle-item:nth-child(1) .text,.sc-photo .group-right .circle-item:nth-child(6) .text,.sc-photo .group-right .circle-item:nth-child(7) .text", {
   opacity: 1,
  color: "#e95644",
  delay: 1,
}, 'b')

.to(".sc-photo .group-left .photo-list:nth-child(1)",{
  height: 0,
   // delay: 0.5,
},'c')
.to(".sc-photo .group-left .num-wrap .num-box .num",{
  y: "-24px", 
   delay: 0.5,
},'c')
.to(".sc-photo .group-left .text-wrap .text",{
  y: "-72px", 
   delay: 0.5,
},'c')
.to(".sc-photo .group-right .circle-item:nth-child(1) .text,.sc-photo .group-right .circle-item:nth-child(6) .text,.sc-photo .group-right .circle-item:nth-child(7) .text", {
   opacity: 0,
},'c')

.to(".sc-photo .group-right .circle-item:nth-child(3),.sc-photo .group-right .circle-item:nth-child(4),.sc-photo .group-right .circle-item:nth-child(9)", {
  borderColor: "#e95644",
   delay: 0.5,
}, 'c')
.to(".sc-photo .group-right .circle-item:nth-child(3) .text,.sc-photo .group-right .circle-item:nth-child(4) .text,.sc-photo .group-right .circle-item:nth-child(9) .text", {
   opacity: 1,
  color: "#e95644",
   delay: 0.5,
}, 'c')
.to(".sc-photo .group-left .photo-list:nth-child(2)",{
  height: 0,
//   delay: 0.5,
},'d')
.to(".sc-photo .group-left .text-wrap .text",{
  y: "-144px", 
  delay: 0.5,
},'d')

.to(".sc-photo .group-left .num-wrap .num-box .num",{
  y: "-48px", 
  delay: 0.5,
},'d')
.to(".sc-photo .group-right .circle-item:nth-child(3) .text,.sc-photo .group-right .circle-item:nth-child(4) .text,.sc-photo .group-right .circle-item:nth-child(9) .text", {
   opacity: 0,
  color: "#e95644",
}, 'd')
.to(".sc-photo .group-right .circle-item:nth-child(2),.sc-photo .group-right .circle-item:nth-child(5),.sc-photo .group-right .circle-item:nth-child(8)", {
  borderColor: "#e95644",
   delay: 0.5,
}, 'd')
.to(".sc-photo .group-right .circle-item:nth-child(2) .text,.sc-photo .group-right .circle-item:nth-child(5) .text,.sc-photo .group-right .circle-item:nth-child(8) .text", {
   opacity: 1,
  color: "#e95644",
   delay: 0.5,
}, 'd')
.to(".sc-photo .group-right .circle-item:nth-child(2) .text,.sc-photo .group-right .circle-item:nth-child(5) .text,.sc-photo .group-right .circle-item:nth-child(8) .text", {
   opacity: 0,
})
   }
})


ScrollTrigger.matchMedia({
   "(max-width: 991px)": function() {

const photo11 = gsap.timeline({
   scrollTrigger:{
      trigger:".sc-photo",
      start:" 0% 0%",
      end:"100% 100%",
      // markers:true,
      scrub:0,
   }
})
photo11

.to(".sc-photo .group-right .circle-item:nth-child(1),.sc-photo .group-right .circle-item:nth-child(6),.sc-photo .group-right .circle-item:nth-child(7)", {
  borderColor: "#e95644",
  delay: 1,
}, 'b')

.to(".sc-photo .group-right .circle-item:nth-child(1) .text,.sc-photo .group-right .circle-item:nth-child(6) .text,.sc-photo .group-right .circle-item:nth-child(7) .text", {
   opacity: 1,
  color: "#e95644",
  delay: 1,
}, 'b')

.to(".sc-photo .group-left .photo-list:nth-child(1)",{
  height: 0,
   // delay: 0.5,
},'c')
.to(".sc-photo .group-left .num-wrap .num-box .num",{
  y: "-24px", 
   delay: 0.5,
},'c')
.to(".sc-photo .group-left .text-wrap .text",{
  y: "-72px", 
   delay: 0.5,
},'c')
.to(".sc-photo .group-right .circle-item:nth-child(1) .text,.sc-photo .group-right .circle-item:nth-child(6) .text,.sc-photo .group-right .circle-item:nth-child(7) .text", {
   opacity: 0,
},'c')

.to(".sc-photo .group-right .circle-item:nth-child(3),.sc-photo .group-right .circle-item:nth-child(4),.sc-photo .group-right .circle-item:nth-child(9)", {
  borderColor: "#e95644",
   delay: 0.5,
}, 'c')
.to(".sc-photo .group-right .circle-item:nth-child(3) .text,.sc-photo .group-right .circle-item:nth-child(4) .text,.sc-photo .group-right .circle-item:nth-child(9) .text", {
   opacity: 1,
  color: "#e95644",
   delay: 0.5,
}, 'c')
.to(".sc-photo .group-left .photo-list:nth-child(2)",{
  height: 0,
//   delay: 0.5,
},'d')
.to(".sc-photo .group-left .text-wrap .text",{
  y: "-144px", 
  delay: 0.5,
},'d')

.to(".sc-photo .group-left .num-wrap .num-box .num",{
  y: "-48px", 
  delay: 0.5,
},'d')
.to(".sc-photo .group-right .circle-item:nth-child(3) .text,.sc-photo .group-right .circle-item:nth-child(4) .text,.sc-photo .group-right .circle-item:nth-child(9) .text", {
   opacity: 0,
  color: "#e95644",
}, 'd')
.to(".sc-photo .group-right .circle-item:nth-child(2),.sc-photo .group-right .circle-item:nth-child(5),.sc-photo .group-right .circle-item:nth-child(8)", {
  borderColor: "#e95644",
   delay: 0.5,
}, 'd')
.to(".sc-photo .group-right .circle-item:nth-child(2) .text,.sc-photo .group-right .circle-item:nth-child(5) .text,.sc-photo .group-right .circle-item:nth-child(8) .text", {
   opacity: 1,
  color: "#e95644",
   delay: 0.5,
}, 'd')
.to(".sc-photo .group-right .circle-item:nth-child(2) .text,.sc-photo .group-right .circle-item:nth-child(5) .text,.sc-photo .group-right .circle-item:nth-child(8) .text", {
   opacity: 0,
})
   }
})


gsap.to('.sc-team .group-team .num-area', {
      scrollTrigger: {
         trigger: ".sc-team",
         start: "30% 0%",
         end: "100% 100%",
         // markers: true,
         scrub: 1,
      },
      x: "-100%",
})


up1= gsap.to('.btn-link .icon-go img',.3, {
   x:0,
   y:0,
   paused:true,
})
up2= gsap.to('.btn-link .icon-go img',.3, {
   x:24,
   y:-24,
   paused:true,
   onComplete:()=>{
   gsap.set('.btn-link .icon-go img',{
         x:-24,
         y:24,
      })
   }
})

$('.btn-link').on('mouseenter', function() {
   up1.restart();
})
$('.btn-link').on('mouseleave', function() {
   up2.restart();
})

$('.contect').each(function(){
   let $this = $(this);
   let $img = $this.find('.icon-go img');

   gsap.set($img, { x:-24, y:24 });

   let up1 = gsap.to($img, .4, {
      x: 0,
      y: 0,
      paused: true
   });

   let up2 = gsap.to($img, .4,{
      x: 24,
      y: -24,
      paused: true,
      onComplete: () => {
         gsap.set($img, { x:-24, y:24 });
      }
   });

   $this.on('mouseenter', function(){
      up1.restart();
   });

   $this.on('mouseleave', function(){
      up2.restart();
   });
});


$('.sc-type .type-item a').on('mouseenter', function() {
   const $hoverImg = $(this).find('.hover-img');
   const $originalImgs = $hoverImg.find('img');
   let currentIndex = 0;
   let animationInterval;
   let cloneCount = 0;
   
   $originalImgs.css('transform', 'scale(0)');
   
   function createAndShowImage() {
      const $existingClones = $hoverImg.find('img[data-clone-id]');
      if ($existingClones.length >= 10) {
            $existingClones.first().remove();
      }
      const $clone = $originalImgs.eq(currentIndex).clone();
      
      $clone.attr('data-clone-id', cloneCount++);
      $hoverImg.append($clone);
      $clone.css({
         'transform': 'scale(0)',
         'transition': 'transform 0.3s ease-out',
         'position': 'absolute',
         'top': '0',
         'left': '0'
      });
      
      setTimeout(() => {
         $clone.css('transform', 'scale(1)');
      }, 100);

      currentIndex = (currentIndex + 1) % 3;
   }
   createAndShowImage();

   animationInterval = setInterval(createAndShowImage, 500);
   
   $(this).data('animationInterval', animationInterval);
});

$('.sc-type .type-item a').on('mousemove', function(e) {
   const rect = this.getBoundingClientRect();
   const x = e.clientX - rect.left;
   const y = e.clientY - rect.top;

   gsap.to($(this).find('.hover-img'), {
      x: x - $(this).outerWidth() / 2,
      y: y - $(this).outerHeight() / 2,
      duration: 0.3,
      ease: "power2.out"
   });
});

$('.sc-type .type-item a').on('mouseleave', function() {
   const $hoverImg = $(this).find('.hover-img');
   const $originalImgs = $hoverImg.find('img').not('[data-clone-id]');
   
   const animationInterval = $(this).data('animationInterval');
   if (animationInterval) {
      clearInterval(animationInterval);
      $(this).removeData('animationInterval');
   }
   

   $hoverImg.find('img[data-clone-id]').remove();

   $hoverImg.css({
      'transform': 'translate3d(0, 0, 0)',
      'transition': 'transform 0.3s ease'
   });
   

   $originalImgs.css({
      'transform': 'scale(0)',
      'transition': 'transform 0.3s ease'
   });
});

