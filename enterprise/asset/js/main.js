

$('#header .lang-area').click(function(){
    $('#header .lang-list ').toggleClass('show');
})


const visual1 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-visual",
        start:"0% 0%",
        end:"100%` 100%",
        // markers:true,
        scrub:0,
        onLeave:function(){
            $('.scroll-down').addClass('hide');
        },
        onEnterBack:function(){
            $('.scroll-down').removeClass('hide');
        }
    }

})
visual1
.to('.sc-visual .dimmed',{
    opacity:1
})
.to('.sc-visual .visual-text .text:nth-child(1)',{
    opacity:1,
},"<")

.to('.sc-visual .visual-text .text:nth-child(1)',{
    opacity:0,
    onStart:function(){
        $('#header').addClass('show')
    },
    onReverseComplete:function(){ 
        $('#header').removeClass('show')
    }
})
.to('.sc-visual .visual-text .text:nth-child(2)',{
    opacity:1
})
.to('.sc-visual .visual-text .text:nth-child(2)',{
    opacity:0
})
.to('.sc-visual .visual-text .text:nth-child(3)',{
    opacity:1
})
.to('.sc-visual .visual-text .text:nth-child(3)',{
    opacity:0
})
.to('.sc-visual .visual-text .text:nth-child(4)',{
    opacity:1
})


const showcase1 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-showcase",
        start:"0% 0%",
        end:"100%` 100%",
        // markers:true,
        scrub:0,
        invalidateOnRefresh:true
    }
})
showcase1.to('.sc-showcase .dimmed',{
    opacity: 1
},'a')
    
showcase1.from('.sc-showcase .showcase-text .text-cont',{
    opacity:0
},'a')
showcase1.to('.sc-showcase .showcase-text .text:nth-child(1)',{
    xPercent:100
},'b')
showcase1.to('.sc-showcase .showcase-text .text:nth-child(3)',{
    xPercent:-100
},'b')
showcase1.to('.sc-showcase .dimmed',{
    opacity: 0
},'b')
showcase1.to('.sc-showcase .showcase-text .text-cont',{
    opacity:0
})

showcase1.to('.sc-showcase .showcase-img .img:nth-child(3)',{
    height: 0
})
showcase1.to('.sc-showcase .showcase-img .img:nth-child(2)',{
    height: 0
})

showcase1.from('.sc-showcase .showcase-text .showcase-desc',{
    opacity:0
},'c')
showcase1.to('.sc-showcase .dimmed',{
    opacity: 1
},'c')


gsap.to('.sc-prove',{
    scrollTrigger:{
        trigger:".sc-prove",
        start:"0% 80%",
        end:"100% 80%",
        marker:true,
        scrub:0,
    },
    '--prove1':1
})


ScrollTrigger.create({
    trigger:".sc-possible",
    start:"0% 50%",
    // markers:true,
    endTrigger:".sc-service",
    end:"100% 50%",
    toggleClass:{
        targets:"body",
        className:"dark"
    }
})


ScrollTrigger.create({
    trigger:".sc-worker",
    start:"0% 0%",
    // markers:true,
    endTrigger:".sc-gallery",
    end:"100% 50%",
    toggleClass:{
        targets:"#header",
        className:"active"
    }
})
ScrollTrigger.create({
    trigger:".sc-asset",
    start:"0% 40%",
    // markers:true,
    endTrigger:".sc-ground",
    end:"100% 50%",
    toggleClass:{
        targets:"#header",
        className:"active"
    }
})

gsap.to('.sc-possible .content',{
    scrollTrigger:{
        trigger:".sc-possible",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
        invalidateOnRefresh:true
    },
    xPercent:-100,
    x:function(){
        return window.innerWidth;
    }
})


const feature1 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-feature",
        start:"0% 90%",
        end:"100% 40%",
        // markers:true,
        scrub:0,
    }
})
feature1.to('.sc-feature .cont .item',{
    xPercent:0,
    x:0
})
feature1.to('.sc-feature .title',{
    delay:1,
    opacity:1,
    onStart:function(){
        $('.sc-feature .cont').addClass('blur')
    },
    onReverseComplete:function(){  
        $('.sc-feature .cont').removeClass('blur')
    }
})


gsap.defaults({
    ease:'none'
})

// 1111
ScrollTrigger.matchMedia({
    "(min-width: 1441px)": function() {
    const service1 = gsap.timeline({
        scrollTrigger:{
            trigger:"#service1",
            start:"0% 0%",
            end:"100% 100%",
            // markers:true,
            scrub:0,
            invalidateOnRefresh:true
        },
}) 
    service1
    .to('#service1 .content',1,{
        x:function(){
            return $('.sc-service .cont-head').innerWidth() * -1
        }
    })
    .to('#service1 .card-item:nth-child(2)',1,{
        xPercent: -100,
        x:40*-1 
    },'a')
    .to('#service1 .card-item:nth-child(3)',1,{
        xPercent: -100 *2,
        x:40*-2
    },'a')
    .to('#service1 .card-item:nth-child(4)',1,{
        xPercent: -100 *3,
        x:40*-3
    },'a')
    .to('#service1 .card-item .before',0.5,{
        opacity:0
    },'b-=1') 
    .to('#service1 .card-item .after',0.5,{
        opacity:1
    },'b-=0.5')
    .to('#service1 .card-item .after',{
        opacity:0
    })
}, 

    "(max-width: 1440px)": function() {
    const service1 = gsap.timeline({
        scrollTrigger: {
        trigger: "#service1",
        start: "0% 0%",
        end: "100% 100%",
        scrub: 0,
        invalidateOnRefresh: true
      },
    });
    service1
    .to('#service1 .content',1,{
        x:function(){
            return $('.sc-service .cont-head').innerWidth() * -1
        }
    })
    .to('#service1 .card-item:nth-child(2)',1,{
        xPercent: -100,
        x:24*-1 
    },'a')
    .to('#service1 .card-item:nth-child(3)',1,{
        xPercent: -100 *2,
        x:24*-2
    },'a')
    .to('#service1 .card-item:nth-child(4)',1,{
        xPercent: -100 *3,
        x:24*-3
    },'a')
    .to('#service1 .card-item .before',0.5,{
        opacity:0
    },'b-=1') 
    .to('#service1 .card-item .after',0.5,{
        opacity:1
    },'b-=0.5')
    .to('#service1 .card-item .after',{
        opacity:0
    })
  }
});


// 2222
ScrollTrigger.create({
    trigger:"#service2",
    start:"0% 0%",
    end:"100% 100%",
    // markers:true,
    scrub:0,
    onEnter:function(){
        $('#service1').addClass('hide');
        $('#service2').removeClass('hide');
    },
    onLeaveBack:function(){
        $('#service1').removeClass('hide');
        $('#service2').addClass('hide');
    }
})

ScrollTrigger.create({
    trigger:"#service3",
    start:"0% 0%",
    end:"100% 100%",
    // markers:true,
    scrub:0,
    onEnter:function(){
        $('#service2 .card-item').addClass('hide');
         $('#service3 .card-item.line').removeClass('hide');
    },
    onLeaveBack:function(){
        $('#service2 .card-item').removeClass('hide');
         $('#service3 .card-item.line').addClass('hide');
    }
})


// 3333
ScrollTrigger.matchMedia({
    "(min-width: 1441px)": function() {
const service3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#service3",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
        invalidateOnRefresh:true,
    },
}) 
service3
.to('#service3 .card-item:nth-child(2)',1,{
    xPercent: -100,
    x:40*-1 
},'a')
.to('#service3 .card-item:nth-child(3)',1,{
    xPercent: -100 *2,
    x:40*-2
},'a')
.to('#service3 .card-item:nth-child(4)',1,{
    xPercent: -100 *3,
    x:40*-3
},'a')
.to('#service3 .cont-last2',1,{
    opacity: 1,
})
    },
     "(max-width: 1440px)": function() {
        const service3 = gsap.timeline({
    scrollTrigger:{
        trigger:"#service3",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
        invalidateOnRefresh:true,
        
    },
}) 
service3
.to('#service3 .card-item:nth-child(2)',1,{
    xPercent: -100,
    x:24*-1 
},'a')
.to('#service3 .card-item:nth-child(3)',1,{
    xPercent: -100 *2,
    x:24*-2
},'a')
.to('#service3 .card-item:nth-child(4)',1,{
    xPercent: -100 *3,
    x:24*-3
},'a')
.to('#service3 .cont-last2',1,{
    opacity: 1,
})
     }
    })



const service4 = gsap.timeline({
  scrollTrigger: {
    trigger: "#service4",
    start: "0% 0%",
    end: "100% 100%",
    // markers: true,
    scrub: 0,
    invalidateOnRefresh: true,
    onEnter: function() {
      $('#service3 .card-item').addClass('hide');
      $('#service4').removeClass('hide');
    },
    onLeaveBack: function() {
      $('#service3 .card-item').removeClass('hide');
      $('#service4').addClass('hide');
    }
  },
});

service4.from('#service4 .right p', {
  opacity: 0,
  duration: 1,
  ease: "power2.out"
}, 'a');



gsap.to('.sc-global',{
    scrollTrigger:{
        trigger:".sc-global",
        start:"0% 80%",
        end:"100% 80%",
        // markers:true,
        scrub:0,
    },
    '--global1':1
})

gsap.to('.sc-finance .content',{
    scrollTrigger:{
        trigger:".sc-finance",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
        invalidateOnRefresh:true,
        toggleClass:{
            targets:".sc-finance",
            className:"on"
        },
        onUpdate:function(data){
            bar=data.progress;
            
            if(bar >= 0.5){
                $('.sc-finance .next .next-text').addClass('on')
            }else{
                 $('.sc-finance .next .next-text').removeClass('on')
            }
        }
    },
    xPercent:-100,
    x:function(){
        return window.innerWidth -100;
    }
})

const creator1 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-creator",
        start:"0% 0%",
        end:"100%` 100%",
        // markers:true,
        scrub:0,
    }
})
creator1
.to('.sc-creator .text',{
    opacity: 1,
},'a')
.to('.sc-creator .scroll-down',{
    opacity: 1,
},'a')
.to('.sc-creator .text',0.5,{
    opacity: 0,
},'b')
.to('.sc-creator .scroll-down',0.5,{
    opacity: 0,
},'b')

gsap.to('.sc-direction .content',{
    scrollTrigger:{
        trigger:".sc-direction",
        start:"0% 0%",
        end:"100% 100%",
        // markers:true,
        scrub:0,
        invalidateOnRefresh:true
    },
    xPercent:-100,
    x:function(){
        return window.innerWidth -100;
    }
})
const join1 = gsap.timeline({
    scrollTrigger:{
        trigger:".sc-join",
        start:"0% 90%",
        end:"100%` 100%",
        // markers:true,
        scrub:0,
        onLeave:function(){
            $('.sc-join').addClass('active');
        },
        onEnterBack:function(){
            $('.sc-join').removeClass('active');
        }
    }
})


ScrollTrigger.create({
    trigger:".sc-showcase",
    start:"0% 0%",
    // markers:true,
    endTrigger:".sc-join",
    end:"100% 100%",
    toggleClass:{
        targets:".scroll-top",
        className:"show"
    },
})

let lastScroll = 0;

$(window).scroll(function(){
    curr = $(this).scrollTop();
    if(curr> lastScroll){
        $('.scroll-top').addClass('show');
    }else{
        $('.scroll-top').removeClass('show');
    }
    lastScroll = curr;
})


    $('.scroll-top').click(function(e){
      e.preventDefault();
      window.scrollTo({top:0, behavior:"smooth"})
    })