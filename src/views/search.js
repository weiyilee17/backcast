var SearchView = Backbone.View.extend({

  initialize: function() {
    this.render();
  },

  render: function() {
    this.$el.html(this.template());
    // console.log(this.$el.innerHTML);
    return this;
  },

  template: templateURL('src/templates/search.html')

});
