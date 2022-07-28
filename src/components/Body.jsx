import React from "react";
import "./Body.scss";
import Header from "./Header";
import { useDataLayerValue } from "../store/dataLayer";
import PlayCircleFilledIcon from "@material-ui/icons/PlayCircleFilled";
import FavouriteIcon from "@material-ui/icons/Favorite";
import MoreHorizIcon from "@material-ui/icons/MoreHoriz";
import SongRow from "./SongRow";

function Body({ spotify }) {
  const [{ currentPlaylist }, dispatch] = useDataLayerValue();

  const playsong = (id) => {
    spotify.play({ uris: [`spotify:track:${id}`] }).then((res) =>
      spotify.getMyCurrentPlayingTrack().then((r) => {
        dispatch({ type: "SET-ITEM", item: r.item });
        dispatch({ type: "SET-PLAYING", playing: true });
      })
    );
  };

  return (
    <div className="body">
      <Header spotify={spotify} />

      <div className="bodyInfo">
        <img src={currentPlaylist?.images[0]?.url} alt="" />
        <div className="bodyinfoinner">
          <strong>PLAYLIST</strong>
          <h2>{currentPlaylist?.name}</h2>
          <p>{currentPlaylist?.description}</p>
        </div>
      </div>
      <div className="songs">
        <div className="icons">
          <PlayCircleFilledIcon className="bodyshuffle" />
          <FavouriteIcon fontSize="large" />
          <MoreHorizIcon />
        </div>
        {currentPlaylist?.tracks?.items.map((song) => (
          <SongRow playsong={playsong} song={song.track} />
        ))}
      </div>
    </div>
  );
}

export default Body;
