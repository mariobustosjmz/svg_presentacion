# svg_presentacion
Presentacion Corporativa usando SVG  junto con las librerias Snap.svg.js y walkway.js 



### Screens
![alt tag](https://github.com/mariobustosjmz/svg_presentacion/blob/master/screens/1.png)
![alt tag](https://github.com/mariobustosjmz/svg_presentacion/blob/master/screens/2.png)
![alt tag](https://github.com/mariobustosjmz/svg_presentacion/blob/master/screens/3.png)
![alt tag](https://github.com/mariobustosjmz/svg_presentacion/blob/master/screens/4.png)
![alt tag](https://github.com/mariobustosjmz/svg_presentacion/blob/master/screens/5.png)
![alt tag](https://github.com/mariobustosjmz/svg_presentacion/blob/master/screens/6.png)





##






[Snap.svg](http://snapsvg.io) · [![Build Status](https://travis-ci.org/adobe-webplatform/Snap.svg.svg?branch=dev)](https://travis-ci.org/adobe-webplatform/Snap.svg)  [![CDNJS](https://img.shields.io/cdnjs/v/snap.svg.svg)](https://cdnjs.com/libraries/snap.svg/) [![GitHub Tag](https://img.shields.io/github/tag/adobe-webplatform/snap.svg.svg)](https://github.com/adobe-webplatform/Snap.svg/releases) [![License](https://img.shields.io/npm/l/snapsvg.svg)](https://github.com/adobe-webplatform/Snap.svg/blob/master/LICENSE)
======

A JavaScript SVG library for the modern web. Learn more at [snapsvg.io](http://snapsvg.io).

[Follow us on Twitter.](https://twitter.com/snapsvg)

### Install
* [Bower](http://bower.io/) - `bower install snap.svg` ![Bower](https://img.shields.io/bower/v/snap.svg.svg)
* [npm](http://npmjs.com/) - `npm install snapsvg` [![npm version](https://img.shields.io/npm/v/snapsvg.svg?style=flat)](https://www.npmjs.com/package/snapsvg) [![Downloads](https://img.shields.io/npm/dt/snapsvg.svg)](https://www.npmjs.com/package/snapsvg)
* Manual Minified - https://github.com/adobe-webplatform/Snap.svg/raw/master/dist/snap.svg-min.js
* Manual Unminified - https://raw.githubusercontent.com/adobe-webplatform/Snap.svg/master/dist/snap.svg.js


### Learn

* [About Snap.svg](http://snapsvg.io/about/)
* [Getting Started](http://snapsvg.io/start/)
* [API Reference](http://snapsvg.io/docs/)
* [Slack Room](https://snapsvg.slack.com/). [Invite](https://snapsvg.slack.com/shared_invite/MTM2NTE4MTk3MDYwLTE0ODYwODgzNzUtYjQ0YmM1N2U0Mg)

### Use

In your HTML file, load simply by:
```html
<script src="snap.svg-min.js"></script>
```
No other scripts are needed. Both the minified and uncompressed (for development) versions are in the `/dist` folder.

To load with webpack use following command:
```js
const Snap = require(`imports-loader?this=>window,fix=>module.exports=0!snapsvg/dist/snap.svg.js`);
```

### Build
[![Build Status](https://travis-ci.org/adobe-webplatform/Snap.svg.svg?branch=dev)](https://travis-ci.org/adobe-webplatform/Snap.svg)

Snap.svg uses [Grunt](http://gruntjs.com/) to build.

* Open the terminal from the Snap.svg directory:
```sh
cd Snap.svg
```
* Install its command line interface (CLI) globally:
```sh
npm install -g grunt-cli
```
_*You might need to use `sudo npm`, depending on your configuration._

* Install dependencies with npm:
```sh
npm install
```
_*Snap.svg uses Grunt 0.4.0. You might want to [read](http://gruntjs.com/getting-started) more on their website if you haven’t upgraded since a lot has changed._

* To build the files run
```sh
grunt
```
* The results will be built into the `dist` folder.
* Alternatively type `grunt watch` to have the build run automatically when you make changes to source files.

### Testing

Tests are located in `test` folder. To run tests, simply open `test.html` in there. Automatic tests use PhantomJS to scrap this file, so you can use it as a reference.

Alternatively, install [PhantomJS](http://phantomjs.org) and run command
```sh
grunt test
```
 
##

# Walkway [![devDependency Status](https://david-dm.org/ConnorAtherton/walkway/dev-status.svg)](https://david-dm.org/ConnorAtherton/walkway#info=devDependencies)

I loved the animations [for the polygon ps4 review](http://www.polygon.com/a/ps4-review) a few months back
and decided to create a small library to re-create them ([simple demo](http://htmlpreview.github.io/?https://github.com/ConnorAtherton/walkway/blob/master/example/index.html)).

It supports `path`, `line` and `polyline` elements.

## Download
#### Bower
```
bower install walkway.js
```

#### npm
```
npm install walkway.js
```

#### CDN
```
http://cdn.jsdelivr.net/walkway/0.0.7/walkway.min.js
```

## How to use

Create a new ```Walkway``` instance with a supplied options object.
When you want to start animating call ```.draw``` on the returned instance
providing an optional callback that will be called when drawing is complete.

``` js
// Create a new instance
var svg = new Walkway(options);
// Draw when ready, providing an optional callback
svg.draw(callback);

// Options passed in as an object, see options below.
var svg = new Walkway({ selector: '#test'});

// Overwriting defaults
var svg = new Walkway({
  selector: '#test',
  duration: '2000',
  // can pass in a function or a string like 'easeOutQuint'
  easing: function (t) {
    return t * t;
  }
});

svg.draw();

// If you don't want to change the default options you can
// also supply the constructor with a selector string.
var svg = new Walkway('#test');

svg.draw(function() {
  console.log('Animation finished');
});
```

All animations will automatically complete when the window containing them loses focus, to another
tab, for example. You can also choose to restart all animations in an event handler. To restart
every animation when the window gains focus again, you can do:

```
document.addEventListener('visibilitychange', function() {
  if (!document.hidden) {
    svg.redraw();
  }
}, false);
```

### Options

- **selector** (*mandatory*) - The selector of the parent element (usually will be a specific svg element)
- **duration** - Time the animation should run for, in ms. Default is 400.
- **easing** - Name of the easing function used for drawing. Default is 'easeInOutCubic'. You can also supply your own function that will be passed the progress and should return a value in the range of [0, 1];

### Easing

All credit for the built-in easing functions go to [gre](https://github.com/gre) from [this gist](https://gist.github.com/gre/1650294).

### Gotchas

Sometimes when exporting from a program like Illustrator elements have no stroke style attached to them. This results in confusion when
Walkway starts the animation and nothing shows up. Just be sure to add base styles that can be overwritten if required.

```sass
svg {
  path, line, polyline {
    stroke: #fff
    stroke-width: 2px
  }

  path {
    fill: transparent
  }
}
```
 