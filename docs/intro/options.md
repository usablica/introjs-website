---
title: Tour options
---

## Options

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

### `highlightClass`
Additional CSS class for the helperLayer

### `exitOnEsc`
Exit introduction when pressing Escape button, `true` or `false`

### `exitOnOverlayClick`
Exit introduction when clicking on overlay layer, `true` or `false`

### `showStepNumbers`
Show steps number in the red circle or not, `true` or `false`

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

### `disableInteraction`
To disable interactions with elements inside the highlighted box, `true` or `false`

## Updating options

An example of adding an option:

```javascript
introJs().setOption("nextLabel", " > ");
```
