import Button from "./Button"
import React from "react";
import { FaTimes } from "react-icons/fa"


const Header = ({onAdd, showAdd}) => {
    
  return (
    <header className="header">
        <h1>Task Tracker</h1>
        <Button color={showAdd? "red" : "green"} text={showAdd ? <FaTimes className="times"/> : "Add"} onClick={onAdd }/>
        
    </header>
  )
}


export default Header