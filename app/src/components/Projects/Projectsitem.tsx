import React from "react";


export interface IProjects {
  title: string
  description: string
  img?: string | undefined
  imgAlt?: string
  tools?: string[]
  toolAlt: string[]
}

const Projectitem = ({title, description, img, imgAlt, tools, toolAlt}: IProjects) => {
  console.log(tools)
  return (
    <div className="flex flex-row max-w-[100%] mb-12">
      <div className="flex flex-col self-end w-[68%] ml-[4%]">
        <h1 className="text-s-title text-orange-2">{title}</h1>
        <p className="text-desc text-gray-3 mb-2">{description}</p>
        <p className="text-ss-title text-orange-2">Tools</p>
        <div className="flex flex-row max-h-[40px] mt-2">
          {tools?.map(tool => {
            console.log(tool)
            return(
              <img className="mr-4" src={"src/assets/" + tool} alt={tool}></img>
            )
          })}
        </div>
      </div>
        <img className="max-h-[250px]" src={"src/assets/" + img} alt={imgAlt}></img>
      
    </div>
  )
}

export default Projectitem