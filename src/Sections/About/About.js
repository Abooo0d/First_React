import InfoBox from "../../Components/Info Box/InfoBox";
const About = () => {
  return (
    <div className="about">
      <div className="container">
        <div className="about-image"></div>
        <div className="info">
          <div className="main-info">
            <h2>Voluptatem dignissimos provident quasi</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Duis
              aute irure dolor in reprehenderit
            </p>
          </div>
          <div className="box-con">
            <InfoBox icon="fas fa-newspaper" title="lorem ABood" />
            <InfoBox icon="fas fa-images" title="Ullamco laboris nisi" />
            <InfoBox icon="fas fa-shield-alt" title="Beatae veritatis" />
            <InfoBox icon="fas fa-cube" title="Beatae veritatis" />
          </div>
        </div>
      </div>
    </div>
  );
};
export default About;
