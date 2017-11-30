const hoverUnderline = function (navSelector, itemSelector, underlineSelector, animationSpeed) {
    const navs = $(navSelector);

    navs.each(function () {
        const nav = $(this),
            item = nav.find(itemSelector),
            underline = nav.find(underlineSelector);
        item.hover(function () {
            underlineSlide(underline, $(this), animationSpeed)
        })
    });
}