// ***************
// Natalya's Ivanova 'awesome' jquery carousel plugin
// don't try to repeat this in real life
// ***************

// HOW TO USE
// Initialize .jqcarousel() method on the container of your carousel
// Inside the container, put .carousel-frame and .carousel-controls. They should be siblings
// Style .jqcarousel-frame as you like and set its width – that's how wide you carousel will be
// ** .jqcarousel-frame's width is a custom value but is used inside script to identify shift.
// ** Make sure .jqcarousel-frame has overflow property set to hidden
// Carousel items go inside .carousel-frame and should be wrapped with .jqcarousel-content
// Width of .jqcarousel-content should be really great so that all slides would fit it (use something like 10000px)
// Items inside .jqcarousel-content (figures, listitems, images etc.) should have display: inline-block property
// Controls go inside .jqcarousel-controls container; left control should be first-child and right - last-child of the container

// ***********************
// CUSTOMIZE WITH OPTIONS:
// ***********************
// speed : speed of animation in miliseconds (500 by default)
// easing : animation flow, string ("linear" by default)
// cyclic : should carousel go all the way round or stop after last slide (true by default)
// *** cyclic here means going smoothly to the first slide when at end click right control
// *** and go to the last slide when at start and click left control
// slides : number of slides to be shown in the carousel at once

(function($) {

    $.fn.jqcarousel = function(options) {
        var defaults = {
            speed: 500,
            easing: "linear",
            cyclic: true,
            num: 3
        };

        var settings = $.extend(defaults, options);

        // Necessary DOM elements
        var $this = this;
        var $container = $this.find(".jqcarousel-frame");
        var $wrapper = $this.find(".jqcarousel-content");
        var $image = $wrapper.children().first();
        var $slides = $wrapper.children();

        // Calculatable values
        var $shift = Math.floor($container.width() / settings.num);
        console.log($container.width(), settings.num, $shift);
        // $shift = 605;
        var $left = $this.find(".jqcarousel-controls").children(":first-child");
        var $right = $this.find(".jqcarousel-controls").children(":last-child");
        var $goLeft = 0;
        var $max = $shift * ($slides.length - settings.num);

        if(!settings.cyclic) {
            $left.hide();
        }

        $left.click(function() {
            $goLeft += $shift;
            $wrapper.animate({
                "left" : $goLeft + "px"
                }, settings.speed,
                   settings.animation
            );

            // manage breakpoint
            if ($goLeft == 0) {
                if (!settings.cyclic) {
                    $left.fadeOut();
                }
                else {
                    $goLeft = -($max + $shift);
                }
            }
            // show right control as soon as it's not carousel end
            if ( $goLeft == -($max - $shift) ) {
                $right.fadeIn();
            }
        });

        $right.click(function() {
            $goLeft -= $shift;
            $wrapper.animate({
                "left" : $goLeft + "px"
                },
                settings.speed,
                settings.animation
            );

            // manage breakpoint
            if ($goLeft == -$max) {
                if (settings.cyclic) {
                    $goLeft = 0;
                }
                else {
                    $right.fadeOut();
                }
            }
            // show left control as soon as it's not the beginning of carousel
            if ($goLeft == -$shift) {
                $left.fadeIn();
            }
        });

        return this;
    }

})(jQuery);
