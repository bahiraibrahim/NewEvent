import TextCreative from "../../design-system/componant/Creative/TextCreative";
import TextOurPrograms from "../../design-system/componant/Our Programs/TextOurPrograms";
import TextSponsers from "../../design-system/componant/Our Sponsers/TextSponsers";
import Text from "../../design-system/componant/OverView/Text";
import AboutUs from "./Componans/About Us/AboutUs";
import Contact from "./Componans/Contact/Contact";
import Footer from "./Componans/Footer/Footer";
import Header from "./Componans/Header/Header";
import Register from "./Componans/Login/Register";
import Navbar from "./Componans/NavBar/Navbar";
import Questions from "./Componans/Questions/Questions";
import Venue from "./Componans/Venue/Venue";
import WatchVideo from "./Componans/Watch Video/WatchVideo";

export default function Home() {
  return (
    <div className="home">
<Navbar/>
      <Header />
      <AboutUs />
      <Text />
      <WatchVideo />
      <TextCreative />
      <TextOurPrograms />
      <Register />
      <Questions />
      <Venue />
      <TextSponsers />
      <Contact />
      <Footer />
    </div>
  );
}
