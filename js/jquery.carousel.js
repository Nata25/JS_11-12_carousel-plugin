// ***************
// Natalya's Ivanova 'awesome' jquery carousel plugin, 2016
// don't try to repeat this in real life
// ***************

// HOW TO USE : check out readme.md

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
