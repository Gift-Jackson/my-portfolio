import ForwardButton from "../Components/Global/ForwardButton"
import Hero from "../Components/Home/Hero"
import Profile from "../Components/Home/Profile"
const Home = () => {
  document.title = "Welcome"
  return (
    <>
      <Profile />
      <Hero />
      <ForwardButton name="About Me" path="/about"/>
    </>
  )
}

export default  Home