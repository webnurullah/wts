function owlInitialize() {
    if ($(window).width() < 768) {
        $('.logo-slider-box').addClass("owl-carousel");
        $('.owl-carousel').owlCarousel({
            loop:false,    
            margin: 20,  
            autoWidth:true,
            nav: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false,        
          
        });
    }else{
        $('.owl-carousel').owlCarousel('destroy');
        $('.logo-slider-box').removeClass("owl-carousel");
    }
    }
    $(document).ready(function(e) {
    owlInitialize();
    });
    $(window).resize(function() {
    owlInitialize();
    });

$(document).ready(function(){
    $('#speaker-slider').owlCarousel({
        loop:true,
        margin:45,
        nav:true,
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
                nav:false
            },
            992:{
                items:2,
                nav:false
            },
            1000:{
                items:3,
                loop:false,
                nav:true
            }
        }
    })
    $('#owl-carousel-blog').owlCarousel({
        loop:false,
        margin:60,
        nav:true,
        dots: false,    
        responsiveClass:true,
        responsive:{
            0:{
                items:1,
              
            },
            600:{
                items:2,
                margin:30,
            },
            1000:{
                items:3,
            }
        }
    })


});