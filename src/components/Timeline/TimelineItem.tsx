import React from 'react';

type props = {
   year: string
   title: string
   duration: string
   details: string
}

function TimelineItem({ year, title, duration, details }: props ) {
   return (
      <ol className="flex flex-col md:flex-row relative border-l border-stone-200 dark:border-stone-700">
         <li className="mb-10 ml-4">
            <div className="absolute w-3 h-3 bg-stone-200 rounded-full mt-1.5 -left-1.5 border border-white dark:border-stone-900 dark:bg-stone-700" />
            <p className="flex flex-wrap gap-4 flex-row items-center justify-start text-xs md:text-sm">
               <span className="inline-block px-2 py-1 font-semibold text-white dark:text-stone-900 bg-stone-900 dark:bg-white rounded-md">
                  {year}
               </span>
               <h3 className="text-lg font-semibold text-stone-900 dark:text-white">
                  {title}
               </h3>
               <div className="my-1 text-sm font-normal leading-none text-stone-400 dark:text-stone-500">
                  {duration}
               </div>
            </p>
            <p className="my-2 text-base font-normal text-stone-500 dark:text-stone-400">
               {details}
            </p>
         </li>
      </ol>
   )
}

// root: css`
// display: flex;
// flex-direction: column;
// position: relative;
// border-left-style: solid;
// border-left-width: 1px;
// border-left-color: black;
// `,
// list: css`
// margin-bottom: 2.5rem;
// margin-left: 1rem;
// `,
// bulletpoint: css`
// position: absolute;
// width: 0.75rem;
// height: 0.75rem;
// border-radius: 9999px;
// margin-top: 0.375rem;
// margin-left: 4px;
// border-width: 1px;
// border-color: black;
// background-color: black
// `,

export default TimelineItem;