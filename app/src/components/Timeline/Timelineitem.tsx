import React from "react";

export interface ITimelineiten {
  date: string
  title: string
  description: string
}

const Timelineitem = ({...props}: ITimelineiten) => {
  return (
    <li className="mb-10 ml-4 ">
      <div className="absolute w-4 h-4 bg-orange-1 rounded-full mt-1.5 -left-2 border-orange-1"></div>
      <time className="mb-1 text-sm font-normal leading-none text-gray-3 ">{props.date}</time>
      <h3 className="text-lg text-ss-title text-orange-1">{props.title}</h3>
      <p className="mb-4 text-desc text-gray-3">{props.description}</p>
    </li>
  )
}

export default Timelineitem