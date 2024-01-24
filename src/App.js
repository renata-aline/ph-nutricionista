// import './App.css';
import AboutConsultation from "./components/AboutConsultation";
import AboutContent from "./components/AboutContent";
import Banner from "./components/Banner";
import Contact from "./components/Contact";
import Doubts from "./components/Doubts";
import MeetConsultancy from "./components/MeetConsultancy";
import Navbar from "./components/Navbar";
import "./styles/main.sass";

function App() {
  return (
    <div className="App">
      < Navbar />
      <Banner />
      <AboutContent />
      <AboutConsultation />
      <MeetConsultancy />
      <Doubts />
      <Contact />
    </div>
  );
}

export default App;
