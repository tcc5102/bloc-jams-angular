(function() {
  function AlbumCtrl() {
    var albumData = albumPicasso;
    this.songs = albumData.songs;
    this.albumArtist = albumData.artist;
    this.albumTitle = albumData.title;
    this.albumImage = albumData.albumArtUrl;
    this.albumYear = albumData.year;
    this.albumLabel = albumData.label;

  }
  angular
    .module('blocJams')
    .controller('AlbumCtrl', AlbumCtrl);
})();
