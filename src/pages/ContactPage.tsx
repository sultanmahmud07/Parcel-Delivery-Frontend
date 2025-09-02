
import CommonBanner from "./CommonBanner"
import ContactForm from "@/components/modules/Contact/ContactForm"


const ContactPage = () => {
  return (
    <div>
       <CommonBanner title={"Contact Us"}></CommonBanner>
        <ContactForm></ContactForm>
    </div>
  )
}

export default ContactPage