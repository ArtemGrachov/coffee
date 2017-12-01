const testimonialsSlider = function () {
    $('.testimonials-slider-list')
        .slick({
            dots: true,
            dotsClass: 'testimonials-slider-dots',
            nextArrow: $('.testimonials-slider__toggle_next'),
            prevArrow: $('.testimonials-slider__toggle_prev')
        })
    console.log($('.testimonials-slider__toggle_next'));
}