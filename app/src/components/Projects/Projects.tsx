import React from "react";
import Projectitem from "./Projectsitem";
import projects from '../../data/projects.json'

const Projects = () => {
  const items = projects.projects.map(item => {
    return (
      <Projectitem
      id={item.id}
      title={item.title}
      description={item.description}
      img={item.img}
      imgAlt={item.imgAlt}
      tools={item.tools}
      ></Projectitem>
    )
  })
  return (
    <div className={`flex flex-col place-items-center mb-[30px]`}  >
      <h2 className="text-orange-2 text-title mb-[25px]">
      Projecten
      </h2>
      <div key="1" className="">
        {items}
      </div>
    </div>
  )
}

export default Projects