const ContactWay = (props) => {
  return (
    <div className={props.class + " contact-way"}>
      <i className={props.logo}></i>
      <h3 className="way-name">{props.name}</h3>
      <span className="way-info">{props.info}</span>
    </div>
  );
};
export default ContactWay;
