import { SectionHeader } from "../component/SectionHeader";
import ContactForm from "../component/ContactForm";

const Contact = () => {
  return (
    <div>
      <SectionHeader
        title="Get In Touch With Us"
        subTitle="For More Information About Our Product & Services. Please Feel Free To Drop Us An Email. Our Staff Always Be There To Help You Out. Do Not Hesitate!"
      />
      <div className="flex flex-row ">
        <div className="w-1/2">Address</div>
        <div className="w-1/2">
          <ContactForm />
        </div>
      </div>
    </div>
  );
};

export default Contact ;

