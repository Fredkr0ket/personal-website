import React from "./assets/react.svg"
import Bio from "./components/Bio/Bio"
import Navbar from "./components/Navbar/Navbar"
import Projects from "./components/Projects/Projects"

function App() {
  return (
    <div className="max-w-[62.5%] mx-[18.75%] h-screen font-mono font-bold  ">
      <Navbar />
      <Bio />
      <Projects />
    </div>
  )
}

export default App
