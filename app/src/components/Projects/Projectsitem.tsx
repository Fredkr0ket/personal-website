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
      <div className="flex flex-row max-w-[100%] mb-12 lg:flex lg:flex-col lg:max-w-[100%] lg:mb-12 lg:mb-[10px]">
        <img className="max-h-[250px]" src={"src/assets/" + props.img} alt={props.imgAlt}></img>
        <div className="flex flex-col self-end max-w-[64%] ml-[4%] lg:flex lg:flex-col lg:self-center lg:max-w-[90%] lg:mx-[5%]">
          <h1 className="text-s-title text-orange-2 lg:text-center">{props.title}</h1>
          <p className="text-desc text-gray-3 mb-2 lg:text-center">{props.description}</p>
          <p className="text-ss-title text-orange-2 lg:text-center">Tools</p>
          <div className="flex flex-row mt-2 lg:max-w-[90%] lg:mx-[5%] lg:justify-center">
            {props.tools?.map(tool => {
              return(
                <img className="mr-4 max-h-[40px]" src={"src/assets/" + tool} alt={tool} />
              )
            })}
          </div>
        </div>
      </div>
    )
  }
  else {
    return (
      <div className="flex flex-row max-w-[100%] mb-12 lg:flex lg:flex-col lg:max-w-[100%] lg:mb-12 lg:mb-[10px]">
        <div className="flex flex-col self-end max-w-[64%] ml-[4%] lg:flex lg:flex-col lg:self-center lg:max-w-[90%] lg:mx-[5%]">
          <h2 className="text-s-title text-orange-2 lg:text-center">{props.title}</h2>
          <p className="text-desc text-gray-3 mb-2 lg:text-center">{props.description}</p>
          <p className="text-ss-title text-orange-2 lg:text-center">Tools</p>
          <div className="flex flex-row mt-2 lg:max-w-[90%] lg:mx-[5%] lg:justify-center">
            {props.tools?.map(tool => {
              return(
                <img className="mr-4 max-h-[40px]" src={"src/assets/" + tool} alt={tool}></img>
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