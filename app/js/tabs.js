const tabs = (function () {
    const toggleActive = function (list, index, options, tabs) {
        list
            .eq(index)
            .addClass(options.activeClass)
            .siblings()
            .removeClass(options.activeClass);

        if (options.callbacks && options.callbacks.onToggle) {
            options.callbacks.onToggle(tabs, options, list, index);
        }
    }
    return {
        init: function (options) {
            $(options.container)
                .each(function () {
                    const $this = $(this),
                        tabs = {
                            container: $this,
                            nav: $this.find(options.nav).find('>ul>li'),
                            pages: $this.find(options.pages).find('>ul>li')
                        }
                    const initActive = tabs.nav.find('.' + options.activeClass)
                    if (!initActive.length) {
                        tabs
                            .nav
                            .eq(0)
                            .addClass(options.activeClass)
                        tabs
                            .pages
                            .eq(0)
                            .addClass(options.activeClass)
                    }
                    tabs.nav
                        .on('click', function (e) {
                            e.preventDefault();
                            const index = $(this).index();
                            toggleActive(tabs.nav, index, options, tabs);
                            toggleActive(tabs.pages, index, options, tabs);
                        })
                    if (options.callbacks && options.callbacks.onInit) {
                        options.callbacks.onInit(tabs, options);
                    }
                })
        }
    }
})();