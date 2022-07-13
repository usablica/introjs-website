---
title: Tour options
---

## Options

### `isActive`
Is this tour instance active? Don't show the tour again if this flag is set to false

### `steps`
For defining steps using JSON configuration (see the [JSON Config](../examples/basic/json-config.md) example)

### `nextLabel`
Next button label

### `prevLabel`
Previous button label

### `skipLabel`
Skip button label

### `doneLabel`
Done button label

### `hidePrev`
Hide the previous button in the first step? Otherwise, it will render a disabled button.

### `hideNext`
Hide the next button in the last step? Otherwise, it will render a disabled button. (**Note:** this will also hide the "Done" button)

### `nextToDone`
Change the next button's label to `doneLabel` in the last step of the intro? otherwise, it will render a disabled button

### `tooltipPosition`
Default tooltip position

### `tooltipClass`
Adding CSS class to all tooltips

### `group`
Start intro for a group of elements

### `highlightClass`
CSS class that is added to the helperLayer

### `exitOnEsc`
Exit introduction when pressing Escape button, `true` or `false`

### `exitOnOverlayClick`
Exit introduction when clicking on overlay layer, `true` or `false`

### `showStepNumbers`
Show steps number in the red circle or not, `true` or `false`

### `stepNumbersOfLabel`
Pagination "of" label

### `keyboardNavigation`
Navigating with keyboard or not, `true` or `false`

### `showButtons`
Show introduction navigation buttons or not, `true` or `false`

### `showBullets`
Show introduction bullets or not, `true` or `false`

### `showProgress`
Show introduction progress or not, `true` or `false`

### `scrollToElement`
Auto scroll to highlighted element if it’s outside of viewport, `true` or `false`

### `scrollTo`
Target element to scroll to (`element` or `tooltip`). Default is `element`. Applies when `scrollToElement` is `true`

### `scrollPadding`
Padding of scroll in px. Default is 30. Applies when `scrollToElement` is `true`

### `overlayOpacity`
Adjust the overlay opacity, `Number` between `0` and `1`

### `autoPosition`
To determine the tooltip position automatically based on the window.width/height

### `positionPrecedence`
Precedence of positions, when auto is enabled

### `disableInteraction`
To disable interactions with elements inside the highlighted box, `true` or `false`

### `dontShowAgain`
To display the "Don't show again" checkbox in the tour

### `dontShowAgainLabel`
"Don't Show Again" label

### `dontShowAgainCookie`
### `dontShowAgainCookieDays`
"Don't show again" cookie name and expiry (in days)

### `helperElementPadding`
Set how much padding to be used around helper element

### `buttonClass`
Additional classes to put on the buttons

### `progressBarAdditionalClass`
Additional classes to put on progress bar

## Updating options

An example of adding an option:

```javascript
introJs().setOption("nextLabel", " > ");
```
