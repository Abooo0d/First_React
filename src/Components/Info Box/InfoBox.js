const InfoBox = (props) => {
  return (
    <div className="box">
      <div className="image">
        <i className={props.icon}></i>
      </div>
      <div className="text">
        <h4>{props.title}</h4>
        <p>
          Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
          officia deserunt
        </p>
      </div>
    </div>
  );
};
export default InfoBox;

// fas fa-newspaper
