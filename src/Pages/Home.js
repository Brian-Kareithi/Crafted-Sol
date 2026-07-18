import BackgroundSlider from "../Components/Sliders/LandingPage/backgroundslider.component";
import Homecard01Componenet from "../Components/cards/homepagecard1/homecard01.componenet";
import Fetcher from "../Components/Sliders/PageCourosel/caurosel1fetch.component";
import Productslide from "../Components/Sliders/ProductDisplay/prouctslide.component";

const Home = () => {
  return (
    <>
      <BackgroundSlider />
      <Homecard01Componenet />
      <Fetcher />
      <Productslide />
    </>
  );
};

export default Home;
