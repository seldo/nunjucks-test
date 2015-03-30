var Backbone = require('backbone');
var $ = require('jquery');
Backbone.$ = $;

module.exports = Backbone.View.extend({
  initialize: function(){
    this.render();
  },

  render: function(){
    console.log("hi")
    console.log($('body'))
    $('body').prepend('<p>wooooooooooooooo</p>');
  }
});