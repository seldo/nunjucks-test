function Content(connection) {
  this.db = connection
  this.table = 'content'
}

Content.prototype.getAll = function(limit,offset) {

  if(!limit) limit = 10
  if(!offset) offset = 0

  return this.db.select()
    .from(this.table)
    .orderBy('created','desc')
    .limit(limit)
    .offset(offset)

}

module.exports = Content