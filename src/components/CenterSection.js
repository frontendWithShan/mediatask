import React, { useState } from 'react';
import './CenterSection.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCog, faUserGroup, faBullhorn, faBell } from '@fortawesome/free-solid-svg-icons';
import SystemComponent from './SystemComponent';
import BrandingComponent from './BrandingComponent';
import NotificationsComponent from './NotificationsComponent';

const CenterSection = () => {
  const [selectedItem, setSelectedItem] = useState('system');

  const handleItemClick = (item) => {
    setSelectedItem(item);
  };

  return (
    <div className="center-section">
      <div className="sidebarz">
        <h2>Settings</h2>
        <input type="text" placeholder="Search..." />
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

      <div className="content">
        {selectedItem === 'system' && <SystemComponent />}
        {selectedItem === 'branding' && <BrandingComponent />}
        {selectedItem === 'notifications' && <NotificationsComponent />}
      </div>
    </div>
  );
};

export default CenterSection;
