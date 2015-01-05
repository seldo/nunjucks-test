var mysql = require('mysql')
var knex = require('knex')
var Content = require('./content')

function Models(config) {

  var connection = knex({
    client: 'mysql',
    connection: {
      host            : 'localhost',
      user            : 'seldo',
      password        : 'monkey',
      database        : 's4'
    }
  });

  return {
    Content: Content(connection)
  }
}

module.exports = Models