const TeamMember = (props) => {
  return (
    <div className="team-member">
      <img style={{ backgroundImage: `url(${props.img})` }} />
      <div className="team-overlay">
        <h2>{props.title}</h2>
        <p>{props.text}</p>
        <div className="logo-con">
          <i className="fab fa-facebook"></i>
          <i className="fab fa-linkedin"></i>
          <i className="fab fa-instagram"></i>
          <i className="fab fa-twitter"></i>
        </div>
      </div>
    </div>
  );
};
export default TeamMember;
