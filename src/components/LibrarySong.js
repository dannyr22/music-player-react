import React from 'react';

const LibrarySong = ({ song, setCurrentSong, songs, id, audioRef, isPlaying, setSongs }) => {
  
  const songSelectHandler = async (e) => {
    await setCurrentSong(song)
    //Add active state
    const newSongs = songs.map(song => {
      if (song.id === id) {
        return {
          ...song,
          active: true
        }
      } else {
        return {
          ...song,
          active: false
        }
      }
    })
    setSongs(newSongs)
    if (isPlaying) audioRef.current.play()
    
  }
  return ( 
    <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ''}`}>
      <img src={song.cover} alt={song.name} />
      <div className="song-description">
      <h3>{song.artist}</h3>
      <h4>{song.name}</h4>
      </div>
    </div>
    
   );
}
 
export default LibrarySong;