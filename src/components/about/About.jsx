import React from "react"
import "./About.css"
import Gym from "../../img/gym.png"
import Guitar from "../../img/guitar.png"
import Bicep from "../../img/feel the burn.png"
import Meditation from "../../img/lotus pose.png"
import Thinker from "../../img/equation.png"

import I0 from "../../img/skills/1.png"
import I1 from "../../img/skills/2 (1).png"
import I2 from "../../img/skills/2 (1).jpg"
import I3 from "../../img/skills/2 (1).webp"
import I4 from "../../img/skills/2 (2).png"
import I5 from "../../img/skills/2 (2).webp"
import I6 from "../../img/skills/2 (3).png"
import I7 from "../../img/skills/2 (4).png"
import I8 from "../../img/skills/2 (5).png"

export default function About(){
    return(
    <article className="a">
         
        <section className="about-columns" id="column-left"> 
        <img className="absolute-column-img" src={Meditation} alt="Meditation" />
            <img className="absolute-column-img" src={Gym} alt="Gym" />
        </section>

        <section className="about-center">
        <div className="about-text"> 
            <h1 className="a-title">About Me</h1>
            <p className="a-sub"> I am 21 years old and my best quality is my passion and perseverance: i am no stranger to hard work.</p>
          <p className="a-desc">Bachelor in Phsicology University of Buenos Aires (UBA).</p>
          <p className="a-desc">Proficient English (C2), Native Spanish(C2), Intermediate German(B1).</p>
          <p className="a-desc">Hobbies: Guitar, Gym, TaeKwonDo.</p>
          <h3 id="about-h3">Skills:</h3>
            </div>

            <div className="rotator">
                <div className="items">
                    <img src={I0} alt="Image Alt" />
                </div>
                <div className="items">
                    <img src={I1} alt="Image Alt" />
                </div>
                <div className="items">
                    <img src={I2} alt="Image Alt" />
                </div>
                <div className="items">
                    <img src={I3} alt="Image Alt" />
                </div>
                <div className="items">
                    <img src={I4} alt="Image Alt" />
                </div>
                <div className="items">
                    <img src={I5} alt="Image Alt" />
                </div>
                <div className="items">
                    <img src={I7} alt="Image Alt" />
                </div>
                <div className="items">
                    <img src={I6} alt="Image Alt" />
                </div>
                
                <div className="items">
                    <img src={I8} alt="Image Alt" />
                </div>
            </div>

            <div className="last_image"> 
                <img className="thinker" src={Thinker} alt="front end engineer" />
            </div>
        </section>

        {/*  3d*/}
        
        {/* ends 3d */}

            <section className="about-columns">
                <img className="absolute-column-img" src={Bicep} alt="Bicep" />
                <img className="absolute-column-img" src={Guitar} alt="Guitar" />
                
            </section>

    </article>
    )
}