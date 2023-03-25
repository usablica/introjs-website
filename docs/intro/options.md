---
title: Tour options
---

## Options

### `isActive`
Is this tour instance active? Don't show the tour again if this flag is set to false  
Default: `true`

### `steps`
For defining steps using JSON configuration (see the [JSON Config](../examples/basic/json-config.md) example)  

### `nextLabel`
Next button label  
Default: "Next"

### `prevLabel`
Previous button label  
Default: "Back"

### `skipLabel`
Skip button label  
Default: "x"

### `doneLabel`
Done button label  
Default: "Done"

### `hidePrev`
Hide the previous button in the first step? Otherwise, it will render a disabled button.  
Default: `false`

### `hideNext`
Hide the next button in the last step? Otherwise, it will render a disabled button. (**Note:** this will also hide the "Done" button)  
Default: `false`

### `nextToDone`
Change the next button's label to `doneLabel` in the last step of the intro? otherwise, it will render a disabled button  
Default: `true`

### `tooltipPosition`
Default tooltip position  
Default: "bottom"

### `tooltipClass`
Adding CSS class to all tooltips  
Default: ""

### `group`
Start intro for a group of elements  
Default: ""

### `highlightClass`
CSS class that is added to the helperLayer  
Default: ""

### `exitOnEsc`
Exit introduction when pressing Escape button, `true` or `false`  
Default: `true`  

### `exitOnOverlayClick`
Exit introduction when clicking on overlay layer, `true` or `false`  
Default: `true`  

### `showStepNumbers`
Show steps number in the red circle or not, `true` or `false`  
Default: `false`  

### `stepNumbersOfLabel`
Pagination "of" label  
Default: "of"  

### `keyboardNavigation`
Navigating with keyboard or not, `true` or `false`  
Default: `true`  

### `showButtons`
Show introduction navigation buttons or not, `true` or `false`  
Default: `true`  

### `showBullets`
Show introduction bullets or not, `true` or `false`  
Default: `true`  

### `showProgress`
Show introduction progress or not, `true` or `false`  
Default: `false`  

### `scrollToElement`
Auto scroll to highlighted element if it’s outside of viewport, `true` or `false`  
Default: `true`  

### `scrollTo`
Target element to scroll to (`element` or `tooltip`). Applies when `scrollToElement` is `true`  
Default: "element"  

### `scrollPadding`
Padding of scroll in px. Applies when `scrollToElement` is `true`  
Default: 30 

### `overlayOpacity`
Adjust the overlay opacity, `Number` between `0` and `1`  
Default: 0.5 

### `autoPosition`
To determine the tooltip position automatically based on the window.width/height  
Default: `true`  

### `positionPrecedence`
Precedence of positions, when auto is enabled  
Default: ["bottom", "top", "right", "left"]

### `disableInteraction`
To disable interactions with elements inside the highlighted box, `true` or `false`  
 Default: `false`  

### `dontShowAgain`
To display the "Don't show again" checkbox in the tour  
Default: `false`  

### `dontShowAgainLabel`
"Don't Show Again" label  
Default: "Don't show this again"

### `dontShowAgainCookie`
"Don't show again" cookie name  
Default: "introjs-dontShowAgain"

Note: This is cookie name, to use IntroJS tour on multiple pages, and wish to enable the "Don't show again" checkbox, it must use the dontShowAgainCookie option to set a unique cookie name on each page where using IntroJS.


### `dontShowAgainCookieDays`
"Don't show again" cookie expiry (in days)  
Default: 365 

### `helperElementPadding`
Set how much padding to be used around helper element  
Default: 10

### `buttonClass`
Additional classes to put on the buttons  
Default: ""

### `progressBarAdditionalClass`
Additional classes to put on progress bar  
Default: `false`  

## Updating options

An example of adding an option:

```javascript
introJs().setOption("nextLabel", " > ");
```
