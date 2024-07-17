
import { useRouter } from "next/router";
import { HeroSection } from "../components/Header/Header";
import Footer from "../components/Footer/Footer";

function Home() {
  return (
    <div className="flex flex-col">
      <HeroSection />
      <main>
        <div>heloo</div>
      </main>
      <Footer/>
    </div>
  );
}

export default Home;
