import "./App.css";
import PreNavbar from "./Components/PreNavbar";
import Navbar from "./Components/Navbar";
import { BrowserRouter as Router, Route } from "react-router-dom";
import Slider from "./Components/Slider";
import Data from "./Data/data.json";
import Offers from "./Components/Offers";
import Heading from "./Components/Heading";
import StarProducts from "./Components/StarProducts";
import HotAccessoriesMenu from "./Components/HotAccessoriesMenu";
import HotAccessories from "./Components/HotAccessories";
import ProductReviews from "./Components/ProductReviews";
import Video from "./Components/Video.js";
import Banner from "./Components/Banner.js";
import Footer from "./Components/Footer.js";
import NavOption from "./Components/NavOption.js";

function App() {
  return (
    <Router>
      <PreNavbar />
      <Navbar />
      <NavOption
        miPhones={Data.miPhones}
        redmiPhones={Data.redmiPhones}
        tv={Data.tv}
        laptop={Data.laptop}
        fitnessAndLifeStyle={Data.fitnessAndLifeStyle}
        home={Data.home}
        audio={Data.audio}
        accessories={Data.accessories}
      />
      <Slider start={Data.banner.start} />
      <Offers offer={Data.offer} />
      <Heading text="Star Products" />

      <StarProducts starProduct={Data.starProduct} />
      <Heading text="hot accessories" />
      <HotAccessoriesMenu />
      <Route exact path="/music">
        <HotAccessories
          music={Data.hotAccessories.music}
          musicCover={Data.hotAccessoriesCover.music}
        />
      </Route>
      <Route exact path="/smartDevice">
        <HotAccessories
          smartDevice={Data.hotAccessories.smartDevice}
          smartDeviceCover={Data.hotAccessoriesCover.smartDevice}
        />
      </Route>
      <Route exact path="/home">
        <HotAccessories
          home={Data.hotAccessories.home}
          homeCover={Data.hotAccessoriesCover.home}
        />
      </Route>
      <Route exact path="/lifestyle">
        <HotAccessories
          lifeStyle={Data.hotAccessories.lifeStyle}
          lifestyleCover={Data.hotAccessoriesCover.lifeStyle}
        />
      </Route>
      <Route exact path="/mobileAccessories">
        <HotAccessories
          mobileAccessories={Data.hotAccessories.mobileAccessories}
          mobileAccessoriesCover={Data.hotAccessoriesCover.mobileAccessories}
        />
      </Route>
      <Heading text="PRODUCT REVIEWS" />
      <ProductReviews productReviews={Data.productReviews} />

      <Heading text="videos" />
      <Video videos={Data.videos} />

      <Heading text="in the press" />
      <Banner banner={Data.banner} />

      <Footer Footer={Data.footer} />
    </Router>
  );
}

export default App;
