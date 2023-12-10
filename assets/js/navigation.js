!function() {
    function initNavMenuToggle(wrapperId, navId) {
        var wrapper = document.querySelector(wrapperId);
        var button = wrapper.querySelector('.menu-toggle');
        var nav = document.querySelector(navId);

        button.addEventListener('click', function() { 
            nav.classList.toggle('toggled-on');
            button.setAttribute('aria-expanded', nav.classList.contains('toggled-on'));
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        initNavMenuToggle(".primary-navigation-wrap", ".main-navigation")
    })
}();
