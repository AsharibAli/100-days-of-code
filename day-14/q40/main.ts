function make_album(artist: string, title: string, tracks?: number) {
  let album = { artist, title };
  if (tracks) {
    album["tracks"] = tracks;
  }
  return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));
