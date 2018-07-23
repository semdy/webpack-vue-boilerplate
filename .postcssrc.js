// https://github.com/michael-ciniawsky/postcss-load-config

module.exports = {
  "plugins": {
    // to edit target browsers: use "browserlist" field in package.json
    "autoprefixer": {
      "browsers": [
        '>1%',
        'last 4 versions',
        'Firefox ESR',
        'not ie < 9'
      ],
      "flexbox": 'no-2009'
    },
    "postcss-pxtorem": {
      "rootValue": 37.5,
      "propList": ['*', '!font', '!font-size',],
      "selectorBlackList": [/^html$/]
    }
  }
}
