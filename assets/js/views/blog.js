var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  render: function(){
    console.log("hi")
    this.$el.prepend('<p>wooooooooooooooo</p>');
  }
});