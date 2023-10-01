// little script for opening and closing the 
// side accessibility menu that is present on
// the top right of the navigation bar
$(document).ready(function () {
  // grab the side menu id
  var sideMenu = $("#side-menu");

  // set the on click listener for when 
  // the accessibility button is clicked
  $(".open-menu-button").click(function (event) {
    // prevent the default behaviour
    event.preventDefault();

    // open navigation menu
    sideMenu.width(350);
  });

  // set the on click listener for when
  // the 'x' of the side menu is clicked
  $(".close-menu-button").click(function (event) {
    // prevent the default behaviour
    event.preventDefault();

    // close navigation
    sideMenu.width(0);
  });

});

// script for when the width of the webpage 
// is smaller than a certain amount. In those
// cases a small hamburger menu appears and
// navigation through the webpage happens with
// links inside it.
$(document).ready(function () {
  // grab the side menu id
  var sideMenu = $("#small-screens-menu");

  // set the on click listener for when 
  // the accessibility button is clicked
  $(".open-small-screens-menu-button").click(function (event) {
    // prevent the default behaviour
    event.preventDefault();

    // open navigation menu
    sideMenu.width(350);
  });

  // set the on click listener for when
  // the 'x' of the side menu is clicked
  $(".close-menu-button").click(function (event) {
    // prevent the default behaviour
    event.preventDefault();

    // close navigation
    sideMenu.width(0);
  });

});

// Manages the font sizes in the accessibility side menu
// It uses the local storage in order to store and retrieve
// font sizes information
$(document).ready(function () {
  // Get the "font-size" button elements
  const fontSizeBigButton = $("#font-size-big");
  const fontSizeNormalButton = $("#font-size-normal");
  const fontSizeSmallButton = $("#font-size-small");

  // Get the <html> elements
  const h2Element = $("h2"); //36
  const h3Element = $("h3"); //28
  const h4Element = $("h4"); //24
  const h5Element = $("h5"); //18
  const chooseSubscription = $(".choose-subscription"); //70
  const accessibilityTitle = $("#accessibility-title"); //46
  const articleBriefElement = $(".article-brief"); //18

  // Check if font size preference exists in localStorage
  const fontSizePreference = localStorage.getItem("fontSizePreference");

  // If it does, then set the font size for all the elements
  if (fontSizePreference) {
    setFontSize(fontSizePreference);
  }

  // Click listener for the big font size button
  // The fonts sizes are increased by 4 
  fontSizeBigButton.click(function () {
    setFontSize(40);
    localStorage.setItem("fontSizePreference", 40);
  });

  // Click listener for the normal font size button
  // The font sizes are set to the normal size
  fontSizeNormalButton.click(function () {
    setFontSize(36);
    localStorage.setItem("fontSizePreference", 36);
  });

  // Click listener for the small font size button
  // The font sizes are decreased by 4
  fontSizeSmallButton.click(function () {
    setFontSize(32);
    localStorage.setItem("fontSizePreference", 32);
  });

  // Generic, reusable function for setting the font size
  // It takes the h2 font size as a reference, and calculates
  // the remaining elements font sizes accordingly
  function setFontSize(size) {
    h2Element.css("font-size", size + "px");
    h3Element.css("font-size", size - 8 + "px");
    h4Element.css("font-size", size - 12 + "px");
    h5Element.css("font-size", size - 18 + "px");
    articleBriefElement.css("font-size", size - 18 + "px");
    // keeping the accessibility title and choose subscription
    // at fixed size, because they are subtypes of h1
    accessibilityTitle.css("font-size", 46 + "px");
    chooseSubscription.css("font-size", 70 + "px");
  }
});


$(document).ready(function () {
  // Get the "font-size" button elements
  const lightModeButton = $("#light-mode");
  const darkModeButton = $("#dark-mode");

  var store = document.querySelector(':root');
  var value = getComputedStyle(store);

  /* LIGHT MODE */
  const lighTtextPrimary = value.getPropertyValue('--text-primary');
  const lightTextSecondary = value.getPropertyValue('--text-secondary');
  const lightTextTertiary = value.getPropertyValue('--text-tertiary');
  const lightTextQuaternary = value.getPropertyValue('--text-quaternary');
  const lightBackgroundPrimary = value.getPropertyValue('--background-primary');
  const lightBackgroundSecondary = value.getPropertyValue('--background-secondary');
  const lightBackgroundTertiary = value.getPropertyValue('--background-tertiary');
  const lightBackgroundQuaternary = value.getPropertyValue('--background-quaternary');

  /* DARK MODE */
  const darkTextPrimary = value.getPropertyValue('--dark-text-primary');
  const darkTextSecondary = value.getPropertyValue('--dark-text-secondary');
  const darkTextTertiary = value.getPropertyValue('--dark-text-tertiary');
  const darkTextQuaternary = value.getPropertyValue('--dark-text-quaternary');
  const darkBackgroundPrimary = value.getPropertyValue('--dark-background-primary');
  const darkBackgroundSecondary = value.getPropertyValue('--dark-background-secondary');
  const darkBackgroundTertiary = value.getPropertyValue('--dark-background-tertiary');
  const darkBackgroundQuaternary = value.getPropertyValue('--dark-background-quaternary');

  // Check if view mode preference exists in localStorage
  const viewModePreference = localStorage.getItem("viewModePreference");

   // If it does, then set the view mode for all the elements
  if (viewModePreference) {
    setViewMode(viewModePreference);
  }

  // Click listener for the big font size button
  // The fonts sizes are increased by 4 
  lightModeButton.click(function () {
    setViewMode('light');
    localStorage.setItem("viewModePreference", 'light');
  });

  // Click listener for the normal font size button
  // The font sizes are set to the normal size
  darkModeButton.click(function () {
    setViewMode('dark');
    localStorage.setItem("viewModePreference", 'dark');
  });

  function setViewMode(preference) {
    if (preference === 'light') {
      // Set CSS variables for light mode
      store.style.setProperty('--text-primary', lighTtextPrimary);
      store.style.setProperty('--text-secondary', lightTextSecondary);
      store.style.setProperty('--text-tertiary', lightTextTertiary);
      store.style.setProperty('--text-quaternary', lightTextQuaternary);

      store.style.setProperty('--background-primary', lightBackgroundPrimary);
      store.style.setProperty('--background-secondary', lightBackgroundSecondary);
      store.style.setProperty('--background-tertiary', lightBackgroundTertiary);
      store.style.setProperty('--background-quaternary', lightBackgroundQuaternary);

      // Select all elements with the class "checkmark"
      $(".checkmark").each(function () {
        // Change the src attribute to "/images/checkmark.svg"
        $(this).attr("src", checkmark);
      });
    } else if (preference === 'dark') {
      // Set CSS variables for dark mode
      store.style.setProperty('--text-primary', darkTextPrimary);
      store.style.setProperty('--text-secondary', darkTextSecondary);
      store.style.setProperty('--text-tertiary', darkTextTertiary);
      store.style.setProperty('--text-quaternary', darkTextQuaternary);

      store.style.setProperty('--background-primary', darkBackgroundPrimary);
      store.style.setProperty('--background-secondary', darkBackgroundSecondary);
      store.style.setProperty('--background-tertiary', darkBackgroundTertiary);
      store.style.setProperty('--background-quaternary', darkBackgroundQuaternary);

      // Select all elements with the class "checkmark"
      $(".checkmark").each(function () {
        // Change the src attribute to "/images/white-checkmark.svg"
        $(this).attr("src", white_checkmark);
      });
    }
  }
});
