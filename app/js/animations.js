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
})()

const tabAnimation = function(newTab, oldTab, speed) {
    newTab.stop();
    oldTab.stop();
    newTab.css({ 'display': 'none' });
    oldTab.css({ 'display': 'block' });
    oldTab.animate({
        'opacity': 0
    }, speed, () => {
        newTab.css({ 'display': 'block', 'opacity': 0 });
        oldTab.css({ 'display': 'none' });
        newTab.animate({ 'opacity': 1 })
    })
}