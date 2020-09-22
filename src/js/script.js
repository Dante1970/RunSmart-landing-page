$(document).ready(function () {
    $('.carousel__inner').slick({
        speed: 1200,
        // adaptiveHeight: true,
        autoplay: true,
        autoplaySpeed: 2000,
        prevArrow: '<button type="button" class="slick-prev"><img src="/img/icons/prev-arrow.svg" alt="prev-arrow"></button>',
        nextArrow: '<button type="button" class="slick-next"><img src="/img/icons/next-arrow.svg" alt="next-arrow"></button>',
        responsive: [
            {
              breakpoint: 768,
              settings: {
                dots: true,
                arrows: false
              }
            }
          ]
      });
});