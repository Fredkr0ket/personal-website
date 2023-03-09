import React from 'react'
import Bio from './components/Bio'
import Header from './components/Header'
import ProjectDisplay from './components/Project/ProjectDisplay'

function App() {

  return (
    <div style={{width: "60%", marginLeft: "20%"}}>
      <Header />
      <Bio />
      <ProjectDisplay />
    </div>
  )
}

export default App
