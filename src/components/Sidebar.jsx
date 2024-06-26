import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import "./Sidebar.css";
import Comott from "../assets/Comott.png";
import { SidebarContext } from "./Sidebarprovider";

function Sidebar() {
  const [selectedMenu, setSelectedMenu] = useState("Tableau de bord");
  const {isSideBarExpanded, setIsSideBarExpanded} = useContext(SidebarContext);

  const toggleSideBar = () => {
    setIsSideBarExpanded(!isSideBarExpanded);
  };

  const styleSidebar = {
    width: isSideBarExpanded ? "275px" : "55px",
    borderTopRightRadius: isSideBarExpanded ? "50px" : "10px",
    borderBottomRightRadius: isSideBarExpanded ? "50px" : "10px",
    transition: "width 0.2s , margin-left 0.2s, border-top-right-radius 0.2s, border-bottom-right-radius 0.2s",
  };

  const styleButton = {
    marginLeft: isSideBarExpanded ? "275px" : "55px",
    transition: "margin-left 0.2s ease",
  }

  const handleMenuClick = (page) => {
    setSelectedMenu(page);
  };

  return (
    <>
      <div className="sidebarcontainer" style={styleSidebar}>
        <img className="logosidebar" src={Comott} />
        <ul className="menu">
          <li className= {selectedMenu === "Tableau de bord" ? "menu-item selecteditem" : "menu-item"} onClick={() => handleMenuClick("Tableau de bord")}>
            <img className="icon" src="src/assets/icon/tableau_de_bord.png" />
            {isSideBarExpanded && <span className={selectedMenu === "Tableau de bord" ? "item selected" : "item"}>Tableau de bord</span>}
          </li>
          <li className= {selectedMenu === "Election" ? "menu-item selecteditem" : "menu-item"} onClick={() => handleMenuClick("Election")}>
            <img className="icon" src="src/assets/icon/vote.png"/>
            {isSideBarExpanded && <span className={selectedMenu === "Election" ? "item selected" : "item"}>Election du représentant</span>}
          </li>
          <li className= {selectedMenu === "Guide" ? "menu-item selecteditem" : "menu-item"} onClick={() =>handleMenuClick("Guide")}>
          <img className="icon" src="src/assets/icon/guide.png"/>
            {isSideBarExpanded && <span className={selectedMenu === "Guide" ? "item selected" : "item"}>Guide de l'électeur</span>}
          </li>
          <li className={selectedMenu === "Visualisation" ? "menu-item selecteditem" : "menu-item"} onClick={() => handleMenuClick("Visualisation")}>
          <img className="icon" src="src/assets/icon/visualisation.png"/>
            {isSideBarExpanded && <span className={selectedMenu === "Visualisation" ? "item selected" : "item"}>Visualisation des serveurs</span>}
          </li>
          <li className={selectedMenu === "Déconnexion" ? "menu-item selecteditem" : "menu-item"} onClick={() => handleMenuClick("Déconnexion")}>
          <img className="icon" src="src/assets/icon/deconnexion.png"/>
            {isSideBarExpanded && <span className={selectedMenu === "Déconnexion" ? "item selected" : "item"}>Déconnexion</span>}
          </li>
        </ul>
      </div>
      <div className="buttonsidebar" style={styleButton} onClick={toggleSideBar}>
        <p className="arrow">{isSideBarExpanded ? "<" : ">"}</p>
      </div>
    </>
  );
}

export default Sidebar;
