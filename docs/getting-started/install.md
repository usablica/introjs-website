---
title: Install Intro.js
---

On this page we have outlined several different ways to obtain and install an Intro.js version.

## Requirements

Intro.js doesn’t have any dependencies and you don’t need to install anything else. Follow the instruction in next steps to download and install Intro.js.


## Download

You can obtain your local copy of Intro.js from:

### CDN

Download it from CDN:

*   [CDNJS](https://cdnjs.com/libraries/intro.js)
*   [JSDelivr](http://www.jsdelivr.com/projects/intro.js)
*   [BootCDN](http://www.bootcdn.cn/intro.js/)


### NPM

Using `npm`:

    npm install intro.js --save
    
### Yarn

Using `yarn`:

    yarn add intro.js
    
### Git

Download the source from our git repository using git clone [Git repo](https://github.com/usablica/intro.js.git)

_We don’t recommend downloading directly from GitHub because the latest changes are still in beta and have not been tested yet for instability issues._

## Setup

Intro.js consists of js and css files that need to be linked externally in the HTML page.  The JS (`intro.js`) file should be linked before the closing </body> tag. The CSS file (`introjs.css`) needs to be linked in the <head> of the HTML page. 

That’s it! To continue, follow the next steps or go to the [Quick Start](/docs/getting-started/start) page.

## RTL

You can use Intro.js for RTL websites as well (e.g. Farsi). Simply add `introjs-rtl.css` file after the main CSS file (`introjs.css`) in the `<head>` section of the HTML page.
