function Blog(Models) {
  this.Models = Models
}

Blog.prototype.index = function (request, reply) {

  this.Models.Content.getAll(5).then(function(rows) {
    reply.view('index',{
      name: 'joe',
      entries: rows
    })
  })

}

module.exports = Blog