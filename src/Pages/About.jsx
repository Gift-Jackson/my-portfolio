import Wrapper from "../Components/About/Wrapper";
import ForwardButton from "../Components/Global/ForwardButton";
import Title from "../Components/Global/Title";

const About = () => {
  document.title = "About Me"
  return (
    <>
      <Title
        icon="account_circle"
        title="About Me"
        subtitle="All you need to know about me..."
      />
      <Wrapper />
      <ForwardButton name="Projects" path="/projects" />
    </>
  );
};

export default About;
