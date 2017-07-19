var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
    
    
    // this.collection.models.forEach(function(video) {
    //   console.log('**', video)
    // });
  },
  
  render: function() {
 
    this.$el.children().detach();
    this.collection.models.forEach(this.renderVideo, this);
    console.log(this.collection.models);
    this.$el.html(this.template());
    return this;
  },
  
  renderVideo: function(video) {
    console.log('video: ', video);
    var videoView = new VideoListEntryView(video);
  },

  template: templateURL('src/templates/videoList.html')

});
