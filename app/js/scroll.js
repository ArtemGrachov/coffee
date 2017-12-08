const scrollsInit = function (scrollTime) {
    const scrollTo = function (scrollTop) {
        $('html, body').animate({
            scrollTop: scrollTop
        }, scrollTime);
    }
    return {
        scrollNav: function (navLinks) {
            navLinks.each(function () {
                $(this).on('click', function (e) {
                    e.preventDefault();
                    scrollTo($($(this).attr('href')).offset().top);
                })
            });
        },
        scrollToTop: function (el) {
            el.on('click', function (e) {
                e.preventDefault();
                scrollTo(0)
            })
        },
        scrollArrow: function (el) {
            el.on('click', function (e) {
                e.preventDefault();
                scrollTo($(window).height());
            })
        }
    }
}

const scrollBtnShow = function (btn, breakpoint, activeClass) {
    const $window = $(window);
    const checkScroll = function () {
        if ($window.scrollTop() > breakpoint && !btn.hasClass(activeClass)) {
            btn.addClass(activeClass);
        } else if ($window.scrollTop() <= breakpoint && btn.hasClass(activeClass)) {
            btn.removeClass(activeClass);
        }
    }
    checkScroll();
    $window.scroll(checkScroll);
}