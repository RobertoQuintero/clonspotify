import React, { useEffect, useState, useContext } from "react";
import "./App.css";
import Login from "./components/login/Login";
import { getTokenFromUrl } from "./components/login/spotify";
import SpotifyWebApi from "spotify-web-api-js";
import Player from "./components/player/Player";
import { useDataLayerValue } from "./context/DataLayer";
import {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLISTS,
  SET_DISCOVER_WEEKLY,
} from "./context/actions";
const spotify = new SpotifyWebApi();

function App() {
  // const [token, setToken] = useState(null);
  const [{ user, token }, dispatch] = useDataLayerValue();

  useEffect(() => {
    const hash = getTokenFromUrl();
    window.location.hash = "";
    const _token = hash.access_token;

    if (_token) {
      dispatch({
        type: SET_TOKEN,
        token: _token,
      });

      spotify.setAccessToken(_token);
      spotify.getMe().then((user) => {
        console.log("user", user);
        dispatch({
          type: SET_USER,
          user,
        });
      });
      spotify.getUserPlaylists().then((playlists) => {
        dispatch({
          type: SET_PLAYLISTS,
          playlists,
        });
      });
      spotify.getPlaylist("37i9dQZF1E38tMeILwRnLX").then((response) =>
        dispatch({
          type: SET_DISCOVER_WEEKLY,
          discover_weekly: response,
        })
      );
    }
  }, []);

  return (
    <div className="app">
      {token ? <Player spotify={spotify} /> : <Login />}
    </div>
  );
}

export default App;
