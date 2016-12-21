
## JQUERY CAROUSEL SIMPLE PLUGIN
don't try to repeat this in real life

## How to use

Initialize `.jqcarousel()` method on the container of your carousel. Inside the container, put `.carousel-frame` and `.carousel-controls`. They should be siblings.

Style `.jqcarousel-frame` as you like and set its width – that's how wide you carousel will be. It is a custom value but is used inside script to identify shift.

Make sure .jqcarousel-frame has `overflow` property set to `hidden`

Carousel items, or slides, go inside `.carousel-frame` and should be wrapped with `.jqcarousel-content`. Items inside `.jqcarousel-content` (figures, listitems, images etc.) should have `display: inline-block` property. If they have uncontrolled margins, set their `float` to `left`, otherwise px per step would be miscalculated (e.g., figure with `display: inline-block` property get whitespace around even if margins are set to 0).

Width of `.jqcarousel-content` should be really great so that all slides would fit it (use something like 10000 px).

Controls go inside `.jqcarousel-control`s container; left control should be first-child and right - last-child of the container


## Customize with options

- `speed` : speed of animation in miliseconds (500 by default)

- `easing` : animation flow, string ("linear" by default)

- `cyclic` : should carousel go all the way round or stop after last slide (true by default); cyclic here means going smoothly to the first slide when at end click right control and go to the last slide when at start and click left control

- `num` : number of slides to be shown in the carousel at once
