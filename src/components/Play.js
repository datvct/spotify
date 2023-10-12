import React, { useContext } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";
import App from "../App.css";
import { Songs } from "../Context";
export default function Play() {
  const { song, handleSetSong } = useContext(Songs);
  const handeClickNext = () => {
    handleSetSong(song.id + 1);
  };
  const handeClickPre = () => {
    handleSetSong(song.id - 1);
  };
  return (
    <div>
      <AudioPlayer
        className="audioPlayer"
        src={song.url}
        layout="stacked-reverse"
        showSkipControls={true}
        showJumpControls={false}
        onClickNext={handeClickNext}
        onClickPrevious={handeClickPre}
      />
    </div>
  );
}
