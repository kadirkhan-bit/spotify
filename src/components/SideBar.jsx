import React from "react";
import "./SideBar.scss";
import SidebarOption from "./SidebarOption";
import HomeIcon from "@material-ui/icons/Home";
import SearchIcon from "@material-ui/icons/Search";
import LibraryMusicIcon from "@material-ui/icons/LibraryMusic";
import { useDataLayerValue } from "../store/dataLayer";

function SideBar() {
  const [{ playlists }, dispatch] = useDataLayerValue();
  return (
    <div className="sidebar">
      <img
        src="https://getheavy.com/wp-content/uploads/2019/12/spotify2019-830x350.jpg"
        alt=""
        className="logo"
      />
      <SidebarOption
        title="Home"
        icon={true}
        render={() => <HomeIcon className="sidebaricon" />}
      />
      <SidebarOption
        title="Search"
        icon={true}
        render={() => <SearchIcon className="sidebaricon" />}
      />
      <SidebarOption
        title="Your Library"
        icon={true}
        render={() => <LibraryMusicIcon className="sidebaricon" />}
      />
      <br />
      <strong className="sidebartitle">PLAYLISTS</strong>
      <hr />
      {playlists?.items?.map((playlist, index) => (
        <SidebarOption key={index} title={playlist.name} />
      ))}
    </div>
  );
}

export default SideBar;
