var $ = require('jquery')
var BlogModel = require('./models/blog')
var BlogView = require('./views/blog')

var options = {}
var blogModel = new BlogModel({options: options});
new BlogView({el: $("#blogEntries"), model: blogModel, options: options});
