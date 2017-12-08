$(document).ready(function () {
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
            },
            onTogglePage: function (tabs, options, index, oldIndex) {}
        }
    });
    gallerySlider();
    testimonialsSlider();
    partnersSlider();
    const scrollToTopButton = $('.scroll-to-top');
    scrollBtnShow(scrollToTopButton, $(window).height() / 2, 'active');
    const scrolls = scrollsInit(1000);
    scrolls.scrollNav($('.nav a'));
    scrolls.scrollToTop(scrollToTopButton);
    scrolls.scrollArrow($('.top__scroll'));
})