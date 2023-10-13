const FAQ = (props) => {
  return (
    <div className="faq" ref = {props.qref}>
      <h3 className="q">
        <i className="fas fa-circle-info mark"></i>
        {props.q}
        <i className="fas fa-angle-up arrow"></i>
      </h3>
      <p className="a" ref={props.aref}>{props.a}</p>
    </div>
  );
};
export default FAQ;
