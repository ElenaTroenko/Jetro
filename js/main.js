$(function () {
  $('.slider__inner').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: true,
    adaptiveHeight: true,
    mobileFirst: true,
    fade: true,
    responsive: [
      {
        breakpoint: 0,
        settings: {
          arrows: false,
        }
      },
      {
        breakpoint: 600,
        settings: {
          arrows: true,
        }
      },
    ],
    asNavFor: '.slider__bottom'
  });
  $('.slider__bottom').slick({
    slidesToShow: 6,
    slidesToScroll: 1,
    asNavFor: '.slider__inner',
    focusOnSelect: true,
    variableWidth: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 900,
        settings: {
          slidesToShow: 4,
          slidesToScroll: 1
        }
      },
    ]
  });
  $('.header__menu-btn').on('click', function () {
    $('.header__list').slideToggle();
  });
});






