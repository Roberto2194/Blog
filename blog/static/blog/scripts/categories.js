// A JS code that makes the "filter" section
// of the "categories" page work. When the user
// clicks one the "filter options", only the 
// articles with the same "tag" are displayed
$(document).ready(function () {
    // Show all articles initially
    var newsArticleContainer = $('.news-article-container');
    newsArticleContainer.show();

    // Add a click event to the category links
    $('.category-link').click(function (event) {
        // Prevent the default behavior (e.g., prevent following the link)
        event.preventDefault();

        // Get the tag text of the clicked category
        var selectedTag = $(this).text();

        // If the clicked category is "ALL", show all articles
        if (selectedTag === 'ALL') {
            newsArticleContainer.show();
        } else {
            // Otherwise hide all articles and show only the ones with matching tag
            newsArticleContainer.hide().each(function () {
                // Get the tag text of each article
                var articleTag = $(this).find('.tag').text();
                if (articleTag === selectedTag) {
                    // Show the article if its tag matches the selected category
                    $(this).show();
                }
            });
        }
    });
});
