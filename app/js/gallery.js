const gallerySlider = function() {
    const gallerySlider = $('.gallery-slider-list');
    const activeNumber = $('#galleryActiveNumber'),
        totalSlides = $('#galleryTotal'),
        setActiveNumber = function(number) {
            activeNumber.text(number);
        }
    totalSlides.text(gallerySlider.children('li').length);
    gallerySlider
        .on('init', function(e, slick) {
            setActiveNumber(slick.slideCount)
        })
        .slick({
            adaptiveHeight: true,
            centerMode: true,
            variableWidth: true,
            autoplaySpeed: 2000,
            autoplay: true,
            touchThreshold: 20,
            prevArrow: $('.gallery-slider').find('.gallery-slider__toggle_prev'),
            nextArrow: $('.gallery-slider').find('.gallery-slider__toggle_next')
        })
        .on('beforeChange', function(e, slick) {
            setActiveNumber(slick.currentSlide + 1)
        })
}