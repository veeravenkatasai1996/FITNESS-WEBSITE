import React from "react";
import "./../App.css";

function Pricing() {
  return (
    <div className="pricing-container" id="pricing">
      <h1>
        <span>Choose Your Favorite Pricing Plan </span>
      </h1>
      <div className="prices-plan">
        <div className="Plans">
          <div className="plans-content">
            <div className="plans-header">
              <h1>Monthly-Plan</h1>
              <span>&#8377;999 only</span>
            </div>
            <div className="plans-description">
              <ul type="none">
                <li> <i className="fas fa-check"> Personal Training</i></li>
                <li> <i className="fas fa-check"> Cardio-Exercise</i> </li>
                <li> <i className="fas fa-check"> Weight Lifting</i></li>
                <li><i className="fas fa-check"> Diet Plans</i></li>
              </ul>
              <button>Buy</button>
            </div>
          </div>
        </div>
        <div className="Plans">
          <div className="plans-content">
            <div className="plans-header">
              <h1>ThreeMonths-Plan</h1>
              <span>&#8377;2999 only</span>
            </div>
            <div className="plans-description">
            <ul type="none">
                <li> <i className="fas fa-check"> Personal Training</i></li>
                <li> <i className="fas fa-check"> Cardio-Exercise</i> </li>
                <li> <i className="fas fa-check"> Weight Lifting</i></li>
                <li><i className="fas fa-check"> Diet Plans</i></li>
              </ul>
              <button>Buy</button>
            </div>
          </div>
        </div>
        <div className="Plans">
          <div className="plans-content">
            <div className="plans-header">
              <h1>SixMonths-Plan</h1>
              <span>&#8377;5999 only</span>
            </div>
            <div className="plans-description">
            <ul type="none">
                <li> <i className="fas fa-check"> Personal Training</i></li>
                <li> <i className="fas fa-check"> Cardio-Exercise</i> </li>
                <li> <i className="fas fa-check"> Weight Lifting</i></li>
                <li><i className="fas fa-check"> Diet Plans</i></li>
              </ul>
              <button>Buy</button>
            </div>
          </div>
        </div>
        <div className="Plans">
          <div className="plans-content">
            <div className="plans-header">
              <h1>Annual-Plan</h1>
              <span>&#8377;9999 only</span>
            </div>
            <div className="plans-description">
            <ul type="none">
                <li> <i className="fas fa-check"> Personal Training</i></li>
                <li> <i className="fas fa-check"> Cardio-Exercise</i> </li>
                <li> <i className="fas fa-check"> Weight Lifting</i></li>
                <li><i className="fas fa-check"> Diet Plans</i></li>
              </ul>
              <button>Buy</button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Pricing;
