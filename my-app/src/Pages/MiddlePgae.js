import React from 'react';
import Facility from '../Componet/Facility';
// Import the CSS file

function MiddlePage() {
  return (
    <div className="middlepage">
      <div className="facility-container">
        <Facility 
          Linka="https://happygrub.in/img/icons/icon1.png"
          titlea="BEST QUALITY INGREDIENTS"
        />
        <Facility 
          Linka="https://happygrub.in/img/icons/icon2.png"
          titlea="AMAZING CUSTOMER SERVICE"
        />
        <Facility 
          Linka="https://happygrub.in/img/icons/icon3.png"
          titlea="IN HOUSE NUTRITIONIST"
        />
        <Facility 
          Linka="https://happygrub.in/img/icons/icon4.png"
          titlea="EASY ORDERING AND CANCELLATION POLICY"
        />
        <Facility 
          Linka="https://happygrub.in/img/icons/icon5.png"
          titlea="SOME TITLE"
        />
      </div>
    </div>
  );
}

export default MiddlePage;
