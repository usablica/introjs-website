---
title: Hello World!
keywords:
 - javascript
 - tour
 - guide
---

import { LiveExample } from "../../../lib/liveExample.js";
import { DemoWidget } from "../../../lib/demoWidget.js";


You can create your product tour using `data-intro` and `data-title` HTML attributes. Simply add those attributes to your
elements and call `introJs().start()`:

```jsx title="index.html"
<div data-title="Welcome!" data-intro="Hello World! 👋" class="card-demo">
  <div class="card shadow--md">
    <div class="card__image" data-intro="Intro.js can highlight on elements">
      <img
        src="..."
        alt="Image alt text"
        title="Logo Title Text 1"
      />
    </div>
    <div class="card__body" data-title="Farewell!" data-intro="And this is the last step!">
      <h4>Quaco Lighthouse</h4>
      <small>
        The Quaco Head Lighthouse is a well maintained lighthouse close to St.
        Martins. It is a short, beautiful walk to the lighthouse along the
        seashore.
      </small>
    </div>
  </div>
</div>
```

And then call `introJs().start()`:

<LiveExample children={
`// Intro.js scans the webpage and finds all elements with \`data-intro\` attribute
introJs().start();
`
} />

<br/>

<DemoWidget></DemoWidget>


:::tip
You can also use `data-step` to change the ordering of each step of your product tour, more details: [Tour HTML attributes](../../intro/attributes.md).
:::
