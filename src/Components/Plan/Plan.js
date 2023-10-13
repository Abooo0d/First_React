const Plan = (props) => {
  return (
    <div className={props.class + " plan"}>
      <span className="name">{props.name}</span>
      <span className="price">{props.price}</span>
      {props.children}
      <button>Buy Now</button>
    </div>
  );
};
export default Plan;
