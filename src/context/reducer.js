import {
  SET_USER,
  SET_TOKEN,
  SET_PLAYLISTS,
  SET_DISCOVER_WEEKLY,
  SET_PLAYLIST_ID,
} from "./actions";

export const initialState = {
  user: null,
  playlist: [],
  playing: false,
  item: null,
  // token:
  //   "BQB7X62SpjPst7Rqld2ZTCjnjlW-LzCY_tJOk53MYgYolBOKjo…HarlrI77dPtRSB168OEsNxGzgLUdDIoutoY7AHUtojXur5ngQ", //remove ater developing,
  playlist_id: "37i9dQZF1E38tMeILwRnLX",
};

export default (state, action) => {
  console.log(action);
  switch (action.type) {
    case SET_USER:
      return {
        ...state,
        user: action.user,
      };
    case SET_TOKEN:
      return {
        ...state,
        token: action.token,
      };
    case SET_PLAYLISTS:
      return {
        ...state,
        playlists: action.playlists,
      };
    case SET_DISCOVER_WEEKLY:
      return {
        ...state,
        discover_weekly: action.discover_weekly,
      };
    case SET_PLAYLIST_ID:
      return {
        ...state,
        playlist_id: action.playlist_id,
      };
    default:
      return state;
  }
};
