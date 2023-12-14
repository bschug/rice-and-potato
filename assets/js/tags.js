!function() {
    function initTags() {
        var tagFromUrl = getTagFromUrl();

        var tagListEntries = document.querySelectorAll(".tag-list .tag-button");
        tagListEntries.forEach((entry) => {
            var entryTag = entry.textContent;

            entry.addEventListener('click', function() {
                var enabledBefore = entry.classList.contains('toggled-on');
                disableAllPostLinks();

                if (!enabledBefore) {
                    entry.classList.add('toggled-on');
                    enablePostLinksForTag(entryTag);
                }
            });

            if (entryTag === tagFromUrl) {
                entry.classList.add('toggled-on');
                enablePostLinksForTag(entryTag);
            }
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

    function getTagFromUrl() {
        var hash = window.location.hash;
        if (hash.length <= 1) {
            return null;
        }

        return hash.substring(1);
    }

    document.addEventListener("DOMContentLoaded", function() {
        initTags();
        window.location.hash = '';
    })
}();