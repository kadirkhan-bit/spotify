import { createContext, useReducer, useContext } from "react";

export const DataLayerContext = createContext();

export const DataLayerProvider = (props) => {
  const initialState = {
    user: null,
    token: null,
    playlists: [],
    playing: false,
    item: null,
    currentPlaylist: null,
    spotify: null,
  };

  const reducer = (state, action) => {
    console.log(action);
    switch (action.type) {
      case "SET-USER":
        return {
          ...state,
          user: action.user,
        };
        break;
      case "SET-TOKEN":
        return {
          ...state,
          token: action.token,
        };
        break;
      case "SET-PLAYLISTS":
        return {
          ...state,
          playlists: action.playlists,
        };
        break;
      case "SET-CURRENTPLAYLIST":
        return {
          ...state,
          currentPlaylist: action.currentPlaylist,
        };
        break;
      case "SET-PLAYING":
        return {
          ...state,
          playing: action.playing,
        };
        break;
      case "SET-SPOTIFY":
        return {
          ...state,
          spotify: action.spotify,
        };
        break;
      case "SET-ITEM":
        return {
          ...state,
          item: action.item,
        };
        break;
      default:
        return state;
    }
  };

  return (
    <DataLayerContext.Provider value={useReducer(reducer, initialState)}>
      {props.children}
    </DataLayerContext.Provider>
  );
};

export const useDataLayerValue = () => useContext(DataLayerContext);
