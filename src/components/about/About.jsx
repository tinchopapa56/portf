import React from "react"
import "./About.css"
import Gym from "../../img/gym.png"
import Guitar from "../../img/guitar.png"
import Bicep from "../../img/feel the burn.png"
import Meditation from "../../img/lotus pose.png"
import Thinker from "../../img/equation.png"
import { FaHtml5,FaCss3Alt,FaReact,FaJsSquare,FaGitAlt,FaGit } from "react-icons/fa";
import { SiRedux,SiMongodb,SiBootstrap,SiFirebase } from "react-icons/si";
import { DiNodejs, DiNpm } from "react-icons/di";


export default function About(){
    return(
    <article className="a">
         
        <section className="about-columns" id="column-left"> 
            <img className="absolute-column-img" src={Guitar} alt="Guitar" />
            <img className="absolute-column-img" src={Gym} alt="Gym" />
        </section>

        <section className="about-center">
        <div className="about-text"> 
            <h1 className="a-title">About Me</h1>
            <p className="a-sub"> I am 21 years old and my best quality is my passion and perseverance: i am no stranger to hard work.</p>
          <p className="a-desc">Bachelor in Phsicology University of Buenos Aires (UBA).</p>
          <p className="a-desc">Advanced English (C1), Native Spanish(C2), Intermediate German(B1).</p>
          <p className="a-desc">Hobbies: Guitar, Gym, TaeKwonDo.</p>
          <h3 id="about-h3">Skills:</h3>
            </div>
            <div className="skills-grid"> 
                    <FaHtml5 className="skills-grid-item" />
                    <FaCss3Alt className="skills-grid-item" />
                    <FaGit className="skills-grid-item" />
                    <FaGitAlt className="skills-grid-item" />
                    <FaJsSquare className="skills-grid-item" />
                    <FaReact className="skills-grid-item" />
                    <SiBootstrap className="skills-grid-item" />
                    <SiFirebase className="skills-grid-item" />
                    <SiMongodb className="skills-grid-item" />
                    <SiRedux className="skills-grid-item" />
                    <DiNodejs className="skills-grid-item" />
                    <DiNpm className="skills-grid-item" />
            </div>
            <div className="last_image"> 
                <img className="thinker" src={Thinker} alt="front end engineer" />
            </div>
        </section>

            <section className="about-columns">
                <img className="absolute-column-img" src={Bicep} alt="Bicep" />
                <img className="absolute-column-img" src={Meditation} alt="Meditation" />
            </section>

    </article>
    )
}