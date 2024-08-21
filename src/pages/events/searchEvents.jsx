import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import VerticalTabs from "../../components/shared/sidebarNav";

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

const SearchEventsPage = () => {
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
        <div className="flex flex-row">
          <VerticalTabs menuItems={menuItems} />
          <div className="h-96 bg-galactic-accent w-full">
            <p>Search Event page</p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default SearchEventsPage;
