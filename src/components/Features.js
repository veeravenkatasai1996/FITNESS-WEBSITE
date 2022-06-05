import React from "react";
import "./../App.css";

function Features() {
  return (
    <div className="features-container" id="features">
      <h1>
        <span>GYM FEATURES</span>
      </h1>
      <div className="feature-highlights">
        <div className="feature-box">
           <div className="image">
             <img src="images/f-img-1.jpg" alt="" />
           </div>
           <div className="card">
           <img src="images/icon-1.png" alt=""/>
                <h3>Body Building</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque.</p>
              
           </div>
         </div>
         <div className="feature-box">
           <div className="card">
           <img src="images/icon-2.png" alt=""/>
                <h3>Gym for men</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque.</p>
               
           </div>
           <div className="image">
              <img src="images/f-img-2.jpg" alt="" height={313}/>
           </div>
         </div>
         <div className="feature-box">
           <div className="image">
              <img src="images/f-img-3.jpg" alt="" />
           </div>
           <div className="card">
           <img src="images/icon-3.png" alt=""/>
                <h3>Gym for women</h3>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique, atque.</p>
             </div>
             
         </div>
      </div>
    </div>
  );
}

export default Features;
