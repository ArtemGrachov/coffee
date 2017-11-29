const underlineSlide = function (underline, toItem, animationSpeed) {
    underline.stop();
    underline.animate({
        'left': toItem.offsetLeft
    }, animationSpeed)
}