import MissionSection from "./missionSection";
import HeroSection from "./heroSection";
import LatestAnimeNewsSection from "./lastestAnimeSection";
import Footer from "../../components/footer/Footer";
import { OppoScroll, VerticalAccordion } from "./popularEventsSection";
import { useMediaQuery } from "react-responsive";

//Home Component

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  return (
    <div className="bg-cosmic-5 flex flex-col">
      <HeroSection />
      <main>
        <MissionSection />
        {isMobile ? <VerticalAccordion /> : <OppoScroll />}
        <LatestAnimeNewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
