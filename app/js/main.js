$(document).ready(function () {
    console.log('ready');
    hoverUnderline('.nav', 'ul>li', '.nav__underline', 200);
    tabs.init({
        container: '.tabs',
        nav: '.tabs-nav',
        pages: '.tabs-pages',
        activeClass: 'active',
        callbacks: {
            onInit: function (tabs, options) {
                underlineSlide.set(tabs.container.find('.tabs__underline'), tabs.nav.eq(0))
            },
            onToggleNav: function (tabs, options, index) {
                underlineSlide.move(tabs.container.find('.tabs__underline'), tabs.nav.eq(index), 300)
            }
        }
    });
    gallerySlider();
    testimonialsSlider();
    partnersSlider();
})