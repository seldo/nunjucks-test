module.exports = function(server,Controllers) {

  server.route({
    method: 'GET',
    path: '/blog',
    handler: Controllers.Blog.index
  })

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

}