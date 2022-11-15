import React from "react";
import Timelineitem from './Timelineitem'
import timelineitems from '../../data/timeline.json'

const Timeline = () => {
  const timeLineItems = timelineitems.timelineitems.map(item => {
    return(
      <Timelineitem 
      date={item.date}
      title={item.title}
      description={item.description}
      knowledge={item.knowledge}
      />
    )
  })
  return (
    <div className="flex flex-col place-items-center">
      <h2 className="text-orange-1 text-title mb-[35px] ">
      Tijdlijn
      </h2>
      <ol className="relative border-l-2 w-[80%] self-center border-w-2 border-orange-1 ">
        {timeLineItems}
      </ol>
    </div>
  )
}

export default Timeline