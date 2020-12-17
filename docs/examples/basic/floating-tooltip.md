---
title: Floating tooltip
keywords:
 - javascript
 - tour
 - guide
---

import { LiveExample } from "../../../lib/liveExample.js";
import { DemoWidget } from "../../../lib/demoWidget.js";

Using the JSON configs, you can create floating tooltips that don't highlight a specific element:

<LiveExample children={
`introJs().setOptions({
  steps: [{
    title: 'Welcome',
    intro: 'Hello World! 👋'
  },
  {
    intro: '<img src="https://i.giphy.com/media/ujUdrdpX7Ok5W/giphy.webp" onerror="this.onerror=null;this.src=\\'https://i.giphy.com/ujUdrdpX7Ok5W.gif\\';" alt="">'
  },
  {
    element: document.querySelector('.card-demo'),
    intro: 'This step focuses on an element'
  }]
});
`
} />

<br/>

<DemoWidget populate={0}></DemoWidget>
