---
title: Tooltip positions
keywords:
 - javascript
 - tour
 - guide
---

import { LiveExample } from "../../../lib/liveExample.js";
import { DemoWidget } from "../../../lib/demoWidget.js";

Intro.js automatically finds the best position for the tooltips, but you can explicitly define 
the tooltip position for each step using the [`position`](../../intro/options.md) config:

<LiveExample children={
`introJs().setOptions({
  steps: [
  {
    element: document.querySelector('.card-demo'),
    intro: 'Tooltip has position right',
    position: 'right'
  },
  {
    element: document.querySelector('.card-demo-link'),
    intro: 'Tooltip has position left',
    position: 'left'
  },
  {
    element: document.querySelector('.card-demo-text'),
    intro: 'Tooltip has position bottom',
    position: 'bottom'
  },
  {
    element: document.querySelector('.card-demo'),
    intro: 'Tooltip has position top',
    position: 'top'
  }]
}).start();
`
} />

<br/>

<DemoWidget></DemoWidget>
