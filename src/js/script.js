
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

     
  $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function() {
    $(this)
      .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
      .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
  });


    function toggleCatalogCards(className){  
      $(className).each( function(i){
        $(this).on('click', function(e){
          e.preventDefault();
          $('.catalog-item__main-info' ).eq(i).toggleClass('catalog-item__main-info_active');
          $('.catalog-item__secondary-info').eq(i).toggleClass('catalog-item__secondary-info_active');
        });
      });
    }

    toggleCatalogCards('.catalog-item__link_details');
    toggleCatalogCards('.catalog-item__link_back');

});
          