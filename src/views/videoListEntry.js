var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
    (this.$el.firstChild).on('click', function() {
    });
    console.log('**', this.model);
  },
  render: function() {
    this.$el.html(this.template(this.model.attributes));
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

