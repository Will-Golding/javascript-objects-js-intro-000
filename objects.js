var playlist = { artistName:"AC/DC", songTitle: "Hell's Bells"};

function updatePlaylist(playlist,artistName,songTitle){
  return playlist.assign({},artistName, songTitle)
}
/*
function removeFromPlaylist(playlist, artistName){
  delete playlist.
  return playlist
}
*/
