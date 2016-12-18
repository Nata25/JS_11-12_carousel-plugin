// Initialize .jqcarousel() method on the container of your carousel
// Inside the contaier, wrap your carousel items in .jqcarousel-wrapper
// Your controls should be wrapped in container with .jqcarousel-drivers class

// Options:
// speed : speed of animation in miliseconds (500 by default)
// easing : animation flow, string ("linear" by default)
// cyclic: should carousel go all the way round or stop after last slide (false by default)
// shift: step for one animation move in px. depends upon images sizes and num of images you

(function($) {

    $.fn.jqcarousel = function(options) {
        var defaults = {
            speed: 500,
            easing: "linear",
            cyclic: false,
            shift: 234
        };

        var settings = $.extend(defaults, options);

        // Necessary DOM elements
        var $this = this;
        var $wrapper = $this.find(".jqcarousel-wrapper");
        var $left = $this.find(".jqcarousel-drivers").children(":first-child");
        var $right = $this.find(".jqcarousel-drivers").children(":last-child");

        // Calculatable values
        var $images = $(".jqcarousel-wrapper").children().length;
        var $goLeft = 0;
        var $max = defaults.shift * ($images - 3);

        if(!defaults.cyclic) {
            $left.hide();
        }

        $left.click(function() {
            $goLeft += defaults.shift;
            $wrapper.animate({
                "left" : $goLeft + "px"
                }, settings.speed,
                   settings.animation
            );

            // manage breakpoint
            if ($goLeft == 0) {
                if (!defaults.cyclic) {
                    $left.fadeOut();
                }
                else {
                    $goLeft = -($max + defaults.shift);
                }
            }
            // show right control as soon as it's not carousel end
            if ( $goLeft == -($max - defaults.shift) ) {
                $right.fadeIn();
            }
        });

        $right.click(function() {
            $goLeft -= defaults.shift;
            $wrapper.animate({
                "left" : $goLeft + "px"
                },
                settings.speed,
                settings.animation
            );

            // manage breakpoint
            if ($goLeft == -$max) {
                if (defaults.cyclic) {
                    $goLeft = 0;
                }
                else {
                    $right.fadeOut();
                }
            }
            // show left control as soon as it's not the beginning of carousel
            if ($goLeft == -defaults.shift) {
                $left.fadeIn();
            }
        });

        return this;
    }

})(jQuery);
