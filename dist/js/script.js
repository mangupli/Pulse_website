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

    //opening and closing modal windows



    $('[data-modal=consultation]').on('click', ()=>{
      $('.overlay, #consultation').fadeIn('slow');
    });

    $('.modal-win__close').on('click', ()=>{
      $('.overlay, #consultation, #order, #approveOrder').fadeOut('slow');
    });

    /** 
     * TODO: After dowloading data form the server you * need to change the class of button_size_s
     * to more semantic meaning
     */

    //showing the appropriate name on the modal window

     $('.button_size_s').each(function(i) {
        $(this).on('click', ()=>{
          let productName = $('.catalog-item__title').eq(i).text();

          $('#order .modal-win__descr').text(productName);
          $('.overlay, #order').fadeIn('slow');
        });
     }); 

    

     function validateForms(className){
      $(className).validate({
        rules: {
          name: {
            required: true,
            minlength: 2
          },
          phone:{
            required: true,
            minlength: 9,
            maxlength: 11
          },
          email: {
            required: true,
            email: true
          }
        },
        messages: {
          name: {
            required: "Введите своё имя",
            minlength: "Разве бывает имя из одной буквы?"
          },
          phone:{
            required: "Введите свой номер телефона",
            minlength: "Минимальное кол-во цифр: 9",
            maxlength: "Максимальное кол-во цифр: 11"
          },
          email: {
            required: "Введите свою электронную почту",
            email: "Введите свою электронную почту"
          }
        }
      });
     }

     validateForms('#order form');
     validateForms('#main-page-form');
     validateForms('#consultation form');

     $("input[name=phone]").mask("+7 (999) 999-99-99");

     //smooth scroll + page up home
     $(window).on('scroll', function(){
        if($(this).scrollTop() > 1300){
          $('.arrowUp').fadeIn();
        }
        else{
          $('.arrowUp').fadeOut();
        }
     });

     new WOW().init();

});
          