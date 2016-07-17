(function() {
  function AlbumCtrl(Fixtures, SongPlayer) {
//    Not sure about var albumData
    var albumData = Fixtures.getAlbum();
    this.albumData = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;
    this.songs = albumData.songs;
    this.albumArtist = albumData.artist;
    this.albumTitle = albumData.title;
    this.albumImage = albumData.albumArtUrl;
    this.albumYear = albumData.year;
    this.albumLabel = albumData.label;

  }
  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
