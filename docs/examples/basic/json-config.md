---
title: JSON configuration
keywords:
 - javascript
 - tour
 - guide
---

import { LiveExample } from "../../../lib/liveExample.js";
import { DemoWidget } from "../../../lib/demoWidget.js";

You can define your tour settings using JSON as well.

:::tip
You can interact with the following editor!
:::


<LiveExample children={
`introJs().setOptions({
  steps: [{
    title: 'Welcome',
    intro: 'Hello World! 👋'
  },
  {
    element: document.querySelector('.card-demo'),
    intro: 'This step focuses on an image'
  },
  {
    title: 'Farewell!',
    element: document.querySelector('.card__image'),
    intro: 'And this is our final step!'
  }]
}).start();
`
} />

<br/>

<DemoWidget populate={0}></DemoWidget>
