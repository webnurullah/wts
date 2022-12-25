document.addEventListener("DOMContentLoaded", function(){
    var myOffcanvas = document.getElementById('offcanvasExample');
    var bsOffcanvas = new bootstrap.Offcanvas(myOffcanvas);
    document.getElementById("OpenMenu").addEventListener('click',function (e){
      e.preventDefault();
      e.stopPropagation();
      bsOffcanvas.toggle();
    });
  });

function owlInitialize() {
    if ($(window).width() < 768) {
        $('#logo-slider-box').addClass("owl-carousel");
        $('#logo-slider-box').owlCarousel({
            loop:false,    
            margin: 20,  
            autoWidth:true,
            nav: false,
            navText: ["<i class='fa fa-angle-left'></i>", "<i class='fa fa-angle-right'></i>"],
            dots: false,        
          
        });
    }else{
        $('#logo-slider-box').owlCarousel('destroy');
        $('#logo-slider-box').removeClass("owl-carousel");
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
        dots: true,   
        responsiveClass:true,
        responsive:{
            0:{
                autoWidth:true,
                dots: true,   
                nav:false,
            },
            768:{
                autoWidth:true,
                nav:false,
                dots: true,   
            },
            992:{
                items:3,
                loop:false,
                nav:false,
                dots: true,   
            },
            1400:{
                items:3,
                loop:false,
                nav:true,
                dots: true,   
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