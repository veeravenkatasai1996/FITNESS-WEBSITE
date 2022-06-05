import React from "react";
import "./../App.css";

function About() {
  return (
    <div id="about" className="about-container">
      
      <div className="about-image">
        <img src="/images/home-img.png" alt="fitness" />
      </div>
      <div className="about-content">
         <h1 style={{color:"white"}}>About Us</h1><br/>
         <h2 style={{fontSize:"33px",color:"white"}}>Limitations Only Exist If You Let Them</h2><br/>
         <section>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque totam eum aut quibusdam ipsa
          illum, exercitationem iure accusantium quae quidem quis, soluta enim 
          similique voluptate atque impedit natus. Porro, similique?</section>
          <div className="about-highlights"> 
           <section>
             <h3>Body And Mind</h3>
             <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Est, Enim.illum, exercitationem iure accusantium quae quidem qui</p>
           </section>
           <section>
             <h3>Healthy Life</h3>
             <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Est, Enim.illum, exercitationem iure accusantium quae quidem qui</p>
           </section>
           <section>
             <h3>Strategies</h3>
             <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Est, Enim.illum, exercitationem iure accusantium quae quidem qui</p>
           </section>
           <section>
             <h3>Workout</h3>
             <p>Lorem Ipsum Dolor Sit Amet Consectetur Adipisicing Elit. Est, Enim.illum, exercitationem iure accusantium quae quidem qui</p>
           </section>
          </div>
      </div>
    </div>
  );
}

export default About;
