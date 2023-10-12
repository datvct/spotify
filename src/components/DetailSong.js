import React, { useContext } from "react";
import App from "../App.css";
import { Songs } from "../Context";
export default function DetailSong() {
  const { song } = useContext(Songs);

  return (
    <div className="detailSong">
      <div className="nowPlaying">Now playing</div>
      <div className="tilte">Sing me to sleep </div>
      <div className="avatar-music">
        <img
          className="image-music"
          src={song.links.images[0].url}
          alt="avatar"
        />
      </div>
      <div className="avatar-author">
        <img
          className="image-author"
          src={song.links.images[1].url}
          alt="avatar-music"
        />
        <span className="author-name">{song.author}</span>
      </div>
    </div>
  );
}
