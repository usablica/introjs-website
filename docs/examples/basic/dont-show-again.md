---
title: Don't Show Again
keywords:
 - javascript
 - tour
 - guide
 - dont-show-again
---

import { LiveExample } from "../../../lib/liveExample.js";
import { DemoWidget } from "../../../lib/demoWidget.js";

Set the `dontShowAgain` option to `true` to display the "Don't Show Again" checkbox in your product tour.

This checkbox stores a cookie when it's clicked and next time the `start()` method is called, Intro.js first checks the cookie value and if it's not enabled, it runs the tour. Otherwise, Intro.js silently ignores the `start()` call.

<LiveExample children={
`// Check the dontShowAgain cookies first and then display the tour
introJs().setOption("dontShowAgain", true).start();
`
} />

<br/>

<DemoWidget></DemoWidget>

