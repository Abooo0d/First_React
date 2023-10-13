import React, { useRef } from "react";
const ImageSlider = () => {
  let counter = 0;
  let backgroundInterval; // Create Interval For [Next,Back] Function;
  let imageSliderInterval = setInterval(() => Next(), 10000); // Creat The Auto Chnge Slider Functionality
  let contentRef = useRef(); // Get The Content Ref
  let imageRef = useRef([]); // Get The Images Refs
  // Create Ref For Each Of The ImageRef Elements
  imageRef.current = [0, 0, 0].map(
    (index) => (imageRef.current[index] = React.createRef())
  );
  let bulletsRef = useRef([]); // Get The Bullets Refs
  // Creat Ref For Each Of The bulletsRef Elements
  bulletsRef.current = [0, 0, 0].map(
    (index) => (bulletsRef.current[index] = React.createRef())
  );
  var Images = Array.from(imageRef.current); // Create An Array To Handel The Images
  var Bullets = Array.from(bulletsRef.current); // Create An Array To Handel The Bullets
  //Creat An Interval To Set The 'show' Class To The Content Element After Loading
  setInterval(() => {
    contentRef.current.classList.add("show");
    clearInterval();
  }, 2000);
  // Fn To Reset The Class On Elements And Reste The Intervals
  function removeActive() {
    Images.forEach((image) => image.current.classList.remove("show"));
    Bullets.forEach((bullet) => bullet.current.classList.remove("active"));
    contentRef.current.classList.remove("show");
    clearInterval(backgroundInterval);
    clearInterval(imageSliderInterval);
  }
  //Fn To Move To The Next Slide
  function Next() {
    if (counter < Images.length - 1) counter++;
    else if (counter == Images.length - 1) counter = 0;
    removeActive();
    Images[counter].current.classList.add("show");
    Bullets[counter].current.classList.add("active");
    backgroundInterval = setInterval(() => {
      contentRef.current.classList.add("show");
      clearInterval();
    }, 1000);
    imageSliderInterval = setInterval(() => {
      Next();
    }, 10000);
  }
  // Fn To Move To The Previous Slid
  function Back() {
    if (counter == 0) counter = 2;
    else if (counter > 0) counter--;
    removeActive();
    Images[counter].current.classList.add("show");
    Bullets[counter].current.classList.add("active");
    backgroundInterval = setInterval(() => {
      contentRef.current.classList.add("show");
      clearInterval();
    }, 1000);
    imageSliderInterval = setInterval(() => {
      Next();
    }, 10000);
  }
  return (
    <div className="main-slider">
      <div className="slider-container">
        <img
          src="img/slide/slide-1.jpg"
          className="image show"
          ref={imageRef.current[0]}
        />
        <img
          src="img/slide/slide-3.jpg"
          className="image"
          ref={imageRef.current[1]}
        />
        <img
          src="img/slide/slide-2.jpg"
          className="image"
          ref={imageRef.current[2]}
        />
      </div>
      <div className="landing-page">
        <div className="overlay">
          <div className="content" ref={contentRef}>
            <h1>Grow Your Business</h1>
            <p>
              Ut velit est quam dolor ad a aliquid qui aliquid. Sequi ea ut et
              est quaerat sequi nihil ut aliquam. Occaecati alias dolorem
              mollitia ut. Similique ea voluptatem. Esse doloremque accusamus
              repellendus deleniti vel. Minus et tempore modi architecto.
            </p>
            <button>Get Started</button>
          </div>
        </div>
      </div>
      <div className="slider-control">
        <span className="prev" onClick={Back}>
          <i className="fas fa-angle-left"></i>
        </span>
        <span className="next" onClick={Next}>
          <i className="fas fa-angle-right"></i>
        </span>
        <span className="indecator" id="indecator">
          <ul>
            <li className="bullet active" ref={bulletsRef.current[0]}></li>
            <li className="bullet" ref={bulletsRef.current[1]}></li>
            <li className="bullet" ref={bulletsRef.current[2]}></li>
          </ul>
        </span>
      </div>
    </div>
  );
};
export default ImageSlider;
