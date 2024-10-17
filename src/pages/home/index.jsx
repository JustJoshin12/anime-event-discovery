import MissionSection from "./missionSection";
import HeroSection from "./heroSection";
import LatestAnimeNewsSection from "./lastestAnimeSection";
import Footer from "@/components/Footer/Footer";
import  PopularEventsSection from "./popularEventsSection";
import { useMediaQuery } from "react-responsive";
import HeroSectionTwo from "@/components/shared/heroSection";
import withAuth from "@/hooks/withAuth";
import { Features } from "@/components/UI/DisappearingScrollFeature";
import { popularEventsData } from "@/utils/popularEventsData";

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
