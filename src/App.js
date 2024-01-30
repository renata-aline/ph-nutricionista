// import './App.css';
import AboutConsultation from "./components/AboutConsultation";
import AboutContent from "./components/AboutContent";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Doubts from "./components/Doubts";
import Footer from "./components/Footer";
import MeetConsultancy from "./components/MeetConsultancy";
import Navbar from "./components/Navbar";
import Service from "./components/Service";
import "./styles/main.sass";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Banner />
      <AboutContent />
      <AboutConsultation />
      <Service />
      <Doubts />
      <MeetConsultancy />
      <Contact />
      <Footer />
     
    </div>
  );
}

export default App;
