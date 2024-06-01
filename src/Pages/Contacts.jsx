import ContactWrapper from "../Components/Contacts/ContactWrapper"
import Title from "../Components/Global/Title"

const Contacts = () => {
  document.title = "Contact Me"
  return (
      <>
          <Title title="Let's connect" icon="perm_phone_msg" subtitle="I'm available for immediate employment or quick task." />
      <ContactWrapper />
      </>
  )
}

export default Contacts