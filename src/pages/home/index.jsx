"use-client";

import { useState, useEffect } from "react";
import MissionSection from "./missionSection";
import HeroSection from "./heroSection";
import LatestAnimeNewsSection from "./lastestAnimeSection";
import Footer from "../../components/footer/Footer";
import { LoadingComponentAnimation } from "../../components/UI/LoadingComponent";
import { FailedApiComponent } from "../../components/UI/FailedComponent";
import { OppoScroll, VerticalAccordion } from "./popularEventsSection";
import { useMediaQuery } from "react-responsive";

//Home Component

const Home = () => {
  const [isMounted, setIsMounted] = useState(false);
  const isMobile = useMediaQuery({ query: "(max-width: 640px)" });

  useEffect(() => {
    setIsMounted(true);
  }, []);

  // Conditionally render the component only if it's mounted
  if (!isMounted) {
    return <LoadingComponentAnimation />;
  }

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
