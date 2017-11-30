$(document).ready(function () {
    console.log('ready');
    hoverUnderline('.nav', 'ul>li', '.nav__underline', 200);
    tabs.init({
        container: '.tabs',
        nav: '.tabs-nav',
        pages: '.tabs-pages',
        activeClass: 'active',
        callbacks: tabCallbacks
    })
})

const tabCallbacks = {
    onToggle: function (tabs, options, list, index) {

    }
}