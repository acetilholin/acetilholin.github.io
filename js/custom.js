
$(document).ready(function() {
    $(window).scroll(function() {
        if($(this).scrollTop() > 300) {
            $('.navbar').addClass('solid');
        } else {
            $('.navbar').removeClass('solid');
        }
        if (navigator.userAgent.match(/iPhone/i) || navigator.userAgent.match(/Android/i)) {
            if ($(this).scrollTop() > 50) {
                $('.navbar').addClass('solid');
            } else {
                $('.navbar').removeClass('solid');
            }
        }
    });
});

$(document).ready(function () {
    $(document).click(function (event) {
        var clickover = $(event.target);
        var _opened = $(".navbar-collapse").hasClass("show");
        if (_opened === true && !clickover.hasClass("navbar-toggler")) {
            $(".navbar-toggler").click();
        }
    });
});


$(document).ready(function(){
    $("a").on('click', function(event) {
        if (this.hash !== "") {
            event.preventDefault();
            var hash = this.hash;

            $('html, body').animate({
                scrollTop: $(hash).offset().top
            }, 800, function(){
                window.location.hash = hash;
            });
        }
    });
});


$(document).ready(function(){
    $(window).scroll(function(){
        $(".arrow").css("opacity", 1 - $(window).scrollTop() / 250);
    });
});


$(document).ready(function(){
    $("#cars-in-offer").owlCarousel({
            items:3,
            autoplay:true,
            smartSpeed:900,
            loop:true,
            autoplayHoverPause:true,
            responsive : {
                0 : {
                    items: 1,
                },
                576 : {
                    items: 2,
                },
                768 : {
                    items: 3
                }
            }
        }
    );
});


$(document).ready(function() {
    $('.counter').counterUp({
        delay: 10,
        time: 1800
    });
});


$(document).ready(function(){
    $("#cars-in-offer").owlCarousel({
            items:3,
            autoplay:true,
            smartSpeed:1700,
            loop:true,
            autoplayHoverPause:true,
            responsive : {
                0 : {
                    items: 1
                },

                576 : {
                    items: 2
                },
                768: {
                    items: 3
                }
            }
        }
    );
});

$(document).ready(function() {
    $(window).scroll(function() {
        if ($(this).scrollTop() > 500) {
            $('.top-scroll').fadeIn();
        } else {
            $('.top-scroll').fadeOut();
        }
    });
});

$(function () {
    $('[data-toggle="transport-info"]').tooltip();
});

/* Sending message function */
$(function () {
    $("#send-email").prop("disabled", true);
    var checkbox = $("#checkbox-robot");
    checkbox.click(function () {
        if ($(this).is(":checked")) {
            $("#send-email").prop("disabled", false)
        } else {
            $("#send-email").prop("disabled", true)
        }
    });
});
