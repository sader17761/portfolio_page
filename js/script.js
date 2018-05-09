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
        strings: ["Front-End Web Developer,", "Software Engineer,", "Web Developer,", "UI Developer,", "and", "lifetime Student."],
        typeSpeed: 70,
        loop: true,
        startDelay: 1000,
        showCursor: false
    });

    // https://owlcarousel2.github.io/OwlCarousel2/
    $('.owl-carousel').owlCarousel({
        loop:true,
        items: 4,
        responsive:{
            0:{
                items:1
            },
            480:{
                items:2
            },
            768:{
                items:3
            },
            938:{
                items:4
            }
        }
    });

    

    // skillsTopOffset now contains the location of the '.skillsSection'
    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsSectionOffset = $(".statsSection").offset().top;
    var countupFinished = false;

    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $(function() {
                $('.chart').easyPieChart({
                    //your options goes here
                    easing: 'easeInOut',
                    barColor: '#fff',
                    trackColor: '#2c3e50',
                    scaleColor: false,
                    lineWidth: 4,
                    size: 152,
                    onStep: function(from, to, percent) {
                        $(this.el).find('.percent').text(Math.round(percent));
                    }
                });
            });
        }

        if(!countupFinished && window.pageYOffset > statsSectionOffset - $(window).height() + 200) {
            // works with: https://github.com/inorganik/CountUp.js
            $('.counter').each(function() {
                var element = $(this);
                var endVal = parseInt(element.text());
                element.countup(endVal);
            })
            countupFinished = true;
        }
    });

    $("[data-fancybox]").fancybox();

    $('.items').isotope({
        filter: '*',
        animationOptions: {
            duration: 1500,
            easing: 'linear',
            queue: false
        }
    });

    $('#filters a').click(function() {
        $('#filters .current').removeClass('current');
        // 'this' refers to the element that was clicked
        $(this).addClass('current');

        var selector = $(this).attr('data-filter');

        $('.items').isotope({
            filter: selector,
            animationOptions: {
                duration: 1500,
                easing: 'linear',
                queue: false
            }
        });
        return false; // 'false' says don't do any more actions.
    });
    

});

