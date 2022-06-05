import React from "react";
import "./../App.css";

function Trainers() {
  return (
    <div className="trainers-container" id="trainers">
      <h1>
        <span>Trainers</span>
      </h1>
      <div className="trainers-content">
        <div className="trainers">
          <img src="images/trainer-5.jpg" alt="" />
          <div className="trainer-details">
            <span>Expert Trainer</span>
            <h3>John Deo</h3>
            <div class="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-pinterest" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
        </div>
        <div className="trainers">
          <img src="images/trainer-2.jpg" alt="" />
          <div className="trainer-details">
            <span>Expert Trainer</span>
            <h3>Martha stewart</h3>
            <div class="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-pinterest" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
        </div>
        <div className="trainers">
          <img src="images/trainer-3.jpg" alt="" />
          <div className="trainer-details">
            <span>Expert Trainer</span>
            <h3>Andy</h3>
            <div class="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-pinterest" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
        </div>
        <div className="trainers">
          <img src="images/trainer-4.jpg" alt="" />
          <div className="trainer-details">
            <span>Expert Trainer</span>
            <h3>Pam Bessely</h3>
            <div class="share">
              <a href="#" className="fab fa-facebook-f" />
              <a href="#" className="fab fa-twitter" />
              <a href="#" className="fab fa-pinterest" />
              <a href="#" className="fab fa-linkedin" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Trainers;
