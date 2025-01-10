import Navbar from "./components/Navbar";
import Hero from "./components/Hero";
import RestaurantDescription from "./components/RestaurantDescription";
import PracticalInfo from "./components/PracticalInfo";
import Menu from "./components/Menu";
import Concept from "./components/Concept";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main className="pt-16">
      <Navbar />
      <Hero />
      <RestaurantDescription />
      <PracticalInfo />
      <Menu />
      <Concept />
      <Footer />
    </main>
  );
}
