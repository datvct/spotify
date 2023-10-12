import "./App.css";
import Navbar from "./components/navbar";
import DetailSong from "./components/DetailSong";
import ListSong from "./components/ListSong";
import { Songs } from "./Context";
import DataSongs from "./data/songs.json";
import Play from "./components/Play";
import { useState } from "react";
function App() {
  const [song, setSong] = useState(DataSongs[0]);

  const handleSetSong = (idSong) => {
    const music = DataSongs.find((song) => song.id === idSong);
    if (!music) setSong(DataSongs[0]);
    else setSong(music);
  };
  return (
    <div className="App">
      <Songs.Provider value={{ DataSongs, song, handleSetSong }}>
        <Navbar />
        <div className="container">
          <DetailSong />
          <ListSong />
        </div>
        <Play />
      </Songs.Provider>
    </div>
  );
}

export default App;
