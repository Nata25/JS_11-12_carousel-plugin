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
            cyclic: false,
            num: 3,
            pagination: "plain"
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

            // event handler

            $(".jqcarousel-pgitem").click(function() {
                var $this = $(this);
                var ind = $(this).index();
                $goLeft = (ind) * -$shift;
                $wrapper.animate({
                    "left" : $goLeft + "px"
                    }, settings.speed,
                       settings.animation
                );
                $(".jqcarousel-pgitem.active").first().removeClass("active");
                $(this).addClass("active");
            });
        }

        // Event handler: Left arrow
        $left.click(function() {

            // default behaviour
            $goLeft += $shift;

            if (settings.pagination) {
                $(".jqcarousel-pgitem.active").first()
                        .removeClass("active")
                        .prev().addClass("active");
            }

            // manage breakpoint
            if (settings.cyclic) {
                if ($goLeft > 0) {
                    $goLeft = -$max;

                    if (settings.pagination) {
                        $(".jqcarousel-pgitem:last-child").addClass("active");
                    }
                }
            }
            // if not cyclic
            else {
                // hide left control as soon as it's beginning
                if ($goLeft == 0) {
                    $left.fadeOut();
                }
                // show right control as soon as it's not the end
                else if ($goLeft == - ($max - $shift) ) {
                    $right.fadeIn();
                }
            }

            // slide left!
            $wrapper.animate({
                "left": $goLeft + "px"
                }, settings.speed,
                   settings.animation
            );

        });

        // Event haldler: right arrow
        $right.click(function() {

            // default behaviour
            $goLeft -= $shift;

            if (settings.pagination) {
                $(".jqcarousel-pgitem.active").first()
                        .removeClass("active")
                        .next().addClass("active");
            }

            // manage breakpoint
            if (settings.cyclic) {
                if ($goLeft == -$max - $shift) {
                    $goLeft = 0;

                    if (settings.pagination) {
                        $(".jqcarousel-pgitem:first-child").addClass("active");
                    }
                }
            }
            else {
                // hide right control
                if ($goLeft == -$max) {
                    $right.fadeOut();
                }
                // show left control as soon as it's not the beginning of carousel
                else if ($goLeft == -$shift) {
                    $left.fadeIn();
                }
            }

            // slide right!
            $wrapper.animate({
                "left": $goLeft + "px"
                },
                settings.speed,
                settings.animation
            );
        });

        return $(this);
    }

})(jQuery);
