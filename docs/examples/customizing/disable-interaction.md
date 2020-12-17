---
title: Disable element interaction
keywords:
 - javascript
 - tour
 - guide
---

import { LiveExample } from "../../../lib/liveExample.js";
import { DemoWidget } from "../../../lib/demoWidget.js";

When an element is highlighted, users can interact with the underlying element. For example, if a button is focused, users can still click the button.

To disable this behavior, use the `disableInteraction` option:

<LiveExample children={
`introJs().setOptions({
  disableInteraction: true,
  steps: [{
    title: 'Welcome',
    intro: 'Hello World! 👋'
  },
  {
    element: document.querySelector('.card-demo'),
    intro: 'You cannot select the text because "disableInteractoin" is enabled'
  },
  {
    element: document.querySelector('.card-demo-link'),
    intro: 'This link is not clickable either'
  },
  {
    title: 'Farewell!',
    element: document.querySelector('.card__image'),
    intro: 'And this is our final step!'
  }]
});
`
} />

<br/>

<DemoWidget></DemoWidget>
