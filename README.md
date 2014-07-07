angular-help-overlay
====================

Angular Wrapper for [chardin.js](https://github.com/heelhook/chardin.js "Chardin.js") instruction overlay which was inspired by the "new" Gmail composer tour.

Usage is straightforward:

Find the dom element where you want to the overlay to appear (e.g., body, div, etc.) and add this tag to the element:

```
<body help-overlay="showHelp">...</body>
```

With showHelp being a scoped boolean property. Setting that property to true will enable the overlay. Since this is just
an AngularJS wrapper around a jquery plugin, this directive still uses chardin.js native attribute lookups:

```
<div data-intro="Some Help description here">...</div>
```

Additionally this directive provides delegation of chardin.js start and stop events via, help-overlay-start and
help-overlay-stop:

```
<body help-overlay="showHelp" help-overlay-start="startFn(event)" help-overlay-stop="stopFn(event)">...</body>
```

events being passed are the original chardin.js event objects.

The example folder contains a modified example of the original chardin.js (i.e., minus the image animate).
