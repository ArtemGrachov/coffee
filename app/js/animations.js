const underlineSlide = (function() {
    return {
        move: function(underline, toItem, animationSpeed) {
            underline.stop();
            underline.animate({
                'left': (toItem.position().left + toItem.width() / 2) - underline.width() / 2
            }, animationSpeed)
        },
        set: function(underline, toItem) {
            underline.stop();
            underline.css({
                'left': (toItem.position().left + toItem.width() / 2) - underline.width() / 2
            })
        }
    }
})();