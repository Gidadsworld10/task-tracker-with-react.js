import Button from "./Button"
import React from "react";
import { FaTimes } from "react-icons/fa"
import { useLocation } from "react-router-dom";


const Header = ({ onAdd, showAdd }) => {
 const location = useLocation()
  return (
    <header className="header">
      <h1>Task Tracker</h1>
      {location.pathname === "/" && (<Button
        color={showAdd ? "red" : "green"}
        text={showAdd ? <FaTimes className="times" /> : "Add"}
        onClick={onAdd} />
      )}

    </header>
  )
}


export default Header