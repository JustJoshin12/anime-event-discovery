import { VanishText } from "../components/UI/VanishingText";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../components/UI/Button";
import { useRouter } from "next/router";
import { HeroSection } from "../components/Header/Header";

function Home() {
  const router = useRouter();
  const backgroundImage = "/images/animeScene.jpg";

  return (
    // <AnimatePresence>
    //   <motion.div
    //     initial= {{opacity: 0}}
    //     animate = {{opacity: 1}}
    //     exit = {{opacity: 0}}
    //     transition = {{duration: 2}}
    //     className="min-h-screen bg-cover bg-no-repeat"
    //     style={{ backgroundImage: `url(${backgroundImage})` }}
    //   >
    //     <div className="pt-20">
    //       <VanishText />
    //     </div>
    //     <Button onClick={() => router.push("/login")} />
    //   </motion.div>
    // </AnimatePresence>
    <div className="flex flex-col">
      <HeroSection />
      <p className="bg-galactic-primary">Hello</p>
    </div>
  );
}

export default Home;
