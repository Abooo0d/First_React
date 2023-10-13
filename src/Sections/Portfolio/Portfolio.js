import React, { useRef } from "react";
import PortfolioItem from "../../Components/Portfolio-item/PortfolioItem";
import Container from "../../Components/Container/Container";
import img_1 from "../../images/portfolio/portfolio-1.jpg";
import img_2 from "../../images/portfolio/portfolio-2.jpg";
import img_3 from "../../images/portfolio/portfolio-3.jpg";
import img_4 from "../../images/portfolio/portfolio-4.jpg";
import img_5 from "../../images/portfolio/portfolio-5.jpg";
import img_6 from "../../images/portfolio/portfolio-6.jpg";
import img_7 from "../../images/portfolio/portfolio-7.jpg";
import img_8 from "../../images/portfolio/portfolio-8.jpg";
import img_9 from "../../images/portfolio/portfolio-9.jpg";

const Portfolio = () => {
  // Get The Categories Items
  let catsRef = useRef([]);
  catsRef.current = [...Array(4).keys()].map(
    (index) => (catsRef.current[index] = React.createRef())
  );
  let Cats = Array.from(catsRef.current);
  // Get The Portfolio Items
  let portfolioRef = useRef([]);
  portfolioRef.current = [...Array(9).keys()].map(
    (index) => (portfolioRef.current[index] = React.createRef())
  );
  let Portfolios = Array.from(portfolioRef.current);
  // Fn To Resets The Class
  function removeAcive() {
    Cats.forEach((cat) => cat.current.classList.remove("active"));
    Portfolios.forEach((port) => port.current.classList.remove("removed"));
  }
  // Fn To Set The Events To The Elements
  function setEventes() {
    Cats.forEach((cat) => {
      cat.current.addEventListener("click", (e) => clickEvent(e));
    });
  }
  // Fn The Click Event That Well Be Added To The Categories Latter
  function clickEvent (e) {
    removeAcive();
    e.target.classList.add("active");
    let categorie = e.target.textContent;
    if(categorie != "All"){
      Portfolios.forEach((port) => {
        if(port.current.dataset.cat == categorie && port.current.style.display == "block"){
          port.current.style.opacity = 1;
          port.current.style.display = "block";
        } else{
          port.current.style.opacity = 0;
          port.current.style.display = "none";
        }
      });
      Portfolios.forEach((port) => {
        if(port.current.dataset.cat == categorie) {
          if(port.current.style.display != "block"){
            port.current.style.display = "block";
            let opacityCounter = 0;
            let opacity = setInterval(() => {
              port.current.style.opacity = opacityCounter;
              opacityCounter += 0.3;
              if(opacityCounter >= 1){
                clearInterval(opacity);
              }
            }, 200);
          }
        }
      });
    }else if(categorie == "All"){
      Portfolios.forEach((port) => {
        if(port.current.style.display != "block"){
          port.current.style.display = "block";
          let opacityCounter = 0;
          let opacity = setInterval(() => {
            port.current.style.opacity = opacityCounter;
            opacityCounter += 0.3;
            if(opacityCounter >= 1){
              clearInterval(opacity);
            }
          }, 200);
        }
      });
    }
  }
  // Timer To Add The The Click Event To The Categories
  let clickInterval= setInterval(() => {
    setEventes();
    clearInterval(clickInterval);
  }, 500);

  var text =
    " Magnam dolores commodi suscipit. Necessitatibus eius consequatur exaliquid fuga eum quidem. Sit sint consectetur velit. Quisquam quosquisquam cupiditate. Et nemo qui impedit suscipit alias ea. Quiafugiat sit in iste officiis commodi quidem hic quas.";
  return (
    <Container class="portfolio" text={text} title="Portfolio">
      <div className="cats-con">
        <span className="cat active" ref={catsRef.current[0]}>
          All
        </span>
        <span className="cat" ref={catsRef.current[1]}>
          App
        </span>
        <span className="cat" ref={catsRef.current[2]}>
          Web
        </span>
        <span className="cat" ref={catsRef.current[3]}>
          Game
        </span>
        {/* <button onClick={bla}>bla</button> */}
      </div>
      <div className="portfolio-con">
        <PortfolioItem name="web2" cat="Web" img={img_2} refrunse={portfolioRef.current[1]}/>
        <PortfolioItem name="app1" cat="App" img={img_4} refrunse={portfolioRef.current[3]}/>
        <PortfolioItem name="design2" cat="Game" img={img_8} refrunse={portfolioRef.current[7]}/>
        <PortfolioItem name="web1" cat="Web" img={img_1} refrunse={portfolioRef.current[0]} />
        <PortfolioItem name="app2" cat="App" img={img_5} refrunse={portfolioRef.current[4]}/>
        <PortfolioItem name="design1" cat="Game" img={img_7} refrunse={portfolioRef.current[6]}/>
        <PortfolioItem name="web3" cat="Web" img={img_3} refrunse={portfolioRef.current[2]}/>
        <PortfolioItem name="app3" cat="App" img={img_6} refrunse={portfolioRef.current[5]}/>
        <PortfolioItem name="design3" cat="Game" img={img_9} refrunse={portfolioRef.current[8]}/>
      </div>
    </Container>
  );
};
export default Portfolio;
