import { css } from '@emotion/css'
import React from 'react'
import Bio from './components/Bio'
import Header from './components/Header'
import ProjectDisplay from './components/Project/ProjectDisplay'

function App() {

  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.fontPage}>
        <Bio />
      </div>
      <ProjectDisplay />

    </div>
  )
}

export default App

const styles = {
  root: css`
    width: 60%;
    margin-left: 20%;
  `,
  fontPage: css`
    display: flex;
    flex-direction: column;
    width: 100%;
    height: calc(100vh - 100px);
    justify-content: center;
  `
}
