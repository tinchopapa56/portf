import React from "react";

// import SButton from "../SButton";
import "./ProductCardNEW.css"

const ProjectCardNEW = ({title, description, cover, tag, url, bg}) => {

  // const btnSTYLE={
  //   backgroundColor:"transparent",
  //   padding: "1em",
  //   color: "black",
  //   fontWeight: "600",
  //   cur
  // }

  return (
    <article className="project2" style={{backgroundColor: bg}}>
      <div className="content2" style={{backgoungColor: bg}}>
        <span>{tag}</span>
        <h3>{title}</h3>
        {typeof description == "string" ? (<p>{description}</p>
        ) : (
          description.map((paragraph, i) => <p key={i}>{paragraph}</p>)
        )}
          {/* <button className="btn-two">See more</button> */}
          <button class="btn">
            <svg width="180px" height="60px" viewBox="0 0 180 60" class="border">
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="bg-line" />
              <polyline points="179,1 179,59 1,59 1,1 179,1" class="hl-line" />
            </svg>
            <span>See more</span>
          </button>
      </div>
      <figure className="cover2">
        <img alt={title} src={cover} />
      </figure>
    </article>
  );
};

export default ProjectCardNEW;
