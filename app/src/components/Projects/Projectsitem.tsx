import React from "react";
import Projects from "./Projects";

export interface IProjects{
  id: number
  title: string
  description: string
  img: string
  imgAlt: string
  tools: string[]
  url?: string
}


const Projectitem = (props: IProjects) => {
  const {id, title, description, img, imgAlt, tools, url} = props
  if (!url) {
    if (id % 2 == 0) {
      return (
        <a className="max:justify-between max:ease-linear max:duration-300 max:bg-gray-4 max:hover:bg-orange-1-t max:pb-[30px] max:pt-[20px] max:rounded-[7px] flex flex-row max-w-[100%] mb-12 lg:flex lg:flex-col lg:max-w-[100%] lg:mb-12 lg:mb-[10px]">
          <img className="h-[200px] self-center  justify-self-center max:ml-[100px] xl:ml-[50px] xxl:ml-[70px] lg:ml-[0px]" src={"src/assets/" + img} alt={imgAlt}></img>
          <div className="flex flex-col self-end max-w-[64%] mr-[4%] lg:flex lg:flex-col lg:self-center lg:max-w-[90%] lg:mx-[5%]">
            <h1 className="text-s-title text-orange-2 lg:text-center">{title}</h1>
            <p className="text-desc text-gray-3 mb-2 lg:text-center">{description}</p>
            <p className="text-ss-title text-orange-2 lg:text-center">Tools</p>
            <div className="flex flex-row flex-wrap mt-2 lg:max-w-[90%] lg:mx-[5%] lg:justify-center">
              {tools?.map(tool => {
                return(
                  <img className="mr-4 max-h-[40px] mt-[10px]" src={"src/assets/" + tool} alt={tool} />
                )
              })}
            </div>
          </div>
        </a>
      )
    } else {
      return (
        <a className="max:justify-between max:ease-linear max:duration-300 max:bg-gray-4 max:hover:bg-orange-1-t max:pb-[30px] max:pt-[20px] max:rounded-[7px] flex flex-row max-w-[100%] mb-12 lg:flex lg:flex-col lg:max-w-[100%] lg:mb-12 lg:mb-[10px]">
          <div className="flex flex-col self-end max-w-[64%] ml-[4%] lg:flex lg:flex-col lg:self-center lg:max-w-[90%] lg:mx-[5%]">
            <h2 className="text-s-title text-orange-2 lg:text-center">{title}</h2>
            <p className="text-desc text-gray-3 mb-2 lg:text-center">{description}</p>
            <p className="text-ss-title text-orange-2 lg:text-center">Tools</p>
            <div className="flex flex-row flex-wrap mt-2 lg:max-w-[90%] lg:mx-[5%] lg:justify-center">
              {tools?.map(tool => {
                return(
                  <img className="mr-4 max-h-[40px] mt-[10px]" src={"src/assets/" + tool} alt={tool}></img>
                )
              })}
            </div>
          </div>
          <img className="h-[200px] self-center max:mr-[100px] xl:mr-[50px] xxl:mr-[70px] lg:mr-[0px] " src={"src/assets/" + img} alt={imgAlt}></img>
        </a>
      )
    }
  } else {
    if (id % 2 == 0) {
      return (
        <a href={url} className="max:justify-between max:ease-linear max:duration-300 max:bg-gray-4 max:hover:bg-orange-1-t max:pb-[30px] max:pt-[20px] max:rounded-[7px] flex flex-row max-w-[100%] mb-12 lg:flex lg:flex-col lg:max-w-[100%] lg:mb-12 lg:mb-[10px]">
          <img className="h-[200px] self-center align-center justify-self-center max:ml-[100px] xl:ml-[50px] xxl:ml-[70px] lg:ml-[0px]" src={"src/assets/" + img} alt={imgAlt}></img>
          <div className="flex flex-col self-end max-w-[64%] mr-[4%] lg:flex lg:flex-col lg:self-center lg:max-w-[90%] lg:mx-[5%]">
            <h1 className="text-s-title text-orange-2 lg:text-center">{title}</h1>
            <p className="text-desc text-gray-3 mb-2 lg:text-center">{description}</p>
            <p className="text-ss-title text-orange-2 lg:text-center">Tools</p>
            <div className="flex flex-row flex-wrap mt-2 lg:max-w-[90%] lg:mx-[5%] lg:justify-center">
              {tools?.map(tool => {
                return(
                  <img className="mr-4 max-h-[40px] mt-[10px] ml-[100px]" src={"src/assets/" + tool} alt={tool} />
                )
              })}
            </div>
          </div>
        </a>
      )
    } else {
      return (
        <a href={url} className="max:justify-between max:ease-linear max:duration-300 max:bg-gray-4 max:hover:bg-orange-1-t max:pb-[30px] max:pt-[20px] max:rounded-[7px] flex flex-row max-w-[100%] mb-12 lg:flex lg:flex-col lg:max-w-[100%] lg:mb-12 lg:mb-[10px]">
          <div className="flex flex-col self-end max-w-[64%] ml-[4%] lg:flex lg:flex-col lg:self-center lg:max-w-[90%] lg:mx-[5%]">
            <h2 className="text-s-title text-orange-2 lg:text-center">{title}</h2>
            <p className="text-desc text-gray-3 mb-2 lg:text-center">{description}</p>
            <p className="text-ss-title text-orange-2 lg:text-center">Tools</p>
            <div className="flex flex-row flex-wrap mt-2 lg:max-w-[90%] lg:mx-[5%] lg:justify-center">
              {tools?.map(tool => {
                return(
                  <img className="mr-4 max-h-[40px] mt-[10px]" src={"src/assets/" + tool} alt={tool}></img>
                )
              })}
            </div>
          </div>
          <img className="h-[200px] self-center max:mr-[100px] xl:mr-[50px] xxl:mr-[70px] lg:mr-[0px]" src={"src/assets/" + img} alt={imgAlt}></img>
        </a>
      )
    }
  }
}

export default Projectitem