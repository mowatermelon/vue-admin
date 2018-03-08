var express = require('express')
var config = require('./config/index')
var opn = require('opn');

var port = process.env.PORT || config.build.port
var autoOpenBrowser = !!config.build.autoOpenBrowser

var app = express()

var router =express.Router();
router.get('/',function(req,res,next){
  req.url = '/index.html'
  next()
})
app.use(router)
app.use(express.static('./dist'))

var uri = 'http://localhost:' + port

var _resolve
var readyPromise = new Promise(resolve => {
  _resolve = resolve
})

var server = app.listen(port,() => {
  console.log('> Starting build server...')
  //devMiddleware.waitUntilValid(() => {
    console.log('> Listening at ' + uri + '\n')
    // when env is testing, don't need open it
    if (autoOpenBrowser && process.env.NODE_ENV !== 'testing') {
      //console.log('> autoOpenBrowser is '+autoOpenBrowser + '\n')
      opn(uri)
    }
    _resolve()
  //})
})

module.exports = {
  ready: readyPromise,
  close: () => {
    server.close()
  }
}
