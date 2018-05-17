// Loader Icon...fades out the icon first (inner) and then fades out the 'loader div'...makes for a smoother transition
$(window).on('load', function() {
    $('.loader .inner').fadeOut(750, function() {
        $('.loader').fadeOut(750);
    });
});


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
    // $('.owl-carousel').owlCarousel({
    //     autoPlay: true,
    //     loop:true,
    //     items: 4,
    //     responsive:{
    //         0:{
    //             items:1
    //         },
    //         480:{
    //             items:2
    //         },
    //         768:{
    //             items:3
    //         },
    //         938:{
    //             items:4
    //         }
    //     }
    // });

    var owl = $('.owl-carousel');
    owl.owlCarousel({
        items:5,
        loop:true,
        margin:10,
        autoplay:true,
        autoplayTimeout:3000,
        autoplayHoverPause:true
    });
    $('.play').on('click',function(){
        owl.trigger('play.owl.autoplay',[1000])
    })
    $('.pause').on('click',function(){
        owl.trigger('stop.owl.autoplay')
    })

    

    var skillsTopOffset = $(".skillsSection").offset().top;
    var statsSectionOffset = $(".statsSection").offset().top;
    var portfolioSectionOffset = $(".portfolioSection").offset().top;
    var countupFinished = false;

    $(window).scroll(function() {
        if(window.pageYOffset > skillsTopOffset - $(window).height() + 200) {
            $(function() {
                $('.chart').easyPieChart({
                    // options go here
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


    // Smooth scroll...e = event
    $('#navigation li a').click(function(e) {
        e.preventDefault();
        // gets the href attribute of the item we clicked
        var targetElement = $(this).attr('href');
        var targetPosition = $(targetElement).offset().top;
        $('html, body').animate({
            scrollTop: targetPosition - 50
        }, 'slow')
    });


    // Sticky Navbar when it reaches the top of the screen
    const nav = $('#navigation');
    const navTop = nav.offset().top;

    $(window).on('scroll', stickyNavigation);

    function stickyNavigation() {
        var body = $('body');
        if($(window).scrollTop() >= navTop) {
            body.css('padding-top', nav.outerHeight() + 'px');
            body.addClass('fixedNav');
        } else {
            body.css('padding-top', 0);
            body.removeClass('fixedNav');
        }
    }

    $(".toggle-btn").click(function(){
        $(".message").slideToggle();
        $(this).html('Hide More');
        
    });

    

});

