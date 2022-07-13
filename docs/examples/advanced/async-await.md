---
title: Async/Await callbacks
keywords:
 - javascript
 - tour
 - guide
 - async
 - await
 - promise
---

import { LiveExample } from "../../../lib/liveExample.js";
import { DemoWidget } from "../../../lib/demoWidget.js";


Intro.js main functions to start/stop a tour return a `Promise` object. You can also return a `Promise` object in the callback functions
(e.g. `onbeforechange`) and Intro.js internally waits for that `Promise` object to be fulfilled. You can use this concept to perform async I/O (e.g. sending HTTP calls) _before_ moving to the next step of the tour.

In the following example, we are returning a `Promise` object and we resolve it after **500ms**:

<LiveExample children={
`introJs().onbeforechange(async () => {
  return new Promise((resolve) => {
    console.log('Performing I/O...');
    setInterval(resolve, 500);
  });
}).start();
`
} />

<br/>

<DemoWidget></DemoWidget>
