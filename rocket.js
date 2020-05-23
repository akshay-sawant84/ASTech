(function($) {
    "use strict";

    //Switch dark/light

    $(document).ready(function() {
        "use strict";

        //Scroll back to top

        var progressPath = document.querySelector('.progress-wrap path');
        var pathLength = progressPath.getTotalLength();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'none';
        progressPath.style.strokeDasharray = pathLength + ' ' + pathLength;
        progressPath.style.strokeDashoffset = pathLength;
        progressPath.getBoundingClientRect();
        progressPath.style.transition = progressPath.style.WebkitTransition = 'stroke-dashoffset 10ms linear';
        var updateProgress = function() {
            var scroll = $(window).scrollTop();
            var height = $(document).height() - $(window).height();
            var progress = pathLength - (scroll * pathLength / height);
            progressPath.style.strokeDashoffset = progress;
        }
        updateProgress();
        $(window).scroll(updateProgress);
        var offset = 50;
        var duration = 550;
        jQuery(window).on('scroll', function() {
            if (jQuery(this).scrollTop() > offset) {
                jQuery('.progress-wrap').addClass('active-progress');
            } else {
                jQuery('.progress-wrap').removeClass('active-progress');
            }
        });
        jQuery('.progress-wrap').on('click', function(event) {
            event.preventDefault();
            jQuery('html, body').animate({ scrollTop: 0 }, duration);
            return false;
        })


    });

})(jQuery);


//parallex

(function($) {
    /** change value here to adjust parallax level */
    var parallax = -0.5;

    var $bg_images = $(".wp-block-cover-image");
    var offset_tops = [];
    $bg_images.each(function(i, el) {
        offset_tops.push($(el).offset().top);
    });

    $(window).scroll(function() {
        var dy = $(this).scrollTop();
        $bg_images.each(function(i, el) {
            var ot = offset_tops[i];
            $(el).css("background-position", "50% " + (dy - ot) * parallax + "px");
        });
    });
})(jQuery);

//cursor pointer



//mail

$('.form__btn').click(function() {
    $('.mail__letter').toggleClass('move');
    $('.mail__top').toggleClass('closed');
    $('.form__btn--invisible').toggleClass('visible');
    $('.form__btn--visible').toggleClass('invisible');
});

$('input').focus(function() {
    $(this).parent().addClass('active');
    $('input').focusout(function() {
        if ($(this).val() == '') {
            $(this).parent().removeClass('active');
        } else {
            $(this).parent().addClass('active');
        }
    })
});


//paper plane animation