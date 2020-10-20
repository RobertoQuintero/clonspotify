import React from "react";
import "./Sidebar.css";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../../../context/DataLayer";
import { SET_PLAYLIST_ID, SET_DISCOVER_WEEKLY } from "../../../context/actions";

const Sidebar = ({ spotify }) => {
  const [{ playlists }, dispatch] = useDataLayerValue();

  const setPlayListId = (id) => {
    spotify.getPlaylist(id).then((response) =>
      dispatch({
        type: SET_DISCOVER_WEEKLY,
        discover_weekly: response,
      })
    );
  };

  return (
    <div className="sidebar">
      <img
        className="sidebar__logo"
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt="logo_1"
      />
      <SidebarOption title="Inicio" Icon={HomeIcon} />
      <SidebarOption title="Buscar" Icon={SearchIcon} />
      <SidebarOption title="Tu Biblioteca" Icon={LibraryMusicIcon} />
      <br />
      <strong className="sidebar__title">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist) => {
        return (
          <div onClick={() => setPlayListId(playlist.id)}>
            <SidebarOption title={playlist.name} />
          </div>
        );
      })}
    </div>
  );
};

export default Sidebar;
