import "./App.css";
import Login from "./components/Login";
import { useEffect, useState } from "react";
import { getTokenFromUrl } from "./spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/Player";
import { useDataLayerValue } from "./store/dataLayer";

const spotify = new SpotifyWebApi();

function App() {
  const [{ token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;
    if (_token) {
      dispatch({ type: "SET-TOKEN", token: _token });
      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => dispatch({ type: "SET-USER", user }));
      spotify
        .getUserPlaylists()
        .then((playlists) => dispatch({ type: "SET-PLAYLISTS", playlists }));
      spotify
        .getPlaylist("37i9dQZEVXbMDoHDwVN2tF")
        .then((currentPlaylist) =>
          dispatch({ type: "SET-CURRENTPLAYLIST", currentPlaylist })
        );
    }
  }, []);

  return (
    <div className="App">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
