$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    margin:50,
    responsiveClass:true,
    responsive:{
        0:{
            items:1,
            nav:true,
            loop: true
        },
        768:{
            items:2,
            nav:true,
            loop: true
        },
        1200:{
            items:3,
            nav:true
        }
    }
})
});