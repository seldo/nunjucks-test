function Blog(Models) {
  this.Models = Models
}

Blog.prototype.index = function (request, reply) {

  reply.view('index',{
    'name': 'joe'
  })

}

module.exports = Blog