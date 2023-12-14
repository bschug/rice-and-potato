!function() {
    function initTags() {
        var tagListEntries = document.querySelectorAll(".tag-list .tag-button");
        tagListEntries.forEach((entry) => {
            entry.addEventListener('click', function() {
                var enabledBefore = entry.classList.contains('toggled-on');
                disableAllPostLinks();

                if (!enabledBefore) {
                    entry.classList.add('toggled-on');
                    enablePostLinksForTag(entry.textContent);
                }
            })
        });
    }

    function disableAllPostLinks() {
        var allPostLinks = document.querySelectorAll(".post-links li");
        allPostLinks.forEach((postLink) => { postLink.classList.remove('toggled-on'); });

        var allButtons = document.querySelectorAll(".tag-list .tag-button");
        allButtons.forEach((button) => { button.classList.remove('toggled-on'); });
    }

    function enablePostLinksForTag(tag) {
        var query = ".post-links .tag-" + tag;
        var postLinks = document.querySelectorAll(query);
        postLinks.forEach((postLink) => {
            postLink.classList.add('toggled-on');
        });
    }

    document.addEventListener("DOMContentLoaded", function() {
        initTags();
    })
}();