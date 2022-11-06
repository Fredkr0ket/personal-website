import React from "react";


export interface IProjects {
  title: string
  description: string
  img?: string | undefined
  imgAlt?: string
  tools?: string[]
}

const Projectitem = ({title, description, img, imgAlt, tools}: IProjects) => {
  return (
    <div className="flex flex-row max-w-[100%] mb-12">
      <div className="flex flex-col w-[68%] ml-[4%]">
        <h1 className="text-s-title text-orange-2">{title}</h1>
        <p className="text-desc text-gray-3 mb-2">{description}</p>
        <p className="text-ss-title text-orange-2">Tools</p>
        <div className="flex flex-row self-end max-h-[40px]">
          <img src="src/assets/Tailwind.svg" className="mr-2"></img>
          <img src="src/assets/react.svg" className="mr-2"></img>
          <img src="src/assets/vite.png" className="mr-2"></img>
        </div>
      </div>
        <img className="max-h-[250px]" src={img} alt={imgAlt}></img>
      
    </div>
  )
}

export default Projectitem