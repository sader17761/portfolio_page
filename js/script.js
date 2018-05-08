// this code will run when the document is ready...
$(document).ready(function() {
    // instructions on how to use 'superslides' is here: https://github.com/nicinabox/superslides
    $('#slides').superslides({
        animation: 'fade',
        play: 5000,
        pagination: false
    });

    // plain js file (selector, options)
    var typed = new Typed(".typed", {
        strings: ["Front End Web Developer", "Software Engineer", "Web Developer", "Forever Student"],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });
});

