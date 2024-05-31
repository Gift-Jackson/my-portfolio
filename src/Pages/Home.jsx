import Button from "../Components/Global/Button"
import Hero from "../Components/Home/Hero"
import Profile from "../Components/Home/Profile"
const Home = () => {
  return (
    <>
      <Profile />
      <Hero />
      <Button name="About" path="/about"/>
    </>
  )
}

export default  Home