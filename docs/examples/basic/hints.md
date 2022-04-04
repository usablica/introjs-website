---
title: Hints
keywords:
 - javascript
 - tour
 - guide
---

import { LiveExample } from "../../../lib/liveExample.js";
import { DemoWidget } from "../../../lib/demoWidget.js";


You can also add Hints to your page using `data-hint` HTML attributes. Simply add those attributes to your
elements and call `introJs().addHints()`:

```jsx title="index.html"
<div class="card-demo">
  <div class="card shadow--md">
    <div class="card__image">
      <img
        src="..."
        alt="Image alt text"
        title="Logo Title Text 1"
      />
    </div>
    <div class="card__body">
      <h4 
        data-hint="Hello! 👋 Click on this link"
        data-hint-position="bottom-middle"
      >
       Quaco Lighthouse
      </h4>
      <small data-hint="You can select the text" data-hint-position="top-right">
        The Quaco Head Lighthouse is a well maintained lighthouse close to St.
        Martins. It is a short, beautiful walk to the lighthouse along the
        seashore.
      </small>
    </div>
  </div>
</div>
```

And then call `introJs().addHints()`:

<LiveExample children={
`// Intro.js scans the webpage and finds all elements with \`data-hint\` attribute
introJs().addHints();
`
} hints={true} />

<br/>

<DemoWidget></DemoWidget>

:::tip
You can also define the Hints using JSON configuration. See [Hint Options](../../hints/options.md) for more details.
:::
