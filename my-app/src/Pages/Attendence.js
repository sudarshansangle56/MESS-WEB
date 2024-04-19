import React from "react";
import Navbar from "../Componet/Navbar";
import Footer from "../Componet/Footer";

function Attendence() {
  return (
    <div>
      <Navbar />
      <div className="bar1">
      <h1>Student Attendance System</h1>
        <div
          role="progressbar"
          aria-valuenow={67}
          aria-valuemin={0}
          aria-valuemax={100}
          style={{ "--value": "55" }}
        ></div>
      </div>
      <Footer />
    </div>
  );
}

export default Attendence;
