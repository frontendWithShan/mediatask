import React, { useState,useEffect } from 'react';
import './SystemComponent.scss'; // Import your SCSS file for SystemComponent
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import axios from "axios"
const SystemComponent = ({ systemResponse, onButtonClicked }) => {
  const handleButtonClick = (e) => {
    setInitial(e.target.value)
    onButtonClicked(e.target.value);
  };
  const [initial,setInitial]=useState("")
  useEffect(() => {
    const binId = '65169f7754105e766fbb5ad4'; 
    const masterKey = '$2a$10$IaeXOX9yMpJcoD68htp6b.eBPGNp2ILkTsxIa4On2E9HXGYvD40IO'; 
    const apiUrl = `https://api.jsonbin.io/v3/b/${binId}`;

    axios.get(apiUrl, {
        headers: {
            'X-Master-Key': masterKey,
        }
    })
    .then(response => {
        const jsonData = response.data.record;
        if (jsonData && jsonData.themeColor) {
          setInitial(jsonData.themeColor);
        }
    })
    .catch(error => {
        console.error(error);
    });
}, []);
  return (
    <div className="system-component">
      <div className="system-header">
        <FontAwesomeIcon icon={faCog} className="icon" />
        <h3 style={{fontWeight:"bold"}}>System</h3>
      </div>

      <div className="system-options" style={{ paddingTop: "37px" }}>
        <div className="option-row">
          <div className="option">
            <label htmlFor="fieldSelect" style={{color:"purple"}}>Language</label>
            <select id="fieldSelect">
              <option value="option1">English</option>
              <option value="option2">English</option>
              <option value="option3">English</option>
            </select>
          </div>
          <div className="option" style={{ paddingLeft: "70px" }}>
            <label htmlFor="themeSelect" style={{color:"purple"}}>Font Size</label>
            <select id="themeSelect">
              <option value="theme1">Medium</option>
              <option value="theme2">small</option>
              <option value="theme3">Large</option>
            </select>
          </div>
        </div>

        <h4 style={{color:"purple",fontWeight:"bold"}}>Theme</h4>
        <div className="radio-buttons">
          <label>
            <input type="radio" name="theme" value="dark" onClick={(e)=>{handleButtonClick(e)}}   checked={initial === "dark"} />
            <span>Dark</span>
          </label>
          <label>
            <input type="radio" name="theme" value="light"onClick={(e)=>{handleButtonClick(e)}}   checked={initial === "light"}/>
            <span>Light</span>
          </label>
          <label>
            <input type="radio" name="theme" value="white"onClick={(e)=>{handleButtonClick(e)}}  checked={initial === "white"} />
            <span>White</span>
          </label>
        </div>

        <h4 style={{color:"purple",fontWeight:"bold"}}>Date Mode</h4>
        <div className="radio-buttons">
          <label>
            <input type="radio" name="theme-option" value="option1" style={{width:"20px"}}/>
            <span style={{width:"110px"}}>Apr 26 2023</span>
          </label>
          <label>
            <input type="radio" name="theme-option" value="option2" style={{width:"20px"}}/>
            <span style={{width:"110px"}}>26 Apr 2023</span>
          </label>
          <label>
            <input type="radio" name="theme-option" value="option3" style={{width:"20px"}}/>
            <span style={{width:"110px"}}>2023/04/26</span>
          </label>
          <label>
            <input type="radio" name="theme-option" value="option4" style={{width:"20px"}}/>
            <span style={{width:"110px"}}>2023-04-26</span>
          </label>
        </div>
      </div>
    </div>
  );
};

export default SystemComponent;
