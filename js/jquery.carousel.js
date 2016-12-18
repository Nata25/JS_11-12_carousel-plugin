(function($) {

    $.fn.jqcarousel = function() {
        // console.log("plugin is activated");

        var $this = this;
        var $wrapper = this.find(".jqcarousel-wrapper");
        var $goLeft = 0;
        var $shift = 234;
        var $left = $this.find(".jqcarousel-drivers").children(":first-child");
        var $right = $this.find(".jqcarousel-drivers").children(":last-child");

        $left.hide();

        $left.click(function() {
            $goLeft += $shift;
            $wrapper.animate({
                "left" : $goLeft + "px"
            }, 500);

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
            }, 500);
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
