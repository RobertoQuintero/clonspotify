import React from "react";
import "./Player.css";
import Sidebar from "./sidebar/Sidebar";
import Body from "./body/Body";
import Footer from "./footer/Footer";

const Player = ({ spotify }) => {
  return (
    <div className="player">
      <div className="player__body">
        <Sidebar spotify={spotify} />
        <Body spotify={spotify} />
      </div>
      <Footer />
    </div>
  );
};

export default Player;
