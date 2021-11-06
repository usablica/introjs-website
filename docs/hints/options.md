---
title: Hints options
---

## Options

### `hintPosition`
Hint position. Default: `top-middle`

### `hintButtonLabel`
Hint button label. Default: ‘Got it’

### `hintAnimation`
To add animation to hints or not. Default: `true`

### `hintShowButton`
To show/hide the "Got it" button. Default: `true`

### `hintAutoRefreshInterval`
Hints auto-refresh interval in `ms` (set to -1 to disable). Default: `10`

### `hints`
For defining hints using JSON configuration. Array of hint objects.

## Hint data structure

```json
{
    hint: 'text for the hint',
    element: element, // string query selector or DOMElement
    hintPosition: (Optional) Hint position. Default: `top-middle`
    hintAnimation: (Optional) To add animation to hints or not. Default: `true`
}
```

## Updating options

An example of adding an option:

```javascript
introJs().setOption("hintButtonLabel", "OK");
```

An example of adding hints programmatically through options:

```javascript
introJs().setOptions({
    hints: [
        { hint: 'First hint', element: '#new-feature' },
        { hint: 'Second hint', element: '#new-button', hintAnimation: false }
    ]
});
```
