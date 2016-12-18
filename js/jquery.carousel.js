// Initialize .jqcarousel() method on the container of your carousel
// Inside the contaier, wrap your carousel items in .jqcarousel-wrapper
// Your controls should be wrapped in container with .jqcarousel-drivers class

// Options:
// speed : speed of animation in miliseconds (500 by default)
// easing : animation flow, string ("linear" by default)
// cyclic: should carousel go all the way round or stop after last slide (false by default)

(function($) {

    $.fn.jqcarousel = function(options) {
        var defaults = {
            speed: 500,
            easing: "linear",
            cyclic: false
        };

        var settings = $.extend(defaults, options);

        // Necessary DOM elements
        var $this = this;
        var $wrapper = this.find(".jqcarousel-wrapper");
        var $left = $this.find(".jqcarousel-drivers").children(":first-child");
        var $right = $this.find(".jqcarousel-drivers").children(":last-child");

        // Calculatable values
        var $goLeft = 0;
        var $shift = 234;

        $left.hide();

        $left.click(function() {
            $goLeft += $shift;
            $wrapper.animate({
                "left" : $goLeft + "px"
            }, settings.speed,
               settings.animation
        );

            if ($goLeft == 0) {
                $left.fadeOut();
            }
            if ($goLeft != $shift * -4) {
                $right.fadeIn();
            }
        });

        $right.click(function() {
            $goLeft -= $shift;
            $wrapper.animate({
                "left" : $goLeft + "px"
            }, settings.speed,
               settings.animation
        );

            if ($goLeft == $shift * -4) {
                $right.fadeOut();
            }
            console.log($goLeft);
            console.log($goLeft != 0);
            if ($goLeft != 0) {

                $left.fadeIn();
            }
        });

        return this;
    }

})(jQuery);
