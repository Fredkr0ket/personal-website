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
      <div className="flex flex-row max-w-[100%] mb-12 sm:flex sm:flex-col sm:max-w-[100%] sm:mb-12 sm:mb-[10px]">
        <img className="max-h-[250px]" src={"src/assets/" + props.img} alt={props.imgAlt}></img>
        <div className="flex flex-col self-end max-w-[64%] ml-[4%] sm:flex sm:flex-col sm:self-center sm:max-w-[90%] sm:mx-[5%]">
          <h1 className="text-s-title text-orange-2 sm:text-center">{props.title}</h1>
          <p className="text-desc text-gray-3 mb-2 sm:text-center">{props.description}</p>
          <p className="text-ss-title text-orange-2 sm:text-center">Tools</p>
          <div className="flex flex-row mt-2 sm:max-w-[90%] sm:mx-[5%] sm:justify-center">
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
      <div className="flex flex-row max-w-[100%] mb-12 sm:flex sm:flex-col sm:max-w-[100%] sm:mb-12 sm:mb-[10px]">
        <div className="flex flex-col self-end max-w-[64%] ml-[4%] sm:flex sm:flex-col sm:self-center sm:max-w-[90%] sm:mx-[5%]">
          <h2 className="text-s-title text-orange-2 sm:text-center">{props.title}</h2>
          <p className="text-desc text-gray-3 mb-2 sm:text-center">{props.description}</p>
          <p className="text-ss-title text-orange-2 sm:text-center">Tools</p>
          <div className="flex flex-row mt-2 sm:max-w-[90%] sm:mx-[5%] sm:justify-center">
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