let config = require('config')
let debug = require('debug')(process.env.npm_package_name + ':' + 'app')
let app = require('express')()

let start = listeningPort => {
  let server = app.listen(listeningPort, () => {
    debug('App running at http://localhost:' + server.address().port)
  })
  return server
}

module.exports = start(config.get('listeningPort'))
