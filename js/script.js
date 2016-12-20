$(function() {

    var NYcarouselContent = {
        data: [
            {
                filename: "ny1.jpg",
                alt: "Christmas tree",
                caption: "Jingle bells..."
            },

            {
                filename: "ny2.jpg",
                alt: "Christmas tree",
                caption: "Jingle bells..."
            },

            {
                filename: "ny3.jpg",
                alt: "Christmas tree",
                caption: "Jingle all the way..."
            },

            {
                filename: "ny4.jpg",
                alt: "Christmas tree",
                caption: "What a fun..."
            },

            {
                filename: "ny5.jpg",
                alt: "Christmas tree",
                caption:"It is to ride..."
            },

            {
                filename: "ny6.jpg",
                alt: "Christmas tree",
                caption: "In a one horse open..."
            },

            {
                filename: "ny7.jpg",
                alt: "Christmas tree",
                caption: "sle-e-e-eigh!.."
            }]
    }

    var easterCarouselContent = {
        data: [
            {
                filename: "easter1.jpg",
                alt: "Easter eggs exhibition 2016"
            },

            {
                filename: "easter2.jpg",
                alt: "Easter eggs exhibition 2016"
            },

            {
                filename: "easter3.jpg",
                alt: "Easter eggs exhibition 2016"
            },

            {
                filename: "easter4.jpg",
                alt: "Easter eggs exhibition 2016"
            },

            {
                filename: "easter5.jpg",
                alt: "Easter eggs exhibition 2016"
            },

            {
                filename: "easter6.jpg",
                alt: "Easter eggs exhibition 2016"
            },

            {
                filename: "easter7.jpg",
                alt: "Easter eggs exhibition 2016"
            }

        ]
    }

    var nyCarousel = $("#NY-carousel-container");
    var easterCarousel = $("#easter-carousel-container");

    // Render NY carousel template using John Resig micro-template
    var html = $("#NY-carousel-template").html();
    var renderedCarousel = tmpl(html, NYcarouselContent);
    nyCarousel.append(renderedCarousel)

    // Initialize carousel plugin on NY template
    nyCarousel.jqcarousel({
        speed: 300,
        easing: "cubic-bezier(.17,.67,.83,.67)",
        cyclic: false
    });

    // Render Easter carousel template using Lodash
    var lodash_tmpl = _.template($("#easter-carousel-template").html());
    easterCarousel.append(lodash_tmpl({easterCarouselContent}));

    $(".jqcarousel a").click(function(event) {
        event.preventDefault();
    });

    // Initialize carousel plugin on NY marckup
    easterCarousel.jqcarousel({
        speed: 300,
        easing: "cubic-bezier(.17,.67,.83,.67)",
        cyclic: true,
        num: 1
    });


}); // end of ready
