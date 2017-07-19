var VideoListEntryView = Backbone.View.extend({

  // initialize: function() {
  //   this.render();
  //   //this.select() on click
  // },
  render: function() {
    console.log('this: ', this);
    // console.log('this.el in entry view:', this.el);
    // console.log('this.$el in entry view:', this.$el);
    this.$el.html(this.template(this.model.attributes));
    // console.log(this.$el[0].attributes)
    //load the template, render the template, append template.
    //don't pass entire collection
    
    return this.$el;
  },

  template: templateURL('src/templates/videoListEntry.html')

});

