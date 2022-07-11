AOS.init();

new Swiper('.image-slider', {
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev'
    },

    scrollbar: {
        el: '.swiper-scrollbar',
        draggable: true,
    },
    slidesPerView:3,
    spaceBetween: 10,
});

$(document).ready(function() {
    $("#up__img").click(function(){
      $("html, body").animate({
        scrollTop: $($(this).attr("href")).offset().top + "px"
      }, {
        duration: 1000,
        easing: "swing"
      });
      return false;
    });
  });

