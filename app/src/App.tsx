import React from "./assets/react.svg"
import Bio from "./components/Bio/Bio"
import Navbar from "./components/Navbar/Navbar"

function App() {
  return (
    <div className="max-w-[62.5%] mx-[18.75%]  h-screen ">
      <Navbar />
      <Bio />
    </div>
  )
}

export default App
