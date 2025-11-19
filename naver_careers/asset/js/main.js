$('.nav-item.lang').click(function(e){
    e.preventDefault();

    $('.lang-list').toggleClass('on');
})

$('.nav-item.first').hover(
    function () {
    $('.menu-area').toggleClass('on');
    $(this).closest('header').toggleClass('on')
    }
);


$('#header .last-box').click(function(){
    $('.last').toggleClass('on');
})

$('.side-nav .side-item.first').click(function(e){
    e.preventDefault();
    $(this).toggleClass('on');
    $('.side-nav .sub-list').toggleClass('on');
})

$('.last-box').click(function(){
    $('#header .side-nav').toggleClass('show');
})

$('#header .side-nav .side-list.lang .side-item a').click(function(e){
    e.preventDefault();
    $('#header .side-nav .side-list.lang .text').removeClass('active');

    $(this).find('.text').addClass('active');
});

$('.btn-more').on('click', function () {
    $(this).siblings('.sub-box').toggle(); 
    $(this).find('.down').toggleClass('rotate');
});

$('.btn-more.on').on('click', function () {
    $(this).siblings('.sub-list').toggle(); 
});

$(document).on('change', '.checkbox.all input[type="checkbox"]', function() {
    let Check = $(this).prop('checked');
    $(this).closest('.sub-list').find('.item input[type="checkbox"]').prop('checked', Check);
});



$('.btn-clear').click(function() {
    $('.checkbox input[type="checkbox"]').prop('checked', false);
});

var swiper = new Swiper(".sc-visual .main-slide", {
    autoplay:{
        delay:1000,
    }
});

$('.sc-search .select-area select').change(function() {
    $(this).css('color','#000');    
})

$('.btn-search').click(function(){
    $('.sc-search .group-mobile').addClass('show');
    $('body').addClass('scroll-hide');
})
$('.sc-search .btn-close').click(function(){
    $('.sc-search .group-mobile').removeClass('show');
    $('body').removeClass('scroll-hide')
})


var swiper2 = new Swiper(".sc-interview .main-slide2", {
    slidesPerView:1,
    spaceBetween:30,
    navigation: {
        nextEl: ".btn.next",
        prevEl: ".btn.prev",
    },
    breakpoints:{
        768:{
            slidesPerView:1.1,
        }
    }
});

$('.sc-interview .group-control .btn.next').click(function(){
    $('.sc-interview .group-control .btn.prev').addClass('on');
})
$('.sc-benefits .group-control .btn.next').click(function(){
    $('.sc-benefits .group-control .btn.prev').addClass('on');
})

var swiper3 = new Swiper(".sc-benefits .main-slide3", {
    slidesPerView: 1,
    spaceBetween:30,
    navigation: {
        nextEl: ".btn.next",
        prevEl: ".btn.prev",
    },
    breakpoints:{
        768:{
            slidesPerView:3,
        }
    }
});

$('#footer .footer-link .btn-link').click(function(){
    $('#footer .footer-link .link-list').toggleClass('on');
    $(this).toggleClass('active')
})
