import Header from "./Header";
import Navigation from "./Navigation";
import ProfessionalSummary from "./ProfessionalSummary";
import TechStack from "./TechStack";
import ProjectDetails from "./ProjectDetails"
import EducationDetails from "./EducationDetails";
import AboutMe from "./AboutMe";
import Footer from "./Footer"
import "./index.css"


function App() {
  return (
    <div>
      <Header />
      <Navigation />
      <ProfessionalSummary />
      <TechStack />
      <ProjectDetails />
      <EducationDetails />
      <AboutMe />
      <Footer />
    </div>
  );
}

export default App;
