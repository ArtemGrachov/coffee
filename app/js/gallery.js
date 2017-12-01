const gallerySlider = function () {
    $('.gallery-slider-list').slick({
        adaptiveHeight: true,
        centerMode: true,
        variableWidth: true,
        prevArrow: $('.gallery-slider').find('.gallery-slider__toggle_prev'),
        nextArrow: $('.gallery-slider').find('.gallery-slider__toggle_next')
    })
}