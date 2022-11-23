import React from "react"
import Bio from "./components/Bio/Bio"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Timeline from "./components/Timeline/Timeline"



function App() {
  const [darkToggle, setDarkToggle] = React.useState(true)
  return (
    <>
      <div className={`max-w-[62.5%] w-[62.5%] mx-[18.75%] ml-[18.75%] font-mono font-bold flex flex-col justify-center sm:max-w-[100%] sm:w-[100%] sm:mx-[0%] sm:ml-[0%] sm:font-mono sm:font-bold sm:flex sm:flex-col sm:justify-center`}>
        <Navbar />
        <Bio />
        <Projects />
        <Timeline />
      </div>
    </>
  )
}

export default App
