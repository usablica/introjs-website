---
title: HTML in tooltip
keywords:
 - javascript
 - tour
 - guide
---

import { LiveExample } from "../../../lib/liveExample.js";
import { DemoWidget } from "../../../lib/demoWidget.js";


<LiveExample children={
`introJs().setOptions({
  steps: [{
    title: 'Welcome',
    intro: 'Hello World! 👋'
  },
  {
    element: document.querySelector('.card-demo'),
    intro: 'This <b>STEP</b> focuses on an image. <br/> We also used some HTML tags!'
  },
  {
    title: 'Farewell!',
    element: document.querySelector('.card__image'),
    intro: '<img src="https://images.unsplash.com/photo-1608096299210-db7e38487075?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=400&q=80" />'
  }]
}).start();
`
} />

<br/>

<DemoWidget populate={0}></DemoWidget>
