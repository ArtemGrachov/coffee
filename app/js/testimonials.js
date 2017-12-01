const testimonialsSlider = function () {
    const slider = $('.testimonials-slider')
    slider
        .find('.testimonials-slider-list')
        .slick({
            dots: true,
            dotsClass: 'testimonials-slider-dots',
            nextArrow: slider.find('.slider__toggle_next'),
            prevArrow: slider.find('.slider__toggle_prev')
        })
}