express = require 'express'
fs = require 'fs'


app = module.exports = express.createServer()


app.configure ->
  viewsDir = __dirname + '/views'
  publicDir = __dirname + '/public'
  
  app.set 'views', viewsDir
  app.set 'view engine', 'jade'
  app.use express.static(publicDir)
  app.use express.methodOverride()
  app.use express.bodyParser()
  app.use express.logger()
  app.use app.router


app.configure 'development', ->
  app.use express.errorHandler(
    dumpExceptions: true,
    showStack: true
  )


app.get '/', (request, response) ->
  console.log "handling request"
  
  fs.readdir '.', (err, files) ->
    console.log files
  
  response.render 'index.jade',
		locals:
			title: 'Hello World!'


app.listen 3000, () ->
  console.log 'Listening on 3000'
