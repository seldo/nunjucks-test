var Backbone = require('backbone')

var ScrollView = Backbone.View.extend({
  columns: [],
  itemCount: -1,
  initialize: function (opts) {
    var self = this
    this.options = opts.options
  },
  render: function() {
    console.log("rendering view")
    return this
  }
})