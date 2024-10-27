document.addEventListener("DOMContentLoaded", function () {
  $('.slider').slick({
      slidesToShow: 3,
      slidesToScroll: 3,
      arrows: true,
      dots: true,
      prevArrow: '<button type="button" class="slick-prev"></button>',
      nextArrow: '<button type="button" class="slick-next"></button>',
      responsive: [
          {
              breakpoint: 768,
              settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
              }
          }
      ]
  });
});
