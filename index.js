const sls = require('serverless-http')
const binaryMimeTypes = require('../binaryMimeTypes')

module.exports.nuxt = sls(app, {
  binary: binaryMimeTypes
})
