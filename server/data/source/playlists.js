
module.exports = {
  getPlaylist
};

function getPlaylist (id) {
  return Promise.resolve({
    id: id,
    hash: '12ab34cd',
    name: 'Sample list 1',
    songs: [
      {
        id: 6,
        name: 'Radioactive',
        artist: 'Imagine Dragons',
        external: {},
        timestamp: 1511220617748
      }
    ],
    user: {
      id: 1,
      name: 'Joshua Michel'
    }
  });
}