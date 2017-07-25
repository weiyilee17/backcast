var VideoPlayerView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template(this.collection.models[0]));
    return this;
  },

  template: templateURL('src/templates/videoPlayer.html')

});
