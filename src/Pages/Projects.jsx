import ForwardButton from "../Components/Global/ForwardButton"
import Title from "../Components/Global/Title"
import ProjectWrapper from "../Components/Projects/ProjectWrapper"

const Projects = () => {
    document.title = "My Projects"
  return (
      <>
          <Title title="Projects" icon="business_center" subtitle="Some cool projects I've worked on..." />
          <ProjectWrapper/>
          <ForwardButton name="Blog" path="/blog"/>
      </>
  )
}

export default Projects