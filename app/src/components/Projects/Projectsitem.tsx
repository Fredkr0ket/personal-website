import React from "react";
import Projects from "./Projects";

export interface IProjects{
  id: number
  title: string
  description: string
  img: string
  imgAlt: string
  tools: string[]
}

const Projectitem = ({...props}: IProjects) => {
  
  if (props.id % 2 == 0) {
    return (
      <div className="flex flex-row max-w-[100%] mb-12 ">
        <img className="max-h-[250px]" src={"src/assets/" + props.img} alt={props.imgAlt}></img>
        <div className="flex flex-col self-end w-[68%] ml-[4%]">
          <h1 className="text-s-title text-orange-2">{props.title}</h1>
          <p className="text-desc text-gray-3 mb-2">{props.description}</p>
          <p className="text-ss-title text-orange-2">Tools</p>
          <div className="flex flex-row max-h-[40px] mt-2">
            {props.tools?.map(tool => {
              return(
                <img className="mr-4" src={"src/assets/" + tool} alt={tool}></img>
              )
            })}
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="flex flex-row max-w-[100%] mb-12 ">
        <div className="flex flex-col self-end w-[68%] ml-[4%]">
          <h1 className="text-s-title text-orange-2">{props.title}</h1>
          <p className="text-desc text-gray-3 mb-2">{props.description}</p>
          <p className="text-ss-title text-orange-2">Tools</p>
          <div className="flex flex-row max-h-[40px] mt-2">
            {props.tools?.map(tool => {
              return(
                <img className="mr-4" src={"src/assets/" + tool} alt={tool}></img>
              )
            })}
          </div>
        </div>
          <img className="max-h-[250px]" src={"src/assets/" + props.img} alt={props.imgAlt}></img>
      </div>
    )
  }
}

export default Projectitem