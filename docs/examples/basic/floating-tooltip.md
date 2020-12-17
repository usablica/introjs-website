---
title: Floating tooltip
keywords:
 - javascript
 - tour
 - guide
---

import { LiveExample } from "../../../lib/liveExample.js";

Using the JSON configs, you can create floating tooltips that don't highlight a specific element:

<LiveExample children={
`introJs().setOptions({
  steps: [{
    title: 'Welcome',
    intro: 'Hello World! 👋'
  },
  {
    intro: '<img src="https://i.giphy.com/media/ujUdrdpX7Ok5W/giphy.webp" onerror="this.onerror=null;this.src=\\'https://i.giphy.com/ujUdrdpX7Ok5W.gif\\';" alt="">'
  },
  {
    element: document.querySelector('.card-demo'),
    intro: 'This step focuses on an element'
  }]
});
`
} />

<br/>

<div class="demo-container">
    <div class="card-demo" style={{width: '300px'}}>
      <div class="card shadow--md">
        <div class="card__image">
          <img
            src="https://images.unsplash.com/photo-1506624183912-c602f4a21ca7?ixlib=rb-1.2.1&amp;ixid=eyJhcHBfaWQiOjEyMDd9&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=60"
            alt="Image alt text"
            title="Logo Title Text 1"
          />
        </div>
        <div class="card__body">
          <h4>Quaco Lighthouse</h4>
          <small>
            The Quaco Head Lighthouse is a well maintained lighthouse close to St.
            Martins. It is a short, beautiful walk to the lighthouse along the
            seashore.
          </small>
        </div>
      </div>
    </div>
</div>
