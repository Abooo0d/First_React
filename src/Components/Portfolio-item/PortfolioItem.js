const PortfolioItem = (props) => {
  return (
    <div className="portfolio-item" data-cat={props.cat} ref={props.refrunse}>
      <img style={{ backgroundImage: `url(${props.img})` }} />
      <div className="itme-overlay">
        <h1>{props.name}</h1>
        <span className="cat">{props.cat}</span>
        <span className="logo-con">
          <i className="fas fa-plus"></i>
          <i className="fas fa-coins"></i>
        </span>
      </div>
    </div>
  );
};
export default PortfolioItem;
