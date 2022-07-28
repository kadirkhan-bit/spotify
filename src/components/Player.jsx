import React from "react";
import Footer from "./Footer";
import SideBar from "./SideBar";
import Body from "./Body";
import "./Player.scss";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="playerBody">
        <SideBar />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
