import React from 'react';
import './BrandingComponent.scss'; // Import your SCSS file for BrandingComponent
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';

const BrandingComponent = () => {
  return (
    <div className="branding-component">
      <div className="component-header">
        <FontAwesomeIcon icon={faPalette} className="icon" />
        <h3>Branding</h3>
      </div>

      <div className="component-content">
        <div className="input-section">
          <label htmlFor="brandName">Brand Name</label>
          <input type="text" id="brandName" placeholder="Enter Brand Name" />
        </div>

        <div className="button-section">
          <button>Save</button>
        </div>
      </div>

      <div className="centered-line">
        <hr />
        <p style={{ color: "red", fontWeight: "600" }}>UPLOAD ASSETS</p>
        <hr />
      </div>

      <div className="upload-boxes" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center",padding:"30px 0px 30px 0px" }}>
        <div className="upload-box">
          <div className="image-preview">
            <div className="image-circle">
              {/* Display image here */}
              <img src="your-image-url1.jpg" alt="Image Preview 1" />
            </div>
          </div>
          <div className="upload-button" style={{ height: "17px", display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faUpload} className="upload-icon" />
            <p>Upload profile picture</p>
          </div>
        </div>
        <div className="upload-box">
          <div className="image-preview">
            <div className="image-circle">
              {/* Display image here */}
              <img src="your-image-url2.jpg" alt="Image Preview 2" />
            </div>
          </div>
          <div className="upload-button" style={{ height: "17px", display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faUpload} className="upload-icon" />
            <p>Upload logo</p>
          </div>
        </div>
        <div className="upload-box">
          <div className="image-preview">
            <div className="image-circle">
              {/* Display image here */}
              <img src="your-image-url3.jpg" alt="Image Preview 3" />
            </div>
          </div>
          <div className="upload-button" style={{ height: "17px", display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faUpload} className="upload-icon" />
            <p>Upload gif</p>
          </div>
        </div>
        <div className="upload-box">
          <div className="image-preview">
            <div className="image-circle">
              {/* Display image here */}
              <img src="your-image-url4.jpg" alt="Image Preview 4" />
            </div>
          </div>
          <div className="upload-button" style={{ height: "17px", display: "flex", alignItems: "center" }}>
            <FontAwesomeIcon icon={faUpload} className="upload-icon" />
            <p>Upload favicon</p>
          </div>
        </div>
      </div>
      <div className="centered-line">
        <hr />
        <p style={{ color: "red", fontWeight: "600" }}>BRAND GUIDELINES</p>
        <hr />
      </div>

      <div className="text-fields-row" style={{ display: "flex", justifyContent: "space-between", padding: "30px 20px" }}>
        <div className="text-field">
          <label htmlFor="textField1" style={{ color: 'purple', fontWeight: "bold" }}>Primary Color</label>
          <input type="text" id="textField1" placeholder="Enter Field 1" />
        </div>
        <div className="text-field">
          <label htmlFor="textField2" style={{ color: 'red', fontWeight: "bold" }}>Secondary color</label>
          <input type="text" id="textField2" placeholder="Enter Field 2" />
        </div>
        <div className="text-field">
          <label htmlFor="textField3" style={{ color: 'black', fontWeight: "bold" }}>Third color</label>
          <input type="text" id="textField3" placeholder="Enter Field 3" />
        </div>
      </div>
      <div className="button-section">
        <button>Save</button>
      </div>
      <div className="centered-line" style={{ paddingTop: "20px" }}>
  <hr />
  <p style={{ color: "red", fontWeight: "600" }}>CUSTOMISED DOMAIN</p>
  <hr />
</div>

<div className="left-content" style={{ display: "flex", flexDirection: "column", alignItems: "start",padding:"20px" }}>
  <h4 style={{}}>Verify Domain</h4>
  <p style={{padding:"18px 0px 15px 0px",fontWeight:"bold"}}>To create a customized portal and a personalizes domain for your calender page,you nedd to log in to your domain host
  and create a subdomain,point your domain to IP address to do this, you'll need to create an A record which will allow you to point your domains and subdomains to a specific IP address.</p>
  <div className="button-section">
        <button>Verify</button>
      </div>
</div>

    </div>
   
  );
};

export default BrandingComponent;
