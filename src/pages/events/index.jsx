import Footer from "../../components/footer/Footer";
import NavBar from "../../components/navBar/NavBar";
import { Image } from "../../components/shared/image";
import Link from "next/link";
import VerticalTabs from "./sidebarNav";

const Header = () => {
  const backgroundImage = "/images/heroImage6.jpg";
  return (
    <div
      className="bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div>
        <NavBar />
        <div className="pl-12 lg:text-9xl text-galactic-secondary lg:py-28 font-[Poppins-bold] bg-black/40" >Events</div>
      </div>
    </div>
  );
};



const Event = () => {
  return (
    <div className="flex flex-col">
      <Header />
      <main>
        <div className="flex flex-row">
          <VerticalTabs/>
          <div>

          <h1>Events</h1>
          <p>List of events will go here...</p>
          <Link href="/events/submitOrganizerForm">Submit an Event</Link>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Event;
