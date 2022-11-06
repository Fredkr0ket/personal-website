import React from "react";
import Projectitem from "./Projectsitem";
import projects from '../../data/projects.json'

const Projects = () => {
  const items = projects.map(item => {
    return (
      <Projectitem
      title={item.title}
      description={item.description}
      img={item.img}
      imgAlt={item.imgAlt}
      ></Projectitem>
    )
  })
  return (
    <div key="1">
      {items}
    </div>
  )
}

export default Projects