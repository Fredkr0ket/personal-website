import React from "react";

export interface ITimelineiten {
  date: string
  title: string
  description: string
  knowledge: string[]
}

const Timelineitem = ({...props}: ITimelineiten) => {
  return (
    <li className="mb-10 ml-4 ">
      <div className="absolute w-4 h-4 bg-orange-1 rounded-full mt-1.5 -left-2 border-orange-1"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-3 ">{props.date}</time>
      <h3 className="text-lg text-ss-title text-orange-1">{props.title}</h3>
      <p className="mb-2 text-desc text-gray-3">{props.description}</p>
      <h3 className="text-lg text-ss-title text-orange-1">Opgedane kennis</h3>
      <div className="flex flex-row mt-2">
        {props.knowledge.map((i: string) => {
          return(
            <img className="mr-4 max-h-[40px]" src={"/src/assets/" + i} alt={i} /> 
          )
        })}
      </div>
    </li>
  )
}

export default Timelineitem