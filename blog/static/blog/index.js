// JS code that makes the "back up" button
// work. It appears when the user has scrolled
// the page beyond a certain value, and when
// clicked brings the user to the top of the page
$(document).ready(function () {
    // grab the back up button from the html
    var backUpButton = $('#back-up-button');

    // setup the callback for the scroll action
    $(window).scroll(function () {

        // check whether the scrolling from the top is beyond a certain value
        // and add or remove the css 'show' class accordingly
        if ($(window).scrollTop() > 700) {
            backUpButton.addClass('show');
        } else {
            backUpButton.removeClass('show');
        }
    });

    // go back on top of the page when the button is clicked
    backUpButton.on('click', function (event) {
        // prevent the default behaviour
        event.preventDefault();

        // go back on top of the page with animation
        $('html, body').animate({ scrollTop: 0 }, 'linear');
    });
});
