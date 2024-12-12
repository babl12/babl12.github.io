$(document).ready(function(){
  $('.slider1').slick({
    slidesToShow: 5, // 5 полных слайда
    slidesToScroll: 1, // Перелистывание по 1 слайду
    centerMode: true, // Центрирование слайдов
    variableWidth: true, // Частично видимые слайды
    autoplay: true, // Автопрокрутка
    autoplaySpeed: 2000, // Интервал 5 секунд
    arrows: false, // Убираем стрелки
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      },
      {
        breakpoint: 768,
        settings: {
          slidesToShow: 2,
        }
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
        }
      }
    ]
  });
});
