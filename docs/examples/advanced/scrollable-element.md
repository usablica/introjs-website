---
title: Scrollable element
keywords:
 - javascript
 - tour
 - guide
---

import { LiveExample } from "../../../lib/liveExample.js";


Intro.js can find and highlight elements even if they are rendered inside a scrollable element

<LiveExample children={
`introJs().start();
`
} />

<br/>

<div className="scrollable-element-demo">
  <h4 data-step="2" data-intro="Another step.">Section One</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>

  <h4>Section Two</h4>
  <div>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>
  <h5>testing</h5>
  </div>

  <h4>Section Three</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>

  <h4>Section Four</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>

  <h4>Section Five</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>

  <h4 data-step="1" data-intro="A scrolling step.">Section Six</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>

  <h4>Section Seven</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>

  <h4>Section Eight</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>

  <h4>Section Nine</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci
  faucibus. Phasellus nec metus purus.</p>

  <h4>Section Ten</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>

  <h4>Section Eleven</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>

  <h4>Section Twelve</h4>
  <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Duis mollis augue a neque cursus ac blandit orci faucibus. Phasellus nec metus purus.</p>
</div>
