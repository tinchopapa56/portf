import "./intro.css";
import Me from "../../img/hi.png";
import Yo from "../../img/1.jpeg";
import { useState } from "react";

const Intro = () => {
  // const [stars, setstars] = useState(stars)
  const stars = [1, 2, 3, 4, 5, 6, 7,  9, 10, 11, 12, 13, 14, 15, 16,]

  return (
    <div className="i">

      <div className="i-left">
        <div className="i-left-wrapper">
          <h2 className="i-intro">Hello, I am</h2>
          <h1 className="i-name"> Martin Labastie</h1>

          <div className="i-title">
            <div className="i-title-wrapper">
              <div className="i-title-item">Front-end Dev</div>
              <div className="i-title-item">Guitar player</div>
              <div className="i-title-item">Sport lover</div>
              <div className="i-title-item">Black-belt</div>
            </div>
          </div>
          <p className="i-desc">
            I have a Bachelor´s degree <br />
            Self taught Front-End developer (React & Typescript) <br />
            Currently looking for my first professional job.
          </p>
        </div>
        
      </div>

      <div className="i-right">
        <div className="i-bg">
          <img src={Me} alt="web developer" className="i-img" />
        </div>
      </div>

      <div className="sky-container">
        {stars.map((star) => <div className="star"></div> )}
      </div>
  
  {/* <div class="border"></div> */}

    </div>
  );
};

export default Intro;
