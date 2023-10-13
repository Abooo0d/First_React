const Service = (props) => {
  return (
    <div className="service">
      <span className="icon">
        <i className={props.icon}></i>
      </span>
      <h4>{props.title}</h4>
      <p>{props.text}</p>
    </div>
  );
};
export default Service;
