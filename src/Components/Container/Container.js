const Container = (props) => {
  return (
    <div className={props.class + " section"}>
      <div className="container main">
        <h1 className="setion-title">{props.title}</h1>
        <p className="section-text">{props.text}</p>
        {props.children}
      </div>
    </div>
  );
};
export default Container;
