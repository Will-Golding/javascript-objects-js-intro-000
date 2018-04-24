/*
var playlist = {"AC/DC": "Hell's Bells"};

function updatePlaylist(playlist,artistName,songTitle){
  return object.assign({}, object{ [key]: value})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
*/
var playlist = new Object({artist: 'song title'});

function updatePlaylist(playlist, artist, song){
  playlist[artist] = song;
  return playlist;
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName];
  return playlist
}
