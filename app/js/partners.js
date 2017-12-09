const partnersSlider = function() {
    const slider = $('.partners-slider');
    slider
        .find('.partners-slider-list')
        .slick({
            slidesToShow: 6,
            slidesToScroll: 6,
            autoplaySpeed: 2000,
            touchThreshold: 20,
            autoplay: true,
            nextArrow: slider.find('.slider__toggle_next'),
            prevArrow: slider.find('.slider__toggle_prev')
        })
}