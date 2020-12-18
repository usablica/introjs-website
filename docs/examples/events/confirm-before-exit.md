---
title: Confirm before exit
keywords:
 - javascript
 - tour
 - guide
---

import { LiveExample } from "../../../lib/liveExample.js";
import { DemoWidget } from "../../../lib/demoWidget.js";

Use the `onbeforeexit` callback to get a confirmation before closing the tour:

<LiveExample children={
`introJs().onbeforeexit(function () {
  return confirm("Are you sure?");
}).start()
`
} />

<br/>

<DemoWidget></DemoWidget>
