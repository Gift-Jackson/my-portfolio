import ForwardButton from "../Components/Global/ForwardButton"
import Title from "../Components/Global/Title"
import ProjectWrapper from "../Components/Projects/ProjectWrapper"

const Projects = () => {
  return (
      <>
          <Title title="Projects" subtitle="Some cool projects I've worked on..." />
          <ProjectWrapper/>
          <ForwardButton name="Blog" path="/blog"/>
      </>
  )
}

export default Projects