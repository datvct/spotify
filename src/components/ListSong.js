import React, { useContext, useEffect, useState } from "react";
import { Songs } from "../Context";
import App from "../App.css";
export default function ListSong() {
  const { DataSongs, handleSetSong, song } = useContext(Songs);
  const [idSong, setIdSong] = useState(3);
  const handlePlay = (idSong) => {
    setIdSong(idSong);
    handleSetSong(idSong);
  };

  useEffect(() => {
    setIdSong(song.id);
  }, [song]);
  return (
    <div className="listSong">
      <table>
        <thead className="list-title">
          <tr>
            <th>#</th>
            <th>Title</th>
            <th>Author</th>
            <th>
              <i className="fa fa-download"></i>
            </th>
          </tr>
        </thead>
        <tbody>
          {DataSongs.map((song, index) => (
            <tr
              className="no-border-top"
              key={index}
              onClick={() => handlePlay(song.id)}
              style={
                idSong === song.id
                  ? {
                      color: "#5dead4",
                      background: "#475569",
                    }
                  : {}
              }
            >
              <td>{index + 1}</td>
              <td>{song.name}</td>
              <td>{song.author}</td>
              <td>
                <a href={song.url}>
                  <i className="fa fa-download"></i>
                </a>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
