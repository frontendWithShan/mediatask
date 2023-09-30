import React, { useState, useEffect } from 'react';
import './CenterSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUserGroup, faBullhorn, faBell } from '@fortawesome/free-solid-svg-icons';
import SystemComponent from './SystemComponent';
import BrandingComponent from './BrandingComponent';
import NotificationsComponent from './NotificationsComponent';
import axios from 'axios';

const CenterSection = () => {
  const [selectedItem, setSelectedItem] = useState('system');
  const [systemResponse, setSystemResponse] = useState('');
  const [buttonValue, setButtonValue] = useState('');

  const handleButtonValue = (value) => {
    setButtonValue(value);
    const binId = '65169f7754105e766fbb5ad4 '; 
    const masterKey = '$2a$10$IaeXOX9yMpJcoD68htp6b.eBPGNp2ILkTsxIa4On2E9HXGYvD40IO'; 
    const apiUrl = `https://api.jsonbin.io/v3/b/${binId}`;


    const updatedData = {
      themeColor: value,
    };

    axios.put(apiUrl, updatedData, {
      headers: {
        'X-Master-Key': masterKey,
      }
    })
      .then(response => {
        console.log('Data updated successfully');
      })
      .catch(error => {
        console.error(error);
      });
  };
  console.log(systemResponse)
  const loadThemeStyles = (theme) => {
    const themeFileName = `CenterSection_${theme}.scss`;
    const styleSheet = document.createElement('link');
    styleSheet.rel = 'stylesheet';
    styleSheet.href = themeFileName;
    document.head.appendChild(styleSheet);
  };
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
            setSystemResponse(jsonData.themeColor);
            loadThemeStyles(jsonData.themeColor);
        }
    })
    .catch(error => {
        console.error(error);
    });
}, [buttonValue]);

  
  useEffect(() => {
  }, [buttonValue]);

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className= {systemResponse === 'white' ? 'center-section' : systemResponse === 'dark' ? 'center-sections' : 'center-light'}>
      <div className={systemResponse=="white"?'sidebarz':'sidebarss'}>
        <h2>Settings</h2>
        <input type="text" placeholder="Search..." style={{ width: "170px" }} />
        <hr />
        <p style={{ color: 'grey' }}>GENERAL</p>
        <p
          className={selectedItem === 'system' ? 'selected-item' : ''}
          onClick={() => handleItemClick('system')}
        >
          <FontAwesomeIcon icon={faCog} />
          <span>System</span>
        </p>
        <hr />
        <p style={{ color: 'grey' }}>CALENDAR</p>
        <p
          className={selectedItem === 'branding' ? 'selected-item' : ''}
          onClick={() => handleItemClick('branding')}
        >
          <FontAwesomeIcon icon={faBullhorn} style={{ color: "#494b50" }} />
          <span>Branding</span>
        </p>
        <p
          className={selectedItem === 'notifications' ? 'selected-item' : ''}
          onClick={() => handleItemClick('notifications')}
        >
          <FontAwesomeIcon icon={faBell} style={{ color: "#494b50" }} />
          <span>Notifications</span>
        </p>
        <p
          className={selectedItem === 'groups' ? 'selected-item' : ''}
          onClick={() => handleItemClick('groups')}
        >
          <FontAwesomeIcon icon={faUserGroup} style={{ color: "#494b50" }} />
          <span>Groups</span>
        </p>
      </div>

      <div className={systemResponse=="white"?'content':'contentzz'}>
        {selectedItem === 'system' && <SystemComponent systemResponse={systemResponse} onButtonClicked={handleButtonValue} />}
        {selectedItem === 'branding' && <BrandingComponent />}
        {selectedItem === 'notifications' && <NotificationsComponent />}
      </div>
    </div>
  );
};

export default CenterSection;
