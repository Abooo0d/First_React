import Plan from "../../Components/Plan/Plan";
import Container from "../../Components/Container/Container";
const Pricing = () => {
  var text =
    "Magnam dolores commodi suscipit. Necessitatibus eius consequatur ex aliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quos quisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quia fugiat sit in iste officiis commodi quidem hic quas.";
  return (
    <Container class="pricing" title="Pricing" text={text}>
      <div class="price-con">
        <Plan name="free" price="0">
          <span class="plan-f">Aida dere</span>
          <span class="plan-f">Nec feugiat nisl</span>
          <span class="plan-f deleted">Nulla at volutpat dola</span>
          <span class="plan-f deleted">Pharetra massa</span>
          <span class="plan-f deleted">Massa ultricies mi</span>
        </Plan>
        <Plan name="Business" price="19" class="most">
          <span class="plan-f">Aida dere</span>
          <span class="plan-f">Nec feugiat nisl</span>
          <span class="plan-f">Nulla at volutpat dola</span>
          <span class="plan-f">Pharetra massa</span>
          <span class="plan-f deleted">Massa ultricies mi</span>
        </Plan>
        <Plan name="Devoloper" price="29">
          <span class="plan-f">Aida dere</span>
          <span class="plan-f">Nec feugiat nisl</span>
          <span class="plan-f">Nulla at volutpat dola</span>
          <span class="plan-f">Pharetra massa</span>
          <span class="plan-f">Massa ultricies mi</span>
        </Plan>
      </div>
    </Container>
  );
};
export default Pricing;
