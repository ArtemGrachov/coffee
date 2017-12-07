const gallerySlider = function () {
    $('.gallery-slider-list').slick({
        adaptiveHeight: true,
        centerMode: true,
        variableWidth: true,
        autoplaySpeed: 2000,
        autoplay: true,

        prevArrow: $('.gallery-slider').find('.gallery-slider__toggle_prev'),
        nextArrow: $('.gallery-slider').find('.gallery-slider__toggle_next')
    })
}