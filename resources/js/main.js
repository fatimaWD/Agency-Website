(function($) {
    $(document).ready(function() {

    //================================================================================================

        //ADD BACKGROUND COLOUR TO NAVBAR ON SCROLL

        $(window).scroll(function() {
            if ($(this).scrollTop() > 130) {
                $(".navbar-default").addClass("sticky-nav");
            } else {
                $(".navbar-default").removeClass("sticky-nav");
            }
        });

    //===============================================================================================

        //TESTIMONIAL SLIDER
        $('#quote-carousel').carousel({
        pause: true, interval: 10000,
        });
    //================================================================================================

        //HIGHLIGHTING NAVBAR ELEMENTS
        $("body").scrollspy({target: ".navbar-fixed-top", offset:200});

    //================================================================================================

        // SMOOTH SCROLL
        $(function() {
            $('a[href*=#]:not([href=#])').click(function() {
                if (location.pathname.replace(/^\//, '') === this.pathname.replace(/^\//, '') && location.hostname === this.hostname) {
                    var target = $(this.hash);
                    target = target.length ? target : $('[name=' + this.hash.slice(1) + ']');
                    if (target.length) {
                        $('html,body').animate({
                            scrollTop: target.offset().top
                        }, 1000);
                        return false;
                    }
                }
            });
        });
    //================================================================================================

    // ADDING ANIMATIONS

        //hide elements first
        $('.waypoint3').css('opacity', 0);
        $('.waypoint4').css('opacity', 0);
        $('.waypoint5').css('opacity', 0);
        $('.waypoint6').css('opacity', 0);
        $('.waypoint7').css('opacity', 0);
        $('.waypoint8').css('opacity', 0);
        $('.waypoint9').css('opacity', 0);
        $('.waypoint10').css('opacity', 0);
        $('.waypoint11').css('opacity', 0);
        $('.waypoint12').css('opacity', 0);

        // show and animate hidden elements
        $('.waypoint3').waypoint(function() {
            $(".waypoint3").addClass('fadeInUp');
            $(".waypoint3").css('opacity', 1);
        }, { offset: '70%' });

        $('.waypoint4').waypoint(function() {
            $(".waypoint4").addClass('zoomIn');
            $(".waypoint4").css('opacity', 1);
        }, { offset: '60%' });

        $('.waypoint5').waypoint(function() {
            $(".waypoint5").addClass('fadeIn');
            $(".waypoint5").css('opacity', 1);
        }, { offset: '70%' });

        $('.waypoint6').waypoint(function() {
            $(".waypoint6").addClass('fadeIn');
            $(".waypoint6").css('opacity', 1);
        }, { offset: '70%' });

        $('.waypoint7').waypoint(function() {
            $(".waypoint7").addClass('fadeIn');
            $(".waypoint7").css('opacity', 1);
        }, { offset: '70%' });

        $('.waypoint8').waypoint(function() {
            $(".waypoint8").addClass('fadeIn');
            $(".waypoint8").css('opacity', 1);
        }, { offset: '70%' });

        $('.waypoint9').waypoint(function() {
            $(".waypoint9").addClass('fadeIn');
            $(".waypoint9").css('opacity', 1);
        }, { offset: '70%' });

        $('.waypoint10').waypoint(function() {
            $(".waypoint10").addClass('fadeIn');
            $(".waypoint10").css('opacity', 1);
        }, { offset: '70%' });

        $('.waypoint11').waypoint(function() {
            $(".waypoint11").addClass('fadeInUp');
            $(".waypoint11").css('opacity', 1);
        }, { offset: '50%' });

        $('.waypoint12').waypoint(function() {
            $(".waypoint12").addClass('rubberBand');
            $(".waypoint12").css('opacity', 1);
        }, { offset: '50%' });


    //===============================================================================================

    });
})(jQuery);
