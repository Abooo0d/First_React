const Footer = () => {
  return (
    <div className="footer dark">
      <div className="container">
        <div className="footer-con">
          <div className="social">
            <h3>Groovin</h3>
            <div className="info">
              <span>A108 Adam Street</span>
              <span>NY 535022, USA</span>
              <span>Phone: +1 5589 55488 55</span>
              <span>Email: info@example.com</span>
            </div>
            <div className="social-logo">
              <i class="fab fa-facebook"></i>
              <i class="fab fa-twitter"></i>
              <i class="fab fa-linkedin"></i>
              <i class="fab fa-instagram"></i>
              <i class="fab fa-skype"></i>
            </div>
          </div>
          <div className="linkes">
            <h3>Useful Links</h3>
            <div className="linkes-con">
              <span>
                <i class="fas fa-angle-right"></i>
                Home
              </span>
              <span>
                <i class="fas fa-angle-right"></i>
                About
              </span>
              <span>
                <i class="fas fa-angle-right"></i>
                Services
              </span>
              <span>
                <i class="fas fa-angle-right"></i>
                Portfolio
              </span>
              <span>
                <i class="fas fa-angle-right"></i>
                Contact US
              </span>
            </div>
          </div>
          <div className="linkes">
            <h3>Our Services</h3>
            <div className="linkes-con">
              <span>
                <i class="fas fa-angle-right"></i>
                Web Devolopment
              </span>
              <span>
                <i class="fas fa-angle-right"></i>
                Wep Design
              </span>
              <span>
                <i class="fas fa-angle-right"></i>
                Cloude Storage
              </span>
              <span>
                <i class="fas fa-angle-right"></i>
                Ui Ux Design
              </span>
              <span>
                <i class="fas fa-angle-right"></i>
                Any Pull Shit
              </span>
            </div>
          </div>
          <div className="comment">
            <h3>Add Comment</h3>
            <p>
              Tamen quem nulla quae legam multos aute sint culpa legam noster
              magna
            </p>
            <div className="text">
              <input type="text" />
              <button>Send</button>
            </div>
          </div>
        </div>
      </div>
      <div className="bottom">
        <div className="container">
          <span className="copy-right">
            © Copyright Groovin. All Rights Reserved
          </span>
          <span className="design">
            Designed by
            <span className="owner"> BootstrapMade</span>
          </span>
        </div>
      </div>
    </div>
  );
};
export default Footer;
