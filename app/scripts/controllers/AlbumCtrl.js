(function() {
  function AlbumCtrl(Fixtures) {
    //uncomment below to make work
    //var albumData = Fixtures.getAlbum();
    this.albumData = Fixtures.getAlbum();
    this.songs = albumData.songs;
    this.albumArtist = albumData.artist;
    this.albumTitle = albumData.title;
    this.albumImage = albumData.albumArtUrl;
    this.albumYear = albumData.year;
    this.albumLabel = albumData.label;

  }
  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', AlbumCtrl]);
})();
