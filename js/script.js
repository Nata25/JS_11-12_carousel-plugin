$(function() {

    var carouselContent = {
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

    $(".jqcarousel a").click(function(event) {
        event.preventDefault();
    });

    var nyCarousel = $("#NY-carousel-container");
    var easterCarousel = $("#easter-carousel-container");

    // Render carousel template
    var html = $("#NY-carousel-template").html();
    var renderedCarousel = tmpl(html, carouselContent);
    nyCarousel.append(renderedCarousel)

    // Initialize carousel plugin on NY template
    nyCarousel.jqcarousel({
        speed: 300,
        easing: "cubic-bezier(.17,.67,.83,.67)",
        cyclic: false
    });

    // Initialize carousel plugin on NY marckup
    easterCarousel.jqcarousel({
        speed: 300,
        easing: "cubic-bezier(.17,.67,.83,.67)",
        cyclic: true,
        num: 1
    });


}); // end of ready
