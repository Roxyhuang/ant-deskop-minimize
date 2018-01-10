  /* eslint-disable global-require */

const pkg = require('../../package.json');
const px2rem = require('postcss-pxtorem');
// const postcssCssnext = require('postcss-cssnext');

module.exports = () => ({

  plugins: [

    require('autoprefixer')({
      browsers: pkg.browserslist,
      flexbox: 'no-2009',
    }),
  ],
});
