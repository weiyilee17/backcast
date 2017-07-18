var VideoListView = Backbone.View.extend({

  initialize: function() {
    this.render();
    //console.log(this.collection.trigger);
    this.collection.models.forEach(function(video) {
      //console.log(video)
    });
  },
  render: function() {
    this.$el.children().detach();
    this.$el.html(this.template());
    return this;
  },

  template: templateURL('src/templates/videoList.html')

});
