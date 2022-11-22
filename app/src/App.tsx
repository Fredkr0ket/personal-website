import React from "react"
import Bio from "./components/Bio/Bio"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"
import Timeline from "./components/Timeline/Timeline"



function App() {
  const [darkToggle, setDarkToggle] = React.useState(true)
  return (
    <>
      <div className={`max-w-[62.5%] mx-[18.75%] font-mono font-bold flex flex-col justify-items-center ${darkToggle && "dark"} sm:max-w-[100%] w-[100%] mx-[0%] font-mono font-bold flex flex-col justify-items-center ${darkToggle && "dark"}`}>
        <Navbar />
        <Bio />
        <Projects />
        <Timeline />
      </div>
    </>
  )
}

export default App
