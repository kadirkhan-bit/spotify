import React from "react";
import "./SongRow.scss";

function SongRow({ song, playsong }) {
  return (
    <div className="songrow" onClick={() => playsong(song.id)}>
      <img className="songrowalbum" src={song?.album.images[0].url} alt="" />
      <div className="songrowinfo">
        <h1>{song.name}</h1>
        <p>
          {song?.artists.map((artist) => artist.name).join(",")}-
          {song?.album.name}
        </p>
      </div>
    </div>
  );
}

export default SongRow;
