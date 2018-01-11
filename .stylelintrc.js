module.exports = {
  extends: 'stylelint-config-standard',

  plugins: [
    'stylelint-order',
  ],

  rules: {
    'block-no-empty': null,
    'no-empty-source': null,
    'property-no-unknown': [
      true,
      {
        ignoreProperties: [
          'composes',
        ],
      },
    ],

    'selector-pseudo-class-no-unknown': [
      true,
      {
        ignorePseudoClasses: [
          'global',
        ],
      },
    ],

    'string-quotes': 'single',

    'order/order': [
      'custom-properties',
      'dollar-variables',
      'declarations',
      'at-rules',
      'rules',
    ],

    'order/properties-order': [],
  },
};
