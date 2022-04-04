module.exports = {
  someSidebar: [
    {
      type: 'category',
      label: 'Getting Started',
      items: [
        'index',
        'getting-started/install',
        'getting-started/start',
        'examples/basic/hello-world',
        'getting-started/license',
        'support',
        'community'
      ]
    },
    {
      label: "Examples",
      type: 'category',
      items: [
        {
          type: 'category',
          label: 'Basic',
          items: [
            'examples/basic/hello-world',
            'examples/basic/json-config',
            'examples/basic/floating-tooltip',
            'examples/basic/tooltip-positions',
            'examples/basic/dont-show-again',
            'examples/basic/hints',
          ]
        },
        {
          type: 'category',
          label: 'Customizing',
          items: [
            'examples/customizing/html-tooltip',
            'examples/customizing/css-class',
            'examples/customizing/progress-bar',
            'examples/customizing/without-buttons',
            'examples/customizing/without-bullets',
            'examples/customizing/disable-interaction',
            'examples/customizing/rtl',
          ]
        },
        {
          type: 'category',
          label: 'Events',
          items: [
            'examples/events/confirm-before-exit',
          ]
        },
        {
          type: 'category',
          label: 'Advanced',
          items: [
            'examples/advanced/svg',
            'examples/advanced/scrollable-element',
          ]
        }
      ]
    },
    {
      label: "Tour",
      type: 'category',
      items: [
        'intro/api',
        'intro/attributes',
        'intro/options'
      ]
    },
    {
      label: "Hints",
      type: "category",
      items: [
        'hints/api',
        'hints/attributes',
        'hints/options'
      ]
    },
    {
      type: "category",
      label: "Themes",
      items: [
        'themes/install',
        'themes/list'
      ]
    },
    {
      type: "category",
      label: "Wrappers",
      items: [
        'wrappers/react',
        'wrappers/angularjs',
        'wrappers/dart',
        'wrappers/drupal',
        'wrappers/ember',
        'wrappers/gwt',
        'wrappers/R',
        'wrappers/rails',
        'wrappers/wordpress',
        'wrappers/yii',
        'wrappers/add'
      ]
    },
    {
      type: "category",
      label: "Developers",
      items: [
        'developers/build',
        'developers/changelog'
      ]
    },
  ]
};

