const Feature = (props) => {
  return (
    <div className="feature">
      <span className="num">{props.num}</span>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
};
export default Feature;
