import React from "react";
import "./SidebarOption.scss";

function SidebarOption({ title, render = () => {}, icon = false }) {
  return (
    <div className="sidebaroption">
      {render()}
      {icon ? <h4>{title}</h4> : <p>{title}</p>}
    </div>
  );
}

export default SidebarOption;
