import "./ProjectCard.css";
import { BsGithub } from "react-icons/bs";
// export default function ProjectCard ({img,h3,p,link1,link2}) {
export default function ProjectCard (props) {
  return (
    //   <a href={link} target="_blank" rel="noreferrer">
    //     <img src={img} alt="" className="p-img" />
    //   </a>
    <article className="card"> 

        <img className="card-img" src={props.img}/>

      <section className="card-text">
        <h3 className="card-h3">{props.h3}</h3>
        <p className="card-p">{props.p}</p>  
      </section>
      
      <section className="card-links">
        <a className="card-a" href={props.link1}>
          <button className="card-button">See it Live!</button>
        </a>
        <a className="card-a" href={props.link2}>
          <BsGithub className="card-git"/>
        </a>
      </section>

    </article>
  );
};
