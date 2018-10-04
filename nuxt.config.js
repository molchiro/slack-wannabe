module.exports = {
 /*
  ** Include css not in components
  */
  css: [
    // node.js module but we specify the pre-processor
    { src: 'bulma/bulma.sass', lang: 'sass' }
  ],
  build: {
    postcss: {
      plugins: {
        'postcss-custom-properties': {
          warnings: false
        }
      }
    },
  },
}
