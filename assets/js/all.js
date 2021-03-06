$(document).ready(function () {
  $('.parallax').parallax();
  $('.sidenav').sidenav();
  $(".dropdown-trigger").dropdown();
  $('.pushpin').pushpin();
  $('.dropdown-trigger2').dropdown({
    inDuration: 300,
    outDuration: 225,
    constrain_width: false, // Does not change width of dropdown to that of the activator
    hover: true, // Activate on hover
    // gutter: ($('.dropdown-content').width() * 3) / 2.5 + 2, // Spacing from edge
    belowOrigin: false, // Displays dropdown below the button
    alignment: 'left' // Displays dropdown with edge aligned to the left of button
  }
  );
});