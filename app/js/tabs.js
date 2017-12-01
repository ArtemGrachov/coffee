const tabs = (function () {
    const toggleActive = function (list, index, activeClass) {
        const oldIndex = list.find('.' + activeClass).index();
        list
            .eq(index)
            .addClass(activeClass)
            .siblings()
            .removeClass(activeClass);
        return oldIndex;
    }
    const toggleNav = function (index, options, tabs) {
        const oldIndex = toggleActive(tabs.nav, index, options.activeClass);
        if (options.callbacks && options.callbacks.onToggleNav) {
            options.callbacks.onToggleNav(tabs, options, index, oldIndex);
        }
    }
    const togglePage = function (index, options, tabs) {
        const oldIndex = toggleActive(tabs.pages, index, options.activeClass)
        if (options.callbacks && options.callbacks.onTogglePage) {
            options.callbacks.onTogglePage(tabs, options, index, oldIndex);
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
                            toggleNav(index, options, tabs);
                            togglePage(index, options, tabs);
                        })
                    if (options.callbacks && options.callbacks.onInit) {
                        options.callbacks.onInit(tabs, options);
                    }
                })
        }
    }
})();