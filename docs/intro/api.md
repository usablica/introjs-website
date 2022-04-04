---
title: Tour API
---

## introJs(\[targetElm\])

Creating an introJs object.

**Parameters:**

 - targetElm : String (optional) Should be defined to start introduction for specific element, for example: `#intro-farm`.

**Returns:**

 - introJs object.

**Example:**

```javascript
introJs() //without selector, start introduction for whole page
introJs("#intro-farm") //start introduction for element id='intro-farm'
```

* * *

## introJs.start()

Start the introduction for defined element(s).

**Returns:**

 - introJs object.

**Example:**

```javascript
introJs().start()
```

* * *

## introJs.goToStep(step)

Go to specific step of introduction.

**Parameters:**

 - step: Number

**Returns:**

 - introJs object.

**Example:**

```javascript
introJs().goToStep(2).start(); //starts introduction from step 2
```

* * *

## introJs.goToStepNumber(step)

Go to specific step of introduction with the concrete step. This differs from `goToStep` in the way that `data-step` does not have be continuous to pick the desired element.

**Parameters:**

 - step : Number

**Returns:**

 - introJs object.

**Example:**

```html
<div id="first" data-step='5'></div>
<div id="second" data-step='9'></div>
```

```javascript
//start introduction from step with data-step='9'
introJs().goToStepNumber(9).start();
``` 

* * *

## introJs.addStep(options)

Add a new step to introJs.

**Example:**

```javascript
introJs().addStep({
    element: document.querySelectorAll('#step2')[0],
    intro: "Ok, wasn't that fun?",
    position: 'right'
});
```

* * *

## introJs.addSteps(steps)

Add a new step to introJs.

**Example:**

```javascript
introJs().addSteps([{
    element: document.querySelectorAll('#step2')[0],
    intro: "Ok, wasn't that fun?",
    position: 'right'
}]);
``` 

* * *

## introJs.nextStep()

Go to next step of introduction.

**Returns:**

 - introJs object.

**Example:**

```javascript
introJs().start().nextStep();
``` 

* * *

## introJs.previousStep()

Go to previous step of introduction.

**Returns:**

 - introJs object.

**Example:**

```javascript
introJs().goToStep(3).start().previousStep(); //starts introduction from step 2
``` 

* * *

## introJs.exit(\[force\])

Exit the introduction.

**Parameters:**

 - force : Boolean (optional) - Exit the tour even if `introJs.onbeforeexit` returns `false` (Available since 2.7.0)

**Returns:**

 - introJs object.

**Example:**

```javascript
introJs().exit()
```

* * *

## introJs.setOption(option, value)

Set a single option to introJs object.

**Parameters:**

 - option : String Option - key name.
 - value : String/Number - Value of the option.

**Returns:**

 - introJs object.

**Example:**

```javascript
introJs().setOption("skipLabel", "Exit");
```

* * *

## introJs.setOptions(options)

Set a group of options to the introJs object.

**Parameters:**

 - options : Object - Object that contains option keys with values.

**Returns:**

 - introJs object.

**Example:**

```javascript
introJs().setOptions({ 
  'skipLabel': 'Exit',
  'tooltipPosition': 'right'
});
```

* * *

## introJs.refresh()

To refresh and order layers manually. This function rearranges all hints as well.

**Parameters:**

- refreshSteps : Boolean - To fetch and refresh the Intro steps as well

**Returns:**

 - introJs object.

**Example:**

```javascript
introJs().refresh();
```

* * *

## introJs.isActive()

Returns `true` if this Intro.js is active and the "Don't Show Again" cookie is not `true`.

**Returns:**

 - boolean

**Example:**

```javascript
introJs().isActive();
```

* * *

## introJs.setDontShowAgain(dontShowAgain)

To manually set the "Don't Show Again" state

**Parameters:**

 - dontShowAgain: boolean

**Returns:**

 - introJs object

**Example:**

```javascript
introJs().setDontShowAgain(true);
```

* * *

## introJs.oncomplete(providedCallback)

Set callback for when introduction completed.

**Parameters:**

 - providedCallback : Function

**Returns:**

 - introJs object.

**Example:**

```javascript
introJs().oncomplete(function() {
  alert("end of introduction");
});
```

* * *

## introJs.onexit(providedCallback)

Set callback to exit of introduction. Exit also means pressing `ESC` key and clicking on the overlay layer by the user.

**Parameters:**

 - providedCallback : Function

**Returns:**

 - introJs object.

**Example:**

```javascript
introJs().onexit(function() {
  alert("exit of introduction");
});
```

* * *

## introJs.onbeforeexit(providedCallback)

Works exactly same as `onexit` but calls before closing the tour. Also, returning `false` would prevent the tour from closing.

**Parameters:**

 - providedCallback : Function

**Returns:**

 - introJs object.

**Example:**

```javascript
introJs().onbeforeexit(function() {
  console.log("on before exit")

  // returning false means don't exit the intro
  return false;
});
```

* * *

## introJs.onchange(providedCallback)

Set callback to change of each step of introduction. Given callback function will be called after completing each step. The callback function receives the element of the new step as an argument.

**Parameters:**

 - providedCallback : Function

**Returns:**

 - introJs object.

**Example:**

```javascript
introJs().onchange(function(targetElement) {
  alert("new step");
});
```

* * *

## introJs.onbeforechange(providedCallback)

Given callback function will be called before starting a new step of introduction. The callback function receives the element of the new step as an argument.

**Parameters:**

 - providedCallback : Function

**Returns:**

 - introJs object.

**Example:**

```javascript
introJs().onbeforechange(function(targetElement) {
  alert("before new step");
});
```

* * *

## introJs.onafterchange(providedCallback)

Given callback function will be called after starting a new step of introduction. The callback function receives the element of the new step as an argument.

**Parameters:**

 - providedCallback : Function

**Returns:**

 - introJs object.

**Example:**

```javascript
introJs().onafterchange(function(targetElement) {
  alert("after new step");
});
```
