(function() {
  function AlbumCtrl(Fixtures, SongPlayer) {

    this.albumData = Fixtures.getAlbum();
    this.songPlayer = SongPlayer;
    this.songs = this.albumData.songs;
    this.albumArtist = this.albumData.artist;
    this.albumTitle = this.albumData.title;
    this.albumImage = this.albumData.albumArtUrl;
    this.albumYear = this.albumData.year;
    this.albumLabel = this.albumData.label;

  }
  angular
    .module('blocJams')
    .controller('AlbumCtrl', ['Fixtures', 'SongPlayer', AlbumCtrl]);
})();
