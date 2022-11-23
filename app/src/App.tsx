import React from "react"
import Bio from "./components/Bio/Bio"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Timeline from "./components/Timeline/Timeline"



function App() {
  const [darkToggle, setDarkToggle] = React.useState(true)
  return (
    <>
      <div className={`max-w-[62.5%] w-[62.5%] mx-[18.75%] ml-[18.75%] font-mono font-bold flex flex-col justify-center lg:max-w-[100%] lg:w-[100%] lg:mx-[0%] lg:ml-[0%] lg:font-mono lg:font-bold lg:flex lg:flex-col lg:justify-center xl:max-w-[80%] xl:w-[80%] xl:mx-[10%]`}>
        <Navbar />
        <Bio />
        <Projects />
        <Timeline />
      </div>
    </>
  )
}

export default App
