var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    // console.log('00', this)
    this.$el.html(this.template(this.collection.models[0].attributes));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
