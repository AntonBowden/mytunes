// SongQueueView.js - Defines a backbone view class for the song queue.
var SongQueueView = Backbone.View.extend({

  initialize: function() {
    this.collection.on('add', this.render, this);
  },

  render: function() {
    var songQueueEntryView = new SongQueueEntryView({});
    songQueueEntryView.render();
    $('body').append(this.$el)
    return this.$el;
  }

});
