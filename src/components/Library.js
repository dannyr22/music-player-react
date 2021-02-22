import React from 'react';
import LibrarySong from './LibrarySong';

const Library = ({songs, setCurrentSong, audioRef, isPlaying, setSongs, libraryStatus}) => {
  return (  
    <div className={`library ${libraryStatus ? 'active-library' : '' }`}>
      <h2>library</h2>
      <div className="library-songs">
        {songs.map(song => (
          <LibrarySong
            songs={songs}
            key={song.id}
            id={song.id}
            song={song}
            setCurrentSong={setCurrentSong}
            audioRef={audioRef}
            isPlaying={isPlaying} 
            setSongs={setSongs}
            />
          
        )
        )}
        
      </div>
    </div>
  );
} 
export default Library
