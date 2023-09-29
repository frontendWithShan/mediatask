import React, { useState } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import './Sidebar.scss'; // Import your SCSS file
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faCalendarDays, faCalendarWeek, faPeopleGroup, faCamera, faGear,faRocket,faCircleInfo } from '@fortawesome/free-solid-svg-icons';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const handleLogoHover = () => {
    if (!isOpen) {
      setIsOpen(true);
    }
  };

  const handleSidebarMouseLeave = () => {
    if (isOpen) {
      setIsOpen(false);
    }
  };

  return (
    <div
      className={`sidebar ${isOpen ? 'open' : ''}`}
      onMouseLeave={handleSidebarMouseLeave}
    >
      <Container>
        <div>
        <div style={{paddingTop:"30px"}}>
        <Row>
          <Col>
          <Col className="logo" onMouseEnter={handleLogoHover}>
            <FontAwesomeIcon icon={faHome} style={{ color: '#e9252f' }} />
              {isOpen && <span className="logo-text">Home</span>}
            </Col>
            <Col className="logo" onMouseEnter={handleLogoHover}>
            <FontAwesomeIcon icon={faCalendarDays}  style={{ color: '#e9252f' }} />
              {isOpen && <span className="logo-text">Create an event</span>}
            </Col>
            <Col className="logo" onMouseEnter={handleLogoHover}>
            <FontAwesomeIcon icon={faCalendarDays}  style={{ color: '#e9252f' }} />
              {isOpen && <span className="logo-text">Quick Events</span>}
            </Col>
            <Col className="logo" onMouseEnter={handleLogoHover}>
            <FontAwesomeIcon icon={faCalendarWeek}  style={{ color: '#e9252f' }}/>
              {isOpen && <span className="logo-text">Calender</span>}
            </Col>
            <Col className="logo" onMouseEnter={handleLogoHover}>
            <FontAwesomeIcon icon={faCamera}  style={{ color: '#e9252f' }}/>
              {isOpen && <span className="logo-text">Schedule Meetings</span>}
            </Col>
          </Col>
        </Row>
        </div>
        {/* <div style={{paddingTop:"90px"}}></div> */}
        <div style={{paddingTop:"150px"}}>
        <Row>
          <Col>
          <Col className="logo" onMouseEnter={handleLogoHover}>
          <FontAwesomeIcon icon={faGear}  style={{ color: '#e9252f' }}/>
              {isOpen && <span className="logo-text">Settings</span>}
            </Col>
            <Col className="logo" onMouseEnter={handleLogoHover}>
            <FontAwesomeIcon icon={faPeopleGroup}  style={{ color: '#e9252f' }} />
              {isOpen && <span className="logo-text">Teams</span>}
            </Col>
            <Col className="logo" onMouseEnter={handleLogoHover}>
            <FontAwesomeIcon icon={faRocket} style={{ color: '#e9252f' }} />
              {isOpen && <span className="logo-text">Subscription</span>}
            </Col>
            <Col className="logo" onMouseEnter={handleLogoHover}>
            <FontAwesomeIcon icon={faCircleInfo}  style={{ color: '#e9252f' }}/>
              {isOpen && <span className="logo-text">Info</span>}
            </Col>
          </Col>
        </Row>
        </div>
        </div>
      </Container>
    </div>
  );
};

export default Sidebar;
