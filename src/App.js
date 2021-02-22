import React, { useState} from 'react';
import Player from './components/Player';
import Song from './components/Song';
import './styles/app.scss';
import chillHop from './data';
import Library from './components/Library';

function App() {
  //state
  const [songs, setSongs] = useState(chillHop())
  const [currentSong, setCurrentSong] = useState(songs[7])
  const [isPlaying, setIsPlaying] = useState(false)
  return (
    <div className="App">
      <Song currentSong={currentSong}/>
      <Player
        currentSong={currentSong}
        isPlaying={isPlaying}
        setIsPlaying={setIsPlaying}
      />
      <Library songs={songs}/>
    </div>
  );
}

export default App;
