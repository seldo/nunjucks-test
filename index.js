var Hapi = require('hapi')
var Path = require('path')
var Nunjucks = require('nunjucks-hapi')
var Models = require('./models')
var Controllers = require('./controllers')

// Create a server with a host and port
var port = 8000
var server = new Hapi.Server()
server.connection({host: 'localhost', port:port})

// initialize Models
var models = new Models({config:"would go here"})
var controllers = new Controllers(models)

// set up templates and views
var viewPath = Path.join(__dirname, 'views')
Nunjucks.configure(viewPath)
server.views({
  engines: {
    html: Nunjucks
  },
  path: viewPath
})

// set up the routes
var routes = require('./routes')(server,controllers)

// Start the server
server.start(function() {
  console.log("Server started on " + port)
})