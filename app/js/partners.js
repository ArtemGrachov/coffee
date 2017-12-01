const partnersSlider = function () {
    const slider = $('.partners-slider');
    slider
        .find('.partners-slider-list')
        .slick({
            slidesToShow: 6,
            nextArrow: slider.find('.slider__toggle_next'),
            prevArrow: slider.find('.slider__toggle_prev')
        })
}