import Service from "../../Components/Service/Service";
import Container from "../../Components/Container/Container";
var text =
  "Magnam dolores commodi suscipit. Necessitatibus eius consequatur exaliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quosquisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quiafugiat sit in iste officiis commodi quidem hic quas.";
const Services = () => {
  return (
    <Container class="services" title="Services" text={text}>
      <div className="services-con">
        <Service
          icon="fas fa-calendar-check"
          title="Eiusmod Tempor"
          text="Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi"
        />
        <Service
          icon="fas fa-sun"
          title="Nemo Enim"
          text="At vero eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque"
        />
        <Service
          icon="fas fa-wifi"
          title="Sed ut perspiciatis"
          text="Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur"
        />
      </div>
    </Container>
  );
};
export default Services;
