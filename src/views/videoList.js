var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },
  
  render: function() {
 
    this.$el.children().detach();
    this.$el.html(this.template());
    this.collection.models.forEach(this.renderVideo, this);
    // console.log(this.collection.models);
    return this;
  },
  
  renderVideo: function(video) {
    // console.log('this.el in renderVideo: ', this.el);
    // console.log('this.$el in renderVideo: ', this.$el);
    var videoView = new VideoListEntryView({model:video});
    // console.log('videoView.el :', videoView.el);
    // console.log('videoView.$el :', videoView.$el);
    this.$el.append(videoView.render());
  },

  template: templateURL('src/templates/videoList.html')

});
