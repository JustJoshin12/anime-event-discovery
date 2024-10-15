import MissionSection from "./missionSection";
import HeroSection from "./heroSection";
import LatestAnimeNewsSection from "./lastestAnimeSection";
import Footer from "@/src/components/footer/Footer";
import { PopularEventsSection } from "./popularEventsSection";
import { useMediaQuery } from "react-responsive";
import HeroSectionTwo from "@/src/components/shared/heroSection";
import NavBar from "@/src/components/navBar/NavBar";
import withAuth from "@/src/hooks/withAuth";
import { Features } from "@/src/components/UI/DisappearingScrollFeature";
import { popularEventsData } from "@/src/utils/popularEventsData";

//Home Component

const Home = () => {
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });
  
  return (
    <div className="bg-cosmic-5 flex flex-col">
      <HeroSection />
      <main>
        <MissionSection />
        <PopularEventsSection/>
        <LatestAnimeNewsSection />
      </main>
      <Footer />
    </div>
  );
};

export default Home;
