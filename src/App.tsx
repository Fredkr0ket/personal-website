import { css } from '@emotion/css'
import Bio from './components/Bio'
import ScrollButton from './components/Buttons/ScrollButton'
import Header from './components/Header'
import ProjectDisplay from './components/Project/ProjectDisplay'

function App() {

  return (
    <div className={styles.root}>
      <Header />
      <div className={styles.fontPage}>
        <Bio />
      </div>
      <ScrollButton target="projects" display="Projecten"/>
      <ProjectDisplay />
    </div>
  )
}

export default App

const styles = {
  root: css`
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 60%;
    margin-left: 20%;
  `,
  fontPage: css`
    display: flex;
    flex-direction: column;
    max-width: 100%;
    height: calc(100vh - 190px);
    justify-content: center;
  `
}
