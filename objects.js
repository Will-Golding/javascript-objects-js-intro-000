var playlist = { artistName:"AC/DC", songTitle: "Hell's Bells"};

function updatePlaylist(playlist,artistName,songTitle){
  return object.assign({}, object{ [key]: value})
}

function removeFromPlaylist(playlist, artistName){
  delete playlist[artistName]
  return playlist
}
