const scrolls = (function () {
    const scrollTo = function (to) {
        $('html, body').animate({
            scrollTop: to
        }, 750);
    }
    return {
        scrollNav: function (navLinks) {
            navLinks.each(function () {
                $(this).on('click', function (e) {
                    e.preventDefault();
                    console.log($(this).attr('href'))
                })
            });
        },
        scrollToTop: function (el) {
            el.on('click', function (e) {
                e.preventDefault();
                scrollTop(0)
            })
        },
        scrollArrow: function (el) {
            el.on('click', function (e) {
                e.preventDefault();
                scrollTo($(window).height());
            })
        }
    }
})()

const scrollBtnShow = function (btn, breakpoint, activeClass) {
    const $window = $(window);
    const checkScroll = function () {
        if ($window.scrollTop() > breakpoint && !btn.hasClass(activeClass)) {
            console.log(activeClass)
            btn.addClass(activeClass);
        } else if ($window.scrollTop() <= breakpoint && btn.hasClass(activeClass)) {
            btn.removeClass(activeClass);
        }
    }
    checkScroll();
    $window.scroll(checkScroll);
}