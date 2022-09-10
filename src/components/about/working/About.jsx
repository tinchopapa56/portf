import "./about.css";
// import Hello from "../../img/hello.png";

// import Gym from "../../../img/gym.png"
// import Guitar from "../../../img/guitar.png"
// import Bicep from "../../../img/feel the burn.png"
// import Meditation from "../../../img/lotus pose.png"

// import Thinker from "../../img/equation.png"
// import { FaHtml5,FaCss3Alt,FaReact,FaJsSquare,FaGitAlt,FaGit } from "react-icons/fa";
// import { SiRedux,SiMongodb,SiBootstrap,SiFirebase } from "react-icons/si";
// import { DiNodejs, DiNpm } from "react-icons/di";

const About = () => {
  return (
    <div className="a">

      <section className="a-left">
        <div className="a-card">         
          {/* <img src={Hello} alt="" className="a-img" /> */}
          <img className="a-card-img" src={Guitar} alt="Guitar" /> 
          <img className="a-card-img" src={Gym} alt="Guitar" />
          <img className="a-card-img" src={Bicep} alt="Guitar" />
          <img className="a-card-img" src={Meditation} alt="Guitar" />
        </div>
      </section>
      

      <section className="a-right">
        <h1 className="a-title">About Me</h1>
        <p className="a-sub">
        un poco de mi story con coding 
        </p>
          <p className="a-desc">
            Hobbies: Guitar, Gym, TaeKwonDo.
          </p>
          <p className="a-desc">
            Bachelor in Phsicology University of Buenos Aires (UBA).
          </p>
          <p className="a-desc">
            Advanced English (C1), Native Spanish(C2), Intermediate German(B1).
          </p>
        <div className="a-award">
        <h3 className="a-award-title">Skills</h3>
          <div className="a-award-texts">
            
            {/* <p className="a-award-desc">
              Fotito epigrafe
            </p> */}
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
            <img src={Thinker} alt="" className="a-award-img" />
          </div>
          

        </div>

      </section>

    </div>
  );
};

export default About;
