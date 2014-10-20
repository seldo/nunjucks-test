var Hapi = require('hapi')
var Path = require('path')
var Nunjucks = require('nunjucks-hapi')

// Create a server with a host and port
var server = new Hapi.Server('localhost', 8000)

//var h = require('handlebars')
//var n = require('nunjucks')
//
//var ht = h.compile('string: {{name}}',{name:'bob'})
//console.log("handlebars: ",ht)
//var nt = n.compile('string: {{name}}')
//console.log("nunjucks:",nt.render({name:'bob'}))

//var wrapper = {
//  compile: function(template,options) {
//    var t = n.compile(template,options)
//    return function(context,options) {
//      return t.render(context)
//    }
//  }
//}
//var wt = wrapper.compile('string: {{name}}',{name:'bob'})
//console.log("wrapper:",wt)

// set up templates
server.views({
  engines: {
    //hbs: require('handlebars')
    html: Nunjucks
  },
  path: Path.join(__dirname, 'views')
})

// Add the route
server.route({
  method: 'GET',
  path: '/hello',
  handler: function (request, reply) {

    reply.view('bob',{
      'name': 'joe'
    })
  }
})

server.route({
  method: 'GET',
  path: '/inherit',
  handler: function (request, reply) {

    reply.view('index',{
      'name': 'Another name'
    })
  }
})

server.route({
  method: 'GET',
  path: '/hey',
  handler: function (request, reply) {

    reply.view('mary',{
      'name': 'sue'
    })
  }
})

// Start the server
server.start()