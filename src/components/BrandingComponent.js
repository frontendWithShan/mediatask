import React from 'react';
import { useState } from 'react';
import './BrandingComponent.scss'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faPalette } from '@fortawesome/free-solid-svg-icons';
import { faUpload } from '@fortawesome/free-solid-svg-icons';
import axios from"axios"

const BrandingComponent = () => {
  const [brandName, setBrandName] = useState('');
  const [textField1, setTextField1] = useState('');
  const [textField2, setTextField2] = useState('');
  const [textField3, setTextField3] = useState('');

  const binId = '65179b8b12a5d37659852a21'; 
  const masterKey = '$2a$10$IaeXOX9yMpJcoD68htp6b.eBPGNp2ILkTsxIa4On2E9HXGYvD40IO'; 
  const apiUrl = `https://api.jsonbin.io/v3/b/${binId}`;

  const handleSaveBrandInfo = () => {
    if (brandName.trim() === '') {
      alert('Brand Name cannot be empty');
      return;
    }

    const updatedData = {
      brandName: brandName,
    };

   
    axios.put(apiUrl, updatedData, {
      headers: {
        'X-Master-Key': masterKey,
      },
    })
      .then(response => {
        console.log('Brand info saved successfully:', response.data);
        setBrandName("")
        alert('Saved Successfully');
      })
      .catch(error => {
        console.error('Error saving brand info:', error);
      });
  };

  const handleSaveBrandGuidelines = () => {
    const binIds = '65179e3c12a5d37659852ada'; 
     const apiUrl = `https://api.jsonbin.io/v3/b/${binIds}`;
    if (textField1.trim() === '' || textField2.trim() === '' || textField3.trim() === '') {
      alert('All three text fields must be filled');
      return;
    }

    const updatedData = {
      primary: textField1,
      secondary: textField2,
      third: textField3,
    };

    axios.put(apiUrl, updatedData, {
      headers: {
        'X-Master-Key': masterKey,
      },
    })
      .then(response => {
        console.log('Brand guidelines saved successfully:', response.data);
        alert('Saved Successfully');
        setTextField1("")
        setTextField2("")
        setTextField3("")
      })
      .catch(error => {
        console.error('Error saving brand guidelines:', error);
      });
  };
  const [uploadedImage1, setUploadedImage1] = useState(null);
const [uploadedImage2, setUploadedImage2] = useState(null);
const [uploadedImage3, setUploadedImage3] = useState(null);
const [uploadedImage4, setUploadedImage4] = useState(null);

const handleImageUpload1 = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage1(imageUrl);
  }
};

const handleImageUpload2 = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage2(imageUrl);
  }
};

const handleImageUpload3 = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage3(imageUrl);
  }
};

const handleImageUpload4 = (e) => {
  const file = e.target.files[0];
  if (file) {
    const imageUrl = URL.createObjectURL(file);
    setUploadedImage4(imageUrl);
  }
};

  return (
    <div className="branding-component">
      <div className="component-header">
        <FontAwesomeIcon icon={faPalette} className="icon" />
        <h3>Branding</h3>
      </div>

      <div className="component-content">
        <div className="input-section">
          <label htmlFor="brandName">Brand Name</label>
          <input type="text" id="brandName" placeholder="Enter Brand Name" value={brandName} onChange={(e) => setBrandName(e.target.value)}/>
        </div>

        <div className="button-section">
          <button onClick={handleSaveBrandInfo}>Save</button>
        </div>
      </div>

      <div className="centered-line">
        <hr />
        <p style={{ color: "red", fontWeight: "600" }}>UPLOAD ASSETS</p>
        <hr />
      </div>

      <div className="upload-boxes" style={{ display: "flex", flexDirection: "row", justifyContent: "space-around", alignItems: "center", padding: "30px 0px 30px 0px" }}>
  <div className="upload-box">
    <div className="image-preview">
      <div className="image-circle">
        <img src={uploadedImage1 || 'your-image-url1.jpg'} alt="Image Preview 1" />
      </div>
    </div>
    <label htmlFor="file-upload1" className="upload-button" style={{ height: "17px", display: "flex", alignItems: "center", cursor: "pointer" }}>
      <FontAwesomeIcon icon={faUpload} className="upload-icon" />
      <p>Upload profile picture</p>
    </label>
    <input
      type="file"
      id="file-upload1"
      accept="image/*"
      style={{ display: "none" }}
      onChange={handleImageUpload1}
    />
  </div>
  <div className="upload-box">
    <div className="image-preview">
      <div className="image-circle">
        <img src={uploadedImage2 || 'your-image-url2.jpg'} alt="Image Preview 2" />
      </div>
    </div>
    <label htmlFor="file-upload2" className="upload-button" style={{ height: "17px", display: "flex", alignItems: "center", cursor: "pointer" }}>
      <FontAwesomeIcon icon={faUpload} className="upload-icon" />
      <p>Upload logo</p>
    </label>
    <input
      type="file"
      id="file-upload2"
      accept="image/*"
      style={{ display: "none" }}
      onChange={handleImageUpload2}
    />
  </div>
  <div className="upload-box">
    <div className="image-preview">
      <div className="image-circle">
        <img src={uploadedImage3 || 'your-image-url3.jpg'} alt="Image Preview 3" />
      </div>
    </div>
    <label htmlFor="file-upload3" className="upload-button" style={{ height: "17px", display: "flex", alignItems: "center", cursor: "pointer" }}>
      <FontAwesomeIcon icon={faUpload} className="upload-icon" />
      <p>Upload gif</p>
    </label>
    <input
      type="file"
      id="file-upload3"
      accept="image/*"
      style={{ display: "none" }}
      onChange={handleImageUpload3}
    />
  </div>
  <div className="upload-box">
    <div className="image-preview">
      <div className="image-circle">
        <img src={uploadedImage4 || 'your-image-url4.jpg'} alt="Image Preview 4" />
      </div>
    </div>
    <label htmlFor="file-upload4" className="upload-button" style={{ height: "17px", display: "flex", alignItems: "center", cursor: "pointer" }}>
      <FontAwesomeIcon icon={faUpload} className="upload-icon" />
      <p>Upload favicon</p>
    </label>
    <input
      type="file"
      id="file-upload4"
      accept="image/*"
      style={{ display: "none" }}
      onChange={handleImageUpload4}
    />
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
          <input type="text" id="textField1" placeholder="Enter Field 1" value={textField1} onChange={(e) => setTextField1(e.target.value)} />
        </div>
        <div className="text-field">
          <label htmlFor="textField2" style={{ color: 'red', fontWeight: "bold" }}>Secondary color</label>
          <input type="text" id="textField2" placeholder="Enter Field 2" value={textField2}  onChange={(e) => setTextField2(e.target.value)} />
        </div>
        <div className="text-field">
          <label htmlFor="textField3" style={{ color: 'black', fontWeight: "bold" }}>Third color</label>
          <input type="text" id="textField3" placeholder="Enter Field 3" value={textField3} onChange={(e) => setTextField3(e.target.value)} />
        </div>
      </div>
      <div className="button-section">
        <button onClick={handleSaveBrandGuidelines}>Save</button>
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
