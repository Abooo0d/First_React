import TeamMember from "../../Components/TeamMember/TeamMember";
import Container from "../../Components/Container/Container";
import team_1 from "../../images/team/team-1.jpg";
import team_2 from "../../images/team/team-2.jpg";
import team_3 from "../../images/team/team-3.jpg";
import team_4 from "../../images/team/team-4.jpg";
const Team = () => {
  var text =
    "  Magnam dolores commodi suscipit. Necessitatibus eius consequatur exaliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quosquisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quiafugiat sit in iste officiis commodi quidem hic quas.";
  return (
    <Container class="team colored" title="team" text={text}>
      <div className="team-con">
        <TeamMember
          img={team_1}
          title="Walter White"
          text="Chief Executive Officer"
        />
        <TeamMember img={team_2} title="Sarah Jhonson" text="Product Manager" />
        <TeamMember img={team_3} title="William Anderson" text="CTO" />
        <TeamMember img={team_4} title="Amanda Jepson" text="Accountant" />
      </div>
    </Container>
  );
};
export default Team;
