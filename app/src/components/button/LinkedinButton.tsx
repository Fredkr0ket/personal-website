interface Props {
  url: string
}


const LinkedinButton = (props: Props) => {
  return (
    <a href={props.url} className="hover:bg-orange-1-t ease-in-out duration-300 p-2 rounded-full">
    <svg xmlns="http://www.w3.org/2000/svg" width="35" height="35" viewBox="0 0 24 24" fill="#ea5a00">
      <g>
        <path fill="none" d="M0 0h24v24H0z"/>
        <path d="M4 3h16a1 1 0 0 1 1 1v16a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1zm1 2v14h14V5H5zm2.5 4a1.5 1.5 0 1 1 0-3 1.5 1.5 0 0 1 0 3zm-1 1h2v7.5h-2V10zm5.5.43c.584-.565 1.266-.93 2-.93 2.071 0 3.5 1.679 3.5 3.75v4.25h-2v-4.25a1.75 1.75 0 0 0-3.5 0v4.25h-2V10h2v.43z"/>
      </g>
    </svg>
    </a>
  )
}

export default LinkedinButton