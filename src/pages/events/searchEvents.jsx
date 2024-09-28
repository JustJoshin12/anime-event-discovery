import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import VerticalTabs from "@/src/components/shared/sidebarNav";
import { useMediaQuery } from "react-responsive";
import HorizontalBar from "@/src/components/shared/horizontalBar";
import BeamInput from "@/src/components/UI/BeamInput";
import { VanishText } from "@/src/components/UI/VanishingText";
import SearchEventCard from "@/src/components/UI/SearchEventCard";
import {
  popularEventsData,
  popularEventsCardData,
} from "@/src/utils/popularEventsData";

const Header = () => {
  const backgroundImage = "/images/heroImage6.jpg";
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <NavBar />
        <div className="pl-12 lg:text-9xl text-galactic-secondary lg:py-28 font-[Poppins-bold] bg-black/40">
          Events
        </div>
      </div>
    </div>
  );
};

const SearchEventSection = () => {
  const image = "/images/animeCity.jpg";
  const phraseWords = [
    "Conventions",
    "Restaurants",
    "Live Music",
    "Watch Parties",
    "Gaming",
  ];

  return (
    <div className="m-10 mt-20 shadow-2xl">
      <div
        className="relative flex items-center  bg-cover bg-no-repeat"
        style={{ backgroundImage: `url(${image})` }}
      >
        <div className="absolute inset-0 bg-black opacity-30"></div>
        <div className="relative z-10 px-20 py-40">
          <VanishText
            phraseWords={phraseWords}
            sentence="Search for these type of events"
          />
          <div className="pt-28">
            <BeamInput />
          </div>
        </div>
      </div>
    </div>
  );
};

const SearchResultGrid = ({ searchData }) => {
  if (searchData === null) {
    return (
      <div className="text-5xl p-12 h-96 flex items-center justify-center">
        Click Search for Result
      </div>
    );
  } else if (searchData === undefined) {
    return (
      <div className="text-5xl p-12 h-96 flex items-center justify-center">
        No Search Found
      </div>
    );
  }
  return (
    <div className="container mx-auto p-4 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {searchData.map((event) => (
        <SearchEventCard key={event._id} event={event} />
      ))}
    </div>
  );
};

const SearchEventsPage = () => {
  const isTablet = useMediaQuery({ query: "(max-width: 1024px)" });
  const menuItems = [
    { name: "Events", href: "/events" },
    { name: "Search Events", href: "/events/searchEvents" },
    { name: "Upcoming Events", href: "/events/upcomingEvents" },
    { name: "Popular Events", href: "/events/popularEvents" },
    { name: "Event Ratings", href: "/events/ratings" },
    { name: "Whats New ", href: "/events/whatsNew" },
  ];
  

  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <div className="flex flex-col lg:flex-row  bg-slate-900">
          {isTablet ? (
            <HorizontalBar menuItems={menuItems} />
          ) : (
            <VerticalTabs menuItems={menuItems} />
          )}
          <div className="w-full">
            <SearchEventSection />
            <SearchResultGrid searchData={popularEventsCardData} />
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchEventsPage;
