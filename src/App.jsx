import ButtonGradient from "./assets/svg/ButtonGradient";
import Header from "./Components/header";
import Hero from "./Components/hero";
import Benefits from "./Components/Benefits";
import Collaboration from "./Components/Collaboration";
import Services from "./Components/Services";
import Pricing from "./Components/Pricing";
import Roadmap from "./Components/Roadmap";
import Footer from "./Components/Footer";

const App = () => {
  return (
    <>
      <h1 className="text-3xl font-bold underline"></h1>
      <div className="pt-[2.75rem] lg:pt-[1.25rem] overflow-hidden">
        <Header />
        <Hero />
        <Benefits />
        <Collaboration />
        <Services />
        <Pricing />
        <Roadmap />
        <Footer />
      </div>
      <ButtonGradient />
    </>
  );
};
export default App;
