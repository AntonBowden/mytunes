// SongQueue.js - Defines a backbone model class for the song queue.
var SongQueue = Backbone.Collection.extend({

  model: SongModel,

  initialize: function() {

    this.on('add', function() {
      if (this.length === 1) {
        this.playFirst();
      }
    });

    this.on('ended', function() {
      this.remove(this.models[0]);
      if (this.models.length) {
        this.playFirst();
      }
    });

    this.on('dequeue', function() {
      this.remove(this.models[this.models.length - 1]);
    });

    this.on('enqueue', function() {
      console.log('ENQUEUEUEU!!!!');
    });

  },

  playFirst: function() {
    this.models[0].play();
  }

});