import Navbar from "./components/Navbar";
import Partners from "./components/Partners";
import Header from "./components/Header";
import AboutMpa from "./components/AboutMpa";
import PastSpeakers from "./components/PastSpeakers";
import AboutThinkmint from "./components/AboutPartner";
import Footer from "./components/Footer";
import Objective from "./components/Objective";
import Programme from "./components/Programme";
import Plenary from "./components/Plenary";
import AboutReps from "./components/AboutReps";
import Form from "./components/Form";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Partners />
      <Header />
      <AboutReps />
      <AboutMpa />
      <PastSpeakers />
      <AboutThinkmint />
      <Objective />
      <Plenary />
      <Programme />
      <Form />
      <Footer />

    </div>
  );
}

export default App;
