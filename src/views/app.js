var AppView = Backbone.View.extend({
  
  el: '#app',

  initialize: function() {    
    this.videos = new Videos(window.exampleVideoData);
    this.listenTo(this.collection, 'sync', this.render);
    this.listenTo(this.collection, 'select', this.selectHandler);
    this.render();
  },


  render: function() {
    this.$el.html(this.template());
    // console.log(this.videos.at(0));
    new SearchView({el: this.$('.search')});
    new VideoPlayerView({el: this.$('.player'), collection: this.videos});
    new VideoListView({el: this.$('.list'), collection: this.videos}).render();
    return this;
  },

  template: templateURL('src/templates/app.html')

});
