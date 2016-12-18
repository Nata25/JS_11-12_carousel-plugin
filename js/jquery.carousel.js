// ***************
// Natalya's Ivanova 'awesome' jquery carousel plugin
// don't try to repeat this in real life
// ***************

// HOW TO USE
// Initialize .jqcarousel() method on the container of your carousel
// Inside the container, place .carousel-container and .carousel-controls
// Carousel items go inside .carousel-container but should be wrapped with .jqcarousel-content
// Width of .jqcarousel-container is custom: define it in .css file. It is how wide you carousel will be.
// Make sure .jqcarousel-container has overflow:hidden property.
// Width of .jqcarousel-content should be really great so that all slides would fit it.
// Controls go inside .jqcarousel-controls container; left control should be first-child and right - last-child of the container

// ***************
// CUSTOMIZE WITH OPTIONS:
// ***************
// speed : speed of animation in miliseconds (500 by default)
// easing : animation flow, string ("linear" by default)
// cyclic : should carousel go all the way round or stop after last slide (false by default)
// *** cyclic here means going smoothly to the first slide when at end click right control
// *** and go to the last slide when at start and click left control
// shift : step for one animation move in px. if you want to shift 1 img per step, shift = image box size + margins

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
        var $wrapper = $this.find(".jqcarousel-content");
        var $left = $this.find(".jqcarousel-controls").children(":first-child");
        var $right = $this.find(".jqcarousel-controls").children(":last-child");

        // Calculatable values
        var $images = $(".jqcarousel-content").children().length;
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
