
$(document).ready(function(){
    $('.carousel__wrapper').slick({
        speed: 800,
        adaptiveHeight: true,
        prevArrow: '<button type="button" class="slick-prev"><img src="icons/prevArrow.png" alt="prevArrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="icons/nextArrow.png" alt="nextArrow"></button>',
/*         dotsClass: 'carousel__dots', */
        responsive: [
            {
              breakpoint: 992,
              settings: {
                infinite: true,
                dots: true,
                arrow: false
              }
            }
        ]
        
  });
});
          