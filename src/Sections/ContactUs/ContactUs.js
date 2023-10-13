import Container from "../../Components/Container/Container";
import ContactWay from "../../Components/ContactWay/ContactWay";
const ContactUs = () => {
  var text =
    "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";
  return (
    <Container class="contact-us" title="Contact Us" text={text}>
      <div className="contact-con">
        <ContactWay
          logo="fas fa-location-arrow"
          name="Address"
          info="A108 Adam Street, NY 535022, USA"
        />
        <ContactWay
          class="middel"
          logo="fas fa-mobile"
          name="Phone"
          info="+1 5589 55488 55"
        />
        <ContactWay
          logo="fas fa-envelope"
          name="Email"
          info="info@example.com"
        />
      </div>
      <div className="contact-info">
        <div className="name-email">
          <input type="text" placeholder="Name" />
          <input type="text" placeholder="Email" />
        </div>
        <input type="text" placeholder="Subject" />
        <textarea placeholder="Message"></textarea>
      </div>
      <button className="send">Send Message</button>
    </Container>
  );
};
export default ContactUs;
