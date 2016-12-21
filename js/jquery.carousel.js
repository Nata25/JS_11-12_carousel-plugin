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
            num: 3,
            pagination: "digits"
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

        // Generate pagination
        if (settings.pagination) {
            var $pagination = $(".jqcarousel-pagination");
            var $paginationItem = "<a class='jqcarousel-pgitem'></a>";
            for (var i = 0; i < $slides.length; i++) {
                $pagination.append($paginationItem);
            }
            if (settings.pagination == "digits") {
                for (var i = 0; i < $slides.length; i++) {
                    $pagination.find(":nth-child(" + (i+1) + ")").html(i+1);
                }
            }
            $(".jqcarousel-pgitem").first().addClass("active");
        }

        // Event handlers
        $left.click(function() {
            // manage breakpoint
            if ($goLeft != 0) {
                $goLeft += $shift;
            }
            else {
                // hide left control
                if (!settings.cyclic) {
                    $left.fadeOut();
                }
                //
                else {
                    $goLeft = -$max;
                    $(".jqcarousel-pgitem:last-child").addClass("active");
                }
                // else {
                //     $goLeft = -($max + $shift);
                //     console.log($goLeft);
                //     $(".jqcarousel-pgitem:last-child").addClass("active");
                // }
            }

            // show right control as soon as it's not carousel end
            if ( $goLeft == -($max - $shift) ) {
                $right.fadeIn();
            }

            // slide left!
            $wrapper.animate({
                "left" : $goLeft + "px"
                }, settings.speed,
                   settings.animation
            );

            if (settings.pagination) {
                var currentlyActive = $(".jqcarousel-pgitem.active").first();
                currentlyActive.removeClass("active");
                currentlyActive.prev().addClass("active");
            }

        });

        $right.click(function() {
            var currentlyActive;

            if (settings.pagination) {
                currentlyActive = $(".jqcarousel-pgitem.active").first();
                currentlyActive.removeClass("active");
            }

            // manage breakpoint
            if ($goLeft == -$max) {
                if (settings.cyclic) {
                    console.log("breakpoint");
                    $goLeft = 0;
                    if (currentlyActive) {
                        $(".jqcarousel-pgitem:first-child").addClass("active");
                    }
                }
                // hide right control
                else {
                    $right.fadeOut();
                }
            }
            else {
                $goLeft -= $shift;
                if (currentlyActive) {
                    currentlyActive.next().addClass("active");
                }
            }

            // show left control as soon as it's not the beginning of carousel
            if ($goLeft == -$shift) {
                $left.fadeIn();
            }

            // slide right!
            $wrapper.animate({
                "left" : $goLeft + "px"
                },
                settings.speed,
                settings.animation
            );
        });

        return this;
    }

})(jQuery);
