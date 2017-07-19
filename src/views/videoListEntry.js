var VideoListEntryView = Backbone.View.extend({

  initialize: function() {
    this.render();
    //this.select() on click
  },
  render: function() {
    console.log('this in entry view:', this);
    this.$el.html(this.template(this.attributes));
    //load the template, render the template, append template.
    //don't pass entire collection
    
    return this;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

