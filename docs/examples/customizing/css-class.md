---
title: CSS ClassName
keywords:
 - javascript
 - tour
 - guide
---

import { LiveExample } from "../../../lib/liveExample.js";
import { DemoWidget } from "../../../lib/demoWidget.js";

You can customize your product tour using the [`tooltipClass`](../../intro/options.md) option:

```css
.customTooltip * {
  color: #4a4a4a;
  font-size: 18px
}

.customTooltip .introjs-tooltip-title {
  color: #0a41c9;
}
```

<LiveExample children={
`introJs().setOptions({
  tooltipClass: 'customTooltip'
}).start()
`
} />

<br/>

<DemoWidget></DemoWidget>