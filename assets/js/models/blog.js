var $ = require('jquery');
var Backbone = require('backbone');
Backbone.$ = $;

var BlogModel = Backbone.Model.extend({
  initialize: function (opts) {
    this.options = opts.options;
    console.log("Initializing model")
  },
  defaults: {
  },
  hasMore: function () {
    //return this.get("noMoreItems") !== 1;
  },
  reset: function () {
    //this.page = -1;
  },
  requestPending: false,
  page: -1,
  getMore: function (callback) {
    //
  }
})

module.exports = BlogModel