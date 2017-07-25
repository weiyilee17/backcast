var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.listenTo(this.collection, 'sync', this.render);
  },
  
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    console.log(this.collection.models);
    this.collection.models.forEach((video) => {
      this.$el.append(new VideoListEntryView({model: video}).render().el);
    });
    // console.log(this.collection.models);
    return this;
  },
  
  renderVideo: function(video) {
    // console.log('this.el in renderVideo: ', this.el);
    // console.log('this.$el in renderVideo: ', this.$el);
    // var videoView = ;
    // console.log('videoView.el :', videoView.el);
    // console.log('videoView.$el :', videoView.$el);
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
