var Blog = require('./blog')

function Controllers(Models) {
  return {
    Blog: new Blog(Models)
  }
}

// we could put helpers or whatever in here I guess

module.exports = Controllers