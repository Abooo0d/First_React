import Feature from "../../Components/Feature/Feature";
import Container from "../../Components/Container/Container";
const WhyUs = () => {
  var text =
    "Magnam dolores commodi suscipit. Necessitatibus eius consequatur exaliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quosquisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quiafugiat sit in iste officiis commodi quidem hic quas.";
  return (
    <Container class="whyus colored" title="Why Us" text={text}>
      <div className="features-con">
        <Feature
          num="01"
          title="Lorem Ipsum"
          text="Ulamco laboris nisi ut aliquip ex ea commodo consequat. Et consectetur ducimus vero placeat"
        />
        <Feature
          num="02"
          title="Repellat Nihil"
          text="Dolorem est fugiat occaecati voluptate velit esse. Dicta veritatis dolor quod et vel dire leno para dest"
        />
        <Feature
          num="03"
          title="Ad ad velit qui"
          text="Molestiae officiis omnis illo asperiores. Aut doloribus vitae sunt debitis quo vel nam quis"
        />
      </div>
    </Container>
  );
};
export default WhyUs;
