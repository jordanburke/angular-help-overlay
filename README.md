angular-help-overlay
====================

Angular Wrapper for [chardin.js](https://github.com/heelhook/chardin.js "Chardin.js") instruction overlay which was inspired by the Gmail composer tour at the time.

Include the angular-help-overlay js file (min or source), chardin.js, and chardin.css. If you are using grunt and using a bowerInstall task, you probably will still need to manually include chardin.js and chardin.css yourself, however the angular-help-overlay should be injected just fine.

Next, install the module to your app:

```
angular.module('YourApp', ['angularHelpOverlay'])
        ...
});
```

Usage is straightforward: Find the dom element where you want to the overlay to appear (e.g., body, div, etc.) and add this tag to the element:

```HTML
<body help-overlay="showHelp">...</body>
```
With showHelp being a scoped boolean property. Setting that property to true will enable the overlay. Since this is just
an AngularJS wrapper around a jquery plugin, this directive still uses chardin.js native attribute lookups:

```HTML
<div data-intro="Some Help description here" data-position="top">...</div>
```

`data-intro`: Text to show with the instructions  
`data-position`: (`left`, `top`, `right`, `bottom`), where to place the text with respect to the element

Additionally this directive provides delegation of chardin.js start and stop events via, help-overlay-start and
help-overlay-stop:

```HTML
<body help-overlay="showHelp" help-overlay-start="startFn(event)" help-overlay-stop="stopFn(event)">...</body>
```

events being passed are the original chardin.js event objects.

Note: The chardin.js attributes will not work on elements that get replaced at compile time, particularly those that are angular directives with replace:true. The workaround for this is to enclose the directive with a simple html wrapper element (e.g., ``` <span> or a <div>```) with the chardin.js attributes on it.

The example folder contains a modified example of the original chardin.js (i.e., minus the image animate).
