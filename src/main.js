module.exports = {
  extends: [
    'stylelint-config-html',
    'stylelint-stylus/standard',
    'stylelint-config-sass-guidelines',
    'stylelint-config-standard-scss',
    'stylelint-config-rational-order',
    'stylelint-config-prettier-scss'
  ],
  plugins: [
    'stylelint-css-modules',
    'stylelint-config-rational-order',
    'stylelint-css-modules-no-global-scoped-selector',
    'stylelint-csstree-validator',
    'stylelint-declaration-block-no-ignored-properties',
    'stylelint-declaration-strict-value',
    'stylelint-gamut',
    'stylelint-group-selectors',
    'stylelint-high-performance-animation',
    'stylelint-images',
    'stylelint-no-nested-media',
    'stylelint-no-unresolved-module',
    'stylelint-no-unsupported-browser-features',
    'stylelint-rem-over-px',
    'stylelint-selector-no-empty',
    'stylelint-selector-tag-no-without-class',
    'stylelint-use-nesting'
  ],
  rules: {
    'css-modules/composed-class-names': true,
    'css-modules/css-variables': [
      true,
      {
        resolve: {
          extensions: ['.css', '.scss']
        }
      }
    ],
    'css-modules/no-global-scoped-selector': true,
    'csstools/use-nesting': true,
    'csstree/validator': true,
    'gamut/color-no-out-gamut-range': true,
    'images/broken': true,
    'images/prefer-data-uri': 2048,
    'pitcher/no-nested-media': true,
    'plugin/declaration-block-no-ignored-properties': true,
    'plugin/no-low-performance-animation-properties': true,
    'plugin/no-unresolved-module': {
      alias: {
        assets: 'pebbles'
      },
      modules: ['node_modules']
    },
    'plugin/no-unsupported-browser-features': [
      true,
      {
        browsers: ['> 1%', 'Last 2 versions'],
        ignore: ['rem'],
        ignorePartialSupport: true
      }
    ],
    'plugin/selector-tag-no-without-class': ['div', 'span'],
    'plugin/stylelint-group-selectors': true,
    'plugin/stylelint-selector-no-empty': true,
    'rem-over-px/rem-over-px': true,
    'scale-unlimited/declaration-strict-value': 'color'
  }
}
