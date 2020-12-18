---
title: Tour for SVG elements
keywords:
 - javascript
 - tour
 - guide
---

import { LiveExample } from "../../../lib/liveExample.js";


You can create your product tour using `data-intro` and `data-title` HTML attributes. Simply add those attributs to your
elements and call `introjJs().start()`:


<LiveExample children={
`// Intro.js scans the webpage and finds all elements with \`data-intro\` attribute
introJs().start();
`
} />

<br/>


<svg height="500" width="300">
    <circle data-intro="Hello!" cx="229" cy="260" r="32" style={{fill: 'rgb(31, 119, 180)' }}></circle>
    <circle data-intro="Intro.js can highlight SVG elements as well" cx="171" cy="112" r="32" style={{fill: 'rgb(174, 199, 232)' }}></circle>
    <circle cx="177" cy="464" r="32" style={{fill: 'rgb(255, 187, 120)' }}></circle>
    <circle cx="87" cy="427" r="32" style={{fill: 'rgb(148, 103, 189)' }}></circle>
    <circle cx="41" cy="273" r="32" style={{fill: 'rgb(197, 176, 213)' }}></circle>
    <circle cx="382" cy="443" r="32" style={{fill: 'rgb(140, 86, 75)' }}></circle>
    <circle cx="135" cy="57" r="32" style={{fill: 'rgb(196, 156, 148)' }}></circle>
    <circle data-intro="Final step!" data-title="Goodbye!" cx="74" cy="181" r="32" style={{fill: 'rgb(199, 199, 199)' }}></circle>
</svg>