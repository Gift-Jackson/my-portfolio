import Wrapper from "../Components/About/Wrapper"
import Button from "../Components/Global/Button"
import Title from "../Components/Global/Title"


const About = () => {
  return (
      <>
      <Title icon="account_circle" title="About Me" subtitle="All you need to know about me..." />
      <Wrapper />
      <Button name="Projects" path="/projects"/>
      </>
  )
}

export default About