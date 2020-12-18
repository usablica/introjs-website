---
title: Right-to-left tour
keywords:
 - javascript
 - tour
 - guide
---

import { LiveExample } from "../../../lib/liveExample.js";
import { DemoWidget } from "../../../lib/demoWidget.js";

Intro.js supports RTL by default. Simply include `introjs-rtl.css` and customize buttons:

```javascript
import * as style from 'intro.js/introjs-rtl.css';
```

<LiveExample children={
`introJs().setOptions({
  nextLabel: 'بعد',
  prevLabel: 'قبل',
  doneLabel: 'اتمام',
  steps: [{
    intro: '👋 سلام دنیا'
  },
  {
    element: document.querySelector('.card-demo'),
    intro: 'یک مرحله دیگه'
  },
  {
    title: 'بدرود',
    element: document.querySelector('.card__image'),
    intro: 'باحال نیست؟'
  }]
})
.start();
`
} rtl={true} />

<br/>

<DemoWidget populate={0}></DemoWidget>
