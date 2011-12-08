(function() {
  var app, express, fs;

  express = require('express');

  fs = require('fs');

  app = module.exports = express.createServer();

  app.configure(function() {
    var publicDir, viewsDir;
    viewsDir = __dirname + '/views';
    publicDir = __dirname + '/public';
    app.set('views', viewsDir);
    app.set('view engine', 'jade');
    app.use(express.static(publicDir));
    app.use(express.methodOverride());
    app.use(express.bodyParser());
    app.use(express.logger());
    return app.use(app.router);
  });

  app.configure('development', function() {
    return app.use(express.errorHandler({
      dumpExceptions: true,
      showStack: true
    }));
  });

  app.get('/', function(request, response) {
    console.log("handling request");
    fs.readdir('.', function(err, files) {
      return console.log(files);
    });
    return response.render('index.jade', {
      locals: {
        title: 'Hello World!'
      }
    });
  });

  app.listen(3000, function() {
    return console.log('Listening on 3000');
  });

}).call(this);
