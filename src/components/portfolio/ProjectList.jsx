import "./ProjectList.css";
import ProductCard from "../ProductCard/ProjectCard";
import { projectsArray } from "../projectsArray";

export default function ProjectList () {
  return (
    <main className="portfolio">
      <section className="portfolio-text">
        <h1 className="portfolio-title">Projects</h1>
       <span className="portfolio-subtitle"> See them in action or it´s repos</span>
      </section>

    <section className="portfolio-list"> 
      {projectsArray.map(project =>{
        return <ProductCard img={project.img} h3={project.h3} p={project.p} link1={project.link1} link2={project.link2} />
      })}
    </section>

    </main>

  )
};
