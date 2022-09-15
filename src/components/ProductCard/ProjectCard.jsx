import "./ProjectCard.css";
import { BsGithub } from "react-icons/bs";

export default function ProjectCard (props) {
  return (
    <article className="card"> 

        <img className="card-img" src={props.img}/>

        <h3 className="card-h3">{props.h3}</h3>
        <p className="card-p">{props.p}</p> 
          <a className="card-a" href={props.link1}>
            <button className="card-button">See it Live!</button>
          </a>
          {/* <a className="card-a" href={props.link2}>
            <BsGithub className="card-git"/>
          </a> */}
      
      

    </article>
  );
};
