module.exports = {
  mode: 'universal',
  head: {
    title: 'Vue Nuxt Test',
    meta: [
      { charset: 'utf-8' },
      { name: 'viewport', content: 'width=device-width, initial-scale=1' },
      { hid: 'description', name: 'description', content: 'Nuxt.js project' }
    ]
  },
  build: {
    vendor: ['axios'],
    publicPath: `/${require('./secrets.json').NODE_ENV}/_nuxt/`
  },
  srcDir: 'client/',
  performance: {
    gzip: false
  },
  router: {
    base: `/`,
      extendRoutes(routes) {
          routes.push(
              {
                  name: 'contact',
                  path: '/contact',
                  component: './client/pages/contact.vue'
              }
          )
      }
  },
  dev: false
}
