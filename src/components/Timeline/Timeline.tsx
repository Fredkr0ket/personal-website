import { css } from "@emotion/css";
import React from 'react';
import timeline from '../../data/timeline.json';
import TimelineItem from './TimelineItem';

function Timeline() {
   return (
      <div className="flex flex-col md:flex-row justify-center my-20">
         <div className="w-full md:w-7/12">
            <h1>Timeline</h1>
            {timeline.items.map(item => (
               <TimelineItem
                  year={item.year}
                  title={item.title}
                  duration={item.duration}
                  details={item.details}
               />
            ))}
         </div>
      </div>
   )
}

export default Timeline;

// root: css`
// max-width: 90%;
// width:90%;
// display: flex;
// flex-direction: row;
// justify-content: center;

// `,
// timeline: css`
// width: 100%;
// `