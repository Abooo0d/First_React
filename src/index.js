import ReactDOM from "react-dom/client";
import { BrowserRouter as Router,Routes,Route } from "react-router-dom";
import {Header,Footer,} from "./Sections/index";
import {HomePagePage,AboutUsPage,ContactUsPage} from "./Pages/index";
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <>
    <Router>
      <Header />
      <Routes>
        <Route path="/" element={<HomePagePage />} />
        <Route path="/about" element={<AboutUsPage />} />
        <Route path="/contact" element={<ContactUsPage />} />
      </Routes>
      <Footer />
    </Router>
  </>
);
