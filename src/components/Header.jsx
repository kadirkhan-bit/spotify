import React from "react";
import SearchIcon from "@material-ui/icons/Search";
import { Avatar } from "@material-ui/core";
import "./Header.scss";
import { useDataLayerValue } from "../store/dataLayer";

function Header() {
  const [{ user }, dispatch] = useDataLayerValue();

  return (
    <div className="header">
      <div className="headerleft">
        <SearchIcon />
        <input
          type="text"
          placeholder="Search for Artists, Songs or Playlists "
        />
      </div>
      <div className="headerright">
        <Avatar src={user?.images[0]?.url} alt={user?.display_name} />
        <h4>{user?.display_name}</h4>
      </div>
    </div>
  );
}

export default Header;
