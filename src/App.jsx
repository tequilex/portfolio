import HeroSection from "./components/hero-section/hero-section.component";
import CounterSection from "./components/counter-section/counter-section.component";
import AboutSection from "./components/about-section/about-section.component";
import ProjectsSection from "./components/projects-section/projects-section.component";
import NavBar from "./components/navBar/navBar.component";
import Footer from "./components/footer/footer.componet";
import ContactSection from "./components/contact-section/contact-section.component";
import TogglerTheme from "./components/toggler-theme/toggler-theme";

function App() {
  return (
    <div className="App">
      <NavBar />
      <TogglerTheme />
          <div className="container">
            <HeroSection />
            {/* <CounterSection /> */}
            <AboutSection />
            <ProjectsSection />
            <ContactSection />
          </div>
      <Footer />
    </div>
  );
}

export default App;
