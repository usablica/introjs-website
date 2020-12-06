import React, {useCallback, useEffect, useRef, useState} from 'react';
import Head from '@docusaurus/Head';
import ThemeProvider from '@theme/ThemeProvider';
import UserPreferencesProvider from '@theme/UserPreferencesProvider';
import AnnouncementBar from '@theme/AnnouncementBar';
import CodeBlock from '@theme/CodeBlock';
import useDocusaurusContext from '@docusaurus/useDocusaurusContext';

// do NOT remove the CSS import even if unused
import * as style from './styles.module.css';

const features = [
  {
    title: <>Easy to Use</>,
    icon: <>
      <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4"/>
      </svg>
    </>,
    description: (
      <>
        The simplicity of Intro.js API will help you to develop an advanced
        onboarding for your products. Intro.js is lightweight, 10kB and has no external dependencies!
      </>
    ),
  },
  {
    title: <>Customizable</>,
    icon: <>
      <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z"/><path d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path>
      </svg>
    </>,
    description: (
      <>
        Intro.js provides various ways to configure your product onboarding and customize every single step of your tour.
      </>
    ),
  },
  {
    title: <>Open-source</>,
    icon: <>
      <svg className="h-6 w-6" stroke="currentColor" fill="none" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z" />
      </svg>
    </>,
    description: (
      <>
        Intro.js is Free and open-source, published under AGPL license.
        We also provide commercial license, supporting your team to successfully integrate Intro.js!
      </>
    ),
  },
];

function Feature({icon, title, description}) {
  return (
    <div className="mt-10 lg:mt-0">
      <div className="flex items-center justify-center h-12 w-12 rounded-md bg-blue-500 text-white">
        {icon}
      </div>
      <div className="mt-5">
        <h5 className="text-lg leading-6 font-medium text-gray-900">{title}</h5>
        <p className="mt-2 text-base leading-6 text-gray-500">
          {description}
        </p>
      </div>
    </div>
  );
}

function Features() {
  return (<div className="max-w-7xl mx-auto sm:px-6 lg:px-8">
    <div className="py-12 bg-white">
      <div className="max-w-xl mx-auto px-4 sm:px-6 lg:max-w-screen-xl lg:px-8">
        <div className="lg:grid lg:grid-cols-3 lg:gap-8">
          {features.map((props, idx) => (
            <Feature key={idx} {...props} />
          ))}
        </div>
      </div>
    </div>
  </div>);
}

function startTour() {
  introJs().setOptions({
    steps: [{
      intro: "Welcome to Intro.js live demo!"
    }, {
      element: document.querySelector('#headline'),
      intro: "Using Intro.js, you can focus on HTML elements on the page."
    }, {
      element: document.querySelector('#install-assets'),
      intro: "Intro.js finds the position of your elements on the page and changes the viewport automatically!"
    }, {
      element: document.querySelector('#install-example'),
      intro: "Oh btw, it\'s super simple to install and use Intro.js!"
    }, {
      element: document.querySelector('#commercial-element-focus'),
      intro: "Need commercial support? We are more than happy to help you successfully integrate Intro.js."
    }, {
      element: document.querySelector('#get-started-button'),
      intro: "Get started now!"
    }, {
      intro: '<img src="https://i.giphy.com/media/E6jscXfv3AkWQ/giphy.webp" onerror="this.onerror=null;this.src="https://i.giphy.com/E6jscXfv3AkWQ.gif";" alt="">'
    }]
  }).start();
}

function Header() {
  const [isMenuOpen, setMenuState] = useState(false);

  return (
    <div className="relative bg-gray-50 overflow-hidden">
      <div className="hidden sm:block sm:absolute sm:inset-y-0 sm:h-full sm:w-full" aria-hidden="true">
        <div className="relative h-full max-w-7xl mx-auto">
          <svg className="absolute right-full transform translate-y-1/4 translate-x-1/4 lg:translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="f210dbf6-a58d-4871-961e-36d5016a0f49" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#f210dbf6-a58d-4871-961e-36d5016a0f49)" />
          </svg>
          <svg className="absolute left-full transform -translate-y-3/4 -translate-x-1/4 md:-translate-y-1/2 lg:-translate-x-1/2" width="404" height="784" fill="none" viewBox="0 0 404 784">
            <defs>
              <pattern id="5d0dd344-b041-4d26-bec4-8d33ea57ec9b" x="0" y="0" width="20" height="20" patternUnits="userSpaceOnUse">
                <rect x="0" y="0" width="4" height="4" className="text-gray-200" fill="currentColor" />
              </pattern>
            </defs>
            <rect width="404" height="784" fill="url(#5d0dd344-b041-4d26-bec4-8d33ea57ec9b)" />
          </svg>
        </div>
      </div>

      <div className="relative pt-6 pb-16 sm:pb-24">
        <div className="max-w-7xl mx-auto px-4 sm:px-6">
          <nav className="relative flex items-center justify-between sm:h-10 md:justify-center" aria-label="Global">
            <div className="flex items-center flex-1 md:absolute md:inset-y-0 md:left-0">
              <div className="flex items-center justify-between w-full md:w-auto">
                <a href="#">
                  <span className="sr-only">Intro.js</span>
                  <img className="h-8 w-auto sm:h-10" src="/img/logo.svg" alt="Intro.js" />
                </a>
                <div className="-mr-2 flex items-center md:hidden">
                  <button
                    onClick={() => setMenuState(true)}
                    type="button"
                    className="bg-gray-50 rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500" id="main-menu" aria-haspopup="true">
                    <span className="sr-only">Open main menu</span>
                    <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
            <div className="hidden md:flex md:space-x-10">
              <a href="#commercial" className="font-medium text-gray-500 hover:text-gray-900">Commercial</a>

              <a href="/docs" className="font-medium text-gray-500 hover:text-gray-900">Documentation</a>

              <a href="https://github.com/usablica/intro.js/releases" className="font-medium text-gray-500 hover:text-gray-900" target="_blank">Download</a>

              <a href="/blog" className="font-medium text-gray-500 hover:text-gray-900">Blog</a>

              <a href="https://github.com/usablica/intro.js" className="font-medium text-gray-500 hover:text-gray-900" target="_blank">GitHub</a>
            </div>
          </nav>
        </div>

        <div className={`absolute top-0 inset-x-0 p-2 transition transform origin-top-right md:hidden  ${!isMenuOpen ? 'hidden' : ''}`}>
          <div className="rounded-lg shadow-md bg-white ring-1 ring-black ring-opacity-5 overflow-hidden">
            <div className="px-5 pt-4 flex items-center justify-between">
              <div>
                <img className="h-8 w-auto" src="/img/logo.svg" alt="Intro.js" />
              </div>
              <div className="-mr-2">
                <button
                  onClick={() => setMenuState(false)}
                  type="button"
                  className="bg-white rounded-md p-2 inline-flex items-center justify-center text-gray-400 hover:text-gray-500 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-blue-500"
                >
                  <span className="sr-only">Close menu</span>
                  <svg className="h-6 w-6" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
                  </svg>
                </button>
              </div>
            </div>
            <div role="menu" aria-orientation="vertical" aria-labelledby="main-menu">
              <div className="px-2 pt-2 pb-3" role="none">
                <a href="#commercial" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Commercial</a>

                <a href="/docs" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem">Documentation</a>

                <a href="https://github.com/usablica/intro.js/releases" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem" target="_blank">Download</a>

                <a href="https://github.com/usablica/intro.js" className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-gray-900 hover:bg-gray-50" role="menuitem" target="_blank">GitHub</a>
              </div>
            </div>
          </div>
        </div>

        <main className="mt-16 mx-auto max-w-7xl px-4 sm:mt-24">
          <div className="text-center">
            <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl" id="headline">
              <span className="block xl:inline">Introduce users </span>
              <span className="block text-blue-600 xl:inline">to your product</span>
            </h1>
            <p className="mt-3 max-w-md mx-auto text-base text-gray-500 sm:text-lg md:mt-5 md:text-xl md:max-w-3xl">
              Intro.js is a lightweight library for creating step-by-step customer onboarding
            </p>
            <div className="mt-5 max-w-md mx-auto sm:flex sm:justify-center md:mt-8">
              <div className="rounded-md shadow">
                <button onClick={() => startTour()} className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 hover:text-white md:py-4 md:text-lg md:px-10">
                  Live demo
                </button>
              </div>
              <div className="mt-3 rounded-md shadow sm:mt-0 sm:ml-3">
                <a href="/docs/getting-started/install" className="w-full flex items-center justify-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-blue-600 bg-white hover:bg-gray-50 md:py-4 md:text-lg md:px-10" id="get-started-button">
                  Get Started
                </a>
              </div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}

function Footer() {
  return (
    <div className={`bg-gray-800 ${style.footer}`}>
      <div className="max-w-screen-xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <div className="xl:grid xl:grid-cols-3 xl:gap-8">
          <div className="grid grid-cols-2 gap-8 xl:col-span-2">
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Intro.js
                </h4>
                <ul className="mt-4">
                  <li>
                    <a href="/docs/getting-started/install" className="text-base leading-6 text-gray-300 hover:text-white">
                      Install
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="/docs/getting-started/examples" className="text-base leading-6 text-gray-300 hover:text-white">
                      Examples
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="#" className="text-base leading-6 text-gray-300 hover:text-white">
                      Contribute
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Support
                </h4>
                <ul className="mt-4">
                  <li>
                    <a href="/docs" className="text-base leading-6 text-gray-300 hover:text-white">
                      Documentation
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="/docs/community" className="text-base leading-6 text-gray-300 hover:text-white">
                      Community
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="https://stackoverflow.com/questions/tagged/intro.js" className="text-base leading-6 text-gray-300 hover:text-white" target="_blank">
                      StackOverflow
                    </a>
                  </li>
                </ul>
              </div>
            </div>
            <div className="md:grid md:grid-cols-2 md:gap-8">
              <div>
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Team
                </h4>
                <ul className="mt-4">
                  <li>
                    <a href="/blog" className="text-base leading-6 text-gray-300 hover:text-white">
                      Blog
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="https://github.com/usablica/intro.js/graphs/contributors" className="text-base leading-6 text-gray-300 hover:text-white" target="_blank">
                      Contributors
                    </a>
                  </li>
                  <li className="mt-4">
                    <a href="https://github.com/usablica/intro.js" className="text-base leading-6 text-gray-300 hover:text-white">
                      GitHub
                    </a>
                  </li>
                </ul>
              </div>
              <div className="mt-12 md:mt-0">
                <h4 className="text-sm leading-5 font-semibold tracking-wider text-gray-400 uppercase">
                  Legal
                </h4>
                <ul className="mt-4">
                  <li>
                    <a href="/docs/getting-started/license" className="text-base leading-6 text-gray-300 hover:text-white">
                      License
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-8 border-t border-gray-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex md:order-2">
            <a href="https://twitter.com/usablica" className="ml-6 text-gray-400 hover:text-gray-300">
              <span className="sr-only">Twitter</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
              </svg>
            </a>
            <a href="https://github.com/usablica/intro.js" className="ml-6 text-gray-400 hover:text-gray-300">
              <span className="sr-only">GitHub</span>
              <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                <path fillRule="evenodd"
                      d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                      clipRule="evenodd"/>
              </svg>
            </a>
          </div>
          <p className="mt-8 text-base leading-6 text-gray-400 md:mt-0 md:order-1">
            &copy; 2020 Usablica Limited, Inc. All rights reserved.
          </p>
        </div>
      </div>
    </div>
  );
}

function Install() {
  const example = `introJs().setOptions({
  steps: [{
    intro: "Hello world!"
  }, {
    element: document.querySelector('#login'),
    intro: "Click here to login!"
  }]
}).start();
`;

  return (
    <div className="bg-white pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
      <div className="relative max-w-lg mx-auto lg:max-w-7xl">
        <div>
          <h2 className="text-3xl leading-9 tracking-tight font-extrabold text-gray-900 sm:text-4xl sm:leading-10">
            Install Intro.js
          </h2>
          <p className="mt-3 text-xl leading-7 text-gray-500 sm:mt-4">
            You can install Intro.js in a few simple steps. Intro.js consists of two main files, the JavaScript part and
            the CSS part which renders the elements nicely.
          </p>
        </div>
        <div className="mt-12 grid gap-16 border-t-2 border-gray-100 pt-12 lg:grid-cols-2 lg:col-gap-5 lg:row-gap-12">
          <div id="install-assets">
            <h3 className="mt-4 text-xl leading-7 font-semibold text-gray-900">
              <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-blue-100 text-blue-600">
                1
              </span> Include the JavaScript and CSS
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">
              Intro.js is available on <a rel="noreferrer" href="https://www.npmjs.com/package/intro.js" target="_blank">NPM</a> and most CDNs
            </p>

            <div className="mt-1 flex rounded-md shadow-sm">
              <span
                className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                JavaScript
              </span>
              <input readOnly="readOnly"
                     className="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                     value="https://unpkg.com/intro.js/minified/intro.min.js" />
            </div>

            <div className="mt-3 flex rounded-md shadow-sm">
              <span
                className="inline-flex items-center px-3 rounded-l-md border border-r-0 border-gray-300 bg-gray-50 text-gray-500 text-sm">
                CSS
              </span>
              <input readOnly="readOnly"
                     className="form-input flex-1 block w-full rounded-none rounded-r-md transition duration-150 ease-in-out sm:text-sm sm:leading-5"
                     value="https://unpkg.com/intro.js/minified/introjs.min.css" />
            </div>
          </div>
          <div id="install-example">
            <h3 className="mt-4 text-xl leading-7 font-semibold text-gray-900">
              <span className="inline-flex px-4 py-1 rounded-full text-sm leading-5 font-semibold tracking-wide uppercase bg-blue-100 text-blue-600">
                2
              </span> Call the <code>introJs.start()</code> method
            </h3>
            <p className="mt-3 text-base leading-6 text-gray-500">
              The <code>start()</code> method configures the library and starts the product tour.
            </p>

            <div className={style.codeExample}>
              <CodeBlock className="js" id="codeExample">{example}</CodeBlock>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

function Home() {
  const context = useDocusaurusContext();
  const {siteConfig = {}} = context;

  useEffect(() => {
    // sorry, I couldn't find a better way to disable the dark mode for this page only
    document.documentElement.setAttribute('data-theme', '');
  });

  return (
    <ThemeProvider isDarkTheme={false}>
      <UserPreferencesProvider>
        <Head>
          <html lang="en" />
          <title>{siteConfig.title} - {siteConfig.tagline}</title>
          <meta property="og:title" content={`${siteConfig.title} - ${siteConfig.tagline}`} />
          <link rel="shortcut icon" href="/img/favicon.ico" />
          <meta name="author" content="Afshin Mehrabani" />
          <meta name="description" content="Intro.js is a lightweight, open-source customer onboarding plugin. Intro.js helps you create step-by-step product tours, user onboarding guides easily." />
          <meta property="og:description" content="Intro.js is a lightweight, open-source customer onboarding plugin. Intro.js helps you create step-by-step product tours, user onboarding guides easily." />
          <meta name="keywords" content="intro, introjs, intro.js, javascript, jquery, react, onboarding, tour, product tour, product onboarding, guiding, customer guiding, user guiding" />
          <meta property="og:image" content="https://introjs.com/img/social.png" />
          <meta property="og:url" content="https://introjs.com/" />
          <meta property="og:type" content="website" />
          <meta name="twitter:image" content="https://introjs.com/img/social.png" />
          <meta name="twitter:title" content={`${siteConfig.title} - ${siteConfig.tagline}`} />
          <meta name="twitter:image:alt" content={`${siteConfig.title} - ${siteConfig.tagline}`} />
          <meta name="twitter:description" content="Intro.js is a lightweight, open-source customer onboarding plugin. Intro.js helps you create step-by-step product tours, user onboarding guides easily." />
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:site" content="@usablica" />
          <meta name="twitter:creator" content="@afshinmeh" />

          <script src="https://unpkg.com/intro.js/minified/intro.min.js"></script>
          <link rel="stylesheet" href="https://unpkg.com/intro.js/minified/introjs.min.css" />
          <script src="https://js.stripe.com/v3"></script>
        </Head>

        <AnnouncementBar />

        <Header />

        <Install />

        <Features />

        <Pricing />

        <Customers />

        <Footer />
      </UserPreferencesProvider>
    </ThemeProvider>
  );
}

function PurchaseButton(plan) {
  plan = (plan || '').toLowerCase();

  const [isLoading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const sku = {
    'starter': 'sku_Fkz0duydyfrC9Q',
    'business': 'sku_FkzCxN6s9yPWDI',
    'premium': 'sku_FkzDVymdW8H4vw'
  };

  let buttonClass = "block w-full text-center rounded-lg border border-transparent white px-6 py-3 text-base font-medium text-blue-600 hover:bg-grblock w-full text-center rounded-lg border border-transparent white px-6 py-3 text-base font-medium text-blue-600 hover:bg-gray-50";

  if (plan === 'business') {
    buttonClass = 'block w-full text-center rounded-lg border border-transparent bg-blue-600 px-6 py-4 text-xl leading-6 font-medium text-white hover:bg-blue-700';
  }

  const purchasePlan = useCallback(
    () => {
      setLoading(true);

      const stripe = Stripe('pk_live_ZSJq4BT73VGchztlGmdmDFc1');

      stripe.redirectToCheckout({
        items: [
          {
            sku: sku[plan],
            quantity: 1
          }],
        successUrl: 'https://introjs.com/docs/success',
        cancelUrl: 'https://introjs.com/#commercial',
      }).then(function (result) {
        setLoading(false);

        if (result.error) {
          setError(result.error.message);
        }
      });
    },
    [plan],
  );

  return (
    <>
      <div className="rounded-lg shadow-md">
        <button
          disabled={isLoading}
          onClick={() => purchasePlan()}
          className={`${buttonClass} ${isLoading ? "cursor-wait" : ""}`} aria-describedby="tier-hobby">
          {isLoading ? "Processing..." : "Buy now"}
        </button>
      </div>
      {error}
    </>
  )
}

function Pricing() {
  return (
    <div className="bg-gray-900">
      <div className="pt-12 px-4 sm:px-6 lg:px-8 lg:pt-20">
        <div className="text-center">
          <h2 className="text-lg leading-6 font-semibold text-gray-300 uppercase tracking-wider" id="commercial">
            Commercial license
          </h2>
          <p className="mt- text-3xl font-extrabold text-white sm:text-4xl lg:text-5xl">
            Lifetime license. Once-off payment.
          </p>
          <p className="mt-3 max-w-4xl mx-auto text-xl text-gray-300 sm:mt-5 sm:text-2xl">
            Intro.js is AGPL-licensed and open-source.  However, if you want to use Intro.js in your commercial app, website or plugin, you would need to obtain a commercial license.
          </p>
        </div>
      </div>

      <div className="mt-16 bg-white pb-12 lg:mt-20 lg:pb-20">
        <div className="relative z-0">
          <div className="absolute inset-0 h-5/6 bg-gray-900 lg:h-1/3" />

          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="relative lg:grid lg:grid-cols-7">
              <div className="mx-auto max-w-md lg:mx-0 lg:max-w-none lg:col-start-1 lg:col-end-3 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-l-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-hobby">
                          Starter
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                      <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                        <span className="mt-2 mr-2 text-4xl font-medium">
                          $
                        </span>
                        <span className="font-extrabold">
                          9.99
                        </span>
                      </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            <b>One</b> project
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            <b>No</b> commercial support
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Regular product updates
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Lifetime license
                          </p>
                        </li>
                      </ul>
                      <div className="mt-8">
                        {PurchaseButton('starter')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 max-w-lg mx-auto lg:mt-0 lg:max-w-none lg:mx-0 lg:col-start-3 lg:col-end-6 lg:row-start-1 lg:row-end-4">
                <div className="relative z-10 rounded-lg shadow-xl">
                  <div className="pointer-events-none absolute inset-0 rounded-lg border-2 border-blue-600" aria-hidden="true" />
                  <div className="absolute inset-x-0 top-0 transform translate-y-px">
                    <div className="flex justify-center transform -translate-y-1/2">
                  <span className="inline-flex rounded-full bg-blue-600 px-4 py-1 text-sm font-semibold tracking-wider uppercase text-white">
                    Most popular
                  </span>
                    </div>
                  </div>
                  <div className="bg-white rounded-t-lg px-6 pt-12 pb-10">
                    <div>
                      <h3 className="text-center text-3xl font-semibold text-gray-900 sm:-mx-6" id="tier-growth">
                        Business
                      </h3>
                      <div className="mt-4 flex items-center justify-center">
                    <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900 sm:text-6xl">
                      <span className="mt-2 mr-2 text-4xl font-medium">
                        $
                      </span>
                      <span className="font-extrabold">
                        29.99
                      </span>
                    </span>
                      </div>
                    </div>
                  </div>
                  <div className="border-t-2 border-gray-100 rounded-b-lg pt-10 pb-8 px-6 bg-gray-50 sm:px-10 sm:py-10" id="commercial-element-focus">
                    <ul className="space-y-4">
                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          <b>5</b> projects
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          <b>1 month</b> commercial support
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          <b>1</b> custom theme
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          Regular product updates
                        </p>
                      </li>

                      <li className="flex items-start">
                        <div className="flex-shrink-0">
                          <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <p className="ml-3 text-base font-medium text-gray-500">
                          Lifetime license
                        </p>
                      </li>
                    </ul>
                    <div className="mt-10">
                      {PurchaseButton('business')}
                    </div>
                  </div>
                </div>
              </div>
              <div className="mt-10 mx-auto max-w-md lg:m-0 lg:max-w-none lg:col-start-6 lg:col-end-8 lg:row-start-2 lg:row-end-3">
                <div className="h-full flex flex-col rounded-lg shadow-lg overflow-hidden lg:rounded-none lg:rounded-r-lg">
                  <div className="flex-1 flex flex-col">
                    <div className="bg-white px-6 py-10">
                      <div>
                        <h3 className="text-center text-2xl font-medium text-gray-900" id="tier-scale">
                          Premium
                        </h3>
                        <div className="mt-4 flex items-center justify-center">
                      <span className="px-3 flex items-start text-6xl tracking-tight text-gray-900">
                        <span className="mt-2 mr-2 text-4xl font-medium">
                          $
                        </span>
                        <span className="font-extrabold">
                          99.99
                        </span>
                      </span>
                        </div>
                      </div>
                    </div>
                    <div className="flex-1 flex flex-col justify-between border-t-2 border-gray-100 p-6 bg-gray-50 sm:p-10 lg:p-6 xl:p-10">
                      <ul className="space-y-4">
                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            <b>Unlimited</b> projects
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            <b>3 months</b> support
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            <b>3</b> custom themes
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Regular product updates
                          </p>
                        </li>

                        <li className="flex items-start">
                          <div className="flex-shrink-0">
                            <svg className="flex-shrink-0 h-6 w-6 text-green-500" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7" />
                            </svg>
                          </div>
                          <p className="ml-3 text-base font-medium text-gray-500">
                            Lifetime license
                          </p>
                        </li>
                      </ul>
                      <div className="mt-8">
                        {PurchaseButton('premium')}
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-4 relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 lg:mt-20">
            <div className="max-w-md mx-auto lg:max-w-5xl">
              <div className="rounded-lg bg-gray-100 px-6 py-8 sm:p-10 lg:flex lg:items-center">
                <div className="flex-1">
                  <div>
                    <h3 className="inline-flex px-4 py-1 rounded-full text-sm font-semibold tracking-wide uppercase bg-white text-gray-800">
                      Custom plan
                    </h3>
                  </div>
                  <div className="mt-4 text-lg text-gray-600">
                    Contact us today to build your own custom Intro.js plan. We can help you create a custom support plan according to your needs!
                  </div>
                </div>
                <div className="mt-6 rounded-md shadow lg:mt-0 lg:ml-10 lg:flex-shrink-0">
                  <a href="mailto:support@introjs.com" className="flex items-center justify-center px-5 py-3 border border-transparent text-base font-medium rounded-md text-gray-900 bg-white hover:bg-gray-50">
                    Contact us
                  </a>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>


    </div>
  )
}

function Customers() {
  return (
    <div className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 lg:py-16 lg:px-8">
        <p className="text-center text-base font-semibold uppercase text-gray-600 tracking-wider">
          Over 5,000 businesses of all sizes trust us
        </p>
        <div className="mt-6 grid grid-cols-2 gap-0.5 md:grid-cols-3 lg:mt-8">
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="/img/customers/amazon.jpeg" alt="Amazon" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="/img/customers/nestle.jpg" alt="Nestle" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="/img/customers/sap.jpeg" alt="SAP" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="/img/customers/postat.png" alt="Postat" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="/img/customers/kobo.png" alt="Kobo" />
          </div>
          <div className="col-span-1 flex justify-center py-8 px-8 bg-gray-50">
            <img className="max-h-12" src="/img/customers/federalbank.png" alt="FederalBank" />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Home;
