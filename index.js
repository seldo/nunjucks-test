var Hapi = require('hapi')
var Path = require('path')
var Nunjucks = require('nunjucks-hapi')
var Models = require('./models')
var Controllers = require('./controllers')

// Create a server with a host and port
var port = 8000
var server = new Hapi.Server()
server.connection({host: 'localhost', port:port})

var viewPath = Path.join(__dirname, 'views')

Nunjucks.configure(viewPath)

// set up templates
server.views({
  engines: {
    //hbs: require('handlebars')
    html: Nunjucks
  },
  path: viewPath
})

// set up the routes
var routes = require('./routes')(server,Controllers)

// Start the server
server.start(function() {
  console.log("Server started on " + port)
})