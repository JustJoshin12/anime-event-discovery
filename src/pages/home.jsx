import { VanishText } from "../components/UI/VanishingText";
import Button from "../components/UI/Button";
import { useRouter } from "next/router";

function Home() {
  const router = useRouter();
  const backgroundImage = "/images/animeScene.jpg";

  return (
    <div
      className="min-h-screen bg-cover bg-no-repeat"
      style={{ backgroundImage: `url(${backgroundImage})` }}
    >
      <div className="pt-20">
        <VanishText />
      </div>
      <Button onClick={() => router.push("/login")} />
    </div>
  );
}

export default Home;
